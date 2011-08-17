var $j = jQuery.noConflict();

$j(document).ready(function () {
	
	$j("#tos_agree_check").click(function() {
		var src = $j("#tos_agree_check").attr("src");
		if(src == "/images/common/course_dash_check_no.gif") {
			$j("#tos_agree_check").attr("src", "/images/common/course_dash_check_yes.gif");
			//$j(".gs_next_button").css("display", "inline");
		} else if(src == "/images/common/course_dash_check_yes.gif") {
			$j("#tos_agree_check").attr("src", "/images/common/course_dash_check_no.gif");
			//$j(".gs_next_button").css("display", "none");
		}
	});
	
	
	$j(".gs_next_button").click(function() {
		var id = $j(".gs_next_button").attr("id");
		
		if(id == 1) {
			$j(".gs_next_button").attr("id", "2");
			//$j(".gs_next_button").css("display", "none");
			
			$j("#gs_button_first").removeClass("on").addClass("off");
			$j("#gs_button_second").removeClass("off").addClass("on");
			
			$j("#gs_title_image").attr("src", "/images/common/gs_text_title_2.jpg");
			
			$j("#gs_comp_image").attr("src", "/images/common/gs_comp_2.jpg");
			
			$j("#gs_item_1").css("display", "none");
			$j("#gs_item_2").css("display", "inline");
		} else if(id == 2) {
			$j(".gs_next_button").attr("id", "3");
			$j(".gs_next_button").attr("src", "/images/common/gs_button_finish.jpg");
			//$j(".gs_next_button").css("display", "none");
			
			$j("#tos_agreement_span").css("display", "inline");
			
			$j("#gs_button_second").removeClass("on").addClass("off");
			$j("#gs_button_third").removeClass("off").addClass("on");
			
			$j("#gs_title_image").attr("src", "/images/common/gs_text_title_3.jpg");
			
			$j("#gs_comp_image").attr("src", "/images/common/gs_comp_3.jpg");
			
			$j("#gs_item_2").css("display", "none");
			$j("#gs_item_3").css("display", "inline");
		} else if(id == 3) {
			var src = $j("#tos_agree_check").attr("src");
			if(src == "/images/common/course_dash_check_no.gif") {
				alert("Please click the box to agree to the terms of service to continue");
			} else if(src == "/images/common/course_dash_check_yes.gif") {
				$j.ajax({
					type: 'POST',
					url: '/modules/ajax_php/gs_update.php',
					data: 'name='+$j("#gs_name").val()+'&phone='+$j("#gs_phone").val()+'&cell='+$j("#gs_cell").val()+'&work_phone='+$j("#gs_work_phone").val()+'&email='+$j("#gs_email").val()+'',
					success: function(msg) {
						if($j("#gs_run_ce_after").val() > 0) {
							$j("#tos").fadeOut("slow");
							$j('#video_player').css('top', '34px');
							$j('#video_player').fadeIn("slow");
						} else {
							$j("#tos").fadeOut("slow");
							$j("#tos_shadow").fadeOut("slow");
							$j(document.body).css('overflow', 'auto');
						}
					}
				});
			}
		}
	});
	
	/**** SUCCESS STORIES SUBMIT ****/
	$j("#ss_open").click(function() {
		$j("#ss_add").fadeIn("slow");
	});
	
	$j("#ss_close").click(function() {
		$j("#ss_add").fadeOut("slow");
	});
	
	$j("#ss_add_amount").focus(function() {
		if($j(this).val() == "$$$") {
			$j(this).val("");
		}
	});
	$j("#ss_add_amount").blur(function() {
		if($j(this).val() == "") {
			$j(this).val("$$$");
		}
	});
	
	$j("#ss_save_button").click(function() {
		if($j("#ss_add_name").val() == "") {
			alert("Name must be filled out.");
			$j("#ss_add_name").focus();
			return false;
		}
		if($j("#ss_add_email").val() == "") {
			alert("Email must be filled out.");
			$j("#ss_add_email").focus();
			return false;
		}
		if($j("#ss_add_coach").val() == "") {
			alert("Coach must be filled out.");
			$j("#ss_add_coach").focus();
			return false;
		}
		if($j("#ss_add_amount").val() == "$$$") {
			alert("Amount must be filled out.");
			$j("#ss_add_amount").focus();
			return false;
		}
		if($j("#ss_q1").val() == "") {
			alert("Question 1 must be answered.");
			$j("#ss_q1").focus();
			return false;
		}
		if($j("#ss_q2").val() == "") {
			alert("Question 2 must be answered.");
			$j("#ss_q2").focus();
			return false;
		}
		if($j("#ss_q3").val() == "") {
			alert("Question 3 must be answered.");
			$j("#ss_q3").focus();
			return false;
		}
		if($j("#ss_q4").val() == "") {
			alert("Question 4 must be answered.");
			$j("#ss_q4").focus();
			return false;
		}
		if($j("#ss_q5").val() == "") {
			alert("Question 5 must be answered.");
			$j("#ss_q5").focus();
			return false;
		}
		if($j("#ss_toc_agree:checked").val() === undefined) {
			alert("You must agree to the Terms & Conditions.");
			return false;
		}
		
		var data = "name="+$j("#ss_add_name").val()+"&email="+$j("#ss_add_email").val()+"&coach="+$j("#ss_add_coach").val()+"&category="+$j("input[name=ss_add_category]:checked").val()+"&amount="+$j("#ss_add_amount").val()+"&q1="+$j("#ss_q1").val()+"&q2="+$j("#ss_q2").val()+"&q3="+$j("#ss_q3").val()+"&q4="+$j("#ss_q4").val()+"&q5="+$j("#ss_q5").val();
		
		$j.ajax({
			type:		'post',
			url:		'/sites/focuslearningcenter.com/ajax_php/success_story_add.php',
			data:		data,
			success:	function(msg) {
				/* Clear form and fade out div */
				$j("#ss_add").fadeOut();
				$j("#ss_add_name").val("");
				$j("#ss_add_email").val("");
				$j("#ss_add_coach").val("");
				$j("#input[name=ss_add_category]").attr("checked", false);
				$j("#ss_add_amount").val("$$$");
				$j("#ss_q1").val("1. What were you doing before you started this business?");
				$j("#ss_q2").val("2. How much money were you making previously?");
				$j("#ss_q3").val("3. How much money are you making now?");
				$j("#ss_q4").val("4. How has this program positively affected your life?");
				$j("#ss_q5").val("5. What is the best part of this program?");
				
				alert("Your story has been submitted for review.\nThank you.");
			}
		});
	});
	
	/**** STEP HELP ****/
	$j("#sh_text").click(function() {
		$j(this).val("");
	});
	$j(".sh_button").each(function() {
		var title = $j(this).attr("title");
		$j(this).click(function() {
			var response = 0;
			if(title == "Yes") {
				response = 1;
			}
			$j("#sh_response").val(response);
			$j("#sh_button_container").fadeOut("fast", function() {
				$j("#sh_text_container").fadeIn("fast");
				$j(".sh_thanks").fadeIn("fast");
				$j("#sh_text").focus();
			});
		});
	});
	
	$j("#step_help_submit").click(function() {
		var sh_text = $j("#sh_text").val();
		if(sh_text == "Please leave us some feedback." || sh_text == "") {
			alert("Please leave us some feedback about this step.");
		} else {
			var data = "step_help_submit=1&step="+$j("#sh_step").val()+"&response="+$j("#sh_response").val()+"&text="+$j("#sh_text").val();
			$j.ajax({
				type:		'post',
				url:		'/modules/ajax_php/step_review.php',
				data:		data,
				success:	function(msg) {
					if(msg == 0) {
						alert("Your feedback was not saved.\nPlease try again.");
					} else if(msg == 1) {
						$j(".sh_buttons").fadeOut("fast", function() {
							$j(".sh_title").html("Thank You");
							$j(".sh_done").fadeIn("fast");
						});
						$j(".sh_thanks").fadeOut("fast");
						
						alert("Your feedback has been sent to our coaching staff.\nThank you for your time.");
						$j("#leftNote").fadeOut();
					}
				}
			});
		}
	});
	
	$j(".sh_never").click(function() {
		var conf = confirm("Do you wish to permanently hide all feedback requests?");
		if(conf) {
			var data = "perm_close=1";
			$j.ajax({
				type:		'post',
				url:		'/modules/ajax_php/step_review.php',
				data:		data,
				success:	function(msg) {
					$j("#leftNote").fadeOut();
				}
			});
		}
	});
	
	($j.datepicker && $j.datepicker.setDefaults($j.extend({showMonthAfterYear: false}, $j.datepicker.regional[''])) );
	if($j('#client_login_username').size() > 0) {
		$j('#client_login_username').focus();
	}
	$j("#send_online_hold_agreement_signature").click(function () {
		var agreementId = $j("#hold_agreement_id").val();
		var signature = $j("#hold_agreement_esign").val();
		
		if($j("#online_hold_agreement_agree").attr("checked")) {
			if(agreementId != "" && signature != "") {
				$j.ajax({
					type: "POST",
					url: "/hold_agreement_ajax.php",
					data: "id="+agreementId+"&signature="+signature,
					success: function(msg){
						$j(".hold_agreement_fader").fadeOut();
						$j(".hold_agreement_text").fadeOut();
						$j("body").css("overflow","auto");
					}
				});
			} else {
				alert("To continue with the site you must sign the Hold Agreement. If you have signed this and continue to get a hold agreement signature please contact us.");
			}
		} else {
			alert("To continue you must accept the terms and condition");
		}
		return false;
	});
	$j("#cancel_online_hold_agreement_signature").click(function () {
		var agreementId = $j("#hold_agreement_id").val();
		
		if(confirm("By clicking this you are choosing not to put your account on hold. Do you want to continue?")) {
			if(agreementId != "") {
				$j.ajax({
					type: "POST",
					url: "/cancel_hold_agreement_ajax.php",
					data: "id="+agreementId,
					success: function(msg){
						$j(".hold_agreement_fader").fadeOut();
						$j(".hold_agreement_text").fadeOut();
						$j("body").css("overflow","auto");
					}
				});
			}
		}
		return false;
	});
	/*Feedback JS*/
	$j(".feeback_response").mouseover(function () {
		var rel = $j(this).attr("rel");
		var theId = $j(this).attr("id");
		
		if(rel == "yes") {
			$j("#"+theId+" img").attr("src","/images/common/feedback_yes_hover.png");
		} else {
			$j("#"+theId+" img").attr("src","/images/common/feedback_no_hover.png");
		}
	});
	$j(".feeback_response").mouseout(function () {
		var rel = $j(this).attr("rel");
		var theId = $j(this).attr("id");
		
		if(!$j(this).hasClass("selected")) {
			if(rel == "yes") {
				$j("#"+theId+" img").attr("src","/images/common/feedback_yes.png");
			} else {
				$j("#"+theId+" img").attr("src","/images/common/feedback_no.png");
			}
		}
	});
	$j(".feeback_response").click(function () {
		var rel = $j(this).attr("rel");
		var theId = $j(this).attr("id");
		
		var user = $j("#feedback_user").val();
		var week = $j("#feedback_week").val();
		var site = $j("#feedback_site").val();
		
		if(rel == "yes") {
			$j("#"+theId).addClass("feedback_selected");
			$j("#feedback_response_no").removeClass("feedback_selected");
			$j("#"+theId+" img").attr("src","/images/common/feedback_yes_hover.png");
			$j("#feedback_response_no img").attr("src","/images/common/feedback_no.png");
			$j("#feedback_wysiwyg").css("display","none");
			
			$j.ajax({
				type: "POST",
				url: "/admin/ajax_php/feedback_submit_response.php",
				data: "user="+user+"&week="+week+"&site="+site+"&rating=yes&response=",
				success: function(msg){
					$j('.feedback_panel_container').animate({
					    marginLeft: '-562'
					  }, 500, function() {});
					 $j("#feedback_submit_response").remove();
					 setTimeout ( "removeFeedback()", 3000 );
				}
			});
		} else {
			$j("#"+theId).addClass("feedback_selected");
			$j("#feedback_response_yes").removeClass("feedback_selected");
			$j("#"+theId+" img").attr("src","/images/common/feedback_no_hover.png");
			$j("#feedback_response_yes img").attr("src","/images/common/feedback_yes.png");
			CKEDITOR.instances.feedback_content.setData("Please help us understand why you were not satisfied with your last coaching sessions so we can fix the problem.");
			
			$j('.feedback_panel_container').animate({
			    marginLeft: '-562'
			  }, 500, function() {});
			$j("#feedback_step").val("2");
		}
		
		return false;
	});
	$j("#feedback_submit_response").click(function () {
		var user = $j("#feedback_user").val();
		var week = $j("#feedback_week").val();
		var site = $j("#feedback_site").val();
		var step = $j("#feedback_step").val();
		
		if(step == 1) {
			if($j("#feedback_response_yes").hasClass("selected") || $j("#feedback_response_no").hasClass("selected") ) {
				$j('.feedback_panel_container').animate({
				    marginLeft: '-562'
				  }, 500, function() {});
				$j("#feedback_step").val("2");
			} else {
				alert("Please select a your feedback");
			}
		} else if(step == 2) {
			var rating = $j(".feedback_selected").attr("rel");
			var response = urlencode(CKEDITOR.instances.feedback_content.getData());
			
			if(rating != "yes" && rating != "no") {
				alert("Please select your rating");
				$j('.feedback_panel_container').animate({
				    marginLeft: '0'
				  }, 500, function() {});
			} else {
				var responseReplace = CKEDITOR.instances.feedback_content.getData().replace("<p>","").replace("</p>","").replace("\n","").replace("\r","").replace("Please help us understand why you were not satisfied with your last coaching sessions so we can fix the problem.","").trim();
				if(responseReplace != "Please help us understand why you were not satisfied with your last coaching sessions so we can fix the problem.") {
					$j.ajax({
						type: "POST",
						url: "/admin/ajax_php/feedback_submit_response.php",
						data: "user="+user+"&week="+week+"&site="+site+"&rating="+rating+"&response="+response,
						success: function(msg){
							$j('.feedback_panel_container').animate({
							    marginLeft: '-1124'
							  }, 500, function() {});
							 $j("#feedback_submit_response").remove();
							 setTimeout ( "removeFeedback()", 3000 );
						}
					});
				} else {
					alert("Please enter a response to help us understand why you were not satisfied with your last coaching session so we can fix the problem.");
				}
			}
		}
		
		return false;
	});
	$j(".skip_feedback").click(function () {
		var user = $j("#feedback_user").val();
		var week = $j("#feedback_week").val();
		var site = $j("#feedback_site").val();
		var step = $j("#feedback_step").val();
		
		$j.ajax({
			type: "POST",
			url: "/admin/ajax_php/feedback_skip_response.php",
			data: "user="+user+"&week="+week+"&site="+site+"&rating=4&response=",
			success: function(msg){
				$j('.feedback_panel_container').animate({
				    marginLeft: '-1124'
				  }, 500, function() {});
					$j("#feedback_submit_response").remove();
					$j("input[name='feedback_user']").val("");
					$j("input[name='feedback_week']").val("");
					$j("input[name='feedback_site']").val("");
					$j("input[name='feedback_step']").val("1");
					CKEDITOR.instances.feedback_content.setData("");
					$j(".feeback_response").removeClass("feedback_selected");
					$j("#feedback_response_yes img").attr("src","/images/common/feedback_yes.png");
					$j("#feedback_response_no img").attr("src","/images/common/feedback_no.png");
					$j(".feedback_fader").fadeOut();
					$j(".feedback_container").fadeOut();
					$j("body").css("overflow","auto");
			}
		});
		return false;
	});
});
function removeFeedback() {
	$j("input[name='feedback_user']").val("");
	$j("input[name='feedback_week']").val("");
	$j("input[name='feedback_site']").val("");
	$j("input[name='feedback_step']").val("1");
	CKEDITOR.instances.feedback_content.setData("");
	$j(".feeback_response").removeClass("feedback_selected");
	$j("#feedback_response_yes img").attr("src","/images/common/feedback_yes.png");
	$j("#feedback_response_no img").attr("src","/images/common/feedback_no.png");
	$j(".feedback_fader").fadeOut();
	$j(".feedback_container").fadeOut();
	$j("body").css("overflow","auto");
}
function checkCreditCard (cardnumber, cardname) {
  var cards = new Array();
  cards [0] = {name: "Visa", 
               length: "13,16", 
               prefixes: "4",
               checkdigit: true};
  cards [1] = {name: "MasterCard", 
               length: "16", 
               prefixes: "51,52,53,54,55",
               checkdigit: true};
  cards [2] = {name: "DinersClub", 
               length: "14,16", 
               prefixes: "305, 36, 38, 54,55",
               checkdigit: true};
  cards [3] = {name: "CarteBlanche", 
               length: "14", 
               prefixes: "300,301,302,303,304,305",
               checkdigit: true};
  cards [4] = {name: "AmEx", 
               length: "15", 
               prefixes: "34,37",
               checkdigit: true};
  cards [5] = {name: "Discover", 
               length: "16", 
               prefixes: "6011,622,64,65",
               checkdigit: true};
  cards [6] = {name: "JCB", 
               length: "16", 
               prefixes: "35",
               checkdigit: true};
  cards [7] = {name: "enRoute", 
               length: "15", 
               prefixes: "2014,2149",
               checkdigit: true};
  cards [8] = {name: "Solo", 
               length: "16,18,19", 
               prefixes: "6334, 6767",
               checkdigit: true};
  cards [9] = {name: "Switch", 
               length: "16,18,19", 
               prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
               checkdigit: true};
  cards [10] = {name: "Maestro", 
               length: "12,13,14,15,16,18,19", 
               prefixes: "5018,5020,5038,6304,6759,6761",
               checkdigit: true};
  cards [11] = {name: "VisaElectron", 
               length: "16", 
               prefixes: "417500,4917,4913,4508,4844",
               checkdigit: true};
  cards [12] = {name: "LaserCard", 
               length: "16,17,18,19", 
               prefixes: "6304,6706,6771,6709",
               checkdigit: true};
  var cardType = -1;
  for (var i=0; i<cards.length; i++) {
    if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
      cardType = i;
      break;
    }
  }
  if (cardType == -1) {
     ccErrorNo = 0;
     return false; 
  }
  if (cardnumber.length == 0)  {
     ccErrorNo = 1;
     return false; 
  }
  cardnumber = cardnumber.replace (/\s/g, "");
  var cardNo = cardnumber;
  var cardexp = /^[0-9]{13,19}$/;
  if (!cardexp.exec(cardNo))  {
     ccErrorNo = 2;
     return false; 
  }
  if (cards[cardType].checkdigit) {
    var checksum = 0;
    var mychar = "";
    var j = 1;
    var calc;
    for (i = cardNo.length - 1; i >= 0; i--) {
      calc = Number(cardNo.charAt(i)) * j;
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }
      checksum = checksum + calc;
      if (j ==1) {j = 2} else {j = 1};
    }
    if (checksum % 10 != 0)  {
     ccErrorNo = 3;
     return false; 
    }
  }
  var LengthValid = false;
  var PrefixValid = false; 
  var undefined;
  var prefix = new Array ();
  var lengths = new Array ();
  prefix = cards[cardType].prefixes.split(",");
  for (i=0; i<prefix.length; i++) {
    var exp = new RegExp ("^" + prefix[i]);
    if (exp.test (cardNo)) PrefixValid = true;
  }
  if (!PrefixValid) {
     ccErrorNo = 3;
     return false; 
  }
  lengths = cards[cardType].length.split(",");
  for (j=0; j<lengths.length; j++) {
    if (cardNo.length == lengths[j]) LengthValid = true;
  }
  if (!LengthValid) {
     ccErrorNo = 4;
     return false; 
  };
  return true;
}
function urlencode( str ) {                       
    var hash_map = {}, unicodeStr='', hexEscStr='';
    var ret = (str+'').toString();
    var replacer = function(search, replace, str) {
        var tmp_arr = [];
        tmp_arr = str.split(search);
        return tmp_arr.join(replace);
    };
    hash_map["'"]   = '%27';
    hash_map['(']   = '%28';
    hash_map[')']   = '%29';
    hash_map['*']   = '%2A';
    hash_map['~']   = '%7E';
    hash_map['!']   = '%21';
    hash_map['%20'] = '+';
    hash_map['\u00DC'] = '%DC';
    hash_map['\u00FC'] = '%FC';
    hash_map['\u00C4'] = '%D4';
    hash_map['\u00E4'] = '%E4';
    hash_map['\u00D6'] = '%D6';
    hash_map['\u00F6'] = '%F6';
    hash_map['\u00DF'] = '%DF';
    hash_map['\u20AC'] = '%80';
    hash_map['\u0081'] = '%81';
    hash_map['\u201A'] = '%82';
    hash_map['\u0192'] = '%83';
    hash_map['\u201E'] = '%84';
    hash_map['\u2026'] = '%85';
    hash_map['\u2020'] = '%86';
    hash_map['\u2021'] = '%87';
    hash_map['\u02C6'] = '%88';
    hash_map['\u2030'] = '%89';
    hash_map['\u0160'] = '%8A';
    hash_map['\u2039'] = '%8B';
    hash_map['\u0152'] = '%8C';
    hash_map['\u008D'] = '%8D';
    hash_map['\u017D'] = '%8E';
    hash_map['\u008F'] = '%8F';
    hash_map['\u0090'] = '%90';
    hash_map['\u2018'] = '%91';
    hash_map['\u2019'] = '%92';
    hash_map['\u201C'] = '%93';
    hash_map['\u201D'] = '%94';
    hash_map['\u2022'] = '%95';
    hash_map['\u2013'] = '%96';
    hash_map['\u2014'] = '%97';
    hash_map['\u02DC'] = '%98';
    hash_map['\u2122'] = '%99';
    hash_map['\u0161'] = '%9A';
    hash_map['\u203A'] = '%9B';
    hash_map['\u0153'] = '%9C';
    hash_map['\u009D'] = '%9D';
    hash_map['\u017E'] = '%9E';
    hash_map['\u0178'] = '%9F';
    ret = encodeURIComponent(ret);
    for (unicodeStr in hash_map) {
        hexEscStr = hash_map[unicodeStr];
        ret = replacer(unicodeStr, hexEscStr, ret);
    }
    return ret.replace(/(\%([a-z0-9]{2}))/g, function(full, m1, m2) {
        return "%"+m2.toUpperCase();
    });
}
function date ( format, timestamp ) {
    var that = this;
    var jsdate=(
        (typeof(timestamp) == 'undefined') ? new Date() :
        (typeof(timestamp) == 'number') ? new Date(timestamp*1000) :
        new Date(timestamp)
    );
    var pad = function (n, c){
        if ( (n = n + "").length < c ) {
            return new Array(++c - n.length).join("0") + n;
        } else {
            return n;
        }
    };
    var _dst = function (t) {
        var dst=0;
        var jan1 = new Date(t.getFullYear(), 0, 1, 0, 0, 0, 0);
        var june1 = new Date(t.getFullYear(), 6, 1, 0, 0, 0, 0);
        var temp = jan1.toUTCString();
        var jan2 = new Date(temp.slice(0, temp.lastIndexOf(' ')-1));
        temp = june1.toUTCString();
        var june2 = new Date(temp.slice(0, temp.lastIndexOf(' ')-1));
        var std_time_offset = (jan1 - jan2) / (1000 * 60 * 60);
        var daylight_time_offset = (june1 - june2) / (1000 * 60 * 60);

        if (std_time_offset === daylight_time_offset) {
            dst = 0;
        } else {
            var hemisphere = std_time_offset - daylight_time_offset;
            if (hemisphere >= 0) {
                std_time_offset = daylight_time_offset;
            }
            dst = 1;
        }
        return dst;
    };
    var ret = '';
    var txt_weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    var txt_ordin = {1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st"};
    var txt_months =  ["", "January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November",
        "December"];

    var f = {
            d: function (){
                return pad(f.j(), 2);
            },
            D: function (){
                var t = f.l();
                return t.substr(0,3);
            },
            j: function (){
                return jsdate.getDate();
            },
            l: function (){
                return txt_weekdays[f.w()];
            },
            N: function (){
                //return f.w() + 1;
                return f.w() ? f.w() : 7;
            },
            S: function (){
                return txt_ordin[f.j()] ? txt_ordin[f.j()] : 'th';
            },
            w: function (){
                return jsdate.getDay();
            },
            z: function (){
                return (jsdate - new Date(jsdate.getFullYear() + "/1/1")) / 864e5 >> 0;
            },

            W: function (){

                var a = f.z(), b = 364 + f.L() - a;
                var nd2, nd = (new Date(jsdate.getFullYear() + "/1/1").getDay() || 7) - 1;

                if (b <= 2 && ((jsdate.getDay() || 7) - 1) <= 2 - b){
                    return 1;
                } 
                if (a <= 2 && nd >= 4 && a >= (6 - nd)){
                    nd2 = new Date(jsdate.getFullYear() - 1 + "/12/31");
                    return that.date("W", Math.round(nd2.getTime()/1000));
                }
                
                var w = (1 + (nd <= 3 ? ((a + nd) / 7) : (a - (7 - nd)) / 7) >> 0);

                return (w ? w : 53);
            },

            F: function (){
                return txt_months[f.n()];
            },
            m: function (){
                return pad(f.n(), 2);
            },
            M: function (){
                var t = f.F();
                return t.substr(0,3);
            },
            n: function (){
                return jsdate.getMonth() + 1;
            },
            t: function (){
                var n;
                if ( (n = jsdate.getMonth() + 1) == 2 ){
                    return 28 + f.L();
                }
                if ( n & 1 && n < 8 || !(n & 1) && n > 7 ){
                    return 31;
                }
                return 30;
            },

            L: function (){
                var y = f.Y();
                return (!(y & 3) && (y % 1e2 || !(y % 4e2))) ? 1 : 0;
            },
            o: function (){
                if (f.n() === 12 && f.W() === 1) {
                    return jsdate.getFullYear()+1;
                }
                if (f.n() === 1 && f.W() >= 52) {
                    return jsdate.getFullYear()-1;
                }
                return jsdate.getFullYear();
            },
            Y: function (){
                return jsdate.getFullYear();
            },
            y: function (){
                return (jsdate.getFullYear() + "").slice(2);
            },

            a: function (){
                return jsdate.getHours() > 11 ? "pm" : "am";
            },
            A: function (){
                return f.a().toUpperCase();
            },
            B: function (){
                var off = (jsdate.getTimezoneOffset() + 60)*60;
                var theSeconds = (jsdate.getHours() * 3600) +
                                 (jsdate.getMinutes() * 60) +
                                  jsdate.getSeconds() + off;
                var beat = Math.floor(theSeconds/86.4);
                if (beat > 1000) {
                    beat -= 1000;
                }
                if (beat < 0) {
                    beat += 1000;
                }
                if ((String(beat)).length == 1) {
                    beat = "00"+beat;
                }
                if ((String(beat)).length == 2) {
                    beat = "0"+beat;
                }
                return beat;
            },
            g: function (){
                return jsdate.getHours() % 12 || 12;
            },
            G: function (){
                return jsdate.getHours();
            },
            h: function (){
                return pad(f.g(), 2);
            },
            H: function (){
                return pad(jsdate.getHours(), 2);
            },
            i: function (){
                return pad(jsdate.getMinutes(), 2);
            },
            s: function (){
                return pad(jsdate.getSeconds(), 2);
            },
            u: function (){
                return pad(jsdate.getMilliseconds()*1000, 6);
            },

            e: function () {
                return 'UTC';
            },
            I: function (){
                return _dst(jsdate);
            },
            O: function (){
               var t = pad(Math.abs(jsdate.getTimezoneOffset()/60*100), 4);
               t = (jsdate.getTimezoneOffset() > 0) ? "-"+t : "+"+t;
               return t;
            },
            P: function (){
                var O = f.O();
                return (O.substr(0, 3) + ":" + O.substr(3, 2));
            },
            T: function () {
                return 'UTC';
            },
            Z: function (){
               return -jsdate.getTimezoneOffset()*60;
            },

            c: function (){
                return f.Y() + "-" + f.m() + "-" + f.d() + "T" + f.h() + ":" + f.i() + ":" + f.s() + f.P();
            },
            r: function (){
                return f.D()+', '+f.d()+' '+f.M()+' '+f.Y()+' '+f.H()+':'+f.i()+':'+f.s()+' '+f.O();
            },
            U: function (){
                return Math.round(jsdate.getTime()/1000);
            }
    };

    return format.replace(/[\\]?([a-zA-Z])/g, function (t, s){
        if ( t!=s ){
            ret = s;
        } else if (f[s]){
            ret = f[s]();
        } else {
            ret = s;
        }
        return ret;
    });
}
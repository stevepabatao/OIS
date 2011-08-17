/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */
(function(a){a.fn.bgiframe=(a.browser.msie&&/msie 6\.0/i.test(navigator.userAgent)?function(d){d=a.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},d);var c='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="../../02x/scripts/'+d.src+'"style="display:block;position:absolute;z-index:-1;'+(d.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(d.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":b(d.top))+";left:"+(d.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":b(d.left))+";width:"+(d.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":b(d.width))+";height:"+(d.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":b(d.height))+';"/>';return this.each(function(){if(a(this).children("iframe.bgiframe").length===0){this.insertBefore(document.createElement(c),this.firstChild)}})}:function(){return this});a.fn.bgIframe=a.fn.bgiframe;function b(c){return c&&c.constructor===Number?c+"px":c}})(jQuery);


positionModal = function(){
	 var wWidth = window.innerWidth;
	 var wHeight = window.innerHeight;

	 if (wWidth==undefined) {
		 wWidth = document.documentElement.clientWidth;
		 wHeight = document.documentElement.clientHeight;
	 }

	 var boxLeft = parseInt((wWidth / 2) - ( $("#modal").width() / 2 ));
	 var boxTop = parseInt((wHeight / 2) - ( $("#modal").height() / 2 ));
	 if (boxTop<0){
		boxTop = 0; 
	}

	 // position modal
	 $("#modal").css('margin', boxTop + 'px 0 0 ' + boxLeft + 'px');
	 if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$("#modal").bgiframe();	$('select').hide() }	
}

loadModal = function(url, is_alt){
		$("body").append('<div id="modalBackground"></div>');
		$("#modalBackground").css("opacity", 0).fadeTo("slow", "0.85");
		$("body").append('<div id="modalWrapper"></div>');
		if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$('html').animate({scrollTop:0}, 0); }
		$("#modalWrapper").append('<div id="modal"></div>');	

	$.ajax({
		 url: url,
		 cache: false, 
		 success: function(response) {		
		 $('#modal').html(jQuery(response).find(".content").html());	
			 if (is_alt) { 
			 $('#modal').css({'margin' : '0'});
			 $('.chatboxmodal').css({'margin' : '10px 0 0 5px'});
			 $("#modal").bgiframe();	
			 } 
			 else
			  { positionModal(); }
		 }, 
		 error: function() {
			alert("Error loading page");
			closeModal();
		 }
	 });
	
	return false;
}

loadModal2 = function(){
		closeModal();
		$("body").append('<div id="modalBackground"></div>');
		$("#modalBackground").css("opacity", 0).fadeTo("slow", "0.85");
		$("body").append('<div id="modalWrapper"></div>');
		$("#modalWrapper").append('<div id="modal"></div>');
		$('#modal').html($('#errorContainerX').html());	
		positionModal();
	return false;
}
	
closeModal = function(){
	 if ($.browser.msie && $.browser.version.substr(0,1)<7) {
	 $('select').show() }
	 $("#modalWrapper").remove();
	 $("#modalBackground").remove();
}

// close modal trigger
$(".closeModal").live('click', function(){
	 closeModal();
	 return false;
});					
	
// open modal
$('.modal').live('click', function(){
	var url = $(this).attr('href');
	loadModal(url, false);
	return false;
});
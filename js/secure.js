// JavaScript Document
$(document).ready(function() {
							   					  
$('#client_login_submit_button').live("click", function() {
				var data = $("#frmLogin").serialize();
				$.ajax({
					  url: 'php_library.php?login=1',
					  data: data,
					  success: function(html) {
						 if(html == 'success')
						 {
						 	window.location = 'dashboard.html';
						 } else {
						 	alert(html);
						 }
					  }
					});
				
				
				return false;
			})

});
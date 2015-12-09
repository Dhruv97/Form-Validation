


$(document).ready(function() {
	
$("#error").hide();
$("#thanks").hide();



$("#validationForm").submit(function(event) {
	
	var errorMessage="";

		event.preventDefault();
		
function isValidName(name) {
			
			var pattern3 = new RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/)
			return pattern3.test(name);
			
			
		
		};
		
		if(!isValidName($("#name").val())) {
			
			$("#error").show();
			errorMessage+="Please enter your name"
			$("#name").css('border-bottom', '2px solid #FF0000');
			
			
			
		} else {
			
			
			$("#name").css('border-bottom', '2px solid #00FF00');
		}

	function isValidEmailAddress(emailAddress) {

		var pattern = new RegExp(/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i);
	return pattern.test(emailAddress);

	};
		if(!isValidEmailAddress($("#email").val())) {
			
			$("#error").show();
		$("#email").css('border-bottom', '2px solid #FF0000');
		errorMessage+="<br/> Please enter a valid email address"
		
			
		} else {
			
			
			
			$("#email").css('border-bottom', '2px solid #00FF00');
			
		}
		
		function isValidPhoneNumber(phoneNumber) {
			
			var pattern2 = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)
			return pattern2.test(phoneNumber);
		
		};
		
		if(!isValidPhoneNumber($("#phone").val())) {
			
			$("#error").show();
			$("#phone").css('border-bottom', '2px solid #FF0000');
			errorMessage+="<br/> Please enter a valid phone number"
			
		} else {
			
			$(".phone").hide();
			$("#phone").css('border-bottom', '2px solid #00FF00');
		}
			
		
		if($("#password").val() != $("#passwordConfirm").val() || $("#password").val() == "" || $("#passwordConfirm").val() == "") {
			
			$("#error").show();
			$("#password").css('border-bottom', '2px solid #FF0000');
			$("#passwordConfirm").css('border-bottom', '2px solid #FF0000');
			errorMessage+="<br/> Please make sure your passwords match"
			
		} else {
			
			
			$("#password").css('border-bottom', '2px solid #00FF00');
			$("#passwordConfirm").css('border-bottom', '2px solid #00FF00');
		}
		
		
		if(errorMessage == "") {
			$("#error").hide();
			$("#validationForm").fadeOut('slow', function() {
				$("#thanks").fadeIn('slow');
			})
		} else {
			
			
			$("#error").html(errorMessage);
		}
		
	});	
});



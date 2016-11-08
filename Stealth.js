$(document).ready(function(){
	
	bounceAlerts();
    
});

function bounceAlerts() {

	if ($(".alert-banner").text().trim() === '') {
		// hide alert if no content
		$(".alert-banner").hide();
	}
	else {
		// bounce alert to bring to user's attention
    	$(".alert-banner").effect("bounce", {times:3}, "slow");
    }

}

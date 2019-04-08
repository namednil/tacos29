function startCountdown(){
	// https://www.w3schools.com/howto/howto_js_countdown.asp

	var countDownDate = new Date("Jun 21, 2019 00:00:01").getTime();
	setInterval(function(){
		var now = new Date().getTime();
		
		// Find the distance between now and the count down date
  		var distance = countDownDate - now;

  		// Time calculations for days, hours, minutes and seconds
  		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		$("#countdown").html(days + ": " + hours + ": "
  		+ minutes + ": " + seconds)
	}, 1000)
}

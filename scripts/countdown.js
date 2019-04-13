function startCountdown(date,name, with_hours){
	// https://www.w3schools.com/howto/howto_js_countdown.asp
    //e.g. date= "May 26, 2019 00:00:01"
    // name = "early_bird"
	var countDownDate = new Date(date).getTime();
	setInterval(function(){
		var now = new Date().getTime();
		
		// Find the distance between now and the count down date
  		var distance = countDownDate - now;

  		// Time calculations for days, hours, minutes and seconds
  		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		//var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		//var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var d = days + " days";
        var h = hours + " hours";
        if (days == 1){
            d = "one day";
        } 
        if (hours == 1){
            h = " one hour";
        }
        if (with_hours){
            $("#"+name).html(d + " and " + h);
        } else {
            $("#"+name).html(d);
        }
		
	}, 1000)
}

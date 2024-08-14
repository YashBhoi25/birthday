

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var startDate=new Date("2010-08-18T00:00:00");//Start date and time
	var current=new Date();//current date and time
	var ms = current - startDate;//Difference in miliseconds
	var seconds=Math.floor(ms/1000)
	var minutes=Math.floor(seconds/60);seconds=seconds% 60;//remaining seconds
	var hours=Math.floor(ms/60);minutes=minutes% 60;// Remaining minutes 
	var days=Math.floor(hours/24);hours=hour%24;// Remaining hours 
	//Adding leading zero to numbers less than 10
	minutes = minutes<10?'0'+ minutes:minutes;seconds=seconds<10?'0'+seconds:seconds; hour=hours<10?'0'+ hours:hours;
	var result="Days:"+days+"Hours:"+hours+"Minutes:"+minutes+"Seconds:"+seconds;
	document.getElementById("clock").innerHTML=result;// Updates the clock duv with the elapsed time

	var message="THE WORLD JUST GOT LUCKIER SINCE 18-8-2010"; 

	document.getElementById("message-box").innerHTML=message;//Updates the message box
}

// Automatically update the elapsed time every second 
setInterval(timeElapse,1000);




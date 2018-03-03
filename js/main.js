var target_date = 1520541697000;
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + seconds + "</span><span>" + minutes + "</span><span>" + hours + "</span><span>" + days + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


var pages = ['body', "#time", "#about", '#past_contests', '#prizes', '#sponser', '#contact'];

var isDoingScroll = false;
$(window).keydown(function (env) {
    if (!isDoingScroll) {
        var tops = [];
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            tops.push($(page).offset().top);
        }
        var cur = $('html, body').scrollTop();
        var elm = '';
        if (env.keyCode == 38) {
            // bala
            for (var i = 0; i < pages.length; i++) {
                if (tops[i] < cur - 5) {
                    elm = pages[i];
                }
            }

        } else if (env.keyCode == 40) {
            // payin
            for (var i = 0; i < pages.length; i++) {
                if (tops[i] > cur + 5) {
                    elm = pages[i];
                    break;
                }
            }
        }

        if (elm) {
            isDoingScroll = true;
            setTimeout(function () {
                isDoingScroll = false;
            }, 500);
            $('html, body').animate({
                scrollTop: $(elm).offset().top
            }, 500);
        }
    }
});

$('a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

});

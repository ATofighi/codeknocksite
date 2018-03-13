FlipClock.Lang.persian = {
    days: "روز",
    hours: "ساعت",
    minutes: "دقیقه",
    months: "ماه",
    seconds: "ثانیه",
    years: "سال"
};
//var clock = $('.clock').FlipClock((Date.parse("9 March 2018 18:30:00 GMT+0330") - Date.now()) / 1000, {
var clock = $('.clock').FlipClock(0, {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'persian',
});

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

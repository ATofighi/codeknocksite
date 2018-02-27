FlipClock.Lang.persian = {
    days: "روز",
    hours: "ساعت",
    minutes: "دقیقه",
    months: "ماه",
    seconds: "ثانیه",
    years: "سال"
};
var clock = $('.clock').FlipClock((Date.parse("9 March 2018 16:30:00 GMT+0330") - Date.now()) / 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'persian',
});

var pages = ['body', "#stopwatch", "#about", '#past_contests', '#prizes', '#sponser', '#contact'];

$(window).keydown(function (env) {
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
            if (tops[i] < cur) {
                elm = pages[i];
            }
        }

    } else if (env.keyCode == 40) {
        // payin
        for (var i = 0; i < pages.length; i++) {
            if (tops[i] > cur) {
                elm = pages[i];
                break;
            }
        }
    }

    if (elm) {
        $('html, body').animate({
            scrollTop: $(elm).offset().top
        }, 500);
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
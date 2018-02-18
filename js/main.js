FlipClock.Lang.persian = {
    days: "روز",
    hours: "ساعت",
    minutes: "دقیقه",
    months: "ماه",
    seconds: "ثانیه",
    years: "سال"
};
var clock = $('.clock').FlipClock((Date.parse("28 Feb 2018 16:30:00 GMT+0330")-Date.now())/1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'persian',
});

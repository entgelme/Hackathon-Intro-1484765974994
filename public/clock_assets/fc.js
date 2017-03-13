// from http://www.dwuser.com/education/content/easy-javascript-jquery-countdown-clock-builder/
var clock = $(function(){
//	FlipClock.Lang.Custom = { days:'Tage', hours:'Stunden', minutes:'Minuten', seconds:'Sekunden' };
	FlipClock.Lang.Custom = { days:'Days', hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
	var opts = {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'Custom'
	};
	opts.classes = {
		active: 'flip-clock-active',
		before: 'flip-clock-before',
		divider: 'flip-clock-divider',
		dot: 'flip-clock-dot',
		label: 'flip-clock-label',
		flip: 'flip',
		play: 'play',
		wrapper: 'flip-clock-small-wrapper'
	};  
//  var targetDate= new Date (year, month (Jan=00), day, hours, minutes, seconds, milliseconds); 
    var targetDate= new Date (2017, 03 -1, 17, 16, 30, 00, 00); 
	var countdown = (targetDate.getTime() / 1000) - ((new Date().getTime())/1000);
	countdown = Math.max(1, countdown);
	$('.clock-builder-output').FlipClock(countdown, opts);
});

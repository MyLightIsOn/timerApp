var timerApp = timerApp || {};

timerApp = {
	init: function(){
		var	minutes = document.getElementById('minutes'),
			seconds = document.getElementById('seconds'),
			milliseconds = document.getElementById('milliseconds'),
			start = document.getElementsByClassName('start'),
			stop = document.getElementsByClassName('stop');

		timerApp.addHandlers(start, stop)
	},

	addHandlers: function(start, stop){
		start[0].addEventListener('click', function(){
			timerApp.startTimer()
		});

		stop[0].addEventListener('click', function(){
			timerApp.stopTimer()
		});
	},

	startTimer: function(){
		console.log('Timer started')
	},

	stopTimer: function(){
		console.log('Timer stopped')
	}
};

timerApp.init();
var timerApp = timerApp || {};

timerApp = {
	init: function(){
		var	minutes = document.getElementById('minutes'),
			seconds = document.getElementById('seconds'),
			milliseconds = document.getElementById('milliseconds'),
			start = document.getElementsByClassName('start'),
			stop = document.getElementsByClassName('stop'),
			timer = null;

		timerApp.addHandlers(start, stop, timer)
	},

	addHandlers: function(start, stop, timer){
		start[0].addEventListener('click', function(){
			timerApp.startTimer(timer)
		});

		stop[0].addEventListener('click', function(){
			timerApp.stopTimer()
		});
	},

	startTimer: function(){
		timerApp.timerInterval()
	},

	stopTimer: function(){
		timerApp.timerClear()
	},

	timerInterval: function(){
		this.timer = setInterval(function(){
			console.log('Counting')
		}, 1000)
	},

	timerClear: function(){
		clearInterval(this.timer);
	}
};

timerApp.init();
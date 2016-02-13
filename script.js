var timerApp = timerApp || {};

timerApp = {
	settings: {
   		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
		milliseconds: document.getElementById('milliseconds'),
		start: document.getElementsByClassName('start'),
		stop: document.getElementsByClassName('stop'),
		timerCount: 0,
		timer: null
	},

	init: function(){
		timerApp.addHandlers()
	},

	addHandlers: function(){
		var start = timerApp.settings.start[0],
		 	stop = timerApp.settings.stop[0];

		start.addEventListener('click', function(){
			timerApp.startTimer();
			console.log('Start Clicked!')
		});

		stop.addEventListener('click', function(){
			timerApp.stopTimer()
		});
	},

	startTimer: function(){
		timerApp.timerInterval();
		console.log('Timer Started!')
	},

	stopTimer: function(){
		timerApp.timerClear()
	},

	timerInterval: function(){
		var timerCount = timerApp.settings.timerCount,
			ms = timerApp.settings.milliseconds;

		this.timer = setInterval(function(){
			timerCount = timerCount += 1;
			ms.innerText = ('00' + timerCount).substr(-2)

		}, 10)
	},

	timerClear: function(){
		clearInterval(this.timer);
	}
};

timerApp.init();
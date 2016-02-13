var timerApp = timerApp || {};

timerApp = {
	settings: {
   		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
		milliseconds: document.getElementById('milliseconds'),
		start: document.getElementsByClassName('start'),
		stop: document.getElementsByClassName('stop'),
		lapholder: document.getElementById('lap-holder'),
		lap: document.getElementsByClassName('lap'),
		maintimer: document.getElementById('main-timer'),
		timerCount: 0,
		timer: null
	},

	init: function(){
		timerApp.addHandlers()
	},

	addHandlers: function(){
		var start = timerApp.settings.start[0],
			lap = timerApp.settings.lap[0];

		start.addEventListener('click', function(){
			var button = this;

			if(button.className === 'start'){
				timerApp.startTimer();
				button.className = 'stop';
				button.innerText = 'Stop';
			} else {
				timerApp.stopTimer();
				button.className = 'start';
				button.innerText = 'Start';
			}
		});

		lap.addEventListener('click', function(){
			var mainTimer = timerApp.settings.maintimer,
				lapHolder = timerApp.settings.lapholder,
				clonedTimer = mainTimer.cloneNode(true);

				clonedTimer.className = 'lap-clone';
				lapHolder.innerHTML = clonedTimer.innerHTML
		});
	},

	startTimer: function(){
		timerApp.timerInterval();
	},

	stopTimer: function(){
		timerApp.timerClear()
	},

	timerInterval: function(){
		var timerCount = timerApp.settings.timerCount,
			msSpan = timerApp.settings.milliseconds,
			secSpan = timerApp.settings.seconds,
			minSpan = timerApp.settings.minutes,
			secInt = parseInt(secSpan.innerText),
			minInt = parseInt(minSpan.innerText);

		this.timer = setInterval(function(){

			/*Increments milliseconds*/
			timerCount += 1;
			msSpan.innerText = ('00' + timerCount).substr(-2);

			/*Increments seconds*/
			if(timerCount > 99){
				timerCount = 0;
				secInt = secInt + 1;
				msSpan.innerText = ('00' + timerCount).substr(-2);
				secSpan.innerText = ('00' + secInt).substr(-2);
			}

			/*Increments minutes*/
			if(secInt > 59){
				secInt = 0;
				minInt = minInt + 1;
				msSpan.innerText = ('00' + timerCount).substr(-2);
				secSpan.innerText = ('00' + secInt).substr(-2);
				minSpan.innerText = ('00' + minInt).substr(-2);
			}
		}, 10)
	},

	timerClear: function(){
		clearInterval(this.timer);
	}
};

timerApp.init();
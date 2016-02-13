var timerApp = timerApp || {};

timerApp = {
	settings: {
   		minutes: document.getElementsByClassName('minutes'),
		seconds: document.getElementsByClassName('seconds'),
		milliseconds: document.getElementsByClassName('milliseconds'),
		start: document.getElementsByClassName('start'),
		stop: document.getElementsByClassName('stop'),
		lapholder: document.getElementById('lap-holder'),
		lap: document.getElementsByClassName('lap'),
		laplist: document.getElementById('lap-list'),
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

			/*Toggles timer start button*/
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
			 timerApp.lapIncrement();
		});
	},

	startTimer: function(){
		timerApp.timerInterval();
	},

	stopTimer: function(){
		timerApp.timerClear()
	},

	lapIncrement: function(){
		var mainTimer = timerApp.settings.maintimer,
			lapHolder = timerApp.settings.lapholder,
			lapList = timerApp.settings.laplist,
			clonedTimer = mainTimer.cloneNode(true),
			newSpan = document.createElement('span'),
			lapNumber;

		/*Adds lap time to top*/
		clonedTimer.className = 'lap-clone';
		lapHolder.innerHTML = clonedTimer.innerHTML;

		/*Adds lap time to list*/
		newSpan.className = 'lap-list-item';

		/*Counts lap number and adds to lap list*/
		lapNumber = lapList.childNodes.length + 1;
		newSpan.innerHTML = clonedTimer.innerHTML;
		newSpan.insertAdjacentHTML( 'afterbegin' , '<span class="lap-count">Lap ' + lapNumber + '</span>');
		lapList.appendChild(newSpan)
	},

	timerInterval: function(){
		var timerCount = timerApp.settings.timerCount,
			msSpan = timerApp.settings.milliseconds[1],
			secSpan = timerApp.settings.seconds[1],
			minSpan = timerApp.settings.minutes[1],
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
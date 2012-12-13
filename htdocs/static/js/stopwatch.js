var TOOLS = TOOLS || {};

TOOLS.stopwatch = (function(window,document,$,TOOLS,Modernizr) {
	'use strict';

	var action = 'stop',
		currentTime,
		$el = $('#text-processed'),
		timer;

	function increment() {
		currentTime.setMilliseconds(currentTime.getMilliseconds()+100);
		render();
	}

	function pad(i) {
		return (i < 10) ? '0'+i : i;
	}

	function render() {
		var t = currentTime,
			val = [];
		val.push(pad(t.getHours()));
		val.push(pad(t.getMinutes()));
		val.push(pad(t.getSeconds()));
		val.push(t.getMilliseconds().toString().substr(0,1));
		$el.html(val.join(':'));
	}

	function reset() {
		currentTime = new Date(0,0);
		render();
	}

	function run() {
		if (action === 'start') {
			stop();
			action = 'stop';
			$('#btnStopwatch').html("Start &raquo;");
		} else {
			start();
			action = 'start';
			$('#btnStopwatch').html("Stop &raquo;");
		}
	}

	function start() {
		timer = window.setInterval(increment, 100);
	}

	function stop() {
		window.clearInterval(timer);
	}

	$(function() {
		var supportsTouch = Modernizr.touch;

		reset();

		if (!supportsTouch) {
			$('.for-screen').hide();
		}

		// Control the stopwatch via the spacebar and escape key
		$(document).keydown(function(evt) {
			if (evt.which === 27) {	// escape
				reset();
			} else if (evt.which === 32) {	// space
				run();
				return false;
			}
		});

		$('#btnReset').on('click', function() {
			reset();
		});

		// Control the stopwatch via the button
		$('#btnStopwatch').on('click', function() {
			run();
		});
	});

}(window,document,jQuery,TOOLS,Modernizr));
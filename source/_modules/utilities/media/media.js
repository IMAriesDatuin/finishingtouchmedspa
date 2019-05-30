/* -------------------------------------------------- */
/* MEDIA
/* -------------------------------------------------- */

var media = (function media($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('media', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CACHE
	/* -------------------------------------------------- */

	var $content = '.media-container video';


	/* -------------------------------------------------- */
	/* VARS
	/* -------------------------------------------------- */




	/* -------------------------------------------------- */
	/* OPTIONS
	/* -------------------------------------------------- */

	var options = {
		renderers: [],
		classPrefix: 'mejs__',
		showPosterWhenEnded: false,
		showPosterWhenPaused: false,
		defaultVideoWidth: '100%',
		defaultVideoHeight: '100%',
		videoWidth: '100%',
		videoHeight: '100%',
		//setDimensions: false,
		startVolume: 1,
		loop: true,
		autoRewind: true,
		enableAutosize: true,
		timeFormat: 'hh:mm:ss',
		alwaysShowHours: false,
		showTimecodeFrameCount: false,
		framesPerSecond: 25,
		autosizeProgress: true,
		alwaysShowControls: false,
		hideVideoControlsOnLoad: true,
		hideVideoControlsOnPause: true,
		clickToPlayPause: true,
		controlsTimeoutDefault: 1500,
		controlsTimeoutMouseEnter: 2500,
		controlsTimeoutMouseLeave: 1000,
		iPadUseNativeControls: false,
		iPhoneUseNativeControls: false,
		AndroidUseNativeControls: false,
		features: ['playpause', 'progress'],
		useDefaultControls: false,
		stretching: 'auto',
		enableKeyboard: true,
		pauseOtherPlayers: true,
		secondsDecimalLength: 0,
		customError: null,
		duration: -1,
		timeAndDurationSeparator: '<span> &#124; </span>',
		hideVolumeOnTouchDevices: true,
		enableProgressTooltip: true,
		useSmoothHover: true,
		forceLive: false,
		videoVolume: 'vertical',
		usePluginFullScreen: true,
		useFakeFullscreen: false,
		tracksAriaLive: true,
		hideCaptionsButtonWhenEmpty: true,
		toggleCaptionsButtonWhenOnlyOne: false,
		startLanguage: null,
		tracksText: null,
		chaptersText: null,
		muteText: null,
		unmuteText: null,
		allyVolumeControlText: null,
		fullscreenText: null,
		playText: null,
		pauseText: null,
		shimScriptAccess: 'sameDomain',
		//youtube: ['maxresdefault'],
		// Do not forget to put a final slash (/)
		//pluginPath: 'https://cdnjs.com/libraries/mediaelement/',
		// this will allow the CDN to use Flash without restrictions
		// (by default, this is set as `sameDomain`)

		success: function(media, dom) {

			console.log(media + ' content successfully loaded.');

			// LISTENERS
			
			media.addEventListener('play', function() {

				console.log('Clicked play.');

			}, false);
			


			/*
			var isDragging = false;
			media.addEventListener('mousedown', function() {

			    isDragging = false;

			});
			media.addEventListener('mousedown', function() {

			    isDragging = true;

			});
			media.addEventListener('mouseup', function() {

			    var wasDragging = isDragging;
			    console.log('Was dragging.');

			    isDragging = false;

			    if (!wasDragging) {

			        console.log('Clicked.');

			    }

			});
			*/

			
			media.addEventListener('click', function() {

				console.log('Clicked play.');
				media.play();

			}, false);
			





			// EVENTS
			media.addEventListener('playing', function() {

				console.log('Media content is playing.');
				Tween.to($('.media-hide'), 0.5, { autoAlpha: 0, y: 10, ease: Expo.easeInOut});

			}, false);


			media.addEventListener('pause', function() {

				console.log('Media content is playing.');
				Tween.to($('.media-hide'), 0.5, { autoAlpha: 1, y: 0, ease: Expo.easeInOut});

			}, false);


			media.addEventListener('ended', function() {

				console.log('Media content is playing.');
				Tween.to($('.media-hide'), 0.5, { autoAlpha: 1, y: 0, ease: Expo.easeInOut});

			}, false);





	        /*
	        media.addEventListener('timeupdate', function() {

	            console.log('current: ' + media.currentTime);
	        }, false); 
			*/

			/*
			if(media.player.playing) {

				console.log('Is paused.');
				$self.player.pause();
				Tween.to($$('#digital-storytellers'), 0.5, { autoAlpha: 1, scale: 1, ease: Expo.easeInOut});

			} else {

				console.log('Is playing.');
				$self.player.play();
				Tween.to($$('#digital-storytellers'), 0.5, { autoAlpha: 0, scale: 0.75, ease: Expo.easeInOut});

			}
			*/




		},

		error: function(media) {

			//console.log('Unable to load media ' + media + ' content.');

		}

	};


	/* -------------------------------------------------- */
	/* FUNCTIONS
	/* -------------------------------------------------- */

	function pauseAll() {

		$($content).each(function() {

			var $self = $(this)[0];

			//console.log('State: ' + $self.player.currentTime);

			//if($self.player.playing = true) {
				
			if($('video').length) {

				//console.log('State: ' + $self.player.currentTime);
				console.log('Video has paused.');
				$self.player.pause();

			}
			
			//}

		});

	}


	function playPause() {

		$($content).each(function() {

			var $self = $(this)[0];

			//console.log('State: ' + $self.player.currentTime);
				
			if($('video').length) {

				//if($self.player.playing = true) {

					//console.log('State: ' + $self.player.currentTime);
					//$self.player.pause();

				//} else {

					console.log('Video has resumed playing.');
					$self.player.play();

				//}

			}

		});

	}


	function volume(value) {

		var value;

		$($content).each(function() {

			var $self = $(this)[0];
			$self.player.setVolume(value);
			
		});

	}


	/* -------------------------------------------------- */
	/* LISTENERS
	/* -------------------------------------------------- */

	/*
	$($content).each(function() {

		var $self = $(this)[0];

		$self.on('mouseover', function() {

			console.log('over it');
			cursor.$cursor.addClass('play');

		});

	});
	*/


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	function init() {

		/* -------------------------------------------------- */
		/* VISIBILITY
		/* -------------------------------------------------- */

		var pageVisibility = new Visibility({

			onHidden: function() {

				pauseAll();

			},

			onVisible: function() {

				/*
				$($content).each(function() {

					var $self = $(this)[0];

					if($self.player.playing = true) {
						
						console.log('State: ' + $self.player.currentTime);
						$self.player.play();
					
					}

				});
				*/

			}

		});


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		$($content).mediaelementplayer(options);


		/* -------------------------------------------------- */
		/* OBSERVER
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad({
			container: document,
			elements_selector: $content,
			threshold: 0,
			auto_unobserve: false,

			callback_enter: function(element) {

				//console.log('Entering viewport: ', element);
				$(element).addClass('in-view');
				//$(element).player.pause();
				playPause();

			},

			callback_exit: function(element) {

				//console.log('Exiting viewport: ', element);
				$(element).removeClass('in-view');
				pauseAll();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init,
		$content: $content,
		pauseAll: pauseAll,
		volume: volume

	};


}(jQuery, window, document));

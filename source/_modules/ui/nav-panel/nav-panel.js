/* -------------------------------------------------- */
/* NAV PANEL MORPHEUS
/* -------------------------------------------------- */

var navPanel = (function navPanel($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	console.log('navPanel ' + ' 1.0 ' + ' Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* MAIN
	/* -------------------------------------------------- */

	function init() {

		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $navbar = $('.navbar, .menubar-logo, .menubar-toggle'),
			$menuToggle = $('.menu-toggle'),
			$navPanel = $('.nav-panel'),
			$menu = $('.nav-panel-menu'),
			$social = $('.nav-panel-social'),
			$background = $('.nav-panel-background'),
			$slider = $('.nav-panel-slider');


		/*
		$slider.find('li').find('.lazy').ripples({
			dropRadius: 20,
			perturbance: 0.03,
			resolution: 256,
			interactive: true,
			//crossOrigin: ''
		});
		*/


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var state = 'is-closed';


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set([$slider, $background.children()], {autoAlpha: 0});
		Tween.set([$menu.children(), $social.children()], {autoAlpha: 0});


		// TIMELINE
		var tl = new TimelineMax({paused: true});
			tl.staggerTo($background.children(), 1, {autoAlpha: 1, ease: Expo.easeInOut, onStart: isOpening, onReverseComplete: isClosed}, 0.02)
			  .staggerTo($menu.children(), 1, {autoAlpha: 1, y: 0, ease: Back.easeOut}, 0.05)
			  .to($slider, 0.5, {autoAlpha: 1, ease: Expo.easeOut}, '-=1')
			  .staggerTo($social.children(), 1, {autoAlpha: 1, y: 0, ease: Back.easeOut}, 0.05, '-=1')
			  .addCallback(isOpen);


		/* -------------------------------------------------- */
		/* SLIDER
		/* -------------------------------------------------- */

		Tween.set($slider.find('li').not('.is-active-slide').find('.lazy'), {autoAlpha: 0, x: 25});
		$slider.find('li').first().addClass('is-active-slide');
		
		function slider() {

			Tween.to($slider.find('li').not('.is-active-slide').find('.lazy'), 0.5, {autoAlpha: 0, x: 25, ease: Expo.easeOut});
			Tween.to($slider.find('li.is-active-slide').find('.lazy'), 0.5, {autoAlpha: 1, x: 0, ease: Expo.easeOut});

		} slider();


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		// TOGGLE
		$menuToggle.on('click touchstart touchmove', function(e) {

			console.log('Pressed.');
			e.preventDefault();
			controller();

		});


		// LINKS
		$menu.find('li').find('a').not('.is-inactive').each(function(i, e) {

			var $self = $(this),
				mySplitText = new SplitText($self, {type: 'chars'}), 
				$mySplitText = mySplitText.chars;


			var tl = new TimelineMax({paused: true, onStart: slider, onComplete: function() { /*mySplitText.revert();*/ tl.pause(0); } });
				tl.staggerTo($mySplitText, 0.5, {className: '+=on-hover', ease: Expo.easeIn}, 0.025)
				  .staggerTo($mySplitText, 0.5, {className: '-=on-hover', ease: Expo.easeOut}, 0.025);
				  //.addCallback( function(){tl.pause(0)} );

			e.hover = tl;

			$self.hover(function() {

				tl.play();

				var index = $self.parent().index();
					//x = $self.parent().position();

				//console.log(index);
				//onsole.log(x.top);

				$slider.find('li').not(':eq('+index+')').removeClass('is-active-slide');
				$slider.find('li').eq(index).addClass('is-active-slide');

			}, function() {

				//tl.reverse();

			});

		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		// ENABLE / DISABLE CONTENT
		function lock() {

			console.log('Content is locked.');
			$('html').addClass('is-locked');
			bodyScrollLock.disableBodyScroll(document.querySelector('.is-unlocked'));

		}

		function unlock() {
			
			console.log('Content is unlocked.');
			$('html').removeClass('is-locked');
			bodyScrollLock.enableBodyScroll(document.querySelector('.is-unlocked'));
			//bodyScrollLock.clearAllBodyScrollLocks();

		}


		// CONTROLLER
		function controller() {

			if ( state === 'is-opening' || state === 'is-open' ) {

				tl.reverse().timeScale(1.75);

			} else if ( state === 'is-closing' || state === 'is-closed' ) {

				tl.play().timeScale(1);

			}

			if ( tl.reversed() ) {

				isClosing();

			}

		}


		// EVENTS
		function isOpening() {

			$navbar.addClass('is-open');
			$navPanel.addClass('is-opening');
			$navPanel.scrollTop(0);
			lock();

			state = 'is-opening';
			console.log('Nav Panel ' + state);

		}


		function isOpen() {

			$navPanel.addClass('is-open');
			$slider.find('li').addClass('is-active');
			$$('.is-animating').find('*').addClass('animate-pause');

			state = 'is-open';
			console.log('Nav Panel ' + state);

		}


		function isClosing() {

			$slider.find('li').removeClass('is-active');
			//$navPanel.removeClass('is-open');
			$$('.is-animating').find('*').removeClass('animate-pause');

			state = 'is-closing';
			console.log('Nav Panel ' + state);
			
		}


		function isClosed() {

			$navbar.removeClass('is-open');
			$navPanel.removeClass('is-opening is-open');
			unlock();

			state = 'is-closed';
			console.log('Nav Panel ' + state);

		}


		/* -------------------------------------------------- */
		/* SWUP API
		/* -------------------------------------------------- */

		document.addEventListener('swup:animationOutStart', function() {

			if( $navPanel.hasClass('is-open') ) {

				controller();

			}

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init
		//controller: controller,
		//$navPanel: $navPanel

	};

}(jQuery, window, document));

/* -------------------------------------------------- */
/* IN VIEW
/* -------------------------------------------------- */

var inView = (function inView($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('inView', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		//removeIf(production)
		function log(eventName, element) {

			console.log(Date.now(), eventName, element.getAttribute('data-src'));

		}
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		//var $elements = [$('.reveal'), $('.flora')];


		// SET
		//Tween.set($elements, {autoAlpha: 0, scaleY: 0, transformOrigin: 'top center'});


		// DEFAULT
		function revealCopy(element) {

			if ( $(element).find('.reveal').length ) {

				console.log('elements exist.');

				var mySplitText = new SplitText([$(element).find('.reveal').find('h1'), $(element).find('p').first()], {type: 'words, lines, chars', reduceWhiteSpace: true, position: null}), 
					$mySplitText = mySplitText.lines;

				var tl = new Timeline({paused: true, onComplete: function() { mySplitText.revert(); } });
					tl.staggerFrom($(element).find('.reveal').children(), 0.5, {autoAlpha: 0, ease: Expo.easeInOut}, 0.02)
					  .staggerFrom($mySplitText, 0.5, {autoAlpha: 0, x: -10, ease: Expo.easeInOut}, 0.02);

					  tl.delay(0).play(0);

			} else {

				console.log('Element(s) do not exist.');

			}

		}


		// LEAVES
		function revealGrow(element) {
			
			var tl = new Timeline({paused: true, onComplete: function() { } });
				tl.staggerFrom($(element).find('.flora').find('.branch').children().not('.stem'), 0.25, {autoAlpha: 0, scale: 0.75, transformOrigin: 'left center', ease: Expo.easeInOut}, -0.05);

				tl.delay(0).play(0);


			$(element).find('.flora').find('.branch').children().not('.stem').on('mouseover touchstart', function() {

				var $self = $(this);
				var tl = new Timeline({paused: true, onStart: function() { $self.addClass('no-pointer'); }, onComplete: function() { $self.removeClass('no-pointer'); } });
					tl.to($self, 0.5, {scale: 0, ease: Expo.easeInOut})
					  .to($self, 1.25, {scale: 1, ease: Expo.easeInOut}, '+=1');

					tl.play(0);

			});
			
		}


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.reveal-container',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');

				revealCopy(element);
				revealGrow(element);

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//lazyLoad.update();
		//lazyLoad.load(element, force);
		//lazyLoad.loadAll();
		//lazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

/* -------------------------------------------------- */
/* SECTION
/* -------------------------------------------------- */

var section = (function section($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('section', '1.0', 'Aries Datuin');
	//endRemoveIf(production)

	/* -------------------------------------------------- */
	/* ELEMENTS
	/* -------------------------------------------------- */

	function element() {

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

		function revealCopy(element) {

			if ( $(element).find('.section-container-text-block').find('h1').length ) {

				console.log('elements exist.');

				var h1 = new SplitText($(element).find('h1'), {type: 'words, lines, chars', reduceWhiteSpace: true, position: null}), 
					$h1 = h1.lines;

				var tlH1 = new Timeline({paused: false, onComplete: function() { h1.revert(); } });
					tlH1.staggerFrom($h1, 1, {autoAlpha: 0, y: 25, ease: Expo.easeInOut}, 0.025);

					tlH1.delay(2).play(0);

			}

			if ( $(element).find('.section-container-text-block').find('p').length ) {

				console.log('elements exist.');

				var p = new SplitText($(element).find('p'), {type: 'words, lines, chars', reduceWhiteSpace: true, position: null}), 
					$p = p.lines;

				var tlP = new Timeline({paused: false, onComplete: function() { p.revert(); } });
					tlP.staggerFrom($p, 1, {autoAlpha: 0, y: 25, ease: Expo.easeInOut}, 0.025);

					tlP.delay(2).play(0);

			}

			if ( $(element).find('.section-container-text-block').find('ul').length ) {

				console.log('elements exist.');

				var list = new SplitText($(element).find('ul').children(), {type: 'words, lines, chars', reduceWhiteSpace: true, position: null}), 
					$list = list.lines;

				var tlList = new Timeline({paused: false, onComplete: function() { list.revert(); } });
					tlList.staggerFrom($list, 1, {autoAlpha: 0, y: 25, ease: Expo.easeInOut}, 0.025);

					tlList.delay(2).play(0);

			}

		}		


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.section-container',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');
				//revealCopy(element);

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
	/* MEDIA
	/* -------------------------------------------------- */
	
	function media() {

		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		//removeIf(production)
		function log(eventName, element) {

			console.log(Date.now(), eventName, element.getAttribute('data-src'));

		}
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.section-media',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			load_delay: 0,
			auto_unobserve: false,
			data_bg: 'bg',
			data_sizes: 'sizes',
			data_src: 'src',
			data_srcset: 'srcset',
			class_loading: 'is-loading',
			class_loaded: 'is-loaded',
			class_error: 'on-error',
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');
				$(element).closest('.section-container-media').addClass('is-loaded');

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');
				$(element).closest('.section-container-media').removeClass('is-loaded');

			},

			callback_reveal: function(element) {

				console.log('Loading: ', element);

			},

			callback_loaded: function(element) {

				console.log('Loaded: ', element);
				$(element).closest('.section-container-media').addClass('is-loaded');

			},

			callback_error: function(element) {

				console.log('Error loading: ', element);
				$(element).closest('.section-container-media').addClass('on-error');

			},

			callback_finish: function() {

				console.log('All elements loaded.');

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
		element: element,
		media: media

	};


}(jQuery, window, document));

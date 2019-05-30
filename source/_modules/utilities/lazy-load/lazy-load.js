/* -------------------------------------------------- */
/* LAZY LOAD / INTERSECTION OBSERVER
/* -------------------------------------------------- */

var lazyLoad = (function lazyLoad($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('lazyLoad', '1.0', 'Aries Datuin');
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
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.lazy',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
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

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			},

			callback_reveal: function(element) {

				console.log('Loading: ', element);

			},

			callback_loaded: function(element) {

				console.log('Loaded: ', element);
				$(element).closest('.lazy-container').addClass('is-loaded');

			},

			callback_error: function(element) {

				console.log('Error loading: ', element);
				$(element).closest('.lazy-container').addClass('on-error');

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
		init: init

	};


}(jQuery, window, document));

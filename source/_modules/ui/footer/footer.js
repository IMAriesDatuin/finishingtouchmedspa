/* -------------------------------------------------- */
/* FOOTER
/* -------------------------------------------------- */

var footer = (function footer() {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('footer', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.footer');


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.footer',
			threshold: 0,
			thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: false,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');

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

	}


	/* -------------------------------------------------- */
	/* INIT
	/* -------------------------------------------------- */

	return {
		init: init

	};


}());

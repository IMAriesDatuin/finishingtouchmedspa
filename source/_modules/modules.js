/* -------------------------------------------------- */
/* APP
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('modules', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CORE (RUN ONCE ONLY)
	/* -------------------------------------------------- */

	function core() {

		$doc.foundation();
		detectBrowser();
		detectDevice();
		detectScreen();
		scroll.lock();
		navPanel.init();
		footer.init();
		scrollProgress.init();

	}


	/* -------------------------------------------------- */
	/* MODULES
	/* -------------------------------------------------- */

	function components() {

		/* -------------------------------------------------- */
		/* UTILITIES
		/* -------------------------------------------------- */

		detectTouch();
		dataAttr.color();
		//dataAttr.image();
		dataAttr.page();
		headroom.init();
		inView.init();
		lazyLoad.init();
		pageVisibility.init();
		print.init();
		//stackOrder.init();
		//skewScroll.init();


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		//component.init();

		commonCarousel.init('.carousel');
		cardCarousel.init('.concerns-carousel');
		cardCarousel.init('.procedures-carousel');
		cardCarousel.init('.testimonials-carousel');

		//parallax.init();
		Tween.delayedCall(interval.delay, parallax.init);

		hero.init();
		icon.init();
		media.init();
		//pages.init();
		section.element();
		section.media();
		//legal.checkLink();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		if(!isTouch) {
			Tween.delayedCall(interval.delay, cursor.init);
			magneticInteraction.init();
		}


		if(isTouch) {
			touchFeedback.init();
			waves.init();
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		core: core,
		components: components

	};


}(jQuery, window, document));

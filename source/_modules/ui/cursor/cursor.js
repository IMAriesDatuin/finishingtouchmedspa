/* -------------------------------------------------- */
/* CURSOR
/* -------------------------------------------------- */

var cursor = (function cursor($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('cursor', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $cursor = $('.cursor'),
			$cursorCore = $('.cursor-core'),
			$cursorTrail = $('.cursor-trail'),

			$cursorPrevious = $('.previous'),
			$cursorNext = $('.next'),

			$cursorElements = $('a, button, .button, .cursor-hover, .dot'),
			$cursorIgnore = $('.no-cursor');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var active = false;


		/* -------------------------------------------------- */
		/* LOGIC
		/* -------------------------------------------------- */

		if (isEdge || isExplorer) {

			$cursor.addClass('is-ie');

		}


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		/*
		function trail(e) {

			Tween.to($cursorTrail, 0.08, { css: {top: e.clientY, left: e.clientX} });
			
		};
		*/

		$cursorElements.not($cursorIgnore).on('mouseenter', function() {

			$cursor.addClass('is-hovering');

		}).on('mousedown', function() {
			
			$cursor.addClass('is-down');

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('is-hovering is-down');

		});


		$cursorPrevious.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-previous is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-previous is-hovering');

			});

		});


		$cursorNext.each(function() {

			var $self = $(this);

			$self.on('mouseenter', function() {

				$cursor.addClass('is-next is-hovering');

			}).on('mouseleave mouseout mouseup', function() {

				$cursor.removeClass('is-next is-hovering');

			});

		});


		$cursorIgnore.on('mouseover', function() {

			$cursor.addClass('no-cursor');

		}).on('mousedown', function() {
			
			$cursor.addClass('no-cursor');

		}).on('mouseout mouseup', function() {

			$cursor.removeClass('no-cursor');

		}).on('mouseleave mouseup', function() {

			$cursor.removeClass('no-cursor');

		});


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$win.on('mousemove', _.throttle( function(e) { 

			var mouseX = e.clientX,
				mouseY = e.clientY;

			function mousemove() {

				if (!active) {

					//cursor.style.opacity = 1;
					Tween.set(cursor, {autoAlpha: 1});
					active = true;

				}

				//cursor.css({top: mouseY, left: mouseX});
				Tween.to($cursor, 0.25, { css: {top: mouseY, left: mouseX} });
				Tween.to($cursorTrail, 0.08, { css: {top: e.clientY, left: e.clientX} });
				//trail(e);

			}

			raf(mousemove);

		}, 0, { leading: interval.leading, trailing: interval.trailing } ));


		$win.on('mouseover', function(e) {

			//Tween.to($cursor, 0.5, {opacity: 0, ease: Expo.easeInOut});
			active = false;

		}).on('mouseenter', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 1, ease: Expo.easeInOut});

		}).on('mouseleave', function(e) {

			Tween.to($cursor, 0.5, {autoAlpha: 0, ease: Expo.easeInOut});

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));

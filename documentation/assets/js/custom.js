(function ($) {
	"use strict";

	// Side Bar Toggle
	$(".zirox-hamburger-menu").click(function () {
		$(".zirox-doc-sidebar").toggleClass("zirox-doc-sidebar--open");
		$(".zirox-hamburger-menu__btn").toggleClass(
			"zirox-hamburger-menu__btn--active"
		);
	});

	// Section Scroll Animation
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();
		const target = $($(this).attr("href"));
		if (target.length) {
			const scrollTo = target.offset().top - 100;
			$("body, html").animate({ scrollTop: scrollTo + "px" }, 50);
		}
	});
})(jQuery);

/**
 * Created by teddygod on 10.09.2017.
 */



$(document).ready(function () {
	/*

	 (function($){
	 jQuery.fn.lightTabs = function(options){

	 var createTabs = function(){
	 tabs = this;
	 i = 0;

	 showPage = function(i){
	 $(tabs).children("div").children("div").hide();
	 $(tabs).children("div").children("div").eq(i).show();
	 $(tabs).children("ul").children("li").removeClass("active");
	 $(tabs).children("ul").children("li").eq(i).addClass("active");
	 }

	 showPage(0);

	 $(tabs).children("ul").children("li").each(function(index, element){
	 $(element).attr("data-page", i);
	 i++;
	 });

	 $(tabs).children("ul").children("li").click(function(){
	 showPage(parseInt($(this).attr("data-page")));
	 });
	 };
	 return this.each(createTabs);
	 };
	 })(jQuery);

	 */

	(function ($, undefined) {
		var slider = $("#services__slider_1")
		;
		if (slider.length) {
			var oSlider = slider.find('.bxslider').bxSlider({
				// nextSelector: '#services__slider_1 > .services__slider-btn-next'
				// ,prevSelector: '#services__slider_1 > .services__slider-btn-prev'
				// ,adaptiveHeight: true
				// ,loop: true
				// ,pager: false
				// // ,auto: true
				// ,minSlides: 2
				// ,maxSlides: 3
				// ,slideWidth: 570
				// ,slideMargin: 18
				// ,nextText: '<i class="g-icon g-icon_10"></i>'
				// ,prevText: '<i class="g-icon g-icon_9"></i>'
				//minSlides: 1,
				maxSlides: 3,
				slideWidth: 370,
//			slideMargin: 10,
				pager: false,
				nextSelector: '#slider_news-next',
				prevSelector: '#slider_news-prev',
				nextText: "",
				prevText: ""
			});
			arrowHeight();
			$('#tabs_services_1').find('.tabs__controls-link[href="' + '#services__slider_1' + '"]').bind('click', function (event) {
				// alert("sadasdasd");
				var tm = setTimeout(function () {
						arrowHeight();
						oSlider.redrawSlider();
						arrowHeight();
						clearTimeout(tm);
					}
					, 200
				);
			});

			function arrowHeight() {
				$('#services__slider_1 > .services__slider-btn-next').css({
					height: $('#services__slider_1').find('.article__img').height() + 'px'
				});
				$('#services__slider_1 > .services__slider-btn-prev').css({
					height: $('#services__slider_1').find('.article__img').height() + 'px'
				});
			}

			$(window).bind("resize", function (ev) {
				arrowHeight();
			});
		}

	})($);
	(function ($, undefined) {
		var slider = $("#services__slider_2")
		;
		if (slider.length) {
			var oSlider = slider.find('.bxslider').bxSlider({
				nextSelector: '#services__slider_2 > .services__slider-btn-next'
				, prevSelector: '#services__slider_2 > .services__slider-btn-prev'
				, adaptiveHeight: true
				, loop: true
				, pager: false
				// ,auto: true
				, minSlides: 2
				, maxSlides: 3
				, slideWidth: 570
				, slideMargin: 18
				, nextText: '<i class="g-icon g-icon_10"></i>'
				, prevText: '<i class="g-icon g-icon_9"></i>'
			});
			$('#tabs_services_1').find('.tabs__controls-link[href="' + '#services__slider_2' + '"]').bind('click', function (event) {
				// alert("sadasdasd");
				var tm = setTimeout(function () {
						oSlider.redrawSlider();
						arrowHeight();
						clearTimeout(tm);
					}
					, 200
				);
			});
			function arrowHeight() {
				$('#services__slider_2 > .services__slider-btn-next').css({
					height: $('#services__slider_2').find('.article__img').height() + 'px'
				});
				$('#services__slider_2 > .services__slider-btn-prev').css({
					height: $('#services__slider_2').find('.article__img').height() + 'px'
				});
			}

			$(window).bind("resize", function (ev) {
				arrowHeight();
			});
		}

	})($);
	(function ($, undefined) {
		var slider = $("#services__slider_3")
		;
		if (slider.length) {
			var oSlider = slider.find('.bxslider').bxSlider({
				nextSelector: '#services__slider_3 > .services__slider-btn-next'
				, prevSelector: '#services__slider_3 > .services__slider-btn-prev'
				, adaptiveHeight: true
				, loop: true
				, pager: false
				// ,auto: true
				, minSlides: 2
				, maxSlides: 3
				, slideWidth: 570
				, slideMargin: 18
				, nextText: '<i class="g-icon g-icon_10"></i>'
				, prevText: '<i class="g-icon g-icon_9"></i>'
			});
			$('#tabs_services_1').find('.tabs__controls-link[href="' + '#services__slider_3' + '"]').bind('click', function (event) {
				// alert("sadasdasd");
				var tm = setTimeout(function () {
						oSlider.redrawSlider();
						arrowHeight();
						clearTimeout(tm);
					}
					, 200
				);
			});
			function arrowHeight() {
				$('#services__slider_3 > .services__slider-btn-next').css({
					height: $('#services__slider_3').find('.article__img').height() + 'px'
				});
				$('#services__slider_3 > .services__slider-btn-prev').css({
					height: $('#services__slider_3').find('.article__img').height() + 'px'
				});
			}

			$(window).bind("resize", function (ev) {
				arrowHeight();
			});
		}

	})($);
	(function ($, undefined) {
		var slider = $("#services__slider_4")
		;
		if (slider.length) {
			var oSlider = slider.find('.bxslider').bxSlider({
				nextSelector: '#services__slider_4 > .services__slider-btn-next'
				, prevSelector: '#services__slider_4 > .services__slider-btn-prev'
				, adaptiveHeight: true
				, loop: true
				, pager: false
				// ,auto: true
				, minSlides: 2
				, maxSlides: 3
				, slideWidth: 570
				, slideMargin: 18
				, nextText: '<i class="g-icon g-icon_10"></i>'
				, prevText: '<i class="g-icon g-icon_9"></i>'
			});
			$('#tabs_services_1').find('.tabs__controls-link[href="' + '#services__slider_4' + '"]').bind('click', function (event) {
				// alert("sadasdasd");
				var tm = setTimeout(function () {
						oSlider.redrawSlider();
						arrowHeight();
						clearTimeout(tm);
					}
					, 200
				);
			});
			function arrowHeight() {
				$('#services__slider_4 > .services__slider-btn-next').css({
					height: $('#services__slider_4').find('.article__img').height() + 'px'
				});
				$('#services__slider_4 > .services__slider-btn-prev').css({
					height: $('#services__slider_4').find('.article__img').height() + 'px'
				});
			}

			$(window).bind("resize", function (ev) {
				arrowHeight();
			});
		}

	})($);

	var $ds_mf = $('#ds-mf-slider'),
		$ds_mf_attr = $('#ds-mf-slider-attributes'),
		handle_min = $("#custom-handle-min"),
		handle_max = $("#custom-handle-max"),
		$inpt_min = $("#price-from"),
		$inpt_max = $("#price-to"),
		values,
		firstval,
		secval;

	$ds_mf.slider({
		range: true,
		min: +$ds_mf_attr.attr('data-range-min'),
		max: +$ds_mf_attr.attr('data-range-max'),
		step: +$ds_mf_attr.attr('data-range-step'),
		values: [+$ds_mf_attr.attr('data-range-min-initial'), +$ds_mf_attr.attr('data-range-max-initial')],
		create: function () {
			values = $ds_mf.slider("option", "values");
			firstval = values[0];
			secval = values[1];
			handle_min.html('<span class="slider-value">' + firstval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
			handle_max.html('<span class="slider-value">' + secval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
		},
		slide: function (event, ui) {
			setTimeout(function () {
				values = $ds_mf.slider("option", "values");
				firstval = values[0];
				secval = values[1];
				handle_min.html('<span class="slider-value">' + firstval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
				handle_max.html('<span class="slider-value">' + secval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
			}, 10);
		},
		stop: function (event, ui) {
			values = $ds_mf.slider("option", "values");
			firstval = values[0];
			secval = values[1];
			handle_min.html('<span class="slider-value">' + firstval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
			handle_max.html('<span class="slider-value">' + secval + " " + $ds_mf_attr.attr('data-range-postfix') + '</span>');
			$inpt_min.attr("value", firstval);
			$inpt_max.attr("value", secval);
		}
	});


});
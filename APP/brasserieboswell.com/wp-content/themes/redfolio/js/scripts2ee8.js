jQuery(document).ready(function () {

	var lastScrollTop = 0;
    jQuery(window).scroll(function () {
        var st = jQuery(this).scrollTop();
		if(st === 0){
			jQuery('#top-bar').removeClass('hasScrolled');
		}else{
			jQuery('#top-bar').addClass('hasScrolled');
		}

        if (st > lastScrollTop) {
            // downscroll code
            if(lastScrollTop >=0) {
                jQuery('#top-bar').addClass('out-of-screen');
            }
        } else {
            // upscroll code
            jQuery('#top-bar').removeClass('out-of-screen');
        }
        lastScrollTop = st;

        jQuery('#wrapper section').each(function(i) {
			var id = jQuery(this).attr('id');
            if (jQuery(this).position().top <= st + 170) {
                jQuery('nav a').removeClass('active');
                jQuery('nav a[href="#'+id+'"]').addClass('active');
            }
        });

    });

	setTimeout(function(){
		jQuery(window).scroll();
	}, 1000);

	jQuery('.header-slider').slick({
		vertical: true,
		verticalSwiping: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3500,
	});

	jQuery('.tab-container').each(function(){
		var tab = jQuery(this);
		tab.find('.tab-menu li a').on('click', function(e){
			e.preventDefault();
			tab.find('.tab-menu li').removeClass('active');
			jQuery(this).parent().addClass('active');
			var id = jQuery(this).attr('href');
			tab.find('.tab').hide();
			jQuery(id).removeClass('d-none').fadeIn(1000);
		});

		tab.find('.tab-menu select').on('change', function(e){
			e.preventDefault();
			var id = jQuery(this).val();
			tab.find('.tab').hide();
			jQuery(id).removeClass('d-none').fadeIn(1000);
		});
	});

	var map = new GoogleMapManager('myCustomMap', {
        googleMap: {
			center: {
                lat: 45.538427,
                lng: -73.569634
            },
			zoom: 16,
			zoomControlOptions: {
			   position: google.maps.ControlPosition.LEFT_BOTTOM,
		   },
	   	},
		styles: [ { "featureType": "all", "elementType": "geometry", "stylers": [ { "color": "#413c1c" } ] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "gamma": 0.01 }, { "lightness": 20 } ] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "saturation": -31 }, { "lightness": -33 }, { "weight": 2 }, { "gamma": 0.8 } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [ { "visibility": "off" }, { "saturation": "-32" }, { "lightness": "0" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "saturation": "16" } ] }, { "featureType": "administrative", "elementType": "labels", "stylers": [ { "saturation": "-48" }, { "lightness": "-9" }, { "gamma": "1.25" }, { "weight": "0.01" } ] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [ { "saturation": "-39" }, { "lightness": "100" }, { "gamma": "6.52" }, { "weight": "0.90" } ] }, { "featureType": "administrative", "elementType": "labels.icon", "stylers": [ { "saturation": "0" } ] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [ { "saturation": "-54" }, { "lightness": "-68" } ] }, { "featureType": "administrative.province", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [ { "lightness": "48" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text", "stylers": [ { "lightness": "-7" } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "lightness": "12" }, { "saturation": "-100" } ] }, { "featureType": "landscape.man_made", "elementType": "labels.text", "stylers": [ { "lightness": "-4" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "saturation": 20 }, { "visibility": "on" } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "on" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "lightness": 20 }, { "saturation": -20 } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "lightness": "37" }, { "saturation": "-18" } ] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "saturation": 25 }, { "lightness": 25 }, { "visibility": "off" } ] }, { "featureType": "road", "elementType": "labels.text", "stylers": [ { "lightness": "100" }, { "saturation": "100" }, { "gamma": "6.07" } ] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [ { "lightness": "-30" }, { "saturation": "-100" }, { "visibility": "off" } ] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#a58e2f" } ] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#a58e2f" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "lightness": -20 } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "saturation": "-100" }, { "lightness": "-100" } ] }, { "featureType": "water", "elementType": "labels.text", "stylers": [ { "lightness": "-50" }, { "color": "#4a4700" }, { "saturation": "-57" } ] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [ { "saturation": "-100" }, { "lightness": "-100" }, { "gamma": "4.20" } ] } ]
    });

	map.addMarker({
        id: 1,
        title: 'Boswell',
        lat: 45.538427,
        lng: -73.569634,
		icon: '/wp-content/themes/redfolio/images/new/pin-star.png'
    });

	map.map.panBy(0, 40);


	jQuery('section').each(function(index){
		jQuery(this).waypoint({
			offset: '80%',
			handler: function(direction) {
				jQuery(this).addClass('animated');

				switch(this.id){
					case 'slider':
						jQuery(this).find('.text li').each(function(i){
							var title = jQuery(this);
							setTimeout(function(){
								title.addClass('animated');
							}, 425 * (i+1));
						});
						var btn = jQuery(this).find('.btn');
						var titleNb = jQuery(this).find('.text li').length;
						setTimeout(function(){
							btn.addClass('animated');
						}, 425 * (titleNb + 1));
						break;
					case 'instagram':
						jQuery(this).find('.insta-post, .sbi_item').each(function(i){
							var post = jQuery(this);
							setTimeout(function(){
								post.addClass('animated');
							}, 300 * i);
						});
						break;
				}
			}
		});
		if(index <= 1 || jQuery(window).width() < 768){
			jQuery(this).addClass('animated');
		}
	});

	jQuery('a[href^="#"]').on('click', function(e){
		e.preventDefault();
		scrollTo(jQuery(this).attr('href'));
	});
	jQuery('header .logo').on('click', function(e){
		scrollTo('body');
	});
	// var feed = new Instafeed({
	// 	get: 'user',
    //     userId: '431909380',
    //     // userId: '2243925612',
	// 	clientId: '83be222704d84febbb85f22a4fe52b07',
	// 	accessToken: '431909380.83be222.610e20722d464082bed17018c53e2d24',
	// 	limit : 4,
	// 	resolution: 'standard_resolution',
	// 	template: '<div class="col-lg-3 mb-5 mb-lg-0"><div class="insta-post ' + isAnimated + '" style="background-image:url(\'{{image}}\');"></div></div>'
    // });
    // feed.run();


	if(jQuery(window).width() >= 768){
		// jQuery('#boire').parallax('65%');
	}else{

	}

	var waitForFeed = setInterval(function(){
		if(jQuery('#instagram .sbi_item').length){
			clearInterval(waitForFeed);

			if(jQuery('#instagram').hasClass('animated')){
				jQuery('#instagram .sbi_item').addClass('animated');
			}
			if(jQuery(window).width() < 768){
				jQuery('#sb_instagram #sbi_images').slick({
					infinite: false,
					slidesToShow: 1,
					variableWidth: true
				});
			}
		}
	}, 500);

	jQuery('.mobile-menu .toggle').on('click', function(){
		jQuery('.mobile-menu .over').addClass('active');
	});
	jQuery('.mobile-menu .close-btn').on('click', function(){
		jQuery('.mobile-menu .over').removeClass('active');
	});
	jQuery('.mobile-menu .over li a').on('click', function(e){
		jQuery('.mobile-menu .over').removeClass('active');
	});

});

var scrollTo = function(selector){
	var position = jQuery(selector).offset().top - (jQuery('#top-bar').outerHeight() );
	if(jQuery(selector).css("opacity") === '0'){
		position -= 100;
	}
	jQuery('html,body').stop().animate({
		scrollTop: position
	}, 1000);
};

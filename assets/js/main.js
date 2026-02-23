"user strict";

$(document).ready(function () {

	//banner one
    var swiper = new Swiper(".bn__slideversion__one", {
		autoplay: 1000,
		speed: 400,
		loop: true,
		autoplay: true,
		slidesPerView: 1,
		loop: true,
		smartspeed: 1000,
		nav: false,
		dots: true,
		pagination: {
			el: ".cmn-pagination",
			clickable: true,
		  },
	});
	//banner slider
	//custom banner	
	var swiper = new Swiper(".mySwiper1", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
	  });
	  var swiper2 = new Swiper(".mySwiper22", {
		loop: true,
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		thumbs: {
		  swiper: swiper,
		},
	  });
	//banner slider

	//recent live slider
	var swiper = new Swiper(".trending__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 12,
		loop: true,
		smartspeed: 1000,
		breakpoints: {
			320: {
			  slidesPerView: 1,
			},
			575: {
			  slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
			1199: {
			  slidesPerView: 3,
			},
			1600: {
				slidesPerView: 4,
			  }
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		navigation: {
			nextEl: '.cmn-button-next2',
			prevEl: '.cmn-button-prev2',
		},
	});
	//recent live slider
	var swiper = new Swiper(".products__slider", {
		autoplay: 1000,
		speed: 200,
		spaceBetween: 12,
		loop: false,
		smartspeed: 1000,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			575: {
				slidesPerView: 3,
			},
			900: {
				slidesPerView: 4,
			},
			1199: {
				slidesPerView: 5,
			},
			1600: {
				slidesPerView: 6,
				}
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		navigation: {
			nextEl: '.cmn-button-next2',
			prevEl: '.cmn-button-prev2',
		},
	});
	//event slider
	var swiper = new Swiper(".event__sliderwrap", {
		autoplay: 1000,
		speed: 200,
		loop: true,
		spaceBetween: 12,
		loop: false,
		smartspeed: 1000,
		breakpoints: {
			320: {
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 5,
			},
			900: {
				slidesPerView: 7,
			},
			1199: {
				slidesPerView: 7,
			},
			1600: {
				slidesPerView: 7,
				}
		},
		navigation: {
			nextEl: '.cmn-button-next2',
			prevEl: '.cmn-button-prev2',
		},
	});
	//product slider
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	  });
	  var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		thumbs: {
		  swiper: swiper,
		},
	  });
	//product slider

	//quantity
		var input = document.querySelector('#qty');
		var btnminus = document.querySelector('.qtyminus');
		var btnplus = document.querySelector('.qtyplus');

		if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
			
			var min = Number(input.getAttribute('min'));
			var max = Number(input.getAttribute('max'));
			var step = Number(input.getAttribute('step'));

			function qtyminus(e) {
				var current = Number(input.value);
				var newval = (current - step);
				if(newval < min) {
					newval = min;
				} else if(newval > max) {
					newval = max;
				} 
				input.value = Number(newval);
				e.preventDefault();
			}

			function qtyplus(e) {
				var current = Number(input.value);
				var newval = (current + step);
				if(newval > max) newval = max;
				input.value = Number(newval);
				e.preventDefault();
			}
				
			btnminus.addEventListener('click', qtyminus);
			btnplus.addEventListener('click', qtyplus);
		
		} 
	//quantity

	//--audio play--
	$('audio').audioPlayer();
	//--audio play--

	//--Nice Select--
	$('select').niceSelect();
	//--Nice Select--

	 // User Active
	 $('.header-section .sidebar-icon').on('click', function() {
		$('.sidebar-wrapper').toggleClass('active');
		$(".header-wrapper").toggleClass("body-collapse");
		$(".main__body").toggleClass("body-collapse");
		$(".banner__slide__wrap").toggleClass("body-collapse");
	});

	// Sidebar Wrapper Close
	$(".sidebar-wrapper .closebtn,.closebts__two").on("click", function() {
		$(".sidebar-wrapper").toggleClass("active");
		$(".header-wrapper").toggleClass("body-collapse");
		$(".main__body").toggleClass("body-collapse");
		$(".banner__slide__wrap").toggleClass("body-collapse");
	});
	//menu top fixed bar
	var fixed_top = $(".header-wrapper");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 0) {
			fixed_top.addClass("menu-fixed");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar

	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//--Header Menu--

	//--Magnifiqpopup--
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
	//--Magnifiqpopup--

	//--Odometer--
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//--Odometer--

	//--profile change--
	var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });	  
	//--profile change--

	//--Wow Animation--
	new WOW().init();
	//--Wow Animation--

	//--reply box--
	$(".reply").on("click", function () {
		$(this).toggleClass("reply-active");
		$(this).parent().next(".reply__content").slideToggle();
	});
	//--reply box--

	//--clickable menu--
	$(".mclick").on("click", function () {
		$(this).toggleClass("reply-active");
		$(this).parent().next(".menucontent").slideToggle();
	});
	//--clickable menu--

	//--Preloader--//
	setTimeout(function(){
		$('.preloader__wrap').fadeToggle();
	}, 1000);
	//--Preloader--//

	$('.video').playVideo();

	
  $(function () {
    var toggleSwitch = $("#js-pricing-switch input");

    (function () {
      $(toggleSwitch).change(function () {
        // Change prices for plans
        togglePriceContent();

        // Toggle monthly/yearly style
        $(".js-switch-label-monthly, .js-switch-label-yearly").toggleClass(
          "active"
        );
      });
    })();

    function togglePriceContent() {
      if ($(toggleSwitch).is(":checked") === true) {
        // if toggle is yearly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-yearly"));
        });
      } else {
        // if toggle is monthly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-monthly"));
        });
      }
    }
  });

window.odometerOptions = {
  duration: 400
};


});


(function ($) {
    "use strict";

    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="icon-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------ Wow Active ----*/
    new WOW().init();

    /*------ Hero slider active 1 ----*/
    $('.hero-slider-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });

    /*------ Hero slider active 2 ----*/
    $('.hero-slider-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });

    /*------ Hero slider active 3 ----*/
    $('.hero-slider-active-3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        loop: true,
        dots: true,
        arrows: false,
    });

    /*------ Product slider active ----*/
    $('.product-slider-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 2 ----*/
    $('.product-slider-active-2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 3 ----*/
    $('.product-slider-active-3').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*------ Product slider active 4 ----*/
    $('.product-slider-active-4').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ Product slider active 5 ----*/
    $('.product-slider-active-5').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------ product categories slider 1 ----*/
    $('.product-categories-slider-1').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    /*------ Product categories slider 3 ----*/
    $('.product-categories-slider-3').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        rows: 2,
        prevArrow: '<span class="pro-slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });



    /*--------------------------------
        InstagramFeed active
    -----------------------------------*/

    /*--
    instafeed
    -----------------------------------*/
    // User Changeable Access
    var activeId = $("#instafeed"),
        limit = activeId.data("limit"),
        myTemplate = '<div class="single-instafeed"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>';
    if (activeId.length) {
        var accessTokenID = "IGQVJWLXU1Ri1JbjE0RlhlRmVZAMy1mRllxUzJWZAG5najYxWUxLcGl1SV80UHNiN2ZAaUFdHTVllMEh6YjRucTZAIY09TQlowdGlScG9taHhWNHJwaXQzOVZAwUDdsZAHdqTjhTcHB5ZA2I5QWRVZAVZAtYjZA2SgZDZD",
            userFeed = new Instafeed({
                accessToken: accessTokenID,
                template: myTemplate,
                limit: limit,
            });
        userFeed.run();
    }


    /*--- Language currency active ----*/
    $('.language-dropdown-active').on('click', function (e) {
        e.preventDefault();
        $('.language-dropdown').slideToggle(400);
    });
    $('.currency-dropdown-active').on('click', function (e) {
        e.preventDefault();
        $('.currency-dropdown').slideToggle(400);
    });

    /*--- Countdown timer active ----*/
    $('#timer-1-active , #timer-3-active').syotimer({
        year: 2021,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'hms',
        periodic: false,
        periodUnit: 'm'
    });

    $('#timer-2-active').syotimer({
        year: 2021,
        month: 10,
        day: 22,
        hour: 8,
        minute: 48,
        layout: 'dhms',
        periodic: false,
        periodUnit: 'm'
    });

    /*====== SidebarCart ======*/
    function miniCart() {
        var
            // navbarTrigger = $('.cart-active'),
            endTrigger = $('.cart-close'),
            container = $('.sidebar-cart-active'),
            wrapper = $('.main-wrapper');

        wrapper.prepend('<div class="body-overlay"></div>');

        // navbarTrigger.on('click', function (e) {
        //     e.preventDefault();
        //     container.addClass('inside');
        //     wrapper.addClass('overlay-active');
        // });

        endTrigger.on('click', function () {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });

        $('.body-overlay').on('click', function () {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    miniCart();

    /*-------------------------------
       Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.search-wrap-1').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.search-wrap-1').addClass('open');
        }
    })


    /* NiceSelect */
    $('.nice-select').niceSelect();


    /*-------------------------
      Category active
    --------------------------*/
    $('.categori-show').on('click', function (e) {
        e.preventDefault();
        $('.categori-hide , .categori-hide-2').slideToggle(900);
    });

    /*--------------------------------
        Deal slider active
    -----------------------------------*/
    $('.deal-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-icon-1-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="slider-icon-1-next"><i class="icon-arrow-right"></i></span>',
    });


    /*--------------------------------
        Sidebar product active
    -----------------------------------*/
    $('.sidebar-product-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 3,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });

    /*--------------------------------
        Sidebar blog active
    -----------------------------------*/
    $('.sidebar-blog-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        rows: 2,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
    });

    /*--------------------------------
        Product categories slider
    -----------------------------------*/
    $('.product-categories-slider-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    /*--------------------------------
        Testimonial active
    -----------------------------------*/
    $('.testimonial-active-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
    });
    /*--------------------------------
        Testimonial active 2
    -----------------------------------*/
    $('.testimonial-active-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
    });

    /*--------------------------------
        Product slider active 6
    -----------------------------------*/
    $('.product-slider-active-6').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 7
    -----------------------------------*/
    $('.product-slider-active-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        rows: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 8
    -----------------------------------*/
    $('.product-slider-active-8').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: true,
        prevArrow: '<span class="sidebar-icon-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="sidebar-icon-next"><i class="icon-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*--------------------------------
        Product slider active 9
    -----------------------------------*/
    $('.product-slider-active-9').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    /*------- Color active -----*/
    $('.pro-details-color-content').on('click', 'a', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
    });

    /*--------------------------------
        Social icon active
    -----------------------------------*/
    if ($('.pro-details-action').length) {
        var $body = $('body'),
            $cartWrap = $('.pro-details-action'),
            $cartContent = $cartWrap.find('.product-dec-social');
        $cartWrap.on('click', '.social', function (e) {
            e.preventDefault();
            var $this = $(this);
            if (!$this.parent().hasClass('show')) {
                $this.siblings('.product-dec-social').addClass('show').parent().addClass('show');
            } else {
                $this.siblings('.product-dec-social').removeClass('show').parent().removeClass('show');
            }
        });
        /*Close When Click Outside*/
        $body.on('click', function (e) {
            var $target = e.target;
            if (!$($target).is('.pro-details-action') && !$($target).parents().is('.pro-details-action') && $cartWrap.hasClass('show')) {
                $cartWrap.removeClass('show');
                $cartContent.removeClass('show');
            }
        });
    }

    /*---------------------
        Price range
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    $(function () {
        sliderrange.slider({
            range: true,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function (event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    $('#exampleModal').on('shown.bs.modal', function () {
        $('.quickview-slide-active').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            fade: false,
            loop: false,
            dots: false,
            arrows: true,
            prevArrow: '<span class="icon-prev"><i class="icon-arrow-left"></i></span>',
            nextArrow: '<span class="icon-next"><i class="icon-arrow-right"></i></span>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
        $('.quickview-slide-active a').on('click', function () {
            $('.quickview-slide-active a').removeClass('active');
        })
    })

    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $('.mobile-header-button-active'),
            endTrigger = $('.sidebar-close'),
            container = $('.mobile-header-active'),
            wrapper4 = $('.main-wrapper');

        wrapper4.prepend('<div class="body-overlay-1"></div>');

        navbarTrigger.on('click', function (e) {
            e.preventDefault();
            container.addClass('sidebar-visible');
            wrapper4.addClass('overlay-active-1');
        });

        endTrigger.on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });

        $('.body-overlay-1').on('click', function () {
            container.removeClass('sidebar-visible');
            wrapper4.removeClass('overlay-active-1');
        });
    };
    mobileHeaderActive();

    /*---------------------
        mobile-menu
    --------------------- */
    var $offCanvasNav = $('.mobile-menu , .category-menu-dropdown'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });


    /*--- checkout toggle function ----*/
    $('.checkout-click1').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info').slideToggle(900);
    });


    /*--- checkout toggle function ----*/
    $('.checkout-click3').on('click', function (e) {
        e.preventDefault();
        $('.checkout-login-info3').slideToggle(1000);
    });

    /*-------------------------
    Create an account toggle
    --------------------------*/
    $('.checkout-toggle2').on('click', function () {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function () {
        $('.open-toggle').slideToggle(1000);
    });

    /*-------------------------
    checkout one click toggle function
    --------------------------*/
    var checked = $('.sin-payment input:checked')
    if (checked) {
        $(checked).siblings('.payment-box').slideDown(900);
    };
    $('.sin-payment input').on('change', function () {
        $('.payment-box').slideUp(900);
        $(this).siblings('.payment-box').slideToggle(900);
    });


    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();

    /*-------------------------------------
        Product details big image slider
    ---------------------------------------*/
    $('.pro-dec-big-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: false,
        asNavFor: '.product-dec-slider-small , .product-dec-slider-small-2',
    });

    /*---------------------------------------
        Product details small image slider
    -----------------------------------------*/
    $('.product-dec-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-left"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-right"></i></span>',
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
            }
        }
        ]
    });

    /*----------------------------------------
        Product details small image slider 2
    ------------------------------------------*/
    $('.product-dec-slider-small-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.pro-dec-big-img-slider',
        dots: false,
        focusOnSelect: true,
        fade: false,
        prevArrow: '<span class="pro-dec-prev"><i class="icon-arrow-up"></i></span>',
        nextArrow: '<span class="pro-dec-next"><i class="icon-arrow-down"></i></span>',
        responsive: [{
            breakpoint: 1365,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        }
        ]
    });


    /*--
        Magnific Popup
    ------------------------*/
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.related-product-active').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.brand-logo-wrap-2').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        loop: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    /*------------------------
        Sidebar sticky active
    -------------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 0,
        bottomSpacing: 30,
        minWidth: 767,
    });

    /*--- language currency active ----*/
    $('.mobile-language-active').on('click', function (e) {
        e.preventDefault();
        $('.lang-dropdown-active').slideToggle(900);
    });
    $('.mobile-currency-active').on('click', function (e) {
        e.preventDefault();
        $('.curr-dropdown-active').slideToggle(900);
    });


    (function (jQuery, window, undefined) {
        "use strict";
        var matched, browser;

        jQuery.uaMatch = function (ua) {
            ua = ua.toLowerCase();

            var match = /(opr)[\/]([\w.]+)/.exec(ua) ||
                /(chrome)[ \/]([\w.]+)/.exec(ua) ||
                /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
                /(webkit)[ \/]([\w.]+)/.exec(ua) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
                /(msie) ([\w.]+)/.exec(ua) ||
                ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
                [];

            var platform_match = /(ipad)/.exec(ua) ||
                /(iphone)/.exec(ua) ||
                /(android)/.exec(ua) ||
                /(windows phone)/.exec(ua) ||
                /(win)/.exec(ua) ||
                /(mac)/.exec(ua) ||
                /(linux)/.exec(ua) ||
                /(cros)/i.exec(ua) ||
                [];

            return {
                browser: match[3] || match[1] || "",
                version: match[2] || "0",
                platform: platform_match[0] || ""
            };
        };

        matched = jQuery.uaMatch(window.navigator.userAgent);
        browser = {};

        if (matched.browser) {
            browser[matched.browser] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.version);
        }

        if (matched.platform) {
            browser[matched.platform] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if (browser.android || browser.ipad || browser.iphone || browser["windows phone"]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if (browser.cros || browser.mac || browser.linux || browser.win) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if (browser.chrome || browser.opr || browser.safari) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        if (browser.rv) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Opera 15+ are identified as opr
        if (browser.opr) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if (browser.safari && browser.android) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;


        jQuery.browser = browser;
    })(jQuery, window);

    (function (a) { var b = (a.browser.msie ? "paste" : "input") + ".mask", c = window.orientation != undefined; a.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn" }, a.fn.extend({ caret: function (a, b) { if (this.length != 0) { if (typeof a == "number") { b = typeof b == "number" ? b : a; return this.each(function () { if (this.setSelectionRange) this.setSelectionRange(a, b); else if (this.createTextRange) { var c = this.createTextRange(); c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select() } }) } if (this[0].setSelectionRange) a = this[0].selectionStart, b = this[0].selectionEnd; else if (document.selection && document.selection.createRange) { var c = document.selection.createRange(); a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length } return { begin: a, end: b } } }, unmask: function () { return this.trigger("unmask") }, mask: function (d, e) { if (!d && this.length > 0) { var f = a(this[0]); return f.data(a.mask.dataName)() } e = a.extend({ placeholder: "_", completed: null }, e); var g = a.mask.definitions, h = [], i = d.length, j = null, k = d.length; a.each(d.split(""), function (a, b) { b == "?" ? (k--, i = a) : g[b] ? (h.push(new RegExp(g[b])), j == null && (j = h.length - 1)) : h.push(null) }); return this.trigger("unmask").each(function () { function v(a) { var b = f.val(), c = -1; for (var d = 0, g = 0; d < k; d++)if (h[d]) { l[d] = e.placeholder; while (g++ < b.length) { var m = b.charAt(g - 1); if (h[d].test(m)) { l[d] = m, c = d; break } } if (g > b.length) break } else l[d] == b.charAt(g) && d != i && (g++, c = d); if (!a && c + 1 < i) f.val(""), t(0, k); else if (a || c + 1 >= i) u(), a || f.val(f.val().substring(0, c + 1)); return i ? d : j } function u() { return f.val(l.join("")).val() } function t(a, b) { for (var c = a; c < b && c < k; c++)h[c] && (l[c] = e.placeholder) } function s(a) { var b = a.which, c = f.caret(); if (a.ctrlKey || a.altKey || a.metaKey || b < 32) return !0; if (b) { c.end - c.begin != 0 && (t(c.begin, c.end), p(c.begin, c.end - 1)); var d = n(c.begin - 1); if (d < k) { var g = String.fromCharCode(b); if (h[d].test(g)) { q(d), l[d] = g, u(); var i = n(d); f.caret(i), e.completed && i >= k && e.completed.call(f) } } return !1 } } function r(a) { var b = a.which; if (b == 8 || b == 46 || c && b == 127) { var d = f.caret(), e = d.begin, g = d.end; g - e == 0 && (e = b != 46 ? o(e) : g = n(e - 1), g = b == 46 ? n(g) : g), t(e, g), p(e, g - 1); return !1 } if (b == 27) { f.val(m), f.caret(0, v()); return !1 } } function q(a) { for (var b = a, c = e.placeholder; b < k; b++)if (h[b]) { var d = n(b), f = l[b]; l[b] = c; if (d < k && h[d].test(f)) c = f; else break } } function p(a, b) { if (!(a < 0)) { for (var c = a, d = n(b); c < k; c++)if (h[c]) { if (d < k && h[c].test(l[d])) l[c] = l[d], l[d] = e.placeholder; else break; d = n(d) } u(), f.caret(Math.max(j, a)) } } function o(a) { while (--a >= 0 && !h[a]); return a } function n(a) { while (++a <= k && !h[a]); return a } var f = a(this), l = a.map(d.split(""), function (a, b) { if (a != "?") return g[a] ? e.placeholder : a }), m = f.val(); f.data(a.mask.dataName, function () { return a.map(l, function (a, b) { return h[b] && a != e.placeholder ? a : null }).join("") }), f.attr("readonly") || f.one("unmask", function () { f.unbind(".mask").removeData(a.mask.dataName) }).bind("focus.mask", function () { m = f.val(); var b = v(); u(); var c = function () { b == d.length ? f.caret(0, b) : f.caret(b) }; (a.browser.msie ? c : function () { setTimeout(c, 0) })() }).bind("blur.mask", function () { v(), f.val() != m && f.change() }).bind("keydown.mask", r).bind("keypress.mask", s).bind(b, function () { setTimeout(function () { f.caret(v(!0)) }, 0) }), v() }) } }) })(jQuery);

    /*     My Javascript      */

    $(function () {

        $("#phone").mask("(99) 999-99-99");

    }
    )

})(jQuery);


function togglePasswordVisibility(icon) {
    var passwordField = icon.previousElementSibling;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.add("active");
    } else {
        passwordField.type = "password";
        icon.classList.remove("active");
    }

}


// Add to Favorite
document.addEventListener("DOMContentLoaded", function () {
    const favoriteButtons = document.querySelectorAll('.favorite-button');

    favoriteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            button.classList.toggle('active');
        });
    });
});

// SIDEBAR FILTER

$('.sidebar-open').click(function () {
    $('.sidebar_widget').addClass('active')
})
$('.sidebar-close').click(function () {
    $('.sidebar_widget').removeClass('active')
})
/*---widget sub categories---*/
$(".widget_sub_categories > a").on("click", function () {
    // Toggle the 'active' class on the clicked anchor tag
    $(this).toggleClass('active');

    // Find the sibling .widget_dropdown_categories and toggle its visibility
    $(this).siblings('.widget_dropdown_categories').slideToggle('medium');
});


// PRICE VALIDATION

function validateInput(input) {
    // Remove any non-numeric characters
    input.value = input.value.replace(/\D/g, ''); // \D matches any non-digit character

    // You can add further validation here if needed
}
$(document).ready(function () {
    var navY = $('nav').offset().top;
    var stickyNav = function () {
        var scrollY = $(window).scrollTop();

        if (scrollY > navY) {
            $('nav').addClass('nav-docked');
            $('.container').addClass('container-nav-docked');
        }
        else {
            $('nav').removeClass('nav-docked');
            $('.container').removeClass('container-nav-docked');
        }

    };


    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});
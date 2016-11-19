
function addPageToHistory() {
    if (sessionStorage.length <= 10)
        sessionStorage.setItem("historyPage" + sessionStorage.length, document.title);
    else {
        for (var i = 0; i < sessionStorage.length - 1; i++) {
            sessionStorage["historyPage" + i] = sessionStorage["historyPage" + (i + 1)];
        }
        console.log("historyPage" + (sessionStorage.length - 1));
        sessionStorage.removeItem("historyPage" + (sessionStorage.length - 1));
        sessionStorage.length--;
        sessionStorage.setItem("historyPage" + sessionStorage.length, document.title);

    }
}
document.addEventListener("DOMContentLoaded", function () {
    addPageToHistory();
    getHistory();



});
function getHistory() {
    var pages = document.createDocumentFragment();
    for (var i = sessionStorage.length - 1; i >= 0; i--) {
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(sessionStorage.getItem("historyPage" + i)));
        pages.appendChild(p);
    }

    var col1 = document.getElementById("col1-content");
    col1.appendChild(pages);
}

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
$(document).ready(function () {
    let timeoutid = "";
    let intervalid = "";

    function nextSlide() {
        let slides = $(".mySlides");
        let temp = slides[0].cloneNode(true);
        for (i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                slides[i].parentNode.replaceChild(temp, slides[i]);
            }
            else {
                slides[i].parentNode.replaceChild(slides[i + 1].cloneNode(true), slides[i]);
            }
        }
    };

    function prevSlide() {
        let slides = $(".mySlides");
        let temp = slides[slides.length - 1].cloneNode(true);
        for (i = slides.length - 1; i > -1; i--) {
            if (i - 1 == -1) {
                slides[i].parentNode.replaceChild(temp, slides[i]);
            }
            else {
                slides[i].parentNode.replaceChild(slides[i - 1].cloneNode(true), slides[i]);
            }
        }
    };

    function autoSlides() {
        intervalid = setInterval(nextSlide, 2800);
    };

    $("#prev_carousel").on("click", function () {
        if (timeoutid !== "") {
            clearTimeout(timeoutid);
        }
        if (intervalid !== "") {
            clearInterval(intervalid);
        }
        prevSlide();
        timeoutid = setTimeout(autoSlides, 2000);
    });

    $("#next_carousel").on("click", function () {
        if (timeoutid != "") {
            clearTimeout(timeoutid);
        }
        if (intervalid != "") {
            clearInterval(intervalid);
        }
        nextSlide();
        timeoutid = setTimeout(autoSlides, 2000);
    });

    autoSlides();

});
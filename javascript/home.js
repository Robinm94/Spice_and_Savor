var nextSlide = function () {
    let slides = document.getElementsByClassName("mySlides");
    let temp = slides[0].cloneNode(true);
    for (i = 0; i < slides.length; i++) {
        if ( i + 1 == slides.length){
            slides[i].parentNode.replaceChild(temp, slides[i]);
        }
        else{
            slides[i].parentNode.replaceChild(slides[i+1].cloneNode(true), slides[i]);
        }
    }
}

var prevSlide = function () {
    let slides = document.getElementsByClassName("mySlides");
    let temp = slides[slides.length-1].cloneNode(true);
    for (i = slides.length-1; i > -1; i--) {
        if ( i - 1 == -1){
            slides[i].parentNode.replaceChild(temp, slides[i]);
        }
        else{
            slides[i].parentNode.replaceChild(slides[i-1].cloneNode(true), slides[i]);
        }
    }
}

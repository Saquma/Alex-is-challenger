var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2500); // Change image every 2,5seconds
}

  $(document).ready(function(){
        $('.w3-bar-item').click(function(event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $($.attr(this, 'href')).offset().top},'slow');
        })
        // var aTag = $("a[name='"+ aid +"']");
        // $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    });

    function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
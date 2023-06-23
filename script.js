function whySubmit() {
    alert("Can't be bothered with all that.. Download and play the game. HMU after")
}


// let slideshowPhotos = 1;
// showSlideshow(slideshowPhotos);

// next 
// function nextPhoto(n) {
//     showSlideshow(slideshowPhotos += n);
// }

// dots click click
// function currentSlide(n) {
//     showSlideshow(slideshowPhotos = n);
// }

// function showSlideshow(n) {
//     let i;
//     let slides = document.getElementsByClassName("slideshowGallery");
//     let dots = document.getElementsByClassName("dot");

//     if (n > slides.length) {
//         slideshowPhotos = 1
//     }

//     if (n < 1) {
//         slideshowPhotos = slides.length
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }

//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
// }
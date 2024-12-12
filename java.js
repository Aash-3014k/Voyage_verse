const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goprev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1; 
    }
    slideimage();
};

const gonext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; 
    }
    slideimage();
};

const slideimage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

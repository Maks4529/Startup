const slides = [
    {
        src: '/assets/images/tech_camera.jpg',
        alt: 'tech-camera',
    },
    {
        src: '/assets/images/tech_drone.jpg',
        alt: 'tech-drone',
    },
    {
        src: '/assets/images/tech_mic.jpg',
        alt: 'tech-mic',
    },
    {
        src: '/assets/images/tech_tablet.jpg',
        alt: 'tech-tablet',
    },
    {
        src: '/assets/images/tech_phone.jpg',
        alt: 'tech-phone',
    },
    {
        src: '/assets/images/tech_sound.jpg',
        alt: 'tech-sound',
    },
    {
        src: '/assets/images/tech_tableturner.jpg',
        alt: 'tech-tableturner',
    },
    {
        src: '/assets/images/tech_typewriter.jpg',
        alt: 'tech-typewriter',
    }
];

let countIndex = 0;
let countIndBack = slides.length - 1;
let countIndNext = 1;

const slideImg = document.querySelector('.slide');
slideImg.src = slides[countIndex].src;
slideImg.alt = slides[countIndex].alt;

const [backSlide, nextSlide] = document.querySelectorAll('.miniSlide');

backSlide.src = slides[countIndBack].src;
backSlide.alt = slides[countIndBack].alt;
nextSlide.src = slides[countIndNext].src;
nextSlide.alt = slides[countIndNext].alt;



const [backBtn, nextBtn] = document.querySelectorAll('.slideBtn');

function toBackSlide (event){
    if (countIndex > 0){
        countIndex--;
    } else{
        countIndex = slides.length - 1;
    }

    slideImg.src = slides[countIndex].src;
    slideImg.alt = slides[countIndex].alt;
};

function toNextSlide (event){
    if (countIndex < slides.length - 1){
        countIndex++;
    } else{
        countIndex = 0;
    }

    slideImg.src = slides[countIndex].src;
    slideImg.alt = slides[countIndex].alt;
};

function backMiniSlide (event){
    if (countIndex === 0){
        countIndBack = slides.length - 1;
        countIndNext = 1;
    } else if (countIndex === slides.length - 1){
        countIndBack = slides.length - 2;
        countIndNext = 0;
    } else {
        --countIndBack;
        countIndNext = countIndBack + 2;
    }

    backSlide.src = slides[countIndBack].src;
    backSlide.alt = slides[countIndBack].alt;
    nextSlide.src = slides[countIndNext].src;
    nextSlide.alt = slides[countIndNext].alt;
};

function nextMiniSlide (event){
    if (countIndex === 0){
        countIndBack = slides.length - 1;
        countIndNext = 1;
    } else if (countIndex === slides.length - 1){
        countIndBack = slides.length - 2;
        countIndNext = 0;
    } else {
        countIndBack = countIndex - 1;
        ++countIndNext;
    }

    backSlide.src = slides[countIndBack].src;
    backSlide.alt = slides[countIndBack].alt;
    nextSlide.src = slides[countIndNext].src;
    nextSlide.alt = slides[countIndNext].alt;
};

backBtn.addEventListener('click', () => {
    toBackSlide();
    backMiniSlide();
});
nextBtn.addEventListener('click', () => {
    toNextSlide();
    nextMiniSlide();
});
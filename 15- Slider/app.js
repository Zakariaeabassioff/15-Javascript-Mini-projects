//Acceder au slides
const slides = document.querySelectorAll('.slide');

//Acceder au bouton prev
const prevBtn = document.querySelector('.prevBtn');


//Acceder au bouton next
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function(){
    counter++;
    slidder();
});

prevBtn.addEventListener('click', function(){
    counter--;
    slidder();
});

function slidder(){
    if(counter === slides.length) {
        counter = 0;
    }else if (counter < 0){
        counter = slides.length-1;
    }



    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

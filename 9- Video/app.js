//Acceder au bouton permettant de switch entre play/pause
const btn = document.querySelector('.switch-btn');

//Acceder a la video
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
    if(btn.classList.contains('slide')){
        btn.classList.remove('slide');
        video.play();
    }else{
        btn.classList.add('slide');
        video.pause();
    }
});
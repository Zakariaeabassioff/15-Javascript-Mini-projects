/* Date dynamique dans le footer */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

/* navbar qui change de background en scroll */
const navBar = document.getElementById('navbar');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 20){
        navBar.classList.add('nav-scroll-effect');
    }else {
        navBar.classList.remove('nav-scroll-effect');
    }
});

/* Scroll top  */
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 200){
        scrollTop.classList.add('scroll-active');
    } else {
        scrollTop.classList.remove('scroll-active');
    }
});

/* Smouth scrolling */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault(); 
        //je recupere le href du link sans le #
        const id = e.currentTarget.getAttribute('href').slice(1);
        //j'accede a l'element de l'id
        const element = document.getElementById(id);
        
         //Savoir le height de la navbar
        const navHeight = navBar.getBoundingClientRect().height;
        
        //Savoir le top de cette element pour que la navbar se positionne juste au dessus
        let position = element.offsetTop - navHeight;

        window.scrollTo({
            left:0, top:position,
        })
    });
});
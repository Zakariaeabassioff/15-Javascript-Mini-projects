//Acceder au bouton OPEN MODAL
const openModal = document.getElementById('modal-btn');

//Acceder au bouton pour fermer le modal content
const closeModal = document.getElementById('close-btn');

const modal_overlay = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function(){
    modal_overlay.classList.add('show');
});

closeModal.addEventListener('click', function(){
    modal_overlay.classList.remove('show');
});
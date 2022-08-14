//Tableau d'objet pour la data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//Acceder a l'image de l'utilisateur
const img = document.getElementById('userImg');

//Acceder au nom de l'utilisateur
const name = document.getElementById('userName');

//Acceder au job de l'utilisateur
const job = document.getElementById('userJob');

//Acceder au infos sur l'utilisateur
const infos = document.getElementById('userInfo');

//Acceder au bouton prev
const prev = document.querySelector('.prev-btn');

//Accder au bouton next
const next = document.querySelector('.next-btn');

//Acceder au bouton random
const rand = document.querySelector('.rand-btn');

//initialiser la review card au chargement de la page
let currentItem = 0; 
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

//afficher une review selon num d'item
function showPerson(itemNum){
    const item = reviews[itemNum];
    img.src = item.img;
    name.innerHTML = item.name;
    job.innerHTML = item.job;
    infos.innerHTML = item.text;
}

//Configurer le next button
next.addEventListener('click', function(){
    if(currentItem == reviews.length-1){
        currentItem = 0;
    }else {
        currentItem++;
    }
    showPerson(currentItem);
});


//Configurer le prev button
prev.addEventListener('click', function(){
    if(currentItem == 0){
        currentItem = reviews.length-1;
    }else {
        currentItem--;
    }
    showPerson(currentItem);
});

//Configurer le random button
rand.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});
//Acceder au span permettant de selectionner le tab
let tabs = document.querySelectorAll('.tabs-toggle');
//console.log(tabs);

//Acceder au contenu de chaque tab 
let contents = document.querySelectorAll('.tab-content');
//console.log(contents);


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        }); 
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});
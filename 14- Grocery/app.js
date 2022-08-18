/* Selectionner les elements */

//Acceder au paragraphe ou va s'afficher le message informatif
const alert = document.querySelector('.alert');

//Acceder a l'input ou va ecrire l'utilisateur
const input = document.getElementById('user-input');

//Acceder au button submit
const submitButton = document.getElementById('submit-input');

//Acceder a la liste ou vont s'entreposer les items 
const itemList = document.querySelector('.items-list');

//Acceder au bouton pour enlever tout les elements de la list 
const deleteAllButton = document.getElementById('clear-button');


/* edit option */
let editElement;
let editFlag = false;


/* Event Listeners */ 
//event listener pour le submit button
submitButton.addEventListener('click', addItem);

//event listener pour le clear items button
deleteAllButton.addEventListener('click', removeAllitems);

//Fonction pour ajouter un item 
function addItem(){
    //Recuperer ce que l'utilisateur a saisi
    const userInput = input.value;
    //console.log(userInput);
    const id = new Date().getTime().toString();
    if(userInput && !editFlag){
        //console.log('add item');
        //creer un element div
        const element = document.createElement('div');
        //ajouter la classe item a la div pour appliquer le css
        element.classList.add('item');
        //ajouter un id a l'element div
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);

        //Ajouter du code a la div html pour afficher l'element saisi par l'utilisateur
        element.innerHTML = `<p id="item-name">${userInput}</p>
                    <div class="buttons-container">
                        <i class="fa-solid fa-pen-to-square modify-button" id="modify-button"></i>
                        <i class="fa-solid fa-trash delete-button" id="delete-button"></i>
                    </div>`;

        //acceder au bouton permettant de supprimer l'element
        const deleteButton = element.querySelector('.delete-button');
        //acceder au bouton permettant de modifier l'element
        const editButton = element.querySelector('.modify-button');

        deleteButton.addEventListener('click', deleteItem);
        editButton.addEventListener('click', editItem);

        //console.log(element);
        //Ajouter l'element a la liste des items pour qu'il s'affiche
        itemList.appendChild(element);
        //afficher le message informatif
        displayAlert('Element Added successfully!', 'succes');
        

        //rendre les parametres par defaut (Vider l'input...)
        setBackToDefault();
    }
    else if(userInput && editFlag){
        //console.log('add edited item');
        editElement.innerHTML = userInput;
        displayAlert('Element modifed successfully', 'succes');
        setBackToDefault();
    }
    else{
        displayAlert('Please enter a value!', 'fail');
    }
}

//Fonction pour enlever tout les elements 
function removeAllitems(){
    //selectionner tout les elements de la liste
    const items = document.querySelectorAll('.item');
    //si la liste est vide cad y'a aucun element
    if(items.length === 0){
        displayAlert('The list is already clear!', 'fail');
    } else {
        items.forEach(function(item){
            //on enleve de la liste element par element
            itemList.removeChild(item);
        })
        displayAlert('The list is clear!', 'succes');
        setBackToDefault();
    }

}

//Fonction pour modifier un element
function editItem(e){
    //console.log('edit Item');
    const element = e.currentTarget.parentElement.parentElement;
    //acceder au nom l'element dans la liste
    editElement = e.currentTarget.parentElement.previousElementSibling;

    input.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;

    submitButton.textContent = 'Edit';
}

//Fonction pour supprimer un element
function deleteItem(e){
    //console.log('delete Item');
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    itemList.removeChild(element);
    displayAlert('Element removed successfully!', 'success');
    setBackToDefault();
}



//Fonction pour afficher un message informatif
function displayAlert(text, action){
    alert.textContent = text;
    if(action === 'fail'){
        alert.style.color = 'red';
        alert.style.backgroundColor = 'rgba(255, 0, 0, 0.237)';
    } else if (action === 'succes'){
        alert.style.color = 'green';
        alert.style.backgroundColor = 'rgba(0, 128, 0, 0.211)';
    }

    //Enlever l'alerte apres un bout de temps
    
    setTimeout(function(){
        alert.textContent = '';
        alert.style.color = 'transparent';
        alert.style.backgroundColor = 'transparent';
    }, 3000);
}

//Contenu par defaut
function setBackToDefault(){
    //console.log('Set back to default');
    input.value = '';
    editFlag = false;
    submitButton.textContent = 'submit';
}


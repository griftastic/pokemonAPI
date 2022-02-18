//Declarations

const baseURL = "https://pokeapi.co";


//let selectedCard = selected card
//see how it is referencing the item being dragged and allow it to be set to card 2 or 3

//RNG

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//API Fetch / Appending Cards

function fetchPokemon() {
    for(let x = 1; x<=3; x++){
        let random = getRandomInt(898);
        fetch(`${baseURL}/api/v2/pokemon/${random}/`).then(response => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            
            document.querySelector(`.pokemonName${x}`).innerText = `${json.name[0].toUpperCase()}${json.name.slice(1).split("-").join(" ")}`;
            document.querySelector(`.image${x}`).src = json.sprites.front_default;   
        })
        .catch((error) => console.log("Error happening here at first fetch", error));
    }
}

fetchPokemon()

//Drag and Drop

const fill = document.querySelector('.fill');     
const fill2 = document.querySelector('.cardTwo'); 
const fill3 = document.querySelector('.cardThree'); 
const empties = document.querySelectorAll('.empty');
let selectedCard = "";



//pass in selected card through the dragStart function
function dragStart() {
    this.className += ' hold';
    selectedCard = objectId(this);
    setTimeout(() => (this.className = 'invisible'), 0);
    console.log('start');
}

function dragEnd() {
    this.className = 'contentCard fill';
    objectId(this)= selectedCard;
    console.log('end');
}

for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
fill2.addEventListener('dragstart', dragStart);
fill2.addEventListener('dragend', dragEnd);
fill3.addEventListener('dragstart', dragStart);
fill3.addEventListener('dragend', dragEnd);

function dragOver(e) {
    e.preventDefault();
    console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
    console.log('enter');
}

function dragLeave() {
    this.className = 'empty'
    console.log('leave');
}

function dragDrop(e) {
    this.className = 'dropZone empty';
    this.append(fill);
    console.log('drop');
}
            
const list_items = document.querySelectorAll



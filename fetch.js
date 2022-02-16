//Declarations

const baseURL = "https://pokeapi.co";

const fill = document.querySelector('.cardOne')  
const fill2 = document.querySelector('.cardTwo') 
const fill3 = document.querySelector('.cardThree') 
const empties = document.querySelectorAll('.empty')

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

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    // let newDropZone = document.createElement("section.dropZone");
    // document.append(newDropZone);
}

function dragEnd() {
    this.className = 'contentCard';
}

for (const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
// fill2.addEventListener('dragstart', dragStart);
// fill2.addEventListener('dragend', dragEnd);
// fill3.addEventListener('dragstart', dragStart);
// fill3.addEventListener('dragend', dragEnd);

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered'
}

function dragLeave() {
    // this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
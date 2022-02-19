//Declarations

const baseURL = "https://pokeapi.co";

//RNG

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function reset(){
    location.reload();
}

function fetchPokemon() {
    for(let x = 1; x<=3; x++){
        let random = getRandomInt(897) +1;
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

const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for(let i = 0; i < list_items.length; i++){
    const item = list_items[i]
    
    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0)
        });

    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem = draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
        })
        
        for(let j = 0; j < lists.length; j++) {
            const list = lists[j];

            list.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            list.addEventListener('dragenter', function(e) {
                e.preventDefault();
            });

            list.addEventListener('drop', function(e) {
                this.append(draggedItem);
            });
        }
    }
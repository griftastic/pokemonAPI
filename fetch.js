const baseURL = "https://pokeapi.co";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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

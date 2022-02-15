var pokemonName = "";
var randomNumber = 0;

(async () => {
    const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const json = await res.json();

    console.log(json.results);
    randomNumber = Math.floor(Math.random() * 150) + 1;

    document.getElementById("pokemon-image").src =
        getPokemonImage(randomNumber);
    pokemonName = json.results[randomNumber - 1].name;
})();

if(localStorage.getItem("pokemonNumber") == undefined){
    localStorage.setItem("pokemonNumber", 0);
}

document.getElementById("numberOfPokemons").innerHTML = localStorage.getItem("pokemonNumber");
var submitAction = function () {
    let name = document.getElementById("name").value.toLowerCase();
    if (name == pokemonName) {
        localStorage.setItem("pokemonNumber", parseInt(localStorage.getItem("pokemonNumber")) + 1);
        window.location.href = "finish.html?correct=true&pokemon=" + randomNumber;
    } else {
        window.location.href = "finish.html?correct=false&pokemon=" + randomNumber;
    }
};

function getPokemonImage(number) {
    return (
        `https://raw.githubusercontent.com/PokeAPI/` +
        `sprites/master/sprites/pokemon/${number}.png`
    );
}
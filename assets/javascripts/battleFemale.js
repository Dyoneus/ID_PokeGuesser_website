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
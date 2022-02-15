if(localStorage.getItem("gender") == "male"){  
    document.getElementById("human-image").src = "assets/images/maleBack.png";
}
else{
    document.getElementById("human-image").src = "assets/images/femaleBack.png";
}

function getPokemonImage(number) {
    return (
          `https://raw.githubusercontent.com/PokeAPI/` +
          `sprites/master/sprites/pokemon/${number}.png`
    );
}

document.getElementById("bodyId").addEventListener("click", function(){
    console.log("here")
    if(localStorage.getItem("gender") == "male"){
          window.location.href = "battlemale.html";
    }
    else{
          window.location.href = "battlefemale.html";
    }
});

function findGetParameter(parameterName) {
    var result = null,
          tmp = [];
    location.search
          .substr(1)
          .split("&")
          .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
          });
    return result;
}

var correct = findGetParameter('correct');
console.log("file: finishfemale.html ~ line 121 ~ correct", correct)
var pokemon = parseInt(findGetParameter('pokemon'));
console.log("file: finishfemale.html ~ line 123 ~ pokemon", pokemon)
var pokemonName = "";

(async () => {
    const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    const json = await res.json();

    console.log(json.results);

    document.getElementById("pokemon-image").src =
          getPokemonImage(pokemon);
    pokemonName = json.results[pokemon - 1].name;

    if(correct == 'false'){
          var text1 = "Oh no, it is " + pokemonName + ",";
          var text2 = "let's try next Pokemon!";
          document.getElementById("text1").innerHTML = text1;
          document.getElementById("text2").innerHTML = text2;
    }
    else{
          var text1 = "You got it! " + pokemonName + "!";
          var text2 = "I choose you!";
          document.getElementById("text1").innerHTML = text1;
          document.getElementById("text2").innerHTML = text2;

    }
})();

document.getElementById("numberOfPokemons").innerHTML = localStorage.getItem("pokemonNumber");
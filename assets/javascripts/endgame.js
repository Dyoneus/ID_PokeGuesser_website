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
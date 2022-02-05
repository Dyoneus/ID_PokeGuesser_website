(async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const json = await res.json();
  
    console.log(json.results);
  })();
  
  // Logs:
  [
    {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
    {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
    {name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
   // ...
  ]
  
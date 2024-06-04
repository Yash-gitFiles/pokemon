function fetchPokemon(loadPokemon) {
  let limit = loadPokemon + 20;
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const pokemonData = [];
      let data1 = data.results;
      for (let i = 0; i < data1.length; i++) {
        let results = fetch(data1[i].url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log(error);
          });
        pokemonData.push(results);
      }
      return Promise.all(pokemonData);
    })
    .catch((error) => {
      console.log(error);
    });

  return promise;
}

function searchPokemon(query) {
  const promise1 = fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
  return promise1;
}

function fetchAllPokemonsNames() {
  const promise = fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${1302}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  return promise;
}

function getPokemonType(types) {
  const url = types.map((value) => {
    return value.type.url;
  });
  const promiseArray = [];
  for (const value of url) {
    const promise = fetch(value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((data) => {
        return data;
      });
    promiseArray.push(promise);
  }
  return Promise.all(promiseArray);
}

export function getPokemonEvolution(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return fetch(data.evolution_chain.url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const name = getevolutionName(data.chain);
          const detail = getEvolutionDetails(name);
          return detail;
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}

function getevolutionName(chain) {
  let names = [];
  while (chain.evolves_to.length !== 0) {
    names.push(chain.species.name);
    chain = chain.evolves_to[0];
  }
  names.push(chain.species.name);
  return names;
}

function getEvolutionDetails(names) {
  const promiseArray = [];
  for (const name of names) {
    const promise = searchPokemon(name);
    promiseArray.push(promise);
  }
  return Promise.all(promiseArray);
}

export { fetchPokemon, searchPokemon, fetchAllPokemonsNames, getPokemonType };

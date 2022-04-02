import http from "./httpService";

const pokemonMethods = {
  getPokemons: "pokemon",
  getTypes: "type",
  getEvolutions: "evolution-chain",
};

async function getPokemons(limit, offset) {
  const { data } = await http.get(pokemonMethods.getPokemons, {
    params: { limit, offset },
  });
  return data;
}

async function getPokemonByName(name) {
  const url = `${pokemonMethods.getPokemons}/${name}`;
  const { data } = await http.get(url);
  return data;
}

async function getPokemonByType(type) {
  const url = `${pokemonMethods.getTypes}/${type.toLowerCase()}`;
  const { data } = await http.get(url);
  return data;
}

async function getTypes() {
  const { data } = await http.get(pokemonMethods.getTypes);
  return data;
}

async function getEvolutionsByPokemonId(id) {
  const url = `${pokemonMethods.getEvolutions}/${id}`;
  const arrToEvolution = [];
  const { data } = await http.get(url);
  const { chain } = data;
  if (chain.evolves_to.length) {
    const firstEvolution = chain.evolves_to[0];
    arrToEvolution.push(await getInfoEvolution(firstEvolution));
    if (firstEvolution.evolves_to.length) {
      const secondEvolution = firstEvolution.evolves_to[0];
      arrToEvolution.push(await getInfoEvolution(secondEvolution));
    }
  }

  return arrToEvolution;
}

async function getInfoEvolution(evolution) {
  const { name } = evolution.species;
  const img = await getImageByPokemon(name);
  return {
    name: name,
    img,
  };
}

async function getImageByPokemon(name) {
  const url = `${pokemonMethods.getPokemons}/${name}`;
  const { data } = await http.get(url);
  // const img = data.sprites.back_default;
  return data.sprites.back_default;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPokemons,
  getPokemonByName,
  getTypes,
  getPokemonByType,
  getEvolutionsByPokemonId,
};

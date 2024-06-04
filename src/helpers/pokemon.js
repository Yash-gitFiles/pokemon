export function getPokemonNumber(id) {
  return "#" + id.toString().padStart(4, "0");
}

export function getPokemonName(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

export function getPokemonImg(pokemon) {
  return pokemon.sprites.other["official-artwork"].front_default;
}

export function getPokemonAbilities(pokemon) {
  return pokemon.abilities.map((ability) => ability.ability.name).join(" , ");
}

export function getPersentage(stat) {
  return Math.round((stat * 100) / 255);
}

export function getBarHeight(stat) {
  const per = getPersentage(stat);
  return Math.round((per * 255) / 100);
}

export function pokemonWeakness(data) {
  let weakness = [];
  let strength = [];
  for (const value of data) {
    weakness.push(value.damage_relations.double_damage_from);
    strength.push(value.damage_relations.double_damage_to);
    strength.push({ name: value.name });
  }

  weakness = weakness.flat().map((value) => {
    return value.name;
  });

  strength = strength.flat().map((value) => {
    return value.name;
  });

  weakness = weakness.filter((value) => {
    return !strength.includes(value);
  });

  return weakness;
}

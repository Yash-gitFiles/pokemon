import React, { useEffect, useState } from "react";
// import styles from "../styles/home/pokemonDetails.module.css";
import { useParams } from "react-router-dom";
import { searchPokemon } from "../services/apiServices";
import Navigation from "../componet/home/pokemonDetails/Navigation";
import Title from "../componet/home/pokemonDetails/Title";
import InfoRow from "../componet/home/pokemonDetails/InfoRow";
import Stats from "../componet/home/pokemonDetails/stat/Stats";
// import Search from "../componet/home/pokemonDetails/Search";
// import PokmemonInnerSearch from "../componet/home/pokemonDetails/PokmemonInnerSearch";
import EvolutionRow from "../componet/home/pokemonDetails/evolution/EvolutionRow";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [detailsQuery, setDetailsQuery] = useState("");
  const [searchedInnerPokemon, setSearchedInnerPokemon] = useState(null);

  // const [allPokemons, setAllPokemons] = useState(null);
  // const [page, setPage] = useState(0);

  useEffect(() => {
    searchPokemon(params.id)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
    //   fetchAllPokemonsNames().then((data) => {
    //     const names = data.results.map((value) => {
    //       return {
    //         name: value.name,
    //         id: value.url
    //           .split("https://pokeapi.co/api/v2/pokemon/")[1]
    //           .split("/")[0],
    //       };
    //     });
    //     setAllPokemons(names);
    //   });
    // }, [page]);

    // const index = allPokemons.findIndex((value) => {
    //   value.name === params.name;
  }, [searchedInnerPokemon]);

  // const prevPokemon =
  //   index - 1 > 0
  //     ? allPokemons[index - 1]
  //     : allPokemons[allPokemons.length - 1];
  // const nextPokemon = index + 1;

  // allPokemons.findIndex((value) => {
  //   value.name === params.name;
  // }) + 1;

  if (!pokemon) return null;

  // console.log("searchedInnerPokemon", searchedInnerPokemon);

  return (
    <div>
      <Navigation pokemon={pokemon} setPokemon={setPokemon} />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
      <Stats pokemon={pokemon} />
      <EvolutionRow species={pokemon.species} />
    </div>
  );
}

export default PokemonDetails;

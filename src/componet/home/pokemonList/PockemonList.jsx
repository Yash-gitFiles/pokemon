import React, { useEffect, useState } from "react";
import PockemonCard from "./PockemonCard";
import styles from "../../../styles/home/pokemon.module.css";
import { fetchPokemon } from "../../../services/apiServices";
import Pagination from "./Pagination";

function PockemonList() {
  const [pokemon, setPokemon] = useState(null);
  const [loadPokemon, setLoadPokemon] = useState(0);

  useEffect(() => {
    fetchPokemon(loadPokemon)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loadPokemon]);

  if (!pokemon) return null;
  return (
    <>
      <div className={styles.pokemonListContainer}>
        {pokemon.map((value, index) => {
          return <PockemonCard key={index} pokemon={value} />;
        })}
      </div>
      <Pagination loadPokemon={loadPokemon} setLoadPokemon={setLoadPokemon} />
    </>
  );
}

export default PockemonList;

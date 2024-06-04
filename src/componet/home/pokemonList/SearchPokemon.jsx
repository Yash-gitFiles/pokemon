import React from "react";
import PockemonCard from "./PockemonCard";
import styles from "../../../styles/home/searchPokemon.module.css";

function SearchPokemon(props) {
  const { pokemon, setSearchedPokemon, setQuery } = props;

  function goBackBtn() {
    setQuery("");
    setSearchedPokemon(null);
  }

  return (
    <div className={styles.searchContainer}>
      <PockemonCard pokemon={pokemon} />
      <button className={styles.backBtn} onClick={goBackBtn}>
        Go Back
      </button>
    </div>
  );
}

export default SearchPokemon;

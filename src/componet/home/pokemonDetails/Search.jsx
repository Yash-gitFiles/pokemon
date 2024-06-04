import React from "react";
import { searchPokemon } from "../../../services/apiServices";
import styles from "../../../styles/pokemonDetails/searchPokemon.module.css";

function Search(props) {
  const {
    detailsQuery,
    setDetailsQuery,
    setSearchedInnerPokemon,
    searchedInnerPokemon,
  } = props;

  function handleSumbit(e) {
    setDetailsQuery(e.target.value);
  }

  console.log("detailsQuery", detailsQuery);
  console.log("searchedInnerPokemon", searchedInnerPokemon);
  function handleClick() {
    searchPokemon(detailsQuery)
      .then((data) => {
        setSearchedInnerPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // if (!searchedInnerPokemon) return null;
  return (
    <div className={styles.container}>
      <input type="text" onChange={handleSumbit} placeholder="Name Or Number" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default Search;

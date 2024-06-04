import React from "react";
import styles from "../../../styles/home/pagination.module.css";

function Pagination(props) {
  const { loadPokemon, setLoadPokemon } = props;

  function handleLoadPokemon() {
    setLoadPokemon(loadPokemon + 20);
  }

  function prevPokemon() {
    setLoadPokemon(loadPokemon - 20);
  }
  return (
    <div className={styles.container}>
      {loadPokemon > 20 && <button onClick={prevPokemon}>Prev Pokemon</button>}
      {loadPokemon < 1302 && (
        <button onClick={handleLoadPokemon}>Load More Pokemon</button>
      )}
    </div>
  );
}

export default Pagination;

import React from "react";
import styles from "../../../styles/pokemonDetails/navigation.module.css";
import { searchPokemon } from "../../../services/apiServices";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
  const { pokemon, setPokemon } = props;

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function previousBtn() {
    searchPokemon(pokemon.id - 1).then((data) => {
      setPokemon(data);
    });
  }

  function nextBtn() {
    searchPokemon(pokemon.id + 1).then((data) => {
      setPokemon(data);
    });
  }
  return (
    <div className={styles.container}>
      {pokemon.id > 1 && <button onClick={previousBtn}>Previous</button>}
      <button onClick={goBack}>Go Back</button>
      {pokemon.id < 1025 && <button onClick={nextBtn}>Next</button>}
    </div>
  );
}

export default Navigation;

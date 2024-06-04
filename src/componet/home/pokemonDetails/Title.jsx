import React from "react";
import styles from "../../../styles/pokemonDetails/title.module.css";
import { getPokemonName, getPokemonNumber } from "../../../helpers/pokemon";

function Title(props) {
  const { name, number } = props;
  return (
    <div className={styles.container}>
      <p className={styles.name}>{getPokemonName(name)}</p>
      <p className={styles.number}>{getPokemonNumber(number)}</p>
    </div>
  );
}

export default Title;

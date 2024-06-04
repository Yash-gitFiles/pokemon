import React from "react";
import styles from "../../../styles/home/pokemon.module.css";
import Tag from "../Tag";
import {
  getPokemonImg,
  getPokemonName,
  getPokemonNumber,
} from "../../../helpers/pokemon";
import { useNavigate } from "react-router-dom";

function PockemonCard(props) {
  const navigate = useNavigate();
  const { pokemon } = props;

  function pokemonDetails() {
    navigate(`pokemonDetails/${pokemon.id}`);
  }

  return (
    <div className={styles.container} onClick={pokemonDetails}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImg(pokemon)} />
      </div>
      <div className={styles.descContainer}>
        <p>{getPokemonNumber(pokemon.id)}</p>
        <p className={styles.pokemonName}>{getPokemonName(pokemon.name)}</p>
        <p className={styles.pokemonExp}>
          Base Experience : {pokemon["base_experience"]}  
        </p>
        <p className={styles.pokemonWeight}>Weight:{pokemon.weight}</p>
        <div className={styles.tagContainer}>
          {pokemon.types.map((value, index) => {
            return <Tag key={index} type={value.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PockemonCard;

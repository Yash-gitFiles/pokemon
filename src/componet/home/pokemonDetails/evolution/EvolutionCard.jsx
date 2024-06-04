import React from "react";
import styles from "../../../../styles/pokemonDetails/evolution/evolutionCard.module.css";
import Tag from "../../Tag";
import {
  getPokemonImg,
  getPokemonName,
  getPokemonNumber,
} from "../../../../helpers/pokemon";
import { useNavigate } from "react-router-dom";

function EvolutionCard(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/pokemonDetails/${data.name}`);
  }
  const { data } = props;
  console.log("data", data);
  if (!data) return null;
  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImg(data)} alt="" />
      </div>
      <div className={styles.descContainer}>
        <div className={styles.nameNumber}>
          <p>{getPokemonName(data.name)}</p>
          <p>{getPokemonNumber(data.id)}</p>
        </div>
        <div className={styles.tag}>
          {data.types.map((value, index) => {
            return <Tag key={index} type={value.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EvolutionCard;

import React, { useEffect, useState } from "react";
import EvolutionCard from "./EvolutionCard";
import styles from "../../../../styles/pokemonDetails/evolution/evolutionRow.module.css";
import { getPokemonEvolution } from "../../../../services/apiServices";

function EvolutionRow(props) {
  const { species } = props;

  const [evolution, setEvolution] = useState(null);
  useEffect(() => {
    getPokemonEvolution(species.url).then((data) => {
      setEvolution(data);
    });
  }, [species.url]);

  if (!evolution) return null;
  return (
    <div className={styles.rowContainer}>
      <p>Evolutions</p>
      <div className={styles.container}>
        {evolution.map((value, index) => {
          return <EvolutionCard key={index} data={value} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionRow;

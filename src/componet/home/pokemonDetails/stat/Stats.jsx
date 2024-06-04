import React, { useEffect, useState } from "react";
import StatGraph from "./StatGraph";
import styles from "../../../../styles/pokemonDetails/stats/stats.module.css";
import Tag from "../../Tag";
import { getPokemonType } from "../../../../services/apiServices";
import { pokemonWeakness } from "../../../../helpers/pokemon";

function Stats(props) {
  const { pokemon } = props;
  const [weakness, setWeakness] = useState(null);
  
  useEffect(() => {
    getPokemonType(pokemon.types).then((data) => {
      let weaknesData = pokemonWeakness(data);
      setWeakness(weaknesData);
    });
  }, [pokemon.types]);

  if (!weakness) return null;
  return (
    <div className={styles.statContainer}>
      <div>
        <StatGraph stats={pokemon.stats} />
      </div>
      <div className={styles.tagContainer}>
        <div>
          <h3>Type</h3>
          {pokemon.types.map((value, index) => {
            return <Tag key={index} type={value.type.name} />;
          })}
        </div>
        <div>
          <h3>Weaknesses</h3>
          {weakness.map((value, index) => {
            return <Tag key={index} type={value} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats;

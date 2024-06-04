import React from "react";
import styles from "../../../../styles/pokemonDetails/stats/statGraph.module.css";
import { getBarHeight, getPersentage } from "../../../../helpers/pokemon";

function StatGraph(props) {
  const { stats } = props;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {stats.map((value, index) => {
          return (
            <li key={index}>
              <div style={{ height: getBarHeight(value.base_stat) }}>
                <p>{getPersentage(value.base_stat)}%</p>
              </div>
              <p>{value.stat.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatGraph;

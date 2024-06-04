import React from "react";
import styles from "../../../styles/pokemonDetails/infoRow.module.css";
import { getPokemonAbilities, getPokemonImg } from "../../../helpers/pokemon";

function InfoRow(props) {
  const { pokemon } = props;

  if (!pokemon) return null;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImg(pokemon)} alt="" />
      </div>
      <div className={styles.descContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          ipsam incidunt nobis nulla expedita commodi error adipisci tenetur.
          Nisi repellendus adipisci libero fugiat, sint illum aspernatur
          perferendis quas dolorum repellat?
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  <p>Height</p>
                  <p>{pokemon.height}</p>
                </td>
                <td>
                  <p>Weight</p>
                  <p>{pokemon.weight}</p>
                </td>
                <td>
                  <p>Abilities</p>
                  <p>{getPokemonAbilities(pokemon)}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InfoRow;

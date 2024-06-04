import React from "react";
import styles from "../styles/layout/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchPokemon } from "../services/apiServices";

function Navbar(props) {
  const { query, setQuery, setSearchedPokemon } = props;

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearchedPokemon(null);
    }
  }

  function handleClick() {
    searchPokemon(query)
      .then((data) => {
        setSearchedPokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>Pokédex</p>
      </div>
      <div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name Or Number"
            onChange={handleChange}
            value={query}
          />
          <button className={styles.searchBtn} onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

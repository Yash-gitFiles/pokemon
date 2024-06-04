import React, { useState } from "react";
import PockemonList from "../componet/home/pokemonList/PockemonList";
import Navbar from "../layout/Navbar";
import SearchPokemon from "../componet/home/pokemonList/SearchPokemon";

function Home() {
  const [query, setQuery] = useState(null);
  const [searchedPokemon, setSearchedPokemon] = useState("");

  return (
    <div>
      <Navbar
        query={query}
        setQuery={setQuery}
        setSearchedPokemon={setSearchedPokemon}
      />
      {!searchedPokemon ? (
        <PockemonList />
      ) : (
        <SearchPokemon
          pokemon={searchedPokemon}
          setQuery={setQuery}
          setSearchedPokemon={setSearchedPokemon}
        />
      )}
    </div>
  );
}

export default Home;

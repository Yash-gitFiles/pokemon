import React from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import InfoRow from "./InfoRow";
import Stats from "./stat/Stats";
import Search from "./Search";

function PokmemonInnerSearch(props) {
  const { searchedInnerPokemon, setDetailsQuery, detailsQuery } = props;

  console.log("searchedInnerPokemon", searchedInnerPokemon);
  return (
    <div>
      <Search setDetailsQuery={setDetailsQuery} detailsQuery={detailsQuery} />
      <Navigation pokemon={searchedInnerPokemon} />
      <Title
        name={searchedInnerPokemon.name}
        number={searchedInnerPokemon.id}
      />
      <InfoRow pokemon={searchedInnerPokemon} />
      <Stats pokemon={searchedInnerPokemon} />
    </div>
  );
}

export default PokmemonInnerSearch;

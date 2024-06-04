import React from "react";
import PockemonCard from "./PockemonCard";
import PockemonList from "./PockemonList";

function ListCard() {
  return (
    <div>
      <PockemonList />
      <PockemonCard />
    </div>
  );
}

export default ListCard;

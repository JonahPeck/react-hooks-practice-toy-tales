import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ showForm, onRemoveListing, handleLike }) {

  const toyCards = showForm.map((toys) => (
    <ToyCard key={toys.id} showForm={toys} onRemoveListing={onRemoveListing} handleLike={handleLike} />
  ))
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;

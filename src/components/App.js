import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then(setShowForm);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleAddToy(newToy) {
    setShowForm([...showForm, newToy]);
  }
  function handleRemoveToy(id) {
    const newToyInfo = showForm.filter((showForm) =>
      showForm.id !== id);
    setShowForm(newToyInfo)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onRemoveListing={handleRemoveToy} showForm={showForm} />
    </>
  );
}

export default App;

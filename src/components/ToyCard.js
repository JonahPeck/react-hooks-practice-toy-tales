import React, { useState } from "react";

function ToyCard({ showForm, onRemoveListing }) {

  const { id, name, image, likes } = showForm;
  const [toyLikes, setToyLikes] = useState(likes)

  function handleLike() {
    const newLikes = { likes: toyLikes + 1 }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLikes)
    })
      .then((response) => response.json())
      .then(data => {
        setToyLikes(data.likes);
      })
      .catch(error => console.error(error))
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
    })
    onRemoveListing(id)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={image}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

import React from "react";

function ToyCard({ showForm, onRemoveListing }) {

  const { id, name, image, likes } = showForm;

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
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

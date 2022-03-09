import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GameCard({ game, isWatchlist, handleButtonClick }) {
  const { id, title, releaseDate, image, platform, price } = game;

  const handleAddClick = () => {
    fetch('http://localhost:3001/watchlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: game.id,
      }),
    }).then((r) => r.json());

    handleButtonClick(game.id);
  };

  const handleRemoveClick = () => {
    fetch(`http://localhost:3001/watchlist/${game.id}`, {
      method: 'DELETE',
    }).then((r) => r.json());

    handleButtonClick(game.id);
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{releaseDate}</p>
      <p>{platform}</p>
      <p>Price: {price}</p>
      <Link to={`/games/${id}`}>View details</Link>
      {isWatchlist ? (
        <button onClick={handleRemoveClick}>Remove</button>
      ) : (
        <button onClick={handleAddClick}>Add</button>
      )}
    </div>
  );
}

export default GameCard;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetails() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3001/games/${id}`)
      .then((r) => r.json())
      .then((game) => setGame(game));
  }, [id]);

  if (!game) return <h2>Loading game data...</h2>;

  const { title, genre, release_date, summary, image, platform, price } = game;

  return (
    <div>
      <div className="card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{genre}</p>
        <p>{release_date}</p>
        <p>{summary}</p>
        <p>{platform}</p>
        <p>Price: {price}</p>
      </div>
    </div>
  );
}

export default GameDetails;

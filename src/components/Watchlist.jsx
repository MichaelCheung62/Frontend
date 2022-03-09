import React, { useState, useEffect } from 'react';

import '../App.css';

import GameCard from './GameCard';

const Watchlist = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/watchlist')
      .then((r) => r.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      });
  }, []);

  const handleButtonClick = (gameId) => {
    const filteredGames = games.filter((game) => game.id !== gameId);
    setFilteredGames(filteredGames);
  };

  return (
    <div className="container">
      {filteredGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          isWatchlist={true}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

export default Watchlist;

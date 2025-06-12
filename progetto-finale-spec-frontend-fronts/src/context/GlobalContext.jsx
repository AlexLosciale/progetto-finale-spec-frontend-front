import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [likedGames, setLikedGames] = useState([]);

  const toggleLikeGame = (gameId) => {
    setLikedGames((prevLikedGames) => {
      if (prevLikedGames.includes(gameId)) {
        return prevLikedGames.filter(id => id !== gameId);
      }
      return [...prevLikedGames, gameId];
    });
  };

  return (
    <GlobalContext.Provider value={{ likedGames, toggleLikeGame }}>
      {children}
    </GlobalContext.Provider>
  );
}

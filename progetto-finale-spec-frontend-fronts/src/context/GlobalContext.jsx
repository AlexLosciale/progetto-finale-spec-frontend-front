import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [likedGames, setLikedGames] = useState(() => {
    const saved = localStorage.getItem('likedGames');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('likedGames', JSON.stringify(likedGames));
  }, [likedGames]);

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
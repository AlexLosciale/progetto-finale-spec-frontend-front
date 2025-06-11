import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/boardgames")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento");
        return res.json();
      })
      .then((data) => console.log(data) || setGames(data))
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Lista Giochi da Tavolo</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

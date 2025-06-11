import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Carosello from "../components/Carosello";

export default function HomePage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/boardgames")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      <Carosello games={games} />
      <h1 className="mb-5 text-center display-5 fw-semibold text-dark">
        Lista Giochi da Tavolo
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

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

      <form
        className="d-flex flex-column align-items-center gap-3 mb-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >

        <div className="d-flex w-100">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Cerca un gioco..."
            aria-label="Cerca un gioco"
          />
          <button type="submit" className="btn btn-primary">
            Cerca
          </button>
        </div>

        <div className="d-flex gap-2 w-100">
          <select className="form-select" aria-label="Filtra per categoria">
            <option value="">Tutte le categorie</option>
            <option value="Strategia">Strategia</option>
            <option value="Party Game">Party Game</option>
            <option value="Piazzamento Tessere">Piazzamento Tessere</option>
            <option value="Astratto">Astratto</option>
            <option value="Cooperativo">Cooperativo</option>
            <option value="Strategia Asimmetrica">Strategia Asimmetrica</option>
          </select>

          <select className="form-select" aria-label="Ordina per">
            <option value="popolarità">A-Z</option>
            <option value="data">Z-A</option>
          </select>
        </div>
      </form>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

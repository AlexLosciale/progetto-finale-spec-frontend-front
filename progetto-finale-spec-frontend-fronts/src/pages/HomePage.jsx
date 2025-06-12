import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Carosello from "../components/Carosello";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/boardgames")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento");
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setAllGames(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setGames(allGames);
      setErrorMessage("");
      return;
    }

    const filteredGames = allGames.filter((game) =>
      game.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (filteredGames.length === 0) {
      setErrorMessage("Nessun gioco trovato con questo nome.");
    } else {
      setErrorMessage("");
    }

    setGames(filteredGames);
  };

  return (
    <div className="container py-5">
      <Carosello games={allGames} />

      <h1 className="mb-5 text-center display-5 fw-semibold text-dark">
        Lista Giochi da Tavolo
      </h1>

      <form
        className="d-flex flex-column align-items-center gap-3 mb-4"
        style={{ maxWidth: "600px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <div className="d-flex w-100">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Cerca un gioco..."
            aria-label="Cerca un gioco"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Cerca
          </button>
        </div>

        {errorMessage && (
          <div className="alert alert-warning text-center w-100" role="alert">
            {errorMessage}
          </div>
        )}
      </form>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

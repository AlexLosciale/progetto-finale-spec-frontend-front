import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Carosello from "../components/Carosello";

export default function HomePage() {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("A-Z");

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

  const filterAndSortGames = () => {
    if (allGames.length === 0) return;
    let filtered = allGames;

    if (inputValue.trim() !== "") {
      filtered = filtered.filter((game) =>
        game.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    if (selectedCategory !== "") {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    if (filtered.length === 0) {
      setErrorMessage("Nessun gioco trovato con questi criteri.");
    } else {
      setErrorMessage("");
    }

    filtered.sort((a, b) => {
      if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
      else return b.title.localeCompare(a.title);
    });

    setGames(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterAndSortGames();
  };

  useEffect(() => {
    filterAndSortGames();
  }, [selectedCategory, sortOrder]);

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

        <div className="d-flex gap-2 w-100">
          <select
            className="form-select"
            aria-label="Filtra per categoria"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Tutte le categorie</option>
            <option value="Strategia">Strategia</option>
            <option value="Party Game">Party Game</option>
            <option value="Piazzamento Tessere">Piazzamento Tessere</option>
            <option value="Astratto">Astratto</option>
            <option value="Cooperativo">Cooperativo</option>
            <option value="Strategia Asimmetrica">Strategia Asimmetrica</option>
          </select>

          <select
            className="form-select"
            aria-label="Ordina per"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="A-Z">Z-A</option>
            <option value="Z-A">A-Z</option>
          </select>
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

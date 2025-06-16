import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Carosello from "../components/Carosello";
import Form from "../components/Form";
import GameComp from "../components/GameComp";

export default function HomePage() {
  const [games, setGames] = useState([]); // Stato per i giochi filtrati e ordinati
  const [allGames, setAllGames] = useState([]); // Stato per tutti i giochi caricati
  const [inputValue, setInputValue] = useState(""); // Stato per il valore dell'input di ricerca
  const [errorMessage, setErrorMessage] = useState(""); // Stato per i messaggi di errore
  const [selectedCategory, setSelectedCategory] = useState(""); // Stato per la categoria selezionata
  const [sortOrder, setSortOrder] = useState("A-Z"); // Stato per l'ordinamento (A-Z o Z-A)
  const [showAll, setShowAll] = useState(false); // Stato per mostrare tutti i giochi o solo i primi 9
  const [selectedGames, setSelectedGames] = useState([]); // Stato per i giochi selezionati per il confronto

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_API_URL + "/boardgames")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento");
        return res.json();
      })
      .then((data) => {
        setGames(data); //giochi che arrivano dal database
        setAllGames(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filterAndSortGames = () => { // Funzione per filtrare e ordinare i giochi
    if (allGames.length === 0) return;
    let filtered = allGames;

    if (inputValue.trim() !== "") { //vuoto
      filtered = filtered.filter((game) =>
        game.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    if (selectedCategory !== "") {  //categoria
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }

    if (filtered.length === 0) { //in caso di mancanza
      setErrorMessage("Nessun gioco trovato con questi criteri.");
    } else {
      setErrorMessage("");
    }

    filtered.sort((a, b) => { // Ordinamento
      if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
      else return b.title.localeCompare(a.title);
    });

    setGames(filtered); 
    setShowAll(false); 
  };

  const handleCheckboxChange = (game) => { //cambio di stato checkbox
    setSelectedGames((prev) => {
      if (prev.find((g) => g.id === game.id)) { 
        return prev.filter((g) => g.id !== game.id);
      }
      if (prev.length < 2) { 
        return [...prev, game];
      }
        return prev; 
      });
    };

  const handleSubmit = (e) => { 
    e.preventDefault(); // Previene il comportamento dei form
    filterAndSortGames();
  };

  useEffect(() => { 
    filterAndSortGames();
  }, [selectedCategory, sortOrder]);

  const gamesToShow = showAll ? games : games.slice(0, 9); //mostra solo i primi 9

  return (
    <div className="container py-5">

      <Carosello games={allGames} />

      <h1 className="mb-5 text-center display-5 fw-semibold text-dark">
        Lista Giochi da Tavolo
      </h1>

      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        errorMessage={errorMessage}
      />

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {gamesToShow.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {games.length > 9 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Chiudi <i className="bi bi-arrow-up ms-2"></i>
              </>
            ) : (
              <>
                Altro <i className="bi bi-arrow-down ms-2"></i>
              </>
            )}
          </button>
        </div>
      )}

      <div className="text-center my-5">
        <img
          src="/Sconto.png"
          alt="Banner sconto Fantasy Game"
          className="img-fluid rounded shadow"
          style={{
            width: "100%",
            maxWidth: "1200px",
            height: "auto",
          }}
        />
      </div>

      <div className="my-5">
        <GameComp
          allGames={allGames}
          selectedGames={selectedGames}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>

    </div>
  );
}

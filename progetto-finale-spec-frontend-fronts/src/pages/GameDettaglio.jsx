import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function GameDettaglio() {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/boardgames/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento");
        return res.json();
      })
      .then((data) => setGame(data.boardgame))
      .catch((err) => console.error(err));
  }, [id]);

  if (!game)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status" aria-hidden="true"></div>
        <span className="ms-2">Caricamento...</span>
      </div>
    );

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">{game.title}</h1>

        <div className="card shadow-sm rounded p-3" style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="d-flex">

                <img
                    src={game.imageUrl}
                    alt={game.title}
                    className="rounded me-4"
                    style={{ width: "250px", height: "250px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
                />

                <div className="flex-grow-1 d-flex flex-column justify-content-center">
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0 py-1">
                        <strong>Categoria:</strong> {game.category}
                    </li>
                    <li className="list-group-item px-0 py-1">
                        <strong>Giocatori:</strong> {game.minPlayers} - {game.maxPlayers}
                    </li>
                    <li className="list-group-item px-0 py-1">
                        <strong>Durata:</strong> {game.durationMinutes} min
                    </li>
                    <li className="list-group-item px-0 py-1">
                        <strong>Editore:</strong> {game.publisher}
                    </li>
                    <li className="list-group-item px-0 py-1">
                        <strong>Anno di uscita:</strong> {game.releaseYear}
                    </li>
                    <li className="list-group-item px-0 py-1">
                        <strong>Età consigliata:</strong> {game.ageRecommended}+
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

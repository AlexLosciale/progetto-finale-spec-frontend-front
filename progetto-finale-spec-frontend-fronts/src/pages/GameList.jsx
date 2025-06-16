import { useContext, useEffect, useState, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import GameCard from "../components/GameCard";

export default function GameList() {
  const { likedGames } = useContext(GlobalContext); // Ottieni i giochi preferiti dal contesto globale
  const [allGames, setAllGames] = useState([]); // Stato per tutti i giochi caricati
  const [loading, setLoading] = useState(true); // Stato per il caricamento dei giochi

  useEffect(() => {
    fetch("http://localhost:3001/boardgames")
      .then(res => {
        if (!res.ok) throw new Error("Errore caricamento giochi"); // Controllo dello stato della risposta
        return res.json();
      })
      .then(data => {
        setAllGames(data); 
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false); 
      });
  }, []);

  const favoriteGames = useMemo(() => { // Evita ricariche non necessari
    return likedGames.length > 0 ? allGames.filter(game => likedGames.includes(game.id)) : [];
  }, [likedGames, allGames]);

  if (loading) return <p>Caricamento giochi preferiti...</p>;

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Giochi Preferiti</h2>

      {favoriteGames.length === 0 ? (
        <p className="text-center text-muted">Nessun gioco preferito al momento.</p>
      ) : (
        <div className="row">
          {favoriteGames.map(game => (
            <div className="col-md-4" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}

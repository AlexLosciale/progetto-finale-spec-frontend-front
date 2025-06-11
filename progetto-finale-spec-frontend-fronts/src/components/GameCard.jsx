export default function GameCard({ game }) {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        {game.imageUrl && (
          <img src={game.imageUrl} className="card-img-top" alt={game.title} />
        )}
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">
            Categoria: {game.category} <br />
            Giocatori: {game.minPlayers} - {game.maxPlayers} <br />
            Durata: {game.durationMinutes} min
          </p>
        </div>
      </div>
    );
}
  
        
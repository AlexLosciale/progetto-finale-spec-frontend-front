export default function GameCard({ game }) {
    return (
      <div
        className="card m-3 rounded-4 shadow-sm"
        style={{ width: "18rem" }}
      >
        {game.imageUrl && (
          <img
            src={game.imageUrl}
            className="card-img-top rounded-top-4"
            alt={game.title}
            style={{
              height: "180px",
              objectFit: "contain",
              backgroundColor: "#f8f9fa"
            }}
          />
        )}
        <div className="card-body bg-light rounded-bottom-4">
          <h5 className="card-title fw-bold text-primary">{game.title}</h5>
          <p className="card-text text-muted small">
            <strong>Categoria:</strong> {game.category} <br />
            <strong>Giocatori:</strong> {game.minPlayers} - {game.maxPlayers} <br />
            <strong>Durata:</strong> {game.durationMinutes} min
          </p>
        </div>
      </div>
    );
  }
  
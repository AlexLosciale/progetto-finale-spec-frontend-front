import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function GameCard({ game }) {
  return (
    <Link 
      to={`/boardgames/${game.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
      className="game-card-link"
    >
      <div
        className="card m-3 rounded-4 shadow-sm"
        style={{
          width: "18rem",
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="position-relative">
          {game.imageUrl && (
            <img
              src={game.imageUrl}
              className="card-img-top rounded-top-4"
              alt={game.title}
              style={{
                height: "180px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
                paddingTop: "8px"
              }}
            />
          )}
          <i
            className="bi bi-heart position-absolute text-secondary d-flex justify-content-center align-items-center"
            style={{
              top: "12px",
              right: "10px",
              width: "30px",
              height: "30px",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              fontSize: "1rem"
            }}
          ></i>
        </div>

        <div className="card-body bg-light rounded-bottom-4">
          <h5 className="card-title fw-bold text-primary">{game.title}</h5>
          <p className="card-text text-muted small">
            <strong>Categoria:</strong> {game.category} <br />
            <strong>Giocatori:</strong> {game.minPlayers} - {game.maxPlayers} <br />
            <strong>Durata:</strong> {game.durationMinutes} min
          </p>
        </div>
      </div>

      <style>
        {`
          .game-card-link:hover .card {
            transform: scale(1.05);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
        `}
      </style>
    </Link>
  );
}

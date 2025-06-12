export default function Carosello({ games }) {
    if (!games || games.length === 0) return null;
  
    return (
      <div className="mb-5">
        <h2 className="mb-5 text-center display-5 fw-semibold">
          Ultimi Giochi da Tavolo
        </h2>
  
        <div
          id="carouselExampleCaptions"
          className="carousel slide rounded-4 overflow-hidden shadow"
          data-bs-ride="carousel"
          style={{ backgroundColor: "#eeecec" }}
        >
          <div className="carousel-indicators">
            {games.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
  
          <div className="carousel-inner">
            {games.map((game, index) => (
              <div
                key={game.id}
                className={`carousel-item${index === 0 ? " active" : ""}`}
              >
                <div
                  style={{
                    height: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={game.imageUrl}
                    alt={game.title}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5 className="fw-bold">{game.title}</h5>
                  <p className="mb-0">
                    {game.category} — {game.publisher}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  
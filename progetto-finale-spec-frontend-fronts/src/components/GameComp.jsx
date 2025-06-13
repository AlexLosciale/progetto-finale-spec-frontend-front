export default function GameComp({ allGames, selectedGames, handleCheckboxChange }) {
    return (
      <div className="container mt-5">
        <h1
          className="mb-6 text-center display-5 fw-semibold text-dark"
          style={{ marginBottom: '5rem' }}
        >
          Lista Giochi da Comparare
        </h1>
  
        <ul
          className="list-unstyled game-grid mb-5"
          style={{
            display: 'grid',
            gridTemplateRows: 'repeat(4, auto)',
            gridAutoFlow: 'column',
            gap: '1.5rem 2rem',
          }}
        >
          {allGames.map((game) => (
            <li
              key={game.id}
              className="d-flex justify-content-between align-items-center border p-2 rounded shadow-sm"
            >
              <span >{game.title}</span>
              <input
                type="checkbox"
                name="compara"
                checked={!!selectedGames.find((g) => g.id === game.id)}
                onChange={() => handleCheckboxChange(game)}
                disabled={
                  selectedGames.length >= 2 &&
                  !selectedGames.find((g) => g.id === game.id)
                }
              />
            </li>
          ))}
        </ul>
  
        <div className="row mb-5">
          {[0, 1].map((index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="border p-4 rounded bg-light shadow-sm">
                <h2 className="mb-4 text-center display-6 fw-semibold text-dark">
                  GIOCO {index + 1}
                </h2>
                {selectedGames[index] ? (
                  <>
                    <h4 className="text-primary card-title fw-bold">{selectedGames[index].title}</h4>
                    <ul className="list-group list-group-flush w-100 mt-3">
                      <li className="list-group-item px-0 py-1">
                        <strong>Categoria:</strong> {selectedGames[index].category}
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Giocatori:</strong>{" "}
                        {selectedGames[index].minPlayers} - {selectedGames[index].maxPlayers}
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Durata:</strong> {selectedGames[index].durationMinutes} min
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Editore:</strong> {selectedGames[index].publisher}
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Anno di uscita:</strong> {selectedGames[index].releaseYear}
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Età consigliata:</strong> {selectedGames[index].ageRecommended}+
                      </li>
                      <li className="list-group-item px-0 py-1">
                        <strong>Descrizione:</strong> {selectedGames[index].description}
                      </li>
                    </ul>
                  </>
                ) : (
                  <p className="text-muted text-center">Nessun gioco selezionato</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
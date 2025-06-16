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
        {allGames.map((game) => {
          const { id, title } = game;
          return (
            <li
              key={id}
              className="d-flex justify-content-between align-items-center border p-2 rounded shadow-sm"
            >
              <span>{title}</span>
              <input
                type="checkbox"
                name="compara"
                checked={!!selectedGames.find((g) => g.id === id)}
                onChange={() => handleCheckboxChange(game)}
                disabled={
                  selectedGames.length >= 2 &&
                  !selectedGames.find((g) => g.id === id)
                }
              />
            </li>
          );
        })}
      </ul>

      {selectedGames.length > 0 && (
        <div className="row mb-5">
          {selectedGames.map((game, index) => {
            const {
              title,
              category,
              minPlayers,
              maxPlayers,
              durationMinutes,
              publisher,
              releaseYear,
              ageRecommended,
              description,
            } = game; // destrutturazione dell'oggetto game (ricordati di dirlo)

            return (
              <div className="col-md-6 mb-4" key={index}>
                <div className="border p-4 rounded bg-light shadow-sm">
                  <h2 className="mb-4 text-center display-6 fw-semibold text-dark">
                    GIOCO {index + 1}
                  </h2>

                  <h4 className="text-primary card-title fw-bold">{title}</h4>
                  <ul className="list-group list-group-flush w-100 mt-3">
                    <li className="list-group-item px-0 py-1">
                      <strong>Categoria:</strong> {category}
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Giocatori:</strong> {minPlayers} - {maxPlayers}
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Durata:</strong> {durationMinutes} min
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Editore:</strong> {publisher}
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Anno di uscita:</strong> {releaseYear}
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Età consigliata:</strong> {ageRecommended}+
                    </li>
                    <li className="list-group-item px-0 py-1">
                      <strong>Descrizione:</strong> {description}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

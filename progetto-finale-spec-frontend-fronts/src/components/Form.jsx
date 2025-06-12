export default function Form({
  handleSubmit,
  inputValue,
  setInputValue,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  errorMessage,
}) {
  return (
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
  );
}
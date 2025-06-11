export default function Footer() {
    return (
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1 fw-semibold">
            &copy; {new Date().getFullYear()} <span className="text-warning">FantasyGame</span>
          </p>
          <p className="mb-0 small text-secondary">
            Progetto finale realizzato per il Corso di Front-End Development.
          </p>
        </div>
      </footer>
    );
  }
  
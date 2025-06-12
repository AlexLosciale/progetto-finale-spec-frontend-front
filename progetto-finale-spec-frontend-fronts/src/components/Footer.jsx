export default function Footer() {
  return (
    <footer className="text-light py-4 mt-5 bg-dark">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          <div className="col-md-4 mb-3 mb-md-0">
            <p className="mb-1 fw-semibold">
              &copy; {new Date().getFullYear()} <span className="text-primary">FantasyGame</span>
            </p>
            <p className="mb-0 small text-secondary">
              Progetto finale realizzato per il Corso di Front-End Development.
            </p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <p className="fw-semibold mb-2">Contatti</p>
            <p className="mb-1 small">
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:info@fantasygame.com" className="text-light text-decoration-none">info@fantasygame.com</a>
            </p>
            <p className="mb-0 small">
              <i className="bi bi-telephone me-2"></i>
              <a href="tel:+390123456789" className="text-light text-decoration-none">+39 012 345 6789</a>
            </p>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="fw-semibold mb-2">Seguici su</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3 link-primary"
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3 link-primary"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-light me-3 link-primary"
            >
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-light link-primary"
            >
              <i className="bi bi-facebook fs-5"></i>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

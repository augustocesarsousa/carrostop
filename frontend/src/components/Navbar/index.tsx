import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="carrostop-navbar">
          <ul className="navbar-nav offset-md-4 main-menu">
            <li>
              <a href="link" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="link">Catálogo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

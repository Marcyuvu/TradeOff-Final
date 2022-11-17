import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/index.css';

function MenuL() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i>
              TRADE OFF
            </i>

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Trade Off</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 text-center">
                <li class="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/HomeL" href="#">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/perfil" href="#">Perfil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/CursosL" href="#">Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Miscursos" href="#">Mis Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" href="#">Cerrar Sesión</Link>
                </li>

              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="¿Qué quieres aprender" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <div className="container p-3">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="¿Qué quieres aprender?" aria-label="Search" />
          <button className="btn btn-primary btn-primary-outline-success" type="submit">Buscar</button>
        </form>
      </div>

    </div>
  );
}

export default MenuL;
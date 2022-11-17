import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/index.css';
import cursito from '../imagenes/cursito.jpeg';
function Menu() {
  return (
    <div className='header'>
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
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" href="#">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/cursos" href="#">Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/login" href="#">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/registro" href="#">Registrarse</Link>
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
      <div className="container" style={{ backgroundColor: "#E9D5F7" }}>
        <div className="p-3">
          <div className="container">
            <div className="row">
              <img src={cursito} alt="cursito" className='mx-auto' style={{ maxWidth: "500px" }} />

            </div>

          </div>

        </div>

      </div>
      <h1 className='text fw-bold text-center'>
        ¡INICIA TU CURSO CON LOS MEJORES!
      </h1>
      <p className='text-center'>
        <b>20,6%</b> de la población colombiana sé quedó sin estudiar en el trimestre móvil de noviembre de 2021 a enero de 2022. NO PIERDAS ESTA OPORTUNIDAD PARA APRENDER!
      </p>
      <p className='text-center'>
        Invertimos en tu educación para que despegues en tu carrera. Estudia con nuestros cursos de forma remota e intensiva.
      </p>
    </div>

  );
}

export default Menu;
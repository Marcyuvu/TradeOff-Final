import React from 'react';
import logo from '../imagenes/logo.png';

function Iniciosesion() {
  return (
    <div className="container">
      <div className='row'>
        <img src={logo} alt="logo" className='mx-auto' style={{ maxWidth: "500px" }} />
        <div className="container pb-5">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <br />
            <div className="card">
              <div className="card-header">
                Iniciar Sesión
              </div>
              <br />
              <div>
                <select className="form-select py-2" aria-label="Default select example">
                  <option selected>Seleccionar tipo de perfil</option>
                  <option value="1">Estudiante</option>
                  <option value="2">Docente</option>
                </select>
              </div>
              <div className="card-body">
                <form action="/HomeL" method="get">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Escribir Correo electrónico</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Recordar mis datos</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </form>

              </div>
            </div>



          </div>
        </div>


      </div>
    </div>
  );
}

export default Iniciosesion;
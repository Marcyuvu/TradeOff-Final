import React from 'react';
import logo from '../imagenes/logo.png';
import { Link } from 'react-router-dom';
function Portada() {
   return (
      <div className="container">
         <div className='row'>
            <img src={logo} alt="logo" className='mx-auto' style={{ maxWidth: "500px" }} />
            <div className="container">
               <div className="mx-auto">
                  <p className='text center'>¿LISTO PARA ESTUDIAR?
                     Elige entre los más de 700 cursos disponibles para empezar tu educación de manera profesional y didáctica</p>
               </div>
            </div>
            <Link to="/Registro">
               <div class="d-grid gap-2 col-6 mx-auto pb-3">
                  <button class="btn btn-primary btn-primary-outline-success" type="button">Aplica Ya</button>
               </div>
            </Link>
            <Link to="/Login">
               <div class="d-grid gap-2 col-6 mx-auto pb-3">
                  <button class="btn btn-primary btn-primary-outline-success" type="button">Inicar Sesión</button>
               </div>
            </Link>
         </div>
      </div>
   );
}

export default Portada;
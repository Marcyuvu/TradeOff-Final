import React from 'react';

function Register() {
  return (
    <div className="container">
      <div className='row'>
        <div className="mx-auto text-center"></div>

        <div className="container pb-5">
          <div className="mx-auto" style={{ maxWidth: "500px" }}>
            <div className="text-center">
              <h1 className='text-center'>Registrate</h1>
              <p className='text-center'>Aprende de manera profesional y didáctica con cursos de las mejores universidades</p>
            </div>

            <div class="card">
              <div class="card-header">
                Registro de nuevo usuario
              </div>
              <br />
              <div>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Seleccionar tipo de perfil</option>
                  <option value="1">Estudiante</option>
                  <option value="2">Docente</option>
                </select>
              </div>
              <form class="row g-3" action='HomeL' method='get'>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label"><b>Correo electrónico</b></label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label"><b>Contraseña</b></label>
                  <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label"><b>Documento</b></label>
                  <select id="inputState" class="form-select">
                    <option selected>Seleccionar</option>
                    <option>Cédula de ciudadanía</option>
                    <option>Cédula de extranjería</option>
                    <option>Pasaporte</option>
                    <option>Registro civil</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="nputAddress2" class="form-label"><b>Ingrese número de documento</b></label>
                  <input type="number" class="form-control" id="nputAddress2" />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label"><b>Nombre</b></label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Ingresar nombre"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label"><b>Apellidos</b></label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Ingresar apellidos"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label"><b>Teléfono</b></label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Ingresar número de teléfono" />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label"><b>Localidad</b></label>
                  <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label"><b>Departamento</b></label>
                  <select id="inputState" class="form-select">
                    <option selected>Seleccionar</option>
                    <option>Amazonas</option>
                    <option>Antioquia</option>
                    <option>Arauca</option>
                    <option>Atlántico</option>
                    <option>Bolívar</option>
                    <option>Boyacá</option>
                    <option>Caldas</option>
                    <option>Caquetá</option>
                    <option>Casanare</option>
                    <option>Cauca</option>
                    <option>Cesar</option>
                    <option>Chocó</option>
                    <option>Córdoba</option>
                    <option>Cundinamarca</option>
                    <option>Guainía</option>
                    <option>Guaviare</option>
                    <option>Huila</option>
                    <option>La Guajira</option>
                    <option>Magdalena</option>
                    <option>Meta</option>
                    <option>Nariño</option>
                    <option>Norte de Santander</option>
                    <option>Putumayo</option>
                    <option>Quindío</option>
                    <option>Risaralda</option>
                    <option>San Andrés y Providencia</option>
                    <option>Santander</option>
                    <option>Sucre</option>
                    <option>Tolima</option>
                    <option>Valle del Cauca</option>
                    <option>Vaupés</option>
                    <option>Vichada</option>
                  </select>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Registrarme</button>
                </div>
              </form>
                

              </div>
            </div>



          </div>
        </div>


      </div>
   
  );
}

export default Register;
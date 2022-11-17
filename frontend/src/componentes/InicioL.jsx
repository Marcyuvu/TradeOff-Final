import React from "react";
import { Link } from 'react-router-dom';

import '../estilos/index.css';
import curso1 from '../imagenes/python.jpg';
import curso2 from '../imagenes/videojuegos.jpg';
import curso3 from '../imagenes/diseño.jpg';
import curso4 from '../imagenes/criptomonedas.jpg';
import curso5 from '../imagenes/base de datos.jpg';
import curso6 from '../imagenes/trading.jpg';
import curso7 from '../imagenes/economia.jpg';
import curso8 from '../imagenes/ventas.jpg';
import curso9 from '../imagenes/derechos.jpg';
import udea from '../imagenes/udea.jpg';
import unal from '../imagenes/unal.jpg';
import upb from '../imagenes/upb.JPG';
import pascual from '../imagenes/pascual.jpg';
function InicioL() {
  return (
    <div className="container navbar-expand-lg bg-light" style={{ backgroundColor: "#E9D5F7" }}>
      <div className="p-3">

        <h1 className='encabezado text-center text fw-bold'>
          Hola de nuevo, hoy es un gran día para aprender!
          <h2 className='text-center text fw-bold'>Revisa nuestras novedades</h2>
        </h1>
        <div className="card-group">
          <div className="card">
            <img src={curso1} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Python</h5>
              <p className="card-text">En este curso de Python aprenderás de forma práctica los conceptos básicos, las mejores técnicas, así como las librerías más populares y herramientas necesarias para programar de forma eficiente con este lenguaje de programación.</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>
            </div>

          </div>
          <div className="card">
            <img src={curso2} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Desarrollo de Videojuegos</h5>
              <p className="card-text">Desarrolla tu talento como profesional de la industria del Videojuego, durante el curso desarrollarás el perfil de Game Developer y Game Designer aprendiendo a manejar los motores de desarrollo de videojuegos</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>

            </div>

          </div>
          <div className="card">
            <img src={curso3} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Diseño Gráfico</h5>
              <p className="card-text">En este curso de diseño gráfico aprenderás los fundamentos del dibujo y sus aplicaciones en el diseño digital, para llevar a cabo la proyección de comunicaciones visuales dirigidos a la transmisión de mensajes</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>


            </div>

          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img src={curso4} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Criptomonedas</h5>
              <p className="card-text">Únete a millones de estudiantes de todo el mundo que se están formando con Binance Academy. Esto no es una asesoría de inversión. Toda actividad de trading conlleva riesgos.</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>
            </div>

          </div>
          <div className="card">
            <img src={curso5} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Base de Datos</h5>
              <p className="card-text">Aprende cómo trabajar con datos dentro de una organización digital y marca la diferencia. Incorpora metodologías y herramientas de trabajo para aprovechar al máximo los datos.</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>

            </div>

          </div>
          <div className="card">
            <img src={curso6} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Curso de Trading</h5>
              <p className="card-text">Únete a millones de estudiantes de todo el mundo que se están formando con TRADE OFF. Esto no es una asesoría de inversión. Toda actividad de trading conlleva riesgos.</p>
              <div className="card-body text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

              </div>


            </div>

          </div>
          <div className="card-group">
            <div className="card">
              <img src={curso7} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curso de Economía</h5>
                <p className="card-text">El Diplomado en Economía Política pretende dotar a los participantes de herramientas económicas, políticas y jurídicas liberales para la comprensión del entorno social y los retos del sector empresarial de cara al contexto social y político de la región</p>
                <div className="card-body text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

                </div>
              </div>

            </div>
            <div className="card">
              <img src={curso8} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curso de Ventas</h5>
                <p className="card-text">Con el Master en Ventas y Marketing aprenderás cómo planificar estrategias de ventas mediante la utilización del Marketing 4.0, combinando los canales offline y online, de este modo, mejorar la relación entre marca y cliente de manera directa. </p>
                <div className="card-body text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

                </div>

              </div>

            </div>
            <div className="card">
              <img src={curso9} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Curso de Derechos</h5>
                <p className="card-text">Especialízate con Trade Off en Derechos Humanos y Derecho Internacional Humanitario y aumenta tu capacitación para trabajar en las comunidades más necesitadas y luchar para que se cumplan los derechos humanos indispensables </p>
                <div className="card-body text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" /><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" /></svg><p><small>YA DISPONIBLE</small></p>

                </div>


              </div>

            </div>
          </div>

        </div>



      </div>
      <h2 className='text-center text fw-bold'>Trabajamos con las mejores universidades</h2>
      <div className="container" id="universidad">
        <div className="row">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={udea} class="d-block w-100 img-fluid" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={unal} class="d-block w-100 img-fluid" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={upb} class="d-block w-100 img-fluid" alt="..." />
              </div>
              <div class="carousel-item active">
                <img src={pascual} class="d-block w-100 img-fluid" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>
      <div className="card-body">
        <div className="card">
          <div className="card-header encabezado">
            <small>Técnico | Universidad Nacional</small>
          </div>
          <div className="card-header encabezado">
            <h5 className="card-title">Curso de Python</h5>
            <div className="progress">
              <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>
            <p class="card-text">Progreso del curso</p>
            <hr />
            <Link href="#" className="btn btn-primary">Continuar el curso</Link>
          </div>


        </div>
      </div>
    </div>

  );




}
export default InicioL;
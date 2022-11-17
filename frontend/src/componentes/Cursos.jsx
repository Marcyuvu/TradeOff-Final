import React from 'react';

import { FaUniversity } from 'react-icons/fa';
import Curso from '../imagenes/programacion.jpg';
import Cursouno from '../imagenes/neg.jpg';
import Cursodos from '../imagenes/tendencias.jpg';
import Cursotres from '../imagenes/administracion.jpg';
import Cursocuatro from '../imagenes/ingles.jpg';
import Cursocinco from '../imagenes/excel.png';
import Cursoseis from '../imagenes/gastronomia.jpg';
import Cursosiete from '../imagenes/agricultura.jpg';
import Cursoocho from '../imagenes/biologia.jpg';
import Cursonueve from '../imagenes/finanzas.jpg';
import Cursodiez from '../imagenes/sql.jpg';
import Cursoonce from '../imagenes/edicion.jpg';



function CursosH() {
  return (
    <div className="container pt-3">
      <h2 className='text-center'>PROGRAMAS EN TENDENCIA</h2>
      <div className="card-group">
        <div className="card">
          <img src={Curso} class="card-img-top" alt="..." />
          <div className="card-body">
            <p><small> <FaUniversity />Universidad Nacional</small></p>
            <h5 className="card-title"><b>Curso de Programación</b></h5>
            <p className="card-text">Conviértete en un Desarrollador Web Full Stack o Data Scientist a remoto de manera intensiva y didactica, adquiriendo los mejores conocimientos de este mercado</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            5.0 Rating

          </div>

        </div>
        <div className="card">
          <img src={Cursouno} class="card-img-top" alt="..." />
          <div className="card-body">
            <p><small> <FaUniversity />UdeA</small></p>
            <h5 className="card-title"><b>Negocios Internacionales</b></h5>
            <p className="card-text">El profesional en Negocios Internacional les estará en capacidad de administrar las organizaciones dentro de un contexto de globalización o una empresa</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            3.8 Rating

          </div>

        </div>
        <div class="card">
          <img src={Cursodos} class="card-img-top" alt="..." />
          <div class="card-body">
            <p><small> <FaUniversity />UPB</small></p>
            <h5 class="card-title"><b>Marketing Digital</b></h5>
            <p class="card-text">Adquiere las habilidades del futuro y crece en el mercado digital con nuestro curso para profesionales con habilidades para el marketing</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            4.5 Rating

          </div>

        </div>
        <div class="card">
          <img src={Cursotres} class="card-img-top" alt="..." />
          <div class="card-body">
            <p><small> <FaUniversity />UPB</small></p>
            <h5 class="card-title"><b>Administración de Empresas</b></h5>
            <p class="card-text">El pregrado virtual en Administración de Empresas te ayudará a desarrollar tus capacidades en las actividades, procesos y gestiones de recursos humanos, financieros</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            5.0 Rating

          </div>

        </div>
        <br />
        <div class="card">
          <img src={Cursocuatro} class="card-img-top" alt="..." />
          <div class="card-body">
            <p><small> <FaUniversity />UPB</small></p>
            <h5 class="card-title"><b>Curso básico de Idiomas</b></h5>
            <p class="card-text">Aprende inglés con nuestros cursos
              ¡más de 100 lecciones con ejemplos de pronunciación y escucha!
              (Podrás elegir pronunciación británica o americana)</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            4.8 Rating

          </div>

        </div>
        <div class="card">
          <img src={Cursocinco} class="card-img-top" alt="..." />
          <div class="card-body">
            <p><small> <FaUniversity />UPB</small></p>
            <h5 class="card-title"><b>Curso completo de Excel</b></h5>
            <p class="card-text">En Trade Off transformarás modelos de información desde diferentes orígenes para realizar reportes, informes y cuadros de mando a través de presentaciones.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            4.0 Rating

          </div>

        </div>
        


      </div>
      <div className="container pt-3">
        <div className="card-group">
          <div class="card">
            <img src={Cursoseis} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso de Gastronomia</b></h5>
              <p class="card-text">Los sueños también necesitan fuego. En Trade Off ponemos el fogón en alto para que aprendas a cocinar ¡Estudia Gastronomía con los Mejores!</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              3.0 Rating

            </div>

          </div>
          <div class="card">
            <img src={Cursosiete} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso de Agricultura</b></h5>
              <p class="card-text">¿Quieres plantar tu propio huerto orgánico? Entonces esta capacitación es para ti. Aprende Acerca De Los Secretos De La Huerta</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              3.2 Rating

            </div>

          </div>
          <div class="card">
            <img src={Cursoocho} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso de Biología</b></h5>
              <p class="card-text">En Nuestro programa de Biología conoce los fundamentos básicos y aplicados de la biología. Inscríbete ahora en Trade Off y se un profesional</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              3.7 Rating

            </div>

          </div>
          <div class="card">
            <img src={Cursonueve} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso de Finanzas</b></h5>
              <p class="card-text">forma profesionales con visión sistémica, capaces de dirigir una organización. Crea metodologías innovadoras que fijen el camino a seguir</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              4.5 Rating

            </div>

          </div>
          <div class="card">
            <img src={Cursodiez} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso completo de SQL</b></h5>
              <p class="card-text">Facilita la Configuración, el Mantenimiento y la Administración de Datos con SQL. ¡Prueba! Y Descubre nuevas habilidades</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              4.8 Rating

            </div>

          </div>
          <div class="card">
            <img src={Cursoonce} class="card-img-top" alt="..." />
            <div class="card-body">
              <p><small> <FaUniversity />UPB</small></p>
              <h5 class="card-title"><b>Curso de Edición Y Audio</b></h5>
              <p class="card-text">Aprende a usar Adobe Premiere con instructores altamente calificados. Únete a millones de estudiante alrededor del mundo que ya están iniciando</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FAE832" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              3.9 Rating

            </div>

          </div>


        </div>

      </div>
     

    </div>
    
  );
}
export default CursosH;
import React from "react";
//import { Link } from 'react-router-dom';
import '../estilos/index.css';
//import { Link } from "react-router-dom";
//Iconos
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <div className="container">
      <div className="row">
        <section className="vh-100" style={{ backgroundColor: "#E9D5F7" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderradius: ".5rem" }}>
                  <div className="row g-0">
                    <div className="col-md-4 gradient-custom text-center text-black"
                      style={{ bordertoplefradius: ".5rem", borderbottomleftradius: ".5rem" }}>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                      <h5>Mariana Jaramillo</h5>
                      <p>Desarrolladora web</p>
                      <i className="far fa-edit mb-5"></i>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Información</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Correo</h6>
                            <p className="text-muted">info@example.com</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Teléfono</h6>
                            <p className="text-muted">123 456 789</p>
                          </div>
                        </div>
                        <h6>Proyectos</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>Recientes</h6>
                            <p className="text-muted">Curso de Python</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Más visto</h6>
                            <p className="text-muted">Curso de Desarrollo de Videojuegos</p>
                          </div>
                        </div>
                        <div className="card mb-4 mb-lg-0">
                          <div className="card-body p-0">
                            <ul className="list-group list-group-flush rounded-3">
                              <li className="list-group-item d-flex justify-content-between align-items-center p-3">

                                <RiGlobalFill />
                                <p className="mb-0">https://mdbootstrap.com</p>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <BsGithub />
                                <p className="mb-0">GitHub</p>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <IoLogoTwitter style={{ color: "#55acee" }} />
                                <p className="mb-0">@Twitter</p>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <BsInstagram style={{ color: "#ac2bac" }} />
                                <p className="mb-0">mdbootstrap</p>
                              </li>
                              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                <BsFacebook style={{ color: "#3b5998" }} />
                                <p className="mb-0">mdbootstrap</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="container navbar-expand-lg bg-light">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card mb-4 mb-md-0 list-group-item d-flex justify-content-between align-items-center p-3">
                                <div className="card-body">
                                  <p className="mb-4"><span className="text-primary font-italic me-1">Progreso</span> Mis Proyectos</p>
                                  <p className="mb-1" style={{ fontsize: ".77rem" }}>Curso Python</p>
                                  <div className="progress rounded" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%", ariavaluenow: "80" }}
                                      aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>Desarrollo de Videojuegos</p>
                                  <div className="progress rounded" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "72%", ariavaluenow: "72" }}
                                      aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>Economía</p>
                                  <div className="progress rounded" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "89%", ariavaluenow: "89" }}
                                      aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>Base de Datos</p>
                                  <div className="progress rounded" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "55%", ariavaluenow: "55" }}
                                      aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                  <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>Gastronomia</p>
                                  <div className="progress rounded mb-2" style={{ height: "5px" }}>
                                    <div className="progress-bar" role="progressbar" style={{ width: "66%", ariavaluenow: "66" }}
                                      aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>




      </div>
    </div>




  );
}
export default Profile;
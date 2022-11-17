import React from "react";
import MenuL from '../componentes/MenuL';
import MisCursos from '../componentes/Miscursos';
import Piedepagina from '../componentes/Piedepagina';

function Miscursos() {
               return (
                              <div className="Miscursos">
                                             <MenuL />
                                             <MisCursos />
                                             <Piedepagina />
                              </div>
               );
}

export default Miscursos;
import React from "react";
import MenuL from '../componentes/MenuL';
import InicioL from '../componentes/InicioL';
import Piedepagina from '../componentes/Piedepagina';


function HomeL() {
               return (
                              <div className="InicioL">
                                             <MenuL />
                                             <InicioL />
                                             <Piedepagina />
                              </div>
               );
}

export default HomeL;
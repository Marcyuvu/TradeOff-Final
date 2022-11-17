import React from 'react';
import Menu from '../componentes/Menu';
import Iniciosesion from '../componentes/Login';
               
function Login() {
               return (
                              <div className='Login'>
                              <Menu />
                              <Iniciosesion/>
                              </div>
               );
}
export default Login;
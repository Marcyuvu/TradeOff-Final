import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Cursos from './paginas/Cursos';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import HomeL from './paginas/HomeL';
import Miscursos from './paginas/Miscursos';
import Perfil from './paginas/Perfil';
import CursosL from './paginas/CursosL';

function App() {
  return (
  <Router>
  <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/Cursos' element={<Cursos/>} />
        <Route exact path='/Login' element={<Login/>} />
        <Route exact path='/Registro' element={<Registro />} />
        <Route exact path='/HomeL' element={<HomeL />} />
        <Route exact path='/Miscursos' element={<Miscursos />} />
        <Route exact path='/Perfil' element={<Perfil />} />
        <Route exact path='/CursosL' element={<CursosL />} />
        
  </Routes>
  </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DbInv from './pages/Inventario/DbInv';
import DbProd from './pages/Produccion/DbProd';
import CrearMateria from './pages/Inventario/CrearMateria';
import CrearOrden from './pages/Produccion/CrearOrden';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/inventario/dashboard' element={<DbInv />} />
        <Route path='/produccion/dashboard' element={<DbProd />} />
        <Route path='/crear-materia' element={<CrearMateria />} />
        <Route path='/crear-orden' element={<CrearOrden />} />
      </Routes>
    </Router>
  );
}

export default App;

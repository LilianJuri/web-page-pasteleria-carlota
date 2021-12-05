import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import DetalleDeProducto from './pages/DetalleDeProducto';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/sobre-nosotros' element={<SobreNosotros />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:productoID' element={<DetalleDeProducto />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
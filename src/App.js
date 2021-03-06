import { Route, Routes } from 'react-router-dom';
// import Header from './component/Header';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Productos from './pages/Productos';
import DetalleDeProducto from './pages/DetalleDeProducto';
import Contacto from './pages/Contacto';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/sobre-nosotros' element={<SobreNosotros />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/productos/:productoID' element={<DetalleDeProducto />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
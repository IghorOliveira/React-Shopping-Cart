import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent.jsx'
import Store from './pages/Store/Store.jsx';
import Success from './pages/Success/Success.jsx';
import Cancel from './pages/Cancel/Cancel.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './CartContext.js';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Container>
          <NavbarComponent/>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />}/>
              <Route path='success' element={<Success />}/>
              <Route path='cancel' element={<Cancel />}/>
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;

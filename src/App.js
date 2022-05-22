
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home';
import Palindromos from './pages/Palindromos/Palindromos'
import CaixaRegistradora from './pages/CaixaRegistradora/CaixaRegistradora'
import Garagem from './pages/Garagem/Garagem'
import ConsultaCep from './pages/ConsultaCep/ConsultaCep'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/palindromos' element={<Palindromos />} />
            <Route path='/caixa' element={<CaixaRegistradora />} />
            <Route path='/garagem' element={<Garagem />} />
            <Route path='/cep' element={<ConsultaCep />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import Gnocchis from './components/Gnocchis';
import Molhos from './components/Molhos';
import Massas from './components/Massas';
import Bebidas from './components/Bebidas';
import Footer from './components/Footer';

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('inicio');

  function renderizarPagina() {
    switch (paginaAtiva) {
      case 'gnocchis':
        return <Gnocchis />;
      case 'molhos':
        return <Molhos molhos={['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']} />;
      case 'massas':
        return <Massas />;
      case 'bebidas':
        return <Bebidas />;
      case 'inicio':
      default:
        return <Apresentacao />;  
    }
  }

  return (
    <>
      <Navbar paginaAtiva={paginaAtiva} setPaginaAtiva={setPaginaAtiva} />
      {renderizarPagina()}
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo ao Cardápio Digital!</h2>
        <p>Escolha uma opção no menu acima.</p>
      </main>
      <Footer />
      

    </>
  );
}

export default App;

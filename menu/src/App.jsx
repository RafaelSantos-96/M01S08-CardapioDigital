import './App.css'
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import Gnocchis from './components/Gnocchis';
import Molhos from './components/Molhos';
import Massas from './components/Massas';
import Bebidas from './components/Bebidas';


function App() {
  return (
    <>
      <Navbar />
      <Apresentacao />
      <Gnocchis />
      <Molhos molhos={['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']} />
      <Massas />
      <Bebidas /> 
      
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo ao Cardápio Digital!</h2>
        <p>Escolha uma opção no menu acima.</p>
      </main>
    </>
  );
}

export default App

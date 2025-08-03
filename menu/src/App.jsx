import './App.css'
import Navbar from './components/Navbar';
import Apresentacao from './components/Apresentacao';
import Gnocchis from './components/Gnocchis';
import Molhos from './components/Molhos';





function App() {
  return (
    <>
      <Navbar />
      <Apresentacao />
       <Gnocchis />
      <Molhos />
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo ao Cardápio Digital!</h2>
        <p>Escolha uma opção no menu acima.</p>
      </main>
    </>
  );
}


export default App

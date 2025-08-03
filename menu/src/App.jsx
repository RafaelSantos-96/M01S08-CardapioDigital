import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Bem-vindo ao Cardápio Digital!</h2>
        <p>Escolha uma opção no menu acima.</p>
      </main>
    </>
  );
}

export default App

import Molhos from './Molhos';
import './Massas.css';

const massasData = [
  {
    nome: 'Espaguete',
    preco: 'R$ 29,00',
    imagem: '/src/assets/massa_espaguete_exemplo.jpeg',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana'],
  },
  {
    nome: 'Tagliatelle',
    preco: 'R$ 31,00',
    imagem: '/src/assets/massa_tagliatelle_exemplo.jpeg',
    molhos: ['Alla Puttanesca', 'Alla Matriciana'],
  },
  {
    nome: 'Fettuccine',
    preco: 'R$ 30,00',
    imagem: '/src/assets/massa_fettuccine_exemplo.jpeg',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe'],
  },
  {
    nome: 'Penne',
    preco: 'R$ 28,00',
    imagem: '/src/assets/massa_penne_exemplo.jpeg',
    molhos: ['Alla Puttanesca', 'Cacio e Pepe'],
  },
  {
    nome: 'Rigatoni',
    preco: 'R$ 29,00',
    imagem: '/src/assets/massa_rigatoni_exemplo.jpeg',
    molhos: ['Alla Matriciana'],
  },
  {
    nome: 'Pappardelle',
    preco: 'R$ 32,00',
    imagem: '/src/assets/massa_pappardelle_exemplo.jpeg',
    molhos: ['Alla Puttanesca', 'Alla Matriciana'],
  },
];

export default function Massas() {
  return (
    <section className="massas-container">
      <h2>Nossas Massas</h2>
      <div className="massas-grid">
        {massasData.map((massa, index) => (
          <div className="massa-card" key={index}>
            <img src={massa.imagem} alt={massa.nome} />
            <h3>{massa.nome}</h3>
            <p>{massa.preco}</p>
            <h4>Molhos permitidos:</h4>
            <Molhos molhos={massa.molhos} />
          </div>
        ))}
      </div>
    </section>
  );
}

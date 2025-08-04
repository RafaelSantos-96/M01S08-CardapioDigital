import Molhos from './Molhos';
import './Massas.css';
import espaguete from '../assets/massa_espaguete_exemplo.jpeg';
import tagliatelle from '../assets/massa_tagliatelle_exemplo.jpeg';
import fettuccine from '../assets/massa_fettuccine_exemplo.jpeg';
import penne from '../assets/massa_penne_exemplo.jpeg';
import rigatoni from '../assets/massa_rigatoni_exemplo.jpeg';
import pappardelle from '../assets/massa_pappardelle_exemplo.jpeg';

const massasData = [
  {
    nome: 'Espaguete',
    preco: 'R$ 29,00',
    imagem: espaguete,
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana'],
  },
  {
    nome: 'Tagliatelle',
    preco: 'R$ 31,00',
    imagem:tagliatelle,
    molhos: ['Alla Puttanesca', 'Alla Matriciana'],
  },
  {
    nome: 'Fettuccine',
    preco: 'R$ 30,00',
    imagem: fettuccine,
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe'],
  },
  {
    nome: 'Penne',
    preco: 'R$ 28,00',
    imagem: penne,
    molhos: ['Alla Puttanesca', 'Cacio e Pepe'],
  },
  {
    nome: 'Rigatoni',
    preco: 'R$ 29,00',
    imagem: rigatoni,
    molhos: ['Alla Matriciana'],
  },
  {
    nome: 'Pappardelle',
    preco: 'R$ 32,00',
    imagem: pappardelle,
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

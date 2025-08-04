import './Gnocchis.css'; // opcional, para estilização
import batata from '../assets/gnocchi_batata_exemplo.jpeg';
import espinafre from '../assets/gnocchi_espinafre_exemplo.jpeg';
import cenoura from '../assets/gnocchi_cenoura_exemplo.jpeg';
import beterraba from '../assets/gnocchi_beterraba_exemplo.jpeg';

 const gnocchisData = [
  { nome: 'Gnocchi de Batata', preco: 'R$ 32,00', imagem: batata },
  { nome: 'Gnocchi de Espinafre', preco: 'R$ 34,00', imagem: espinafre },
  { nome: 'Gnocchi de Cenoura', preco: 'R$ 33,00', imagem: cenoura },
  { nome: 'Gnocchi de Beterraba', preco: 'R$ 33,00', imagem: beterraba },
];


export default function Gnocchis() {
  return (
    <section className="gnocchis-container">
      <h2>Nossos Gnocchis</h2>
      <div className="gnocchi-grid">
        {gnocchisData.map((item, index) => (
          <div className="gnocchi-card" key={index}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

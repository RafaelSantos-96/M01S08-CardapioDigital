import './Bebidas.css';

const bebidasData = [
  {
    categoria: 'Água',
    itens: [
      { nome: 'Água Mineral (500ml)', preco: 'R$ 4,00' },
      { nome: 'Água com Gás (500ml)', preco: 'R$ 5,00' },
    ],
  },
  {
    categoria: 'Refrigerantes',
    itens: [
      { nome: 'Coca-Cola (350ml)', preco: 'R$ 6,00' },
      { nome: 'Guaraná (350ml)', preco: 'R$ 5,50' },
      { nome: 'Sprite (350ml)', preco: 'R$ 5,50' },
    ],
  },
  {
    categoria: 'Sucos',
    itens: [
      { nome: 'Morango (300ml)', preco: 'R$ 7,00' },
      { nome: 'Laranja (300ml)', preco: 'R$ 6,50' },
      { nome: 'Uva (300ml)', preco: 'R$ 7,00' },
    ],
  },
];

export default function Bebidas() {
  return (
    <section className="bebidas-container">
      <h2 className="bebidas-titulo">Bebidas</h2>
      <div className="bebidas-grid">
        {bebidasData.map((categoria, index) => (
          <div className="bebida-card" key={index}>
            <h3>{categoria.categoria}</h3>
            <ul>
              {categoria.itens.map((item, idx) => (
                <li key={idx}>
                  {item.nome} — <strong>{item.preco}</strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}



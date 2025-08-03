export default function Molhos() {
  const molhos = [
    'Alla Puttanesca',
    'Al Pesto di Basilico',
    'Cacio e Pepe',
    'Alla Matriciana',
  ];

  return (
    <section>
      <h2>Molhos Disponíveis</h2>
      <ul>
        {molhos.map((molho, index) => (
          <li key={index}>{molho}</li>
        ))}
      </ul>
    </section>
  );
}

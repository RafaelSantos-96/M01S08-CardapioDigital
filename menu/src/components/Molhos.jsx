export default function Molhos({ molhos }) {
  return (
    <ul>
      {molhos.map((molho, index) => (
        <li key={index}>{molho}</li>
      ))}
    </ul>
  );
}

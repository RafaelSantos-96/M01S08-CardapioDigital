import './Apresentacao.css';
import fachada from '../assets/fachada_restaurante_exemplo.jpeg';



function Apresentacao() {
  return (
    <section className="apresentacao">
      <div className="texto">
        <h2>Servindo massas há mais de 70 anos</h2>
        <p>Qualidade passada por gerações</p>
      </div>
      <div className="imagem">
        <img
          src= {fachada}
          alt="Fachada do restaurante Mamamia Massas"
        />
      </div>
    </section>
  );
}

export default Apresentacao;

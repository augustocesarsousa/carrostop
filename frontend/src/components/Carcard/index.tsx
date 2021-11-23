import './styles.css';
import CarCardImg from '../../assets/images/car-card.png';

export default function Carcard() {
  return (
    <div className="card-container bg-light">
      <img
        src={CarCardImg}
        alt="Imagem de um Audi Supra TT vermelho"
        className="car-content-img"
      />
      <div className="car-content-text">
        <h6>Audi Supra TT</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <button className="btn btn-primary car-content-button">Comprar</button>
    </div>
  );
}

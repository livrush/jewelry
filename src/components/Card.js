import curve from '../media/card-curve.svg';

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card-image" src={`https://picsum.photos/200?random=${item.name}`} alt="jewelry" />
      <h2 className="card-name">{item.name}</h2>
      <img className="card-curve" src={curve} alt="aesthetic curve along bottom and right side of the card" />
    </div>
  );
}

export default Card;

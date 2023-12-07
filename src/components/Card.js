import curve from '../assets/card-curve.svg';
import CardCurve from '../assets/dynamic/card-curve';
import colors from "../lib/colors.json";

const Card = ({ color, item }) => {
  return (
    <div className="card">
      <img className="card-image" src={`https://picsum.photos/200?random=${item.name}`} alt="jewelry" />
      <h2 className="card-name">{item.name}</h2>
      <CardCurve color={colors[color]} />
      {/* <img className={`card-curve bg-fill-${color}`} src={<CardCurve color={color} />} alt="aesthetic curve along bottom and right side of the card" /> */}
    </div>
  );
}

export default Card;

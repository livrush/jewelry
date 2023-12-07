const Card = ({ item }) => {
  return (
    <div className="card">
      {item.name} {item.category}
    </div>
  );
}

export default Card;

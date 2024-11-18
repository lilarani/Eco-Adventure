const Card = ({ adventure }) => {
  console.log(adventure);
  const { title, image, ecoFriendlyFeatures: feature } = adventure;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{feature}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

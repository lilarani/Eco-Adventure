import { Link } from 'react-router-dom';

const Card = ({ adventure }) => {
  const { id, title, image, ecoFriendlyFeatures: feature } = adventure;
  return (
    <div className="">
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
            <Link
              to={`/details/${id}`}
              className="px-3 py-1 bg-green-800 text-white/90 font-bold"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

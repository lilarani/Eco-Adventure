import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Banner from './Banner';

const Home = () => {
  const adventureData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="my-24 container mx-auto">
        <h2 className="text-2xl font-bold text-center py-4">
          Eco Adventure Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
          {adventureData.map(adventure => (
            <Card adventure={adventure} key={adventure.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

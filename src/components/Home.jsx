import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import Banner from './Banner';
import { Helmet } from 'react-helmet-async';
import Faq from '../pages/Faq';
import Contact from '../pages/Contact';
import 'aos/dist/aos.css';

const Home = () => {
  const adventureData = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Eco Adventure | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-24 container mx-auto">
        <h2
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="text-2xl font-bold text-center py-4"
        >
          Eco Adventure Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
          {adventureData.map(adventure => (
            <Card adventure={adventure} key={adventure.id}></Card>
          ))}
        </div>
      </div>

      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;

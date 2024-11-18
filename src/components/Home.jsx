import slider1 from '../assets/images/slider-river.jpg';
import slider2 from '../assets/images/mountain-slider.jpg';
import slider3 from '../assets/images/slider.jpg';
import slider4 from '../assets/images/Mangrove Forest.jpg';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  const adventureData = useLoaderData();

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slider1} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full h-[500px]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center py-4">
          Eco Adventure Features
        </h2>
        <div>
          {adventureData.map(adventure => (
            <Card adventure={adventure} key={adventure.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

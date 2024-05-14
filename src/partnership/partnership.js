import React, { useEffect, useState } from 'react';
import './part.css'; // or whatever your CSS file name is
import pl1 from './pl1.png';
import pl2 from './pl2.png';
import pl3 from './pl3.jpg';
import pl4 from './pl4.jpg';
import pl5 from './pl5.jpg';
import pl6 from './pl6.jpg';
import pl7 from './pl7.png';
import pl8 from './pl8.png';
import pl9 from './pl9.png';
import pl10 from './pl10.png';
import pl11 from './pl11.png';
import pl12 from './pl12.png';
import pl13 from './pl13.png';
import pl14 from './pl14.png';

const services = [
  { image: pl1 },
  { image: pl2 },
  { image: pl3 },
  { image: pl4 },
  { image: pl5},
  { image: pl6},
  { image: pl7},
  { image: pl8},
  { image: pl9},
  { image: pl10},
  { image: pl11},
  { image: pl12},
  { image: pl13},
  { image: pl14}
];

const PartnerShip = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Adding a delay for animation effect
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen p-4 mt-10 ${animate ? 'animate-fade-in' : ''}`}>
      <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-600 text-center mb-8">
          PARTNERSHIPS
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12">
          VG Serengeti partnerships with different companies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <img className="w-8/12 mx-auto" src={service.image} alt={`Partner ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;

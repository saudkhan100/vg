import React from 'react';
import productData from '../../data.json'
import { Link } from 'react-router-dom';

const CardSection = () => {
  return (
    <div className="relative px-6 pt-15 pb-28 lg:px-8 lg:pt-18 lg:pb-32">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">OUR PRODUCTS</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            We VG Serengeti Active in Four Business Pillars
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
          {productData.categories.map((card, index) => (
            <Link key={index} to={`/data/${card.title}`} >
              <div key={index} className={`flex flex-col overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${card.backgroundClass || ''}`}>
                <div className="flex-shrink-0">
                  <img className="h-64 w-full object-cover" src={card.imageSrc} alt="" />
                </div>
                <div className={`flex flex-1 flex-col p-6 relative ${card.backgroundClass || ' bg-white'}`}>
                  <div className="flex-1">
                    <p className={`text-xl font-semibold h-16 ${card.backgroundClass ? 'text-white' : 'text-gray-900'}`}>{card.title}</p>
                    <p className={`mt-3 text-base ${card.backgroundClass ? 'text-white' : 'text-gray-500'}`}>{card.description}</p>
                  </div>
                  <div className="mt-5  bottom-0 right-0">
                    <img className="w-80 h-16 object-contain" src={card.bottomRightImage} alt="Bottom right image" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;

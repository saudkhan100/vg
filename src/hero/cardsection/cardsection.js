import React from 'react';

const cardsData = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1644924735973-0ba06d83268e?q=80&w=2477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'COMMODITY TRADING',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'REAL ESTATE',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    backgroundClass: 'bg-green-900' // Added class for background color
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    title: 'COMMUNICATIONS AND TECHNOLOGY',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    backgroundClass: 'bg-brown-700' // Added class for background color
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1654263937079-f63a3ea4d48b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'MERGERS AND ACQUISITIONS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  }
];

const CardSection = () => {
  return (
    <div className="relative bg-white-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3"></div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          active in four business pillars
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <div key={index} className={`flex flex-col overflow-hidden rounded-lg shadow-lg ${card.backgroundClass || ''}`}>
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={card.imageSrc} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{card.title}</p>
                    <p className="mt-3 text-base text-gray-500">{card.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;

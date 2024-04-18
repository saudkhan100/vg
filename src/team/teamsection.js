import React from 'react';

const teamMembers = [
  {
    name: 'Tranter Jaskulski',
    title: 'CHAIRMAN',
    avatar: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80'
  },
  {
    name: 'Denice Jagna',
    title: 'CEO',
    avatar: 'https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80'
  },
  {
    name: 'Kenji Milton',
    title: 'COO',
    avatar: 'https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80'
  },
  {
    name: 'Doesn\'t matter',
    title: 'OFFICE DIRECTOR',
    avatar: 'https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80'
  }
];

const TeamSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-40">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Meet the Team
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={member.avatar}
                        alt={member.name} />
                    </a>
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        {member.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

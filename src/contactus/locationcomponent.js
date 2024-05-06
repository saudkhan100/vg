import React from "react";
import worldmap from "../location/map-01.png";
import { useNavigate } from "react-router-dom";

const LocationComponent = ({ locations }) => {
  const handleGetDirections = (address) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      address
    )}`;
    window.open(url, "_blank");
  };

  const navigate = useNavigate();

  return (
    <div
      className="container mx-auto py-20 mb-20"
      style={{ maxWidth: "1300px" }}
    >
      <div className="py-0 bg-white ">
        <h1 className="text-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-600">
          Our Locations
        </h1>
        <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We operate across a global network <br />
          Our business brings together an international team based in more than
          50 locations worldwide and a range of operational locations. We work
          with producers and customers in over 150 countries.
        </p>

        <div className="relative mx-auto w-50">
          <img src={worldmap} alt="World Map" className="w-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{location.title}</h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <h3 className="text-gray-600 mb-4">{location.number}</h3>
              <button
                className="bg-gradient-to-b from-green-700 to-lime-400 text-white font-bold py-2 px-4  rounded-full shadow-lg hover:opacity-80 transition duration-300 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                onClick={() => handleGetDirections(location.address)}
              >
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationComponent;

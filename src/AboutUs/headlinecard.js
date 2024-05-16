import React from "react";
import { useNavigate } from "react-router-dom";

const HeadlineCards = () => {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-7xl mx-auto mt-20 flex items-center justify-between">
      <img
        className="h-96 w-1/2 object-cover rounded-md mr-8" // Added mr-8 for right margin
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Random image"
      />
      <div className="relative w-1/2 px-8">
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-gray text-4xl md:text-5xl lg:text-4xl font-regular mb-8">
          Meet VGSERENGETI employees from across the globe
          </h2>
          <div>
            <button onClick={()=>navigate("/teams")}  className="px-6 py-3 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-semibold rounded-md shadow-lg hover:opacity-80 transition duration-300">
              Meet Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;

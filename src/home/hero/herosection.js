import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <header className="bg-white relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-30 p-5 text-4xl text-white bg-opacity-50 rounded-xl mb-8">
        VG SERENGETI GROUP IS A BRAND OF COMPANIES
      </div>
      
      {/* Button */}
      <div className="relative z-30">
  <button className="px-8 py-4 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-regular text-sm rounded-full shadow-lg hover:opacity-80 transition duration-300" onClick={()=>navigate("/about")}>Discover who we are</button>
</div>

      
      {/* Video */}
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default HeroSection;

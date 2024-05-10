import React from 'react';
import vg from '.././vg.png'; 

const VgImage = () => {
  return (
    <div className="py-20 bg-white flex justify-center items-center">
      <img
        className="object-cover object-center max-w-full max-h-full"
        src={vg}
        alt="Vg image"
      />
    </div>
  );
};

export default VgImage;

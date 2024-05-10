import React from 'react';
import gov from './governance-01.jpg'; // Assuming vg.png is located in the same directory as this component

const GovImage = () => {
  return (
    <div className="py-20 bg-white grid min-h-[140px] w-full place-items-center  rounded-lg ">
      <img
        className="object-cover object-center w-1/2 max-w-none h-full"
        src={gov}
        alt="Vg image"
      />
    </div>
  );
};

export default GovImage;

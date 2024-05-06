import React from 'react';
import vg from '.././vg.png'; // Assuming vg.png is located in the same directory as this component

const VgImage = () => {
  return (
    <div className="py-20 bg-white grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg lg:overflow-visible">
      <img
        className="object-cover object-center w-full max-w-none h-full"
        src={vg}
        alt="Vg image"
      />
    </div>
  );
};

export default VgImage;

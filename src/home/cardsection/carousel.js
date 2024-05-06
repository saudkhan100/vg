import React from 'react';
import work from '../../images/work.png'; // Import your image here

const CarouselComponent = () => {
    return (
        <div className="relative mx-auto grid grid-cols-7 gap-0 h-[25rem] w-full max-w-7xl flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">

            <div className="col-span-1"></div>
            <div className="col-span-5 relative">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent" style={{ backgroundImage: `url(${work})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#ffffff' }}>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        How we work?
                    </h2>
                    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Get in touch to find out more
                    </h5>
                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-3 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-semibold rounded-md shadow-lg hover:opacity-80 transition duration-300">Check out</button>
                    </div>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
};

export default CarouselComponent;

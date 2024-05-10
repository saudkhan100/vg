import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SpecificProduct = ({ location }) => {
    const { state } = useLocation();
    const product = state.product;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading time with setTimeout
        const timeout = setTimeout(() => {
            setLoaded(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    // Check if product exists before accessing its properties
    if (!product) {
        return (
            <div className={`flex items-center justify-center h-screen ${loaded ? 'fade-in' : ''}`} style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-8">Product Not Found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className={`container mx-auto p-8 mt-12 text-center ${loaded ? 'fade-in' : ''}`} style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-8">{product.name}</h1>
            <p className="text-gray-600 md:text-1xl lg:text-1xl text-center mb-1">{product.description}</p>
           
            <div className="flex flex-wrap justify-center"> {/* Apply flex and justify-center classes here */}
                {product.products && product.products.map((subProduct, index) => (
                  <div key={index} className="mt-8 mx-4 flex flex-col items-center"> {/* Apply mx-4 for margin between cards */}
                  <img src={subProduct.images} alt={subProduct.name} className="w-80 h-80 object-cover rounded-lg shadow-lg" />
                  <h2 className="text-xl font-semibold mb-4">{subProduct.name}</h2>
              </div>
              
                ))}
            </div>
        </div>
    );
}

export default SpecificProduct;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import productsData from '../data.json';
import './DataPage.css'; // Import CSS file for animations

const DataPage = () => {
  const { categoryName } = useParams();
  const filteredData = productsData.categories.find(category => category.title === categoryName);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  if (!filteredData) {
    return (
      <div className="p-20">
        <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Category Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-20 animated fadeIn"> {/* Apply fade-in animation */}
      <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        {categoryName}
      </h1>

      <p>{filteredData.extrades}</p>

      <div className="container py-16">
        <section className="max-w-[90%] mx-auto px- sm:px-6 lg:px-4 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredData.items.map((product, index) => (
              <div key={index} className="product-card bg-white rounded-lg shadow-lg overflow-hidden">
                <Link to={`/details/${product.name}`} state={{ product }} className="block">
                  <img className="w-full h-48 object-cover" src={product.image} alt="" />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{product.name}</h2>
                  </div>
                </Link>
              </div>
            ))}
            {
              filteredData.images.map((product, index)=>(
                <img key={index} className="w-80 h-80 object-cover rounded-lg shadow-lg" src={product.image} alt="" />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
}

export default DataPage;

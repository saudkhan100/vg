import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useParams } from 'react-router-dom'; // Import useParams for getting the category name from the URL  // Import Link for navigation
import productsData from './data.json';

const DataPage = () => {
  const { categoryName } = useParams();

  // Find the category data based on the category name
  const filteredData = productsData.categories.find(category => category.name === categoryName);

  // Check if filteredData exists before accessing its properties
  if (!filteredData) {
    // If filteredData is null or undefined, render a message indicating that the category was not found
    return (
      <div className="bg-gray-100 p-20">
        <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Category Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-20">
      <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        {categoryName} Page
      </h1>
      <div className="relative h-[50vh]">
        <article className="relative w-full h-[50vh] bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          style={{backgroundImage: "url('https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
            <h3 className="text-center">
              <Link to="/details/ma" className="text-white text-2xl font-bold text-center">
                <span className="absolute inset-0"></span>
                {categoryName}<br />
                LOREN IPSUM FOR NOW
              </Link>
            </h3>
          </div>
        </article>
      </div>

      <div className="container py-16">
        <section className="max-w-[90%] mx-auto px- sm:px-6 lg:px-4 mb-12">
          <article>
            <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
              {/* Map over the products in the filteredData and render them */}
              {filteredData.items.map((product, index) => (
                <article key={index} className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                  style={{backgroundImage: `url('${product.image}')`}}>
                  <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:opacity-0 transition duration-300 ease-in-out"></div>
                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <Link to="#">
                      <span className="absolute inset-0"></span>
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}

export default DataPage;

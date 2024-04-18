import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import productsData from "./data.json";

const ProductsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center  mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-700 ">
        Our Products
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          {productsData.categories.map((category, index) => (
            <Link key={index} to={`/data/${category.name}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

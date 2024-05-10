import React from "react";
import { useNavigate } from "react-router-dom";
export default function CardHorizontal() {
  const navigate = useNavigate();

  
  return (
    <>
      {/* Space above component */}
      <div className="mt-28"></div>
      
      {/* Component: Horizontal card */}
      <div className="max-w-7xl mx-auto bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex flex-row items-center">
        {/* Body */}
        <div className="flex-1 p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">Bringing efficiency to complex supply chains</h3>
          </header>
        </div>
        {/* Body */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <p>
            VG SERENGETI GROUP is committed to the highest business, environment and social standards for sustainable inclusive growth. We are expressing the responsibility we feel for our employees, taking important initiatives in education and healthcare. Focusing on fulfilling basic human needs, our businesses have provided a strong contribution towards global economies.
          </p>
          <div className="flex justify-center mt-6">
            <button onClick={()=>navigate("/about")} className="px-6 py-3 bg-gradient-to-r from-green-700 to-lime-400 text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-80 transition duration-300">CLICK ME</button>
          </div>
        </div>
      </div>
      {/* End Horizontal card */}

      {/* Space below component */}
      <div className="mt-8"></div>
    </>
  );
}

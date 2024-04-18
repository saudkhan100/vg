import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      {/* Drawer Toggle and Search Icon */}
      <div className="flex justify-between items-center">
        {/* Drawer Toggle */}
        <div className="ml-4">
          <button onClick={toggleDrawer} className="text-green-700 hover:text-gray-200">
            {/* Icon for toggling the drawer */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Company Name */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-green-700">VG SERENGETTI</h1>
        </div>

        {/* Search */}
        <div className="mr-4">
          <button onClick={toggleSearch} className="text-green-700 hover:text-gray-200">
            {/* Icon for toggling the search */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18h8m0 0l-3-3m3 3l-3 3m3-3V8a5 5 0 00-10 0v10a5 5 0 0010 0z"
              ></path>
            </svg>
          </button>
          {/* Search Input */}
          {isSearchOpen && (
            <div className="absolute top-0 right-12 mt-12 mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-md border-gray-600 border focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>
          )}
        </div>
      </div>

      {/* Drawer Content */}
      <div className={`fixed left-0 top-0 h-screen w-80 ${isDrawerOpen ? '' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gradient-to-b from-green-700 to-lime-400`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold text-white">VG SERENGETI</h1>
            <button onClick={closeDrawer} className="text-gray-400 hover:text-gray-200">
              {/* Close button */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">About Us</a></li>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">Products</a></li>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">Careers</a></li>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">Contact Us</a></li>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">Partnerships</a></li>
            <li className="mb-4"><a href="#" className="block text-2xl text-white hover:text-indigo-400">Sustainability</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
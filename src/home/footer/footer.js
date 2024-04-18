import React from 'react';

const Footer = () => {
  return (
    <footer className='mt-40'>
      <div className="bg-gradient-to-r from-green-700 to-lime-400 py-4 text-white">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                      <text fill="white" fontFamily="Nunito-Bold, Nunito" fontSize="400" fontWeight="bold">
                        <tspan x="654" y="518">VG SERENGETI</tspan>
                      </text>
                   
                  </g>
                </svg>
              </a>
              <p className="text-justify">
              VG SERENGETI GROUP is a brand of companies, active in four business pillars:, Commodity Trading of physical products, Real Estate, Communications &
Technology, and Mergers & Acquisitions. All of these businesses managed independently, but shared a common corporate history and values. VG SERENGETI GROUP is committed to the highest business, environment and social standards for sustainable inclusive growth. We are expressing the responsibility we feel for our employees, taking important initiatives in education
and healthcare. Focusing on fulfilling basic human needs, our businesses have provided a strong contribution towards global economies.              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Company</h2>
              </div>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Products</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Partnerships</a></li>
                <li><a href="#" className="hover:text-blue-400">Sustainability</a></li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Blog</h2>
              </div>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">Getting Started With HTML and CSS</a></li>
                <li><a href="#" className="hover:text-blue-400">What Is Flex And When to Use It?</a></li>
                <li><a href="#" className="hover:text-blue-400">How TailwindCSS Can Help Your Productivity?</a></li>
                <li><a href="#" className="hover:text-blue-400">5 Tips to Make Responsive Website</a></li>
                <li><a href="#" className="hover:text-blue-400">See More</a></li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-white">Connect With Us</h2>
              </div>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              {/* Rest of the social media icons */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

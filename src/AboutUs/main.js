import about from './about.jpg'

const Main = () => {
  return (
    <div class="py-16 px-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-8">
          ABOUT US
        </h1>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-2 lg:items-center lg:gap-3">
          <div class="flex items-center justify-center md:5/12 lg:w-5/12">
            <img
              src={about}
              alt=""
              loading="lazy"
              width="80%"
            />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <p class="mt-6 text-gray-600">
            VG SERENGETI GROUP, where innovation meets integrity across our four dynamic business pillars.

Our brand represents a diverse portfolio, ranging from the dynamic world of Commodity Trading to the stability of Real Estate, the connectivity of Communications & Technology, and the strategic acumen of Mergers & Acquisitions. While each sector operates independently, they are bound by a rich corporate legacy and shared values.

At VG SERENGETI GROUP, we don't just aim for success — we redefine it. We're not just about transactions; we're about transformation. With an unwavering commitment to the highest standards of business, environmental consciousness, and social responsibility, we pave the way for sustainable growth that benefits everyone involved.

But our vision extends far beyond boardrooms and balance sheets. We believe in making a tangible difference in the lives of our employees and the communities we serve. That's why we take proactive steps in education and healthcare, recognizing that investing in people is the cornerstone of progress. 

From ensuring access to quality education to promoting healthcare initiatives, we're dedicated to addressing basic human needs. Our business is about purpose. At VG SERENGETI GROUP, we're building better futures. 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;

import gov from './g1.jpg'

const GovMain = () => {
  return (
    <div class="py-16 px-16 bg-white">
      <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-8">
          CORPORATE GOVERNANCE
        </h1>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-2 lg:items-center lg:gap-3">
          <div class="flex items-center justify-center md:5/12 lg:w-5/12">
            <img src={gov} alt="" loading="lazy" width="80%" />
          </div>
          <div class="md:7/12 lg:w-6/12">
            <p class="mt-6 text-gray-600">
              Corporate governance stands as a cornerstone at VG Serengeti
              Group, representing an evolving system of rules, practices, and
              processes meticulously designed to direct and control our
              corporate actions. This commitment reflects our unwavering
              dedication to transparency and accountability. As a dynamic
              framework, corporate governance is not static; rather, it
              continually evolves to meet the demands of an ever-changing
              business landscape. At VG Serengeti Group, our goal is not just
              compliance but a proactive and continuous improvement. Through
              this approach, we ensure that accountability remains a driving
              force, propelling us toward sustained excellence in every facet of
              our operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GovMain;

import React from "react";

const HeadlineCards = () => {
  return (
    <div className="relative h-[35vh] m-10">
      <div className="" style={{ width: "100%", height: "100%" }}>
        <img
          className="absolute inset-0 object-fit w-full h-full"
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJcHfyPMQWAsR1wzpLK7D5d5AdRFngYUauTyW_m6vPbEmMiih4wjId9B628zyJGIoMys&usqp=CAU"
          alt=""
        />
        <div className="lg:pl-12  absolute inset-0 flex flex-col justify-center items-start text-white p-4">
          <p className="w-[70%] lg:w-1/2 font-bold text-xl">
            About VG SERENGETTI
          </p>
          <p className="w-[60%] lg:w-1/2 text-lg mt-2">
            Our customers include creative and technology agencies, service
            providers, restaurants, manufacturers, retail shops, contractors,
            freelancers, and more.
          </p>
          <button className="bg-gradient-to-r from-purple-300 to-purple-700 rounded-[20px] my-5 px-10 py-5 font-bold text-white transition-all duration-300 hover:translate-x-[4px] hover:translate-y-[-4px] hover:shadow-[-4px_4px_0px_purple] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
            Explore our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;

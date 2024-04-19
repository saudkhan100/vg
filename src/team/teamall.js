import React, { useState } from "react";
import ch from "./Picture3.jpg";
import saud from "./saud1.jpg";

const TeamAll = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    {
      id: "app",
      title: "CHAIRMAN",
      description:
        "In the heart of our company beats the visionary leadership of [Chairman's Name]. From humble beginnings to the pinnacle of corporate governance, his journey embodies resilience, innovation, and unwavering dedication. With a keen eye for opportunity and a commitment to ethical leadership, he has propelled our organization to unprecedented heights. As we look to the future, [Chairman's Name]'s guiding light continues to illuminate our path, inspiring us to reach new horizons and embrace the spirit of excellence.",
      image: ch,
    },
    {
      id: "message",
      title: "COO",
      description: "Description for Messages",
      image: saud,
    },
    {
      id: "settings",
      title: "CEO",
      description: "Description for Settings",
      image: saud,
    },
    {
      id: "other",
      title: "MEDIA",
      description: "Description for Other",
      image: saud,
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-4/5">
      <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">
                  Meet the Team
                </h1>
        <p className="text-gray-700 text-lg font-light text-center mb-10">
                  With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                </p>
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap justify-center gap-4 p-1 list-none rounded-xl bg-blue-gray-50/60 border-b border-blue-500"
            data-tabs="tabs"
            role="list"
          >
            {tabs.map((tab) => (
              <li key={tab.id} className="z-30 flex-auto text-center">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`z-30 flex items-center justify-center w-full px-4 py-2 mb-2 transition-all ease-in-out  rounded-none cursor-pointer text-slate-700 bg-inherit ${
                    activeTab === tab.id && ""
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                >
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={tab.image}
                    alt={tab.title}
                  />{" "}
                  {/* Circle image */}
                  <span
                    className={`ml-2 ${activeTab === tab.id && "underline"}`}
                  >
                    {tab.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div data-tab-content="" className="p-5 shadow-lg">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`block opacity-100 ${
                  activeTab === tab.id ? "" : "hidden"
                }`}
                id={tab.id}
                role="tabpanel"
              >
                <div className="flex justify-center">
                  <div className="flex w-full p-3">
                    <div className="w-1/2 pr-4">
                      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                        <img
                          className="w-full h-90 object-cover"
                          src={tab.image}
                          alt={tab.title}
                        />
                      </div>
                    </div>
                    <div className="w-1/2 pl-4">
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {tab.title}
                        </div>
                        <p className="text-gray-700 text-base">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamAll;

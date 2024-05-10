import React, { useEffect } from "react";
import ch from "./Picture3.jpg";
import sm1 from "./sm1.png";
import sm2 from "./sm2.png";
import sm3 from "./sm3.png";
import sm4 from "./sm4.png";
import { useState } from "react";

const TeamAll = () => {
  const [activeTab, setActiveTab] = useState("app");

  const tabs = [
    {
      id: "app",
      name: "MR. KODZO MASSENYA",
      title: "(Chairman)",
      description:
        "With a remarkable 27 years of global trading experience, the Chairman of CG Serengeti Group began his journey in the dynamic realm of oil and gas. His seasoned insights and strategic acumen form the bedrock of our organization's success. Under the guidance of the Chairman, the VG Serengeti team benefits from a wealth of expertise and visionary leadership. Their collective experience and strategic direction serve as the compass navigating our organization toward consistently successful outcomes. It is through their unwavering commitment to excellence that VG Serengeti Group continues to thrive in the intricate and ever-evolving landscape of global trading.",
      image: ch,
    },
    {
      id: "message",
      name: "ZAHEER HOSSANY ",
      title: "(Cheif Of Operations)",
      description: "At the helm of VG Serengeti, our senior management team serves as the cornerstone of executive oversight and strategic decision-making. Drawing on their collective expertise, this dynamic team meticulously evaluates potential trades, scrutinizes financial metrics, ensures compliance, and orchestrates the effective execution of our strategies. The result is a commitment to transactions characterized by low risk and high viability, setting the stage for our continued success in the global trading landscape.",
      image: sm1,
    },
    {
      id: "settings",
      name: "OLEG MICEVIC ",
      title: "(Sales Director of Gas & Oil)",
      description: "At the helm of VG Serengeti, our senior management team serves as the cornerstone of executive oversight and strategic decision-making. Drawing on their collective expertise, this dynamic team meticulously evaluates potential trades, scrutinizes financial metrics, ensures compliance, and orchestrates the effective execution of our strategies. The result is a commitment to transactions characterized by low risk and high viability, setting the stage for our continued success in the global trading landscape.",
      image: sm2,
    },
    {
      id: "other",
      name:"JOHANNES HANLEIN",
      title: "(Director Of Risk)",
      description: "At the helm of VG Serengeti, our senior management team serves as the cornerstone of executive oversight and strategic decision-making. Drawing on their collective expertise, this dynamic team meticulously evaluates potential trades, scrutinizes financial metrics, ensures compliance, and orchestrates the effective execution of our strategies. The result is a commitment to transactions characterized by low risk and high viability, setting the stage for our continued success in the global trading landscape.",
      image: sm3,
    },
    {
      id: "team",
      name:"MATT CAPE",
      title: "(Chief Executive Officer)",
      description: "At the helm of VG Serengeti, our senior management team serves as the cornerstone of executive oversight and strategic decision-making. Drawing on their collective expertise, this dynamic team meticulously evaluates potential trades, scrutinizes financial metrics, ensures compliance, and orchestrates the effective execution of our strategies. The result is a commitment to transactions characterized by low risk and high viability, setting the stage for our continued success in the global trading landscape.",
      image: sm4,
    },
    
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex justify-center mt-32 mb-20 ">
      <div className="w-4/5">
        <h1 className="text-center text-gray-900 text-4xl font-bold mb-8">
          Meet the Team
        </h1>
        <p className="text-gray-700 text-lg font-light text-center mb-10">
          With over 100 years of combined experience, we've got a well-seasoned
          team at the helm.
        </p>
        <div className="relative right-0">
          <ul
            className="relative flex flex-wrap justify-center gap-4 p-1 list-none rounded-xl border-b border-blue-500"
            data-tabs="tabs"
            role="list"
          >
            {tabs.map((tab, index) => (
              <li key={tab.id} className="z-30 flex-auto text-center">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`z-30 flex items-center justify-center w-full px-4 py-2 mb-2 transition-all ease-in-out rounded-none cursor-pointer text-slate-700 ${
                    tab.id === "app"
                      ? "bg-green-500"
                      : activeTab === tab.id
                      ? ""
                      : "hover:text-green-500 hover:underline"
                  }`}
                  data-tab-target=""
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                >
                  <span
                    className={`ml-2 ${
                      activeTab === tab.id && "underline"
                    } ${
                      tab.id !== "app" && activeTab !== tab.id && "text-gray-700"
                    }`}
                  >
                    {tab.name}
                  </span>
                  <div className="text-xs text-gray-500">{tab.title}</div>
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
                      <div className="rounded-lg overflow-hidden shadow-lg bg-white ">
                        <img
                          className="w-full h-full object-cover"
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

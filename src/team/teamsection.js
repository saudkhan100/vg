import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ch from "./Picture3.jpg";
import sm1 from "./sm1.png";
import sm2 from "./sm2.png";
import sm3 from "./sm3.png";
import sm4 from "./sm4.png";
import Chairman from "./chairman";

const teamMembers = [
  {
    name: "ZAHEER HOSSANY",
    title: "Chief Of Operations",
    avatar: sm1,
  },
  {
    name: "OLEG MICEVIC",
    title: "Sales Director of Gas & Oil",
    avatar: sm2,
  },
  {
    name: "JOHANNES HANLEIN",
    title: "Director Of Risk",
    avatar: sm3,
  },
  {
    name: "MATT CAPE",
    title: "Chief Executive Officer",
    avatar: sm4,
  },
];

const chairman = {
  name: "Chairman Name",
  title: "Chairman",
  avatar: ch,
};

const TeamSection = () => {
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Initial motion from top
      animate={{ opacity: 1, y: 0 }} // Animation to bottom
      transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition
      className="flex items-center justify-center min-h-screen bg-white mt-28 mb-20"
    >
      <div className="flex flex-col">
        <div className="flex flex-col ">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-12/12 px-4">
                <h1 className="text-gray-600 text-4xl font-bold mb-8">
                  MEET THE TEAM{" "}
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  With a remarkable 27 years of global trading experience, the
                  Chairman of CG Serengeti Group began his journey in the
                  dynamic realm of oil and gas. His seasoned insights and
                  strategic acumen form the bedrock of our organization's
                  success. Under the guidance of the Chairman, the VG Serengeti
                  team benefits from a wealth of expertise and visionary
                  leadership. Their collective experience and strategic
                  direction serve as the compass navigating our organization
                  toward consistently successful outcomes. It is through their
                  unwavering commitment to excellence that VG Serengeti Group
                  continues to thrive in the intricate and ever-evolving
                  landscape of global trading.{" "}
                </p>
                <Chairman />
              </div>
            </div>
            <div className="flex justify-center mb-12">
              <div className="w-full lg:w-12/12 px-4">
                <div className="text-center mb-6">
                  <h1 className="text-gray-600 text-4xl font-bold mb-8">
                    MANAGEMENT TEAM
                  </h1>
                  <p className="text-gray-700 text-lg font-light max-w-8xl mx-auto">
                    At the helm of VG Serengeti, our senior management team
                    serves as the cornerstone of executive oversight and
                    strategic decision-making. Drawing on their collective
                    expertise, this dynamic team meticulously evaluates
                    potential trades, scrutinizes financial metrics, ensures
                    compliance, and orchestrates the effective execution of our
                    strategies. The result is a commitment to transactions
                    characterized by low risk and high viability, setting the
                    stage for our continued success in the global trading
                    landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                >
                  <div className="flex flex-col h-full">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={member.avatar}
                      alt={member.name}
                    />
                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        {member.name}
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        {member.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;

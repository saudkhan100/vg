import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import HeroSection from "./hero/herosection";
import CardSection from "./cardsection/cardsection";
import ImageOne from "./image/imageone";
import CardHorizontal from "./cardsection/cardhorizontal";
import VgImage from "./image/vg";
import Carousel from "./cardsection/carousel";
import TeamSection from "../team/teamsection";
import TeamAll from "../team/teamall";
import LocationsPage from "../location/LocationsPage";
import ContactHome from "./contact/contacthome";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="bg-white">
         <HeroSection />
   
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <CardSection />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <ImageOne />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <CardHorizontal />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <VgImage />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <Carousel />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <TeamAll />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <LocationsPage />
      </motion.div>
      <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
        <ContactHome />
      </motion.div>
    </div>
  );
};

export default Home;

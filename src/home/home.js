import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import HeroSection from "./hero/herosection";
import CardSection from "./cardsection/cardsection";
import ImageOne from "./image/imageone";
import CardHorizontal from "./cardsection/cardhorizontal";
import VgImage from "./image/vg";
import Carousel from "./cardsection/carousel";
import TeamSection from "../team/teamsection";
import LocationsPage from "../location/LocationsPage";
import ContactHome from "./contact/contacthome";

const Home = () => {
  const controls = useAnimation();
  const [refHero, inViewHero] = useInView();
  const [refCard, inViewCard] = useInView();
  const [refImage, inViewImage] = useInView();
  const [refHorizontal, inViewHorizontal] = useInView();
  const [refVgImage, inViewVgImage] = useInView();
  const [refCarousel, inViewCarousel] = useInView();
  const [refTeam, inViewTeam] = useInView();
  const [refLocations, inViewLocations] = useInView();
  const [refContact, inViewContact] = useInView();

  useEffect(() => {
    if (inViewHero) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [controls, inViewHero]);

  return (
    <div className="bg-white">
      <motion.div ref={refHero} animate={controls} initial={{ opacity: 0, y: -50 }}>
        <HeroSection />
      </motion.div>
      <motion.div ref={refCard} animate={inViewCard ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <CardSection />
      </motion.div>
      <motion.div ref={refImage} animate={inViewImage ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <ImageOne />
      </motion.div>
      <motion.div ref={refHorizontal} animate={inViewHorizontal ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <CardHorizontal />
      </motion.div>
      <motion.div ref={refVgImage} animate={inViewVgImage ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <VgImage />
      </motion.div>
      <motion.div ref={refCarousel} animate={inViewCarousel ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <Carousel />
      </motion.div>
      <motion.div ref={refTeam} animate={inViewTeam ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <TeamSection />
      </motion.div>
      <motion.div ref={refLocations} animate={inViewLocations ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <LocationsPage />
      </motion.div>
      <motion.div ref={refContact} animate={inViewContact ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <ContactHome />
      </motion.div>
    </div>
  );
};

export default Home;

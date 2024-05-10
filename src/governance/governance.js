import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VgImage from "../home/image/vg";
import GovImage from "./govImage";
import GovMain from "./govMain";

const Governance = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Start animation for the component
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
  }, [controls]);

  return (
    <motion.div animate={controls} initial={{ opacity: 0, y: 50 }}>
      <div className="py-10">
        <GovMain />
        <GovImage />
        <VgImage />
      </div>
    </motion.div>
  );
};

export default Governance;

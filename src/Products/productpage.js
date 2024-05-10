import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import CardSection from "../home/cardsection/cardsection";

const ProductPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    // Start animation for the component
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
  }, [controls]);

  return (
    <motion.div animate={controls} initial={{ opacity: 0, y: 50 }} className="py-20">
      <CardSection />
    </motion.div>
  );
};

export default ProductPage;

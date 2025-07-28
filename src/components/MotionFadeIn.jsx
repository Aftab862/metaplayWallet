// components/MotionFadeIn.js
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MotionFadeIn = ({ children, delay = 0.2, duration = 0.6, y = 50 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggeronce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { delay, duration } },
    };

    return (
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.div>
    );
};

export default MotionFadeIn;

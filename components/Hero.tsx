"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "./Buttons";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center" ref={containerRef}>
      <section className="relative max-w-full mx-auto z-1 pt-20">
        <motion.div 
          className="max-w-screen-xl z-10 mx-auto px-4 py-12 gap-12 text-gray-600 md:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={{ 
              opacity: textOpacity,
              scale: textScale,
            }}
            className="space-y-5 max-w-3xl mx-auto text-center mb-10"
          >
            <motion.h1 variants={itemVariants} className="text-sm text-gray-600 group font-satoshi mx-auto px-5 py-2 bg-gradient-to-tr from-blue-50/50 via-blue-100/50 to-transparent border-[2px] border-blue-200/20 rounded-3xl w-fit">
              Building Tools for the Future-Minded
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-4xl tracking-tighter font-geist bg-clip-text bg-[linear-gradient(180deg,_#1f2937_0%,_rgba(31,_41,_55,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl">
              Top Software development Agency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                with cutting-edge solutions
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-700 font-inter">
              Smart, lightweight, and scalable technology for individuals, startups, and businesses. We deliver websites, mobile apps, web applications, and custom digital solutions with rapid execution and beautiful design.
            </motion.p>
            <motion.div variants={itemVariants} className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <GradientButton content="Get started" />
            </motion.div>
          </motion.div>
          <motion.div 
            style={{ y: imageY }}
            className="mt-10 mx-auto max-w-4xl"
            variants={imageVariants}
          >
            <img
                src="/image/hero.svg"
                className="w-full"
                alt="Digital solutions dashboard preview"
              />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
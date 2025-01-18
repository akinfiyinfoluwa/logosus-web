"use client";

import React from "react";
import { motion } from "framer-motion";
import { GradientButton } from "./Buttons";

const AnimatedText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function CTA() {
  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl font-satoshi">
              Experience the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-200">Financial Automation</span> Today
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl font-satoshi">
              The first financial tool you&apos;ll love. And the last one you&apos;ll ever need.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
              <GradientButton content="Join now" />
            </span>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}

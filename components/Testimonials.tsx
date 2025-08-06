"use client";

import React, { useEffect, ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const testimonials = [
  [
    {
      content:
        "FinanceFlow has completely transformed how I handle my finances. The automation makes everything so easy, I no longer worry about missing any payments or filings.",
      author: {
        name: "Sheryl Berge",
        role: "CEO at Lynch LLC",
        image:
          "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      },
    },
    {
      content:
        "I was struggling to keep up with all the details, but FinanceFlow automated everything for me. It's a relief knowing everything is taken care of efficiently.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image:
          "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      },
    },
  ],
  [
    {
      content:
        "The automation features of FinanceFlow have made managing my company's finances a breeze. The time saved has been invaluable, and I no longer stress over tax season.",
      author: {
        name: "Leland Kiehn",
        role: "Founder of Kiehn and Sons",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      content:
        "With FinanceFlow, I no longer need to manually track every expense. The automation does it all for me, giving me more time to focus on growing my business.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
  ],
  [
    {
      content:
        "FinanceFlow made it so easy to automate my company's financial workflows. I'm no longer bogged down with administrative tasks, and I feel much more confident in my financial management.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image:
          "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
    },
    {
      content:
        "I've been waiting for a response from support for weeks now, but haven't received any communication. It's been incredibly frustrating and has affected my ability to resolve urgent issues.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image:
          "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
    },
  ],
];



function QuoteIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
}

function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="relative bg-transparent py-20 sm:py-10 z-1 bg-page-gradient"
    >
      <Container>
        <AnimatedElement>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-geist text-3xl tracking-tighter text-gray-900 sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                Loved
              </span>{" "}
              by businesses worldwide.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-gray-700 font-geist">
              Our software is so simple that people can&apos;t help but fall in
              love with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </AnimatedElement>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <AnimatedElement
                    key={testimonialIndex}
                    delay={columnIndex * 0.2 + testimonialIndex * 0.1}
                  >
                    <figure className="relative rounded-2xl bg-white transform-gpu [border:1px_solid_rgba(0,0,0,.1)] [box-shadow:0_-20px_80px_-20px_#0000001f_inset] p-6 shadow-xl">
                      <QuoteIcon className="absolute left-6 top-6 fill-blue-600 opacity-10" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-gray-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-200 pt-6">
                        <div>
                          <div className="font-display text-base text-gray-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </AnimatedElement>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
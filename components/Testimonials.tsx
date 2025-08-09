"use client";

import React, { useEffect, ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const testimonials = [
  [
    {
      content:
        "Logosus has created the most intuitive and friendly website for our readers and writers. The design is clean, the navigation is smooth, and the overall experience is just delightful.",
      author: {
        name: "Roland Bayode",
        role: "Editor in Chief at Gazette Africa",
        image:
          "https://media.licdn.com/dms/image/v2/C4E03AQEUWtP8OKM-Pg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1620756793101?e=1757548800&v=beta&t=ONMKb43CqmkhotKiBclYiwink0aynQ_FvXXmPrTToKU",
      },
    },],
    [
    {
      content:
        "We were hoping to create the best platform for our community, and Logosus delivered beyond our expectations. The website is not only beautiful but also incredibly functional.",
      author: {
        name: "Orukotan Eniola",
        role: "Editor in chief at ViralNaija",
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQEWYc7h3-H4bw/profile-displayphoto-shrink_800_800/B4DZXYE2KqG4Ag-/0/1743086906181?e=1757548800&v=beta&t=eRhhKnAHQg2fD2REbl2Sh26_u23SA7ivu73wO7J8a4E",
      },
    },
  ],
    [
    {
      content:
        "We had a problem with third party ecommerce applications, but Logosus provided us with a custom solution that not only solved our problem but also enhanced our user experience. Their team is responsive and professional.",
      author: {
        name: "Mojisola Akin-Ademola",
        role: "CEO at Winn's Couture",
        image:
          "https://scontent-lga3-3.cdninstagram.com/v/t51.2885-19/449181645_1263272565081942_349334778328774695_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NDcuYzIifQ&_nc_ht=scontent-lga3-3.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFExF03Y1_2l-R5EuHIpUOSIMNWgSQzdqN_YCPV-Ui2MpvaO__FdHcS8dr28fbQjLZtNANFMAEkQoa167lqCjHw&_nc_ohc=IXFhZ-5fCrAQ7kNvwENpM-o&_nc_gid=4kIkcf0hV0al9Nb5rxu5Gg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfWxO7wbqpD7FbWxf98NpC_5AkjlzcS-GFSVwZ7d4wKsVw&oe=689D50A0&_nc_sid=22de04",
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
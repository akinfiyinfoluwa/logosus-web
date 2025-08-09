"use client";

import React, { useEffect, ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Badge } from "./ui/badge";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    category: "Web Application",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features for motivation.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile App",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An intelligent content creation platform that uses AI to generate blog posts, social media content, and marketing copy.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "OpenAI API", "FastAPI", "React"],
    category: "AI/ML",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    category: "Website",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Chrome Extension Suite",
    description: "A productivity-focused Chrome extension that helps users manage tabs, block distractions, and track time spent on websites.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["JavaScript", "Chrome APIs", "Webpack", "CSS3"],
    category: "Browser Extension",
    liveUrl: "#",
    githubUrl: "#",
  },
];

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

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
}

function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-transparent py-20 sm:py-10 z-1"
    >
      <Container>
        <AnimatedElement>
          <div className="w-[70%] mx-auto">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>Our Work</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left font-satoshi">
                  Portfolio Showcase
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left font-satoshi">
                  Explore our recent projects and see how we've helped businesses transform their digital presence with innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        <div className="w-[70%] mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <AnimatedElement key={item.id} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white transform-gpu [border:1px_solid_rgba(0,0,0,.1)] [box-shadow:0_-20px_80px_-20px_#0000001f_inset] shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={item.liveUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                        aria-label="View live project"
                      >
                        <ExternalLinkIcon className="w-4 h-4 text-gray-700" />
                      </a>
                      <a
                        href={item.githubUrl}
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                        aria-label="View source code"
                      >
                        <GitHubLogoIcon className="w-4 h-4 text-gray-700" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 font-satoshi">
                        {item.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-satoshi">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        <AnimatedElement delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6 font-satoshi">
              Ready to start your next project?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 font-satoshi"
            >
              Get In Touch
            </a>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
}

"use client";

import React, { useRef, useMemo } from "react";
import { Check, MoveRight, PhoneCall } from 'lucide-react';
import { motion, useAnimation, useInView, UseInViewOptions } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedElement = React.memo<AnimatedElementProps>(({ children, delay = 0 }) => {
  const ref = useRef(null);
  const animation = useAnimation();
  const inView = useInView(ref, { once: true, amount: 0.2 } as UseInViewOptions);

  const controls = useMemo(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: delay,
        },
      });
    }
    return animation;
  }, [inView, animation, delay]);

  const initialStyle = {
    opacity: 0,
    x: -100,
  };

  return (
    <motion.div ref={ref} initial={initialStyle} animate={controls}>
      {children}
    </motion.div>
  );
});

AnimatedElement.displayName = 'AnimatedElement';

export default function Pricing() {
  return (
    <div className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Transparent Pricing, Full Ownership
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Build once, own forever. Choose project-based builds or ongoing maintenance plans.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-[80%] gap-8">
            <AnimatedElement delay={0}>
              <Card className="w-full rounded-md bg-white transform-gpu [border:1px_solid_rgba(0,0,0,.1)] [box-shadow:0_-20px_80px_-20px_#0000001f_inset] shadow-xl"><CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      Project Build
                    </span>
                  </CardTitle>
                  <CardDescription>
                    One-time project builds for websites, apps, and digital solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row  items-center gap-2 text-xl">
                      <span className="text-4xl">$2K+</span>
                      <span className="text-sm text-muted-foreground">
                        {" "}per project
                      </span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Full ownership</p>
                          <p className="text-muted-foreground text-sm">
                            You own the complete source code and assets.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Rapid delivery</p>
                          <p className="text-muted-foreground text-sm">
                            Fast execution with beautiful, scalable design.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Modern tech stack</p>
                          <p className="text-muted-foreground text-sm">
                            Built with latest frameworks and best practices.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-4 bg-transparent hover:bg-gray-50 border-gray-200">
                      Start project <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <Card className="w-full rounded-md bg-gradient-to-r from-blue-600 to-blue-700 transform-gpu border-0 shadow-xl scale-105"><CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal text-white">
                      Maintenance Plan
                    </span>
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Ongoing hosting, security, and updates for your digital platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row items-center gap-2 text-xl text-white">
                      <span className="text-4xl">$99</span>
                      <span className="text-sm text-blue-100">
                        {" "} / month
                      </span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-white" />
                        <div className="flex flex-col text-white">
                          <p>Hosting & security</p>
                          <p className="text-blue-100 text-sm">
                            We manage, secure, and update your platforms.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-white" />
                        <div className="flex flex-col text-white">
                          <p>Performance monitoring</p>
                          <p className="text-blue-100 text-sm">
                            24/7 uptime monitoring and optimization.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-white" />
                        <div className="flex flex-col text-white">
                          <p>Flexible scaling</p>
                          <p className="text-blue-100 text-sm">
                            Suspend or scale based on your growth needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="gap-4 bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300">
                      Get started <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <Card className="w-full rounded-md bg-white transform-gpu [border:1px_solid_rgba(0,0,0,.1)] [box-shadow:0_-20px_80px_-20px_#0000001f_inset] shadow-xl"><CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      Custom Solutions
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Tailored software based on your business needs or market gaps.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row  items-center gap-2 text-xl">
                      <span className="text-4xl">Custom</span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>API integrations</p>
                          <p className="text-muted-foreground text-sm">
                            Connect with payment gateways and automation pipelines.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Fast delivery cycle</p>
                          <p className="text-muted-foreground text-sm">
                            Rapid execution with transparent maintenance.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Ownership clarity</p>
                          <p className="text-muted-foreground text-sm">
                            Full control and ownership of your custom solution.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-4 bg-transparent hover:bg-gray-50 border-gray-200">
                      Book a meeting <PhoneCall className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}
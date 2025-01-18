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
              Prices that make sense!
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Managing a small business today is already tough.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-[80%] gap-8">
            <AnimatedElement delay={0}>
              <Card className="w-full rounded-md bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-xl">
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      Startup
                    </span>
                  </CardTitle>
                  <CardDescription>
                    A simple plan for getting started and growing your small business.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row  items-center gap-2 text-xl">
                      <span className="text-4xl">$40</span>
                      <span className="text-sm text-muted-foreground">
                        {" "}/ month
                      </span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Basic features</p>
                          <p className="text-muted-foreground text-sm">
                            Essential tools to manage your business.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Cloud-based storage</p>
                          <p className="text-muted-foreground text-sm">
                            Store your files and data safely in the cloud.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Customer support</p>
                          <p className="text-muted-foreground text-sm">
                            24/7 support to assist you when needed.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-4 bg-transparent hover:bg-white/10 border-white/10">
                      Sign up today <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement delay={0.2}>
              <Card className="w-full rounded-md bg-gradient-to-r from-green-300 to-blue-200 transform-gpu border-0 shadow-xl scale-105">
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal text-slate-950">
                      Growth
                    </span>
                  </CardTitle>
                  <CardDescription className="text-slate-800">
                    Scale your business and enhance your operations with advanced tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-8 justify-start">
                    <p className="flex flex-row items-center gap-2 text-xl text-slate-950">
                      <span className="text-4xl">$80</span>
                      <span className="text-sm text-slate-800">
                        {" "} / month
                      </span>
                    </p>
                    <div className="flex flex-col gap-4 justify-start">
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-slate-950" />
                        <div className="flex flex-col text-slate-950">
                          <p>Advanced analytics</p>
                          <p className="text-slate-800 text-sm">
                            Get detailed reports and insights into your business.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-slate-950" />
                        <div className="flex flex-col text-slate-950">
                          <p>Priority customer support</p>
                          <p className="text-slate-800 text-sm">
                            Get faster response times with priority support.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-slate-950" />
                        <div className="flex flex-col text-slate-950">
                          <p>Automated invoicing</p>
                          <p className="text-slate-800 text-sm">
                            Automatically generate and send invoices to clients.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button className="gap-4 bg-gradient-to-r from-green-300 to-blue-200 text-slate-950 hover:from-green-400 hover:to-blue-300 transition-all duration-300">
                      Sign up today <MoveRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <Card className="w-full rounded-md bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] shadow-xl">
                <CardHeader>
                  <CardTitle>
                    <span className="flex flex-row gap-4 items-center font-normal">
                      Enterprise
                    </span>
                  </CardTitle>
                  <CardDescription>
                    Tailored solutions for large enterprises with unique needs.
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
                          <p>Custom solutions</p>
                          <p className="text-muted-foreground text-sm">
                            We offer personalized solutions to meet your business goals.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Dedicated account manager</p>
                          <p className="text-muted-foreground text-sm">
                            You'll have a dedicated support manager for your business.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-4">
                        <Check className="w-4 h-4 mt-2 text-primary" />
                        <div className="flex flex-col">
                          <p>Advanced integrations</p>
                          <p className="text-muted-foreground text-sm">
                            Integrate with your existing enterprise software.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="gap-4 bg-transparent hover:bg-white/10 border-white/10">
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


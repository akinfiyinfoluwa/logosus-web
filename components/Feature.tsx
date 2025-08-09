import {
  GlobeIcon,
  MobileIcon,
  DesktopIcon,
  ComponentInstanceIcon,
  GearIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "./ui/badge";

const features = [
  {
    Icon: GlobeIcon,
    name: "Websites",
    description: "Modern, responsive websites for businesses, creators, and communities. Fast-loading, SEO-optimized, and easy to manage.",
    href: "/",
    cta: "Learn more",
    background: <img alt="websites" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: MobileIcon,
    name: "Mobile Applications",
    description: "Android and iOS apps for e-commerce, education, productivity, and more. Native or cross-platform solutions.",
    href: "/",
    cta: "Learn more",
    background: <img alt="mobile-apps" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: DesktopIcon,
    name: "Web Applications",
    description: "Dynamic, cloud-based platforms for internal tools, client dashboards, booking systems, and CMS solutions.",
    href: "/",
    cta: "Learn more",
    background: <img alt="web-apps" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Pencil2Icon,
    name: "Expert Platform Development",
    description: "Specialized development services for popular platforms. We leverage the strengths of each platform to deliver exceptional results.",
    href: "/",
    cta: "Learn more",
    background: <img alt="platform-development" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start- lg:row-end-2",
    
  },
  {
    Icon: GearIcon,
    name: "Custom Digital Solutions",
    description: "Tailored software based on your business needs. API integrations, payment gateways, and automation pipelines.",
    href: "/",
    cta: "Learn more",
    background: <img alt="custom-solutions" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Feature() {
  return (
    <div className="w-[70%] mx-auto mt-32">
      <div className="flex gap-4 flex-col items-start">
        <div>
          <Badge>Core Offerings</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left font-satoshi">
            Digital Solutions That Scale With You
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left font-satoshi">
            From websites to mobile apps, we build modular systems that grow with your needs. Beautiful design meets rapid execution.
          </p>
        </div>
      </div>
      <BentoGrid className="lg:grid-rows-3 mt-10">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

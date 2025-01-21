import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Badge } from "./ui/badge";

const features = [
  {
    Icon: FileTextIcon,
    name: "Automatic Reports",
    description: "Generate detailed financial reports instantly with no manual work.",
    href: "/",
    cta: "Learn more",
    background: <img alt="feature1" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Real-time Analytics",
    description: "Track and analyze your financial data in real time.",
    href: "/",
    cta: "Learn more",
    background: <img alt="feature2" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Global Support",
    description: "Handle financial transactions across multiple currencies and regions.",
    href: "/",
    cta: "Learn more",
    background: <img alt="feature3" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Financial Calendar",
    description: "Plan and track your financial milestones with an interactive calendar.",
    href: "/",
    cta: "Learn more",
    background: <img alt="feature4" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Automated Alerts",
    description:
      "Get notified of important financial events like payments, due dates, and account changes.",
    href: "/",
    cta: "Learn more",
    background: <img alt="feature5" className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function Feature() {
  return (
    <div className="w-[70%] mx-auto mt-32">
      <div className="flex gap-4 flex-col items-start">
        <div>
          <Badge>Features</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left font-satoshi">
            Enhance Your Financial Operations
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left font-satoshi">
            Our platform automates and streamlines your financial processes, saving you time and reducing errors.
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

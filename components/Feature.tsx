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
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    content: (
      <div className="space-y-4 text-sm">
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>🔧</span>
            <span>WordPress Development</span>
          </div>
          <p className="text-muted-foreground mb-2">Custom WordPress themes, plugins, and e-commerce solutions. From simple blogs to complex business websites with WooCommerce integration.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">Custom Themes</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Plugin Development</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">WooCommerce</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">SEO Optimization</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>🎨</span>
            <span>Webflow Design & Development</span>
          </div>
          <p className="text-muted-foreground mb-2">Pixel-perfect Webflow websites with custom interactions and CMS integration. No-code solutions that look and feel premium.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">Custom Animations</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">CMS Integration</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Responsive Design</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">E-commerce</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>⚡</span>
            <span>Wix Professional Setup</span>
          </div>
          <p className="text-muted-foreground mb-2">Professional Wix websites with advanced customization, third-party integrations, and business automation features.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">Custom Design</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">App Integrations</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Business Tools</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Mobile Optimization</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>🛒</span>
            <span>Shopify Store Development</span>
          </div>
          <p className="text-muted-foreground mb-2">Complete Shopify e-commerce solutions with custom themes, app integrations, and conversion optimization.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">Custom Themes</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">App Development</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Payment Integration</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Analytics Setup</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>📐</span>
            <span>Squarespace Customization</span>
          </div>
          <p className="text-muted-foreground mb-2">Enhanced Squarespace websites with custom CSS, advanced layouts, and third-party service integrations.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">Custom CSS</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Layout Design</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Third-party Tools</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Portfolio Optimization</span>
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 font-medium mb-2">
            <span>🔄</span>
            <span>Platform Migration</span>
          </div>
          <p className="text-muted-foreground mb-2">Seamless migration between platforms while preserving SEO rankings, content, and user experience.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-muted px-2 py-1 rounded text-xs">SEO Preservation</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Content Migration</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Design Consistency</span>
            <span className="bg-muted px-2 py-1 rounded text-xs">Zero Downtime</span>
          </div>
        </div>
      </div>
    ),
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

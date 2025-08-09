import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Globe, ShoppingCart, Palette, Code, Layers, ArrowRightLeft } from "lucide-react";

const services = [
  {
    name: "WordPress Development",
    description: "Custom WordPress themes, plugins, and e-commerce solutions. From simple blogs to complex business websites with WooCommerce integration.",
    features: ["Custom Themes", "Plugin Development", "WooCommerce", "SEO Optimization"],
    icon: <Code className="w-6 h-6 text-blue-600" />
  },
  {
    name: "Webflow Design & Development",
    description: "Pixel-perfect Webflow websites with custom interactions and CMS integration. No-code solutions that look and feel premium.",
    features: ["Custom Animations", "CMS Integration", "Responsive Design", "E-commerce"],
    icon: <Palette className="w-6 h-6 text-purple-600" />
  },
  {
    name: "Wix Professional Setup",
    description: "Professional Wix websites with advanced customization, third-party integrations, and business automation features.",
    features: ["Custom Design", "App Integrations", "Business Tools", "Mobile Optimization"],
    icon: <Globe className="w-6 h-6 text-orange-600" />
  },
  {
    name: "Shopify Store Development",
    description: "Complete Shopify e-commerce solutions with custom themes, app integrations, and conversion optimization.",
    features: ["Custom Themes", "App Development", "Payment Integration", "Analytics Setup"],
    icon: <ShoppingCart className="w-6 h-6 text-green-600" />
  },
  {
    name: "Squarespace Customization",
    description: "Enhanced Squarespace websites with custom CSS, advanced layouts, and third-party service integrations.",
    features: ["Custom CSS", "Layout Design", "Third-party Tools", "Portfolio Optimization"],
    icon: <Layers className="w-6 h-6 text-pink-600" />
  },
  {
    name: "Platform Migration",
    description: "Seamless migration between platforms while preserving SEO rankings, content, and user experience.",
    features: ["SEO Preservation", "Content Migration", "Design Consistency", "Zero Downtime"],
    icon: <ArrowRightLeft className="w-6 h-6 text-indigo-600" />
  },
];

export default function Services() {
  return (
    <div className="w-[70%] mx-auto mt-32">
      <div className="flex gap-4 flex-col items-start mb-12">
        <div>
          <Badge>Platform Services</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left font-satoshi">
            Expert Platform Development
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left font-satoshi">
            Specialized development services for popular platforms. We leverage the strengths of each platform to deliver exceptional results.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-satoshi">{service.name}</CardTitle>
              </div>
              <CardDescription className="text-muted-foreground font-satoshi">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-md font-satoshi"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
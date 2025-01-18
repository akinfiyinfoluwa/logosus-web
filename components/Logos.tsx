import Marquee from "@/components/ui/marquee";


const logos = [
  {
    name: "Duolingo",
    icon: "/duolingo.svg", 
  },
  {
    name: "Ford",
    icon: "/ford.svg", 
  },
  {
    name: "Mercedes",
    icon: "/mercedez.svg", 
  },
  {
    name: "New York Times",
    icon: "/newyorktimes.svg", 
  },
  {
    name: "Philips",
    icon: "/philips.svg", 
  },
  {
    name: "SAP",
    icon: "/sap.svg", 
  },
  {
    name: "Shopify",
    icon: "/shopify.svg", 
  },
  {
    name: "Spotify",
    icon: "/spotify.svg", 
  },
  {
    name: "Vodafone",
    icon: "/vodafone.svg", 
  },
];


const firstRow = logos.slice(0, logos.length / 2);

const MarqueeLogoDemo = () => {
  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((logo) => (
          <div key={logo.name} className="mx-6">
            <img src={logo.icon} alt={logo.name} className="h-12 w-auto" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLogoDemo;

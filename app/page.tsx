import Nav from "@/components/Nav";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import MarqueeLogoDemo from "@/components/Logos";
import BlogSection from "@/components/Blog";
import Portfolio from "@/components/Portfolio";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(134,134,240,.12),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(134,134,240,.12),rgba(255,255,255,0))]"></div>
      </div>
      <Nav />
      <section className="py-16">
        <Hero />
      </section>

      <section className="py-16">
        <MarqueeLogoDemo />
      </section>

      <section className="py-20">
        <Feature />
      </section>

      <section className="py-20">
        <Portfolio />
      </section>

      <section className="py-24">
        <Testimonials />
      </section>

      <section className="py-20">
        <Pricing />
      </section>

      <section className="py-20">
        <BlogSection />
      </section>

      <section className="py-20">
        <CTA />
      </section>

      <Footer />
    </main>
  );
};

export default Home;


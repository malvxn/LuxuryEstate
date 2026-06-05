import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Lifestyle from "@/components/home/Lifestyle";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <WhyChooseUs />
      <Lifestyle />
      <Testimonials />
      <CTA />
    </>
  );
}
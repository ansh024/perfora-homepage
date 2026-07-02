import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import PressMarqueeStrip from "./components/PressMarqueeStrip";
import ShopByCategory from "./components/ShopByCategory";
import TrustedBySmiles from "./components/TrustedBySmiles";
import WhyPerfora from "./components/WhyPerfora";
import SiteFooter from "./components/SiteFooter";
import BrushSpotlight from "./components/BrushSpotlight";
import OurStorySection from "./components/OurStorySection";

const VideoTestimonials = dynamic(
  () => import("./components/VideoTestimonials"),
  { loading: () => <div style={{ height: 420, background: "#FAFAFA" }} /> }
);

const SmileWorthySavings = dynamic(
  () => import("./components/SmileWorthySavings"),
  { loading: () => <div style={{ height: 500, background: "#F6F1FF" }} /> }
);

const OralCareEssentials = dynamic(
  () => import("./components/OralCareEssentials"),
  { loading: () => <div style={{ height: 560, background: "#FFFFFF" }} /> }
);

const DoctorRecommended = dynamic(
  () => import("./components/DoctorRecommended"),
  { loading: () => <div style={{ height: 350, background: "#FFFFFF" }} /> }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PressMarqueeStrip />
        <ShopByCategory />
        <SmileWorthySavings />
        <DoctorRecommended />
        <OralCareEssentials />
        <BrushSpotlight />
        {/* Video Reviews */}
        <VideoTestimonials />
        {/* Reviews */}
        <TrustedBySmiles />
        {/* What makes Perfora different */}
        <WhyPerfora />
        {/* Our Story */}
        <OurStorySection />
        {/* Trusted by shoppers across India */}
        <MarqueeStrip />
      </main>
      <SiteFooter />
    </>
  );
}

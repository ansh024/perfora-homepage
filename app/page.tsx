import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import ShopByCategory from "./components/ShopByCategory";
import TrustedBySmiles from "./components/TrustedBySmiles";
import WhyPerfora from "./components/WhyPerfora";
import SiteFooter from "./components/SiteFooter";
import BrushSpotlight from "./components/BrushSpotlight";

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
        <MarqueeStrip />
        <ShopByCategory />
        <SmileWorthySavings />
        <DoctorRecommended />
        <OralCareEssentials />
        <BrushSpotlight />
        <VideoTestimonials />
        <TrustedBySmiles />
        <WhyPerfora />
      </main>
      <SiteFooter />
    </>
  );
}

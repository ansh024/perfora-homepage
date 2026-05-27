import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import PDPHero from "../../components/PDPHero";
import PDPClinicalResults from "../../components/PDPClinicalResults";
import PDPAdvancedFormula from "../../components/PDPAdvancedFormula";
import PDPResults7Days from "../../components/PDPResults7Days";
import PDPReviews from "../../components/PDPReviews";
import PDPFaq from "../../components/PDPFaq";
import SiteFooter from "../../components/SiteFooter";

const VideoTestimonials = dynamic(
  () => import("../../components/VideoTestimonials"),
  { loading: () => <div style={{ height: 380, background: "#FAFAFA" }} /> }
);

export default function PDPPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Top section: exact Figma (product info → bundle) ── */}
        <PDPHero />

        {/* ── Below bundle: homepage video carousel (replaces Figma UGC section) ── */}
        <VideoTestimonials />

        {/* ── Rest of PDP sections ── */}
        <PDPClinicalResults />
        <PDPAdvancedFormula />
        <PDPResults7Days />
        <PDPReviews />
        <PDPFaq />
      </main>
      <SiteFooter />
    </>
  );
}

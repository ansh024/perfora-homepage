import type { Metadata } from "next";
import PurpleHero from "./_components/PurpleHero";

export const metadata: Metadata = {
  title: "Purple Magic Whitening Serum | Color Correction for Teeth | Perfora",
  description:
    "A modern approach to brighter-looking teeth. Purple Magic Whitening Serum combines instant color correction technology with enamel-safe daily-use ingredients.",
};

export default function PurpleMagicPage() {
  return (
    <main>
      <PurpleHero />
    </main>
  );
}

import HeroSection from "../components/HeroSection";
import SuggestionsSection from "../components/SuggestionsSection";
import PlanLaterSection from "../components/PlanLaterSection";
import NextTripSection from "../components/NextTripSection";
import DriveSection from "../components/DriveSection";
import BusinessSection from "../components/BusinessSection";
import AppDownloadSection from "../components/AppDownloadSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SuggestionsSection />
      <PlanLaterSection />
      <NextTripSection />
      <DriveSection />
      <BusinessSection />
      <AppDownloadSection />
    </main>
  );
}

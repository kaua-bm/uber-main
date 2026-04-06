import HeroSection from "../components/home/HeroSection";
import SuggestionsSection from "../components/home/SuggestionsSection";
import PlanLaterSection from "../components/home/PlanLaterSection";
import NextTripSection from "../components/home/NextTripSection";
import DriveSection from "../components/home/DriveSection";
import BusinessSection from "../components/home/BusinessSection";
import AppDownloadSection from "../components/home/AppDownloadSection";

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

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LatestUpdates } from "./components/LatestUpdates";
import { QuickLinks } from "./components/QuickLinks";
import { Playbooks } from "./components/Playbooks";
import { Community } from "./components/Community";
import { ConnectingDots } from "./components/ConnectingDots";
import { FeaturedContent } from "./components/FeaturedContent";
import { SuccessStories } from "./components/SuccessStories";
import { Resources } from "./components/Resources";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { PlaybooksDetail } from "./components/PlaybooksDetail";
import { CommunityDetail } from "./components/CommunityDetail";
import { ConnectingDotsDetail } from "./components/ConnectingDotsDetail";
import { Toaster } from "./components/ui/sonner";

export type ViewType = "home" | "playbooks" | "community" | "connecting-dots";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const navigateToHome = () => setCurrentView("home");
  const navigateToPlaybooks = () => setCurrentView("playbooks");
  const navigateToCommunity = () => setCurrentView("community");
  const navigateToConnectingDots = () => setCurrentView("connecting-dots");

  const handleHeaderNavigation = (section: string) => {
    if (currentView !== "home") {
      // Navigate to home first, then scroll after a brief delay
      setCurrentView("home");
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Header 
        onNavigateHome={navigateToHome}
        onNavigateToSection={handleHeaderNavigation}
      />
      
      {currentView === "home" && (
        <>
          <Hero />
          <LatestUpdates />
          <QuickLinks />
          <Playbooks onNavigateToDetail={navigateToPlaybooks} />
          <FeaturedContent />
          <Community onNavigateToDetail={navigateToCommunity} />
          <ConnectingDots onNavigateToDetail={navigateToConnectingDots} />
          <SuccessStories />
          <Resources />
          <FAQSection />
        </>
      )}

      {currentView === "playbooks" && (
        <PlaybooksDetail onNavigateBack={navigateToHome} />
      )}

      {currentView === "community" && (
        <CommunityDetail onNavigateBack={navigateToHome} />
      )}

      {currentView === "connecting-dots" && (
        <ConnectingDotsDetail onNavigateBack={navigateToHome} />
      )}

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
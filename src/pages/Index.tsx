import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import ThemesSection from "@/components/ThemesSection";
import JudgesSection from "@/components/JudgesSection";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <ScheduleSection />
      <ThemesSection />
      <JudgesSection />
      <DiscordSection />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import ThemesSection from "@/components/ThemesSection";
import JudgesSection from "@/components/JudgesSection";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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

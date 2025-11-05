import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      <Navigation onJoinWaitlist={() => setWaitlistOpen(true)} />
      <Hero onJoinWaitlist={() => setWaitlistOpen(true)} />
      <Benefits />
      <Testimonials />
      <Pricing onJoinWaitlist={() => setWaitlistOpen(true)} />
      <FinalCTA onJoinWaitlist={() => setWaitlistOpen(true)} />
      <Footer />
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </div>
  );
};

export default Index;

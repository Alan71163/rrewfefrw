import { Button } from "@/components/ui/button";

interface NavigationProps {
  onJoinWaitlist: () => void;
}

const Navigation = ({ onJoinWaitlist }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="gold-shimmer w-11 h-11 rounded-xl flex items-center justify-center font-semibold text-sm tracking-tighter text-black shadow-lg">
              1%
            </div>
            <span className="text-lg font-medium tracking-tight text-white/90">The 1% Club</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#benefits" className="text-[15px] text-white/60 hover:text-white transition-all duration-300">Benefits</a>
            <a href="#testimonials" className="text-[15px] text-white/60 hover:text-white transition-all duration-300">Members</a>
            <a href="#pricing" className="text-[15px] text-white/60 hover:text-white transition-all duration-300">Pricing</a>
            <button 
              onClick={onJoinWaitlist}
              className="gold-shimmer text-black px-6 py-2.5 rounded-full text-[15px] font-medium premium-shadow hover:scale-105 transition-all duration-300"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

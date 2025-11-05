import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onJoinWaitlist: () => void;
}

const FinalCTA = ({ onJoinWaitlist }: FinalCTAProps) => {
  return (
    <section className="py-24 lg:py-40 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="rounded-[40px] p-14 lg:p-20 premium-glow hover:scale-105 transition-all duration-500"
             style={{
               background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(197, 160, 40, 0.05))',
               backdropFilter: 'blur(40px)'
             }}>
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-8 text-shadow-gold">Ready to Join the 1%?</h2>
          <p className="text-[21px] text-white/50 mb-12 leading-relaxed font-light">
            Stop settling for average. Your extraordinary life is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button 
              onClick={onJoinWaitlist}
              className="group gold-shimmer text-black px-10 py-5 rounded-full text-[17px] font-medium premium-shadow hover:scale-105 transition-all duration-500 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2.5">
                Claim Your Spot Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </span>
            </button>
            <button 
              onClick={onJoinWaitlist}
              className="glass-effect text-white px-10 py-5 rounded-full text-[17px] font-medium hover:bg-white/10 transition-all duration-500 w-full sm:w-auto"
            >
              Schedule a Call
            </button>
          </div>
          <p className="text-sm text-white/40 mt-8 font-light">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

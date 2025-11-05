import { ArrowRight } from "lucide-react";

interface HeroProps {
  onJoinWaitlist: () => void;
}

const Hero = ({ onJoinWaitlist }: HeroProps) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[800px] h-[800px] rounded-full -top-[400px] -left-[200px] blur-[80px] opacity-30 animate-aurora"
             style={{ background: 'radial-gradient(circle, hsl(var(--gold)) 0%, transparent 70%)' }}></div>
        <div className="absolute w-[800px] h-[800px] rounded-full -bottom-[400px] -right-[200px] blur-[80px] opacity-30 animate-aurora"
             style={{ background: 'radial-gradient(circle, hsl(var(--gold-dark)) 0%, transparent 70%)', animationDelay: '7.5s' }}></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2.5 glass-effect rounded-full px-5 py-2.5 mb-10 animate-float">
            <div className="w-2 h-2 rounded-full animate-pulse-gold bg-[hsl(var(--gold))]"></div>
            <span className="text-sm text-white/70 font-light">Only 247 spots remaining this month</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[0.95] text-shadow-gold">
            Join the Elite
            <span className="block text-premium-gold mt-2">1% of Achievers</span>
          </h1>
          
          <p className="text-[21px] text-white/50 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
            Unlock exclusive access to curated resources, a network of world-class entrepreneurs, and opportunities reserved only for those who refuse to be average.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <button 
              onClick={onJoinWaitlist}
              className="group gold-shimmer text-black px-10 py-5 rounded-full text-[17px] font-medium premium-shadow hover:scale-105 transition-all duration-500 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2.5">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
              </span>
            </button>
            <button 
              onClick={onJoinWaitlist}
              className="glass-effect text-white px-10 py-5 rounded-full text-[17px] font-medium hover:bg-white/10 transition-all duration-500 w-full sm:w-auto"
            >
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl font-semibold mb-2 text-premium-gold">10K+</div>
              <div className="text-[15px] text-white/40 font-light">Elite Members</div>
            </div>
            <div className="glass-effect rounded-3xl p-8 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl font-semibold mb-2 text-premium-gold">$2.4B</div>
              <div className="text-[15px] text-white/40 font-light">Combined Revenue</div>
            </div>
            <div className="glass-effect rounded-3xl p-8 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl font-semibold mb-2 text-premium-gold">150+</div>
              <div className="text-[15px] text-white/40 font-light">Countries</div>
            </div>
            <div className="glass-effect rounded-3xl p-8 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="text-5xl font-semibold mb-2 text-premium-gold">98%</div>
              <div className="text-[15px] text-white/40 font-light">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

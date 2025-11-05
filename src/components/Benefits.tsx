import { Users, Zap, TrendingUp, Shield, Globe, Target } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Elite Network",
    description: "Connect with CEOs, founders, and industry leaders. Private events, masterminds, and collaborations that accelerate your success."
  },
  {
    icon: Zap,
    title: "Exclusive Resources",
    description: "Access to proprietary tools, frameworks, and insights worth $50K+. Weekly masterclasses from world-class experts."
  },
  {
    icon: TrendingUp,
    title: "Deal Flow",
    description: "Early access to pre-seed investments, partnerships, and opportunities unavailable to the general public."
  },
  {
    icon: Shield,
    title: "Personal Concierge",
    description: "24/7 dedicated support team. From travel arrangements to business introductions, we handle the details."
  },
  {
    icon: Globe,
    title: "Global Events",
    description: "Annual summits in Dubai, Monaco, and NYC. Private dinners, yacht parties, and experiences money can't buy."
  },
  {
    icon: Target,
    title: "Accountability",
    description: "Personal success manager and peer accountability groups. Stay focused, achieve more, faster."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 lg:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 text-shadow-gold">Why Join the 1%?</h2>
          <p className="text-[21px] text-white/50 max-w-3xl mx-auto font-light">Access privileges that money can't buy and connections that change everything.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-effect rounded-3xl p-10 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500"
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                     boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)'
                   }}>
                <benefit.icon className="w-7 h-7 text-[hsl(var(--gold))]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-white/50 leading-relaxed text-[17px] font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

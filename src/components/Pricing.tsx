import { Check } from "lucide-react";

interface PricingProps {
  onJoinWaitlist: () => void;
}

const pricingTiers = [
  {
    name: "ESSENTIAL",
    price: "$15",
    features: [
      "Access to private community",
      "Resource library",
      "AI-powered insights"
    ],
    buttonText: "Get Started",
    featured: false
  },
  {
    name: "ELITE",
    price: "$35",
    features: [
      "Everything in Essential",
      "Personal success manager",
      "Exclusive deal flow access",
      "Quarterly summit tickets",
      "AI expert consultation"
    ],
    buttonText: "Join Elite",
    featured: true
  },
  {
    name: "PLATINUM",
    price: "$85",
    features: [
      "Everything in Elite",
      "24/7 concierge service",
      "Private mastermind groups",
      "All global events included",
      "Priority deal introductions"
    ],
    buttonText: "Apply Now",
    featured: false
  }
];

const Pricing = ({ onJoinWaitlist }: PricingProps) => {
  return (
    <section id="pricing" className="py-24 lg:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 text-shadow-gold">Investment Tiers</h2>
          <p className="text-[21px] text-white/50 max-w-3xl mx-auto font-light">Choose the level that matches your ambition.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-10 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative ${
                tier.featured 
                  ? 'premium-glow' 
                  : 'glass-effect'
              }`}
              style={tier.featured ? {
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(197, 160, 40, 0.05))',
                backdropFilter: 'blur(40px)'
              } : {}}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-shimmer text-black px-5 py-2 rounded-full text-sm font-medium premium-shadow">
                  Most Popular
                </div>
              )}
              <div className={`text-sm font-light mb-3 tracking-wider ${tier.featured ? 'text-[hsl(var(--gold))]' : 'text-white/40'}`}>
                {tier.name}
              </div>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-semibold tracking-tighter text-premium-gold">{tier.price}</span>
                <span className="text-white/40 font-light">/month</span>
              </div>
              <ul className="space-y-5 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-[hsl(var(--gold))]" strokeWidth={1.5} />
                    <span className="text-white/60 text-[17px] font-light">
                      {feature.includes('Everything in') ? (
                        <strong className="font-medium text-white">{feature}</strong>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={onJoinWaitlist}
                className={`w-full py-4 rounded-full font-medium text-[17px] transition-all duration-500 ${
                  tier.featured 
                    ? 'gold-shimmer text-black premium-shadow hover:scale-105' 
                    : 'glass-effect text-white hover:bg-white/10'
                }`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-white/40 font-light text-[17px]">All plans include a 30-day money-back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

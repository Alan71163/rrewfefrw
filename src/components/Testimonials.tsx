import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Tech Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote: "The connections I've made here led to a $5M Series A. The ROI is immeasurable. Best investment of my career."
  },
  {
    name: "Sarah Mitchell",
    role: "CEO, Growth Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote: "Went from $2M to $12M ARR in 18 months. The network and resources are absolutely world-class."
  },
  {
    name: "David Park",
    role: "Angel Investor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    quote: "Access to deal flow alone pays for itself 10x over. Plus the community is genuinely supportive and elite."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-40 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter mb-6 text-shadow-gold">Trusted by Industry Leaders</h2>
          <p className="text-[21px] text-white/50 max-w-3xl mx-auto font-light">See what members are saying about their transformation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-effect rounded-3xl p-10 inner-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  className="w-14 h-14 rounded-full ring-2 ring-white/10" 
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-medium text-[17px]">{testimonial.name}</div>
                  <div className="text-[15px] text-white/40 font-light">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed text-[17px] font-light mb-6">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" strokeWidth={1.5} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="gold-shimmer w-9 h-9 rounded-xl flex items-center justify-center font-semibold text-xs tracking-tighter text-black shadow-lg">
                1%
              </div>
              <span className="font-medium tracking-tight">The 1% Club</span>
            </div>
            <p className="text-[15px] text-white/40 font-light">Elite community for extraordinary achievers.</p>
          </div>
          <div>
            <div className="text-[15px] font-medium mb-4">Product</div>
            <div className="space-y-3">
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Features</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Pricing</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">FAQ</a>
            </div>
          </div>
          <div>
            <div className="text-[15px] font-medium mb-4">Company</div>
            <div className="space-y-3">
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">About</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Blog</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Careers</a>
            </div>
          </div>
          <div>
            <div className="text-[15px] font-medium mb-4">Legal</div>
            <div className="space-y-3">
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Privacy</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Terms</a>
              <a href="#" className="block text-[15px] text-white/40 hover:text-white transition-colors font-light">Contact</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[15px] text-white/40 font-light">© 2024 The 1% Club. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

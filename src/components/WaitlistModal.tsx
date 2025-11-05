import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid Gmail address" }).max(255, { message: "Email must be less than 255 characters" })
});

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const validation = emailSchema.safeParse({ email });
      
      if (!validation.success) {
        setError(validation.error.errors[0].message);
        setIsSubmitting(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("You're on the waitlist!", {
        description: "We'll notify you when spots become available."
      });
      
      setEmail("");
      onOpenChange(false);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-effect border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight text-center">Join the Waitlist</DialogTitle>
          <DialogDescription className="text-center text-white/50">
            Enter your Gmail to secure your spot in The 1% Club
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" strokeWidth={1.5} />
              <Input
                type="email"
                placeholder="your.email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[hsl(var(--gold))] h-12 rounded-xl"
                disabled={isSubmitting}
                maxLength={255}
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gold-shimmer text-black h-12 rounded-xl text-[15px] font-medium premium-shadow hover:scale-105 transition-all duration-300"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
          <p className="text-xs text-white/40 text-center">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;

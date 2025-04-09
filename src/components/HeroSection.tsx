import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface HeroSectionProps {
  onGetQuoteClick?: () => void;
}

const HeroSection = ({ onGetQuoteClick }: HeroSectionProps = {}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image - Metal Craftsmanship */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 z-10 glassmorphic-dark" />

      {/* Content Container */}
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Heading */}
          <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Precision Metal Craftsmanship That Transforms Your Vision Into
            Reality
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg sm:text-xl md:text-2xl">
            For over 25 years, Canada's most demanding architects, designers,
            and builders have trusted us with their most challenging metal
            fabrication projects. Discover why.
          </p>

          {/* CTA Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                onClick={onGetQuoteClick}
                size="lg"
                className="bg-[#4CAF50] px-8 py-6 text-lg font-semibold text-white hover:bg-[#4CAF50]/90 shadow-lg transition-all duration-300 hover:scale-105"
              >
                Request Your Custom Project Consultation
              </Button>
            </DialogTrigger>
            <DialogContent className="glassmorphic-card sm:max-w-[600px]">
              {/* Quote form will be implemented separately */}
              <div className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-[#0A1D3A]">
                  Your Custom Metal Project Consultation
                </h2>
                <p className="mb-4 text-[#212121]">
                  Take the first step toward bringing your vision to life. Our
                  expert craftsmen will analyze your project requirements and
                  provide a detailed consultation worth $500 — yours at no
                  obligation.
                </p>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border p-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border p-2"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      className="h-24 w-full rounded-md border p-2"
                      placeholder="Describe your project requirements, timeline, and any specific details..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90 shadow-md transition-all duration-300 hover:shadow-lg">
                    Get My Free Consultation
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;

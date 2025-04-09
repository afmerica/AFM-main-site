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
      {/* Background Image - Activated Carbon / Clean Tech */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611175141151-d9a7f81e0e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)", // Abstract clean tech / molecular structure
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />

      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 z-10 glass-effect-dark bg-gradient-to-b from-black/10 to-black/40" /> {/* Subtle gradient overlay */}

      {/* Content Container */}
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Main Heading - Activated Carbon Focus */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Revolutionizing Carbon: <br />
            <span className="text-[#4CAF50]">Sustainable Activated Carbon</span>{" "}
            from Organic Waste.
          </h1>

          {/* Subheading - Activated Carbon Focus */}
          <p className="mb-10 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Afmerica Technology transforms everyday organic waste, like coffee
            grounds, into high-performance activated carbon. Discover our
            cleaner, greener process driving the circular economy forward.
          </p>

          {/* CTA Button - Updated Text */}
          <Button
            onClick={onGetQuoteClick} // Triggers QuoteForm Dialog in home.tsx
            size="lg"
            className="bg-[#4CAF50] px-10 py-7 text-xl font-semibold text-white hover:bg-[#3e9e41] shadow-xl transition-all duration-300 hover:scale-105 rounded-lg"
          >
            Explore Our Carbon Solutions
          </Button>
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

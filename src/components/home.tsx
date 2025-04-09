import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import InteractiveMap from "./InteractiveMap";
import QuoteForm from "./QuoteForm";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import {
  ArrowUpCircle,
  Leaf,
  Recycle,
  Lightbulb,
  Beaker,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const HomePage = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isNavSticky, setIsNavSticky] = useState(false);

  // Handle scroll event to make navbar sticky
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavSticky(true);
      } else {
        setIsNavSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavSticky ? "bg-[#0A1D3A] shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Afmerica Tech</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#4CAF50] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#4CAF50] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("map")}
              className="text-white hover:text-[#4CAF50] transition-colors"
            >
              Locations
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#4CAF50] transition-colors"
            >
              Contact
            </button>
          </nav>
          <Button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-[#4CAF50] hover:bg-[#3e9e41] text-white"
          >
            Get Your Free Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onGetQuoteClick={() => setIsQuoteFormOpen(true)} />

      {/* About Section */}
      <section id="about" className="py-20 glassmorphic-section">
        <div className="glassmorphic-section-overlay bg-[#F5F5F5]/80"></div>
        <div className="container mx-auto px-4 glassmorphic-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4">
              The Canada Custom Metal Advantage
            </h2>
            <p className="text-lg text-[#212121] max-w-3xl mx-auto">
              For over 25 years, we've transformed raw metal into
              precision-engineered masterpieces that stand the test of time. Our
              craftsmen don't just fabricate metal—they elevate it into
              functional art that solves real-world challenges for Canada's most
              demanding clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glassmorphic-panel p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-[#0A1D3A] mb-4">
                Our Ironclad Promise
              </h3>
              <p className="text-[#212121] mb-6">
                When you partner with Canada Custom Metal, you're not just
                getting metal fabrication—you're getting a team obsessed with
                precision down to the millimeter. Every weld, every cut, every
                bend is executed with surgical accuracy that eliminates costly
                rework and delays.
              </p>
              <h3 className="text-2xl font-bold text-[#0A1D3A] mb-4">
                Our Master Craftsman Guarantee
              </h3>
              <p className="text-[#212121]">
                While others might promise quality, we guarantee it with our
                team of Red Seal certified metal fabricators who bring decades
                of specialized expertise to your project. This isn't just metal
                work—it's legacy-grade craftsmanship that will outlast trends
                and withstand the harshest Canadian conditions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphic-border rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1605201100110-1f07883d2882?w=800&q=80"
                alt="Precision Metal Fabrication"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 glassmorphic-section">
        <div className="glassmorphic-section-overlay bg-white/90"></div>
        <div className="container mx-auto px-4 glassmorphic-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4">
              Precision Metal Solutions
            </h2>
            <p className="text-lg text-[#212121] max-w-3xl mx-auto">
              Discover why architects, engineers, and project managers trust our
              metal fabrication expertise to bring their most challenging
              designs to life with uncompromising precision and craftsmanship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="h-10 w-10 text-[#4CAF50]" />,
                title: "Custom Architectural Metals",
                description:
                  "Transform your architectural vision into reality with our bespoke metal fabrication that turns ordinary spaces into extraordinary experiences—from statement staircases to signature facades.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-[#4CAF50]" />,
                title: "Precision Commercial Fixtures",
                description:
                  "Elevate your brand with custom metal fixtures that communicate quality at every customer touchpoint—built to withstand high-traffic environments while maintaining their pristine appearance.",
              },
              {
                icon: <ArrowUpCircle className="h-10 w-10 text-[#4CAF50]" />,
                title: "Industrial Metal Solutions",
                description:
                  "Solve your most demanding industrial challenges with custom-engineered metal components and assemblies that deliver uncompromising performance in even the harshest operating conditions.",
              },
              {
                icon: <Recycle className="h-10 w-10 text-[#4CAF50]" />,
                title: "Structural Steel Fabrication",
                description:
                  "Build with confidence on our precision-engineered structural steel components that meet or exceed all relevant codes and standards—delivered on time and ready for seamless installation.",
              },
              {
                icon: <Leaf className="h-10 w-10 text-[#4CAF50]" />,
                title: "Metal Restoration & Reproduction",
                description:
                  "Preserve architectural heritage with our meticulous metal restoration and reproduction services that breathe new life into historical elements while maintaining period-authentic craftsmanship.",
              },
              {
                icon: <Beaker className="h-10 w-10 text-[#4CAF50]" />,
                title: "Design-Build Collaboration",
                description:
                  "Maximize efficiency and innovation through our design-build metal fabrication process that brings your concept from initial sketch to final installation with expert guidance at every step.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 glassmorphic-card border glassmorphic-border">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-3 rounded-full bg-[#0A1D3A]/10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1D3A] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[#212121]">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 glassmorphic-section">
        <div className="glassmorphic-section-overlay bg-[#F5F5F5]/80"></div>
        <div className="container mx-auto px-4 glassmorphic-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4">
              Visit Our State-of-the-Art Facilities
            </h2>
            <p className="text-lg text-[#212121] max-w-3xl mx-auto">
              Experience firsthand our 35,000 sq. ft. fabrication facility in
              Châteauguay equipped with the latest CNC technology, and learn
              about our upcoming expansion in Granby that will double our
              production capacity by 2026.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphic-border rounded-xl overflow-hidden shadow-xl"
          >
            <InteractiveMap />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-[#212121] max-w-3xl mx-auto">
              Have questions about our services or want to learn more? Get in
              touch with our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Address
                  </h3>
                  <p className="text-[#212121]">
                    250F Boul Ford, Chateauguay, QC J6J 4Z2
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Phone
                  </h3>
                  <p className="text-[#212121]">(450) 691-9077</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Email
                  </h3>
                  <p className="text-[#212121]">info@afmericatech.ca</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#4CAF50] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Hours
                  </h3>
                  <p className="text-[#212121]">Monday–Friday, 7AM–5PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#0A1D3A] mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-[#212121] mb-6">
                Contact us today for a free consultation and quote on your
                carbon activation needs.
              </p>
              <Button
                onClick={() => setIsQuoteFormOpen(true)}
                className="w-full bg-[#4CAF50] hover:bg-[#3e9e41] text-white py-3"
                size="lg"
              >
                Get Your Free Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-[#0A1D3A] mb-2">
              Our Partners
            </h2>
            <p className="text-[#212121]">
              Proud to work with industry leaders
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {["Ecobec", "CanadaCustomMetal", "Stainless Nation"].map(
              (partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-[#0A1D3A]"
                >
                  {partner}
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1D3A] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Afmerica Technology Inc.
              </h3>
              <p className="mb-4">We Make Carbon Better</p>
              <p className="text-sm opacity-75">
                Turning waste into high-performance carbon. Clean, green,
                Canadian.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("map")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Locations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="mb-2">250F Boul Ford, Chateauguay, QC J6J 4Z2</p>
              <p className="mb-2">(450) 691-9077</p>
              <p>info@afmericatech.ca</p>
            </div>
          </div>
          <Separator className="my-8 bg-white/20" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-75">
              © {new Date().getFullYear()} Afmerica Technology Inc. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="flex items-center text-sm hover:text-[#4CAF50] transition-colors"
              >
                Back to Top <ArrowUpCircle className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Form Dialog */}
      <Dialog open={isQuoteFormOpen} onOpenChange={setIsQuoteFormOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 bg-white rounded-xl overflow-hidden">
          <QuoteForm onClose={() => setIsQuoteFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;

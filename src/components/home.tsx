import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import InteractiveMap from "./InteractiveMap";
import QuoteForm from "./QuoteForm";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ArrowUpCircle, // Keep for scroll-to-top
  Phone, // Keep for contact
  Mail, // Keep for contact
  MapPin, // Keep for contact
  Clock, // Keep for contact
  // Icons for NEW services (Activated Carbon focus)
  Leaf, // Sustainability
  Recycle, // Circular Economy / Waste Valorization
  FlaskConical, // Science / R&D
  Lightbulb, // Innovation / Technology
  Factory, // Production / Supply
  Handshake, // Partnership / Consulting
  Wrench, // For CCM Section
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
      {/* Sticky Navigation - Apply glass effect */}
      {/* Header Updated for Afmerica */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isNavSticky ? "glass-effect-dark bg-[#0A1D3A]/80 shadow-lg" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            {/* Afmerica Technology Name */}
            <h1 className="text-2xl font-bold text-white">
              Afmerica Technology
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            {/* Updated Nav Links */}
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#4CAF50] transition-colors font-medium"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#4CAF50] transition-colors font-medium"
            >
              Our Technology
            </button>
             <button
              onClick={() => scrollToSection("subsidiary")} // Link to new section
              className="text-white hover:text-[#4CAF50] transition-colors font-medium"
            >
              Our Roots
            </button>
            <button
              onClick={() => scrollToSection("map")}
              className="text-white hover:text-[#4CAF50] transition-colors font-medium"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#4CAF50] transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>
          <Button
            onClick={() => setIsQuoteFormOpen(true)}
            className="bg-[#4CAF50] hover:bg-[#3e9e41] text-white font-semibold px-5 py-2 rounded-md"
          >
            Inquire Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      {/* Hero Section - Already updated */}
      {/* Hero Section - Already updated for Afmerica */}
      <HeroSection onGetQuoteClick={() => setIsQuoteFormOpen(true)} />

      {/* About Section - Rewritten for Afmerica */}
      <section id="about" className="glass-section bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="glass-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4 tracking-tight">
              Pioneering a <span className="text-[#4CAF50]">Greener Future</span> with Advanced Carbon Technology
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Afmerica Technology, we're not just creating activated carbon; we're redefining its potential. By transforming organic waste streams into high-value materials, we champion the circular economy and provide industries with superior, sustainable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Apply glass effect to the content panel */}
            {/* Content Panel - Afmerica Focus */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 md:p-10 text-left"
            >
              <h3 className="text-2xl font-semibold text-[#0A1D3A] mb-4">
                Our Innovative Approach:
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6 list-disc list-inside">
                <li>
                  <span className="font-medium text-[#0A1D3A]">Waste Valorization:</span> We unlock the hidden value in organic byproducts (like used coffee grounds), diverting waste from landfills.
                </li>
                <li>
                  <span className="font-medium text-[#0A1D3A]">Proprietary Activation Process:</span> Our cleaner, energy-efficient technology produces high-purity activated carbon with tailored properties.
                </li>
                <li>
                  <span className="font-medium text-[#0A1D3A]">Circular Economy Leadership:</span> We create closed-loop systems, contributing to resource efficiency and reduced environmental impact.
                </li>
                <li>
                  <span className="font-medium text-[#0A1D3A]">Customizable Solutions:</span> We engineer carbon materials to meet specific performance requirements for diverse applications (filtration, purification, energy storage, etc.).
                </li>
              </ul>
              <h3 className="text-2xl font-semibold text-[#0A1D3A] mb-4">
                Partnering for a Sustainable Tomorrow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Join us in building a more sustainable world. Whether you need advanced carbon materials or seek innovative waste solutions, Afmerica Technology is your dedicated partner in clean tech innovation.
              </p>
            </motion.div>
            {/* Replace image and apply glass border */}
            {/* Image - Science/Clean Tech Focus */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-border overflow-hidden shadow-xl"
            >
              <img
                src="/images/carbon-innovation.jpg" // Carbon innovation research image
                alt="Innovative Carbon Research and Development"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Rewritten for Afmerica */}
      <section id="services" className="glass-section bg-gradient-to-bl from-gray-800 via-gray-900 to-black">
         <div className="glass-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
              Our Technology & <span className="text-[#4CAF50]">Solutions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leveraging our proprietary process, we offer a range of activated carbon products and services designed for performance, sustainability, and economic value.
            </p>
          </motion.div>

          {/* Services Grid - Activated Carbon Focus */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="h-10 w-10 text-[#4CAF50]" />,
                title: "Activated Carbon Supply",
                description:
                  "High-purity, sustainably sourced activated carbon tailored to your specifications for filtration, purification, and industrial applications.",
                img: "/images/activated-carbon.jpg", // Carbon powder/pellets
              },
              {
                icon: <Recycle className="h-10 w-10 text-[#4CAF50]" />,
                title: "Organic Waste Valorization",
                description:
                  "Partner with us to transform your organic waste streams (e.g., coffee grounds, agricultural residues) into valuable activated carbon products.",
                img: "/images/organic-waste.jpg", // Coffee grounds / organic material
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-[#4CAF50]" />,
                title: "Technology Licensing",
                description:
                  "Integrate our proprietary, energy-efficient carbon activation technology into your operations for enhanced sustainability and performance.",
                img: "/images/technology-licensing.jpg", // Technology licensing image
              },
              {
                icon: <FlaskConical className="h-10 w-10 text-[#4CAF50]" />,
                title: "R&D and Material Testing",
                description:
                  "Collaborate with our material scientists to develop custom carbon solutions or test the efficacy of our materials for your specific application.",
                img: "/images/rd-testing.jpg", // Lab testing / research
              },
              {
                icon: <Leaf className="h-10 w-10 text-[#4CAF50]" />,
                title: "Sustainable Solutions Consulting",
                description:
                  "Leverage our expertise in the circular economy and material science to enhance your company's sustainability initiatives and reporting.",
                img: "/images/sustainable-solutions.jpg", // Green meeting / sustainability concept
              },
              {
                icon: <Handshake className="h-10 w-10 text-[#4CAF50]" />,
                title: "Strategic Partnerships",
                description:
                  "We seek collaborations with industry leaders, researchers, and municipalities to scale our impact and accelerate the transition to a circular economy.",
                img: "/images/strategic-partnerships.jpg", // Partnership/handshake
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full glass-effect-light bg-white/10 border-white/10 text-white hover:bg-white/20 transition-colors duration-300 flex flex-col">
                   <CardHeader className="items-center text-center p-6">
                     <div className="mb-4 p-3 rounded-full bg-white/20">
                       {service.icon}
                     </div>
                     <CardTitle className="text-xl font-semibold">
                       {service.title}
                     </CardTitle>
                   </CardHeader>
                   <CardContent className="p-6 pt-0 text-center flex-grow flex flex-col">
                     <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4 glass-border"/>
                     <p className="text-gray-300 flex-grow">{service.description}</p>
                   </CardContent>
                 </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* NEW Subsidiary Section - Canada Custom Metal */}
       <section id="subsidiary" className="py-16 bg-gray-100"> {/* Simpler background */}
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl font-bold text-[#0A1D3A] mb-3 tracking-tight">
               Our Roots: <span className="text-[#4CAF50]">Canada Custom Metal</span>
             </h2>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
               Afmerica Technology builds upon a foundation of precision engineering established by our subsidiary, Canada Custom Metal – experts in high-quality metal fabrication for over 15 years.
             </p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center glass-effect p-8" // Apply glass effect here
           >
             <div>
               <h3 className="text-xl font-semibold text-[#0A1D3A] mb-3">Expert Metal Fabrication Services</h3>
               <p className="text-gray-700 mb-4">
                 Canada Custom Metal continues to provide top-tier custom metalwork, architectural features, and structural steel solutions for diverse industries.
               </p>
               {/* Optional: Add a button linking to CCM if it has a separate site/page */}
               {/* <Button variant="outline" className="border-[#0A1D3A] text-[#0A1D3A] hover:bg-[#0A1D3A]/10">
                 Learn More About CCM
               </Button> */}
             </div>
             <div className="glass-border overflow-hidden rounded-lg">
               <img
                 src="/images/metal-fabrication.jpg" // Metal fabrication image
                 alt="Canada Custom Metal Fabrication"
                 className="w-full h-auto object-cover"
               />
             </div>
           </motion.div>
         </div>
       </section>

      {/* Map Section - Rewritten Context for Afmerica */}
      <section id="map" className="glass-section bg-gray-100">
         <div className="glass-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4 tracking-tight">
              Our Innovation & Production Hub
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Visit our primary facility in Châteauguay, QC, where we develop and produce our advanced activated carbon materials. See innovation in action.
            </p>
          </motion.div>

          {/* Apply glass border to map container */}
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-border overflow-hidden shadow-xl h-[500px] md:h-[600px]"
          >
            <InteractiveMap />
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Rewritten for Afmerica */}
      <section id="contact" className="glass-section bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="glass-section-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0A1D3A] mb-4 tracking-tight">
              Connect with Afmerica Technology
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Have questions about our activated carbon, technology, or potential partnerships? We're here to help drive sustainable innovation together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Details Panel */}
            {/* Contact Details Panel - Afmerica */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect p-8 space-y-6"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#4CAF50] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Head Office & Lab
                  </h3>
                  <p className="text-gray-700">
                    250 Boulevard Ford, Châteauguay, QC J6J 4Z2
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#4CAF50] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Phone
                  </h3>
                  <p className="text-gray-700">(450) 691-9077</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#4CAF50] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Email
                  </h3>
                  {/* Afmerica Email */}
                  <p className="text-gray-700">info@afmericatech.ca</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-[#4CAF50] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D3A]">
                    Hours
                  </h3>
                  <p className="text-gray-700">Monday – Friday: 7:00 AM – 5:00 PM</p>
                  <p className="text-gray-700">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Panel - Afmerica */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 text-center md:text-left"
            >
              <div className="glass-border overflow-hidden rounded-lg mb-6">
                <img
                  src="/images/connect.jpg"
                  alt="Connect with Afmerica Technology"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A1D3A] mb-4">
                Discuss Your Needs
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether it's about carbon supply, waste valorization, or technology licensing, our team is ready to explore solutions with you. Contact us for a detailed discussion.
              </p>
              <Button
                onClick={() => setIsQuoteFormOpen(true)}
                className="w-full md:w-auto bg-[#4CAF50] hover:bg-[#3e9e41] text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Submit Your Inquiry
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Updated for Afmerica */}
      <footer className="bg-[#0A1D3A] text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Footer Column 1: Afmerica Brand */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Afmerica Technology Inc.
              </h3>
              <p className="mb-4 leading-relaxed">
                Innovating sustainable activated carbon solutions from organic waste for a cleaner, circular future.
              </p>
              <p className="text-sm opacity-70">
                Clean Tech. Circular Economy. Carbon Innovation.
              </p>
            </div>
            {/* Footer Column 2: Quick Links Updated */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Our Mission
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Technology & Solutions
                  </button>
                </li>
                 <li>
                  <button
                    onClick={() => scrollToSection("subsidiary")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Our Roots (CCM)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("map")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Location
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                 <li>
                  <button
                    onClick={() => setIsQuoteFormOpen(true)}
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Inquire Now
                  </button>
                </li>
              </ul>
            </div>
             {/* Footer Column 3: Contact Info - Afmerica */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="mb-2 flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-[#4CAF50]" />
                <span>250 Boulevard Ford, Châteauguay, QC J6J 4Z2</span>
              </p>
              <p className="mb-2 flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-[#4CAF50]" />
                <span>(450) 691-9077</span>
              </p>
              <p className="flex items-center">
                 <Mail size={16} className="mr-2 flex-shrink-0 text-[#4CAF50]" />
                 {/* Afmerica Email */}
                 <span>info@afmericatech.ca</span>
              </p>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-70">
              © {new Date().getFullYear()} Afmerica Technology Inc. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="flex items-center hover:text-[#4CAF50] transition-colors opacity-70 hover:opacity-100"
              >
                Back to Top <ArrowUpCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Form Dialog - Styling handled within QuoteForm component */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
      />
    </div>
  );
};

export default HomePage;

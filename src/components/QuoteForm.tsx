import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface QuoteFormProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const QuoteForm = ({ isOpen = true, onClose = () => {} }: QuoteFormProps) => {
  // Updated service options for Activated Carbon
  const serviceOptions = [
    { value: "carbon-supply", label: "Activated Carbon Supply (Bulk/Custom)" },
    { value: "waste-valorization", label: "Organic Waste Valorization Partnership" },
    { value: "process-technology", label: "Carbon Activation Technology Licensing" },
    { value: "rd-collaboration", label: "R&D Collaboration / Material Testing" },
    { value: "consulting", label: "Sustainability & Circular Economy Consulting" },
    { value: "other", label: "Other Inquiry" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    // Re-add the Dialog wrapper here, controlled by isOpen and onClose props
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] glass-effect p-6 md:p-8">
        {/* Close button */}
        <div className="absolute right-4 top-4">
          <Button
          variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Header Updated for Carbon Focus */}
        <DialogHeader className="mb-6 text-center">
          <DialogTitle className="text-2xl font-bold text-[#0A1D3A]">
            Inquire About Our Carbon Solutions
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Let us know how Afmerica Technology can help with your activated
            carbon needs or sustainability goals.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 text-center"
          >
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0A1D3A] mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600">
              Your quote request has been submitted successfully. We'll be in
              touch soon!
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-white/60 border-white/30 focus:ring-[#4CAF50]" // Adjusted style
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-white/60 border-white/30 focus:ring-[#4CAF50]" // Adjusted style
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className="bg-white/60 border-white/30 focus:ring-[#4CAF50]" // Adjusted style
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="bg-white/60 border-white/30 focus:ring-[#4CAF50]" // Adjusted style
                />
              </div>
            </div>

            {/* Service Selection Updated */}
            <div className="space-y-2">
              <Label htmlFor="service">Area of Interest</Label>
              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="bg-white/60 border-white/30 focus:ring-[#4CAF50]">
                  <SelectValue placeholder="Select an area of interest" />
                </SelectTrigger>
                <SelectContent className="glass-effect-light">
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message Field Updated */}
            <div className="space-y-2">
              <Label htmlFor="message">Your Inquiry / Project Details</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your requirements, application, estimated volume, or partnership ideas..."
                rows={4}
                className="bg-white/60 border-white/30 focus:ring-[#4CAF50]" // Adjusted style
              />
            </div>

            {/* Updated Button Style */}
            <Button
              type="submit"
              className="w-full bg-[#4CAF50] hover:bg-[#3e9e41] text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Submit Inquiry" // Updated Button Text
              )}
            </Button>

            {/* Adjusted Privacy Note */}
            <p className="text-xs text-gray-500 text-center mt-2">
              We respect your privacy. Your information will only be used to
              discuss your project needs.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog> // Close the Dialog wrapper
  );
};

export default QuoteForm;

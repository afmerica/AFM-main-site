import React, { useState } from "react";
import { MapPin, Home, Factory } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: { x: number; y: number };
  status: "active" | "coming-soon";
  year?: string;
  icon?: "home" | "factory" | "pin";
}

interface InteractiveMapProps {
  locations?: Location[];
}

const defaultLocations: Location[] = [
  {
    id: "chateauguay",
    name: "Chateauguay Headquarters",
    description:
      "Our flagship facility where we transform ordinary carbon into extraordinary air purification technology. Visit us at 250F Boul Ford, Chateauguay, QC J6J 4Z2.",
    coordinates: { x: 30, y: 40 },
    status: "active",
    icon: "home",
  },
  {
    id: "granby",
    name: "Granby Expansion Plant",
    description:
      "Our upcoming state-of-the-art carbon activation facility that will double our production capacity and introduce next-generation air purification technology.",
    coordinates: { x: 70, y: 35 },
    status: "coming-soon",
    year: "2026",
    icon: "factory",
  },
  {
    id: "montreal",
    name: "Montreal Research Center",
    description:
      "Our innovation hub where we're developing breakthrough carbon technologies that will revolutionize how families experience clean air at home.",
    coordinates: { x: 45, y: 25 },
    status: "coming-soon",
    year: "2025",
    icon: "pin",
  },
];

const InteractiveMap = ({
  locations = defaultLocations,
}: InteractiveMapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setIsInfoVisible(true);
  };

  const handleCloseInfo = () => {
    setIsInfoVisible(false);
  };

  const renderIcon = (location: Location) => {
    const iconSize = 36;
    const color = location.status === "active" ? "#0A1D3A" : "#4CAF50";

    switch (location.icon) {
      case "home":
        return (
          <Home size={iconSize} className={`text-[${color}]`} fill={color} />
        );
      case "factory":
        return (
          <Factory size={iconSize} className={`text-[${color}]`} fill={color} />
        );
      default:
        return (
          <MapPin size={iconSize} className={`text-[${color}]`} fill={color} />
        );
    }
  };

  return (
    <div className="w-full h-[600px] relative bg-[#F5F5F5] rounded-xl overflow-hidden shadow-lg">
      {/* Map Background */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80')",
        }}
      >
        {/* Glassmorphic Overlay */}
        <div className="absolute inset-0 glassmorphic">
          {/* Map Content */}
          <div className="relative w-full h-full">
            {/* Map Title */}
            <div className="absolute top-4 left-4 glassmorphic-card p-3 rounded-lg">
              <h3 className="text-[#0A1D3A] font-semibold">
                Where Innovation Happens: Our Locations
              </h3>
            </div>

            {/* Map Pins */}
            {locations.map((location) => (
              <TooltipProvider key={location.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="absolute cursor-pointer"
                      style={{
                        left: `${location.coordinates.x}%`,
                        top: `${location.coordinates.y}%`,
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => handleLocationClick(location)}
                    >
                      <div className="relative">
                        {renderIcon(location)}
                        {location.status === "coming-soon" && (
                          <div className="absolute -top-6 -right-12 bg-[#4CAF50] text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                            Coming {location.year}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="glassmorphic-panel">
                    <p>{location.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}

            {/* Location Info Card */}
            {selectedLocation && isInfoVisible && (
              <motion.div
                className="absolute bottom-4 right-4 w-80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Card className="glassmorphic-card border-none">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-[#0A1D3A] font-semibold">
                        {selectedLocation.name}
                      </h4>
                      <button
                        onClick={handleCloseInfo}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      {selectedLocation.description}
                    </p>
                    {selectedLocation.status === "coming-soon" && (
                      <div className="mt-2 inline-block bg-[#4CAF50] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Opening in {selectedLocation.year}
                      </div>
                    )}
                    {selectedLocation.status === "active" && (
                      <div className="mt-2 inline-block bg-[#0A1D3A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Currently Active
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 glassmorphic-card p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <Home size={16} className="text-[#0A1D3A]" fill="#0A1D3A" />
                <span className="ml-2 text-xs">Headquarters</span>
              </div>
              <div className="flex items-center mb-2">
                <Factory size={16} className="text-[#4CAF50]" fill="#4CAF50" />
                <span className="ml-2 text-xs">Production Facility</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-[#4CAF50]" fill="#4CAF50" />
                <span className="ml-2 text-xs">Research Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;

import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Skeleton } from "@/components/ui/skeleton"; // For loading state

// Coordinates for 250 Boulevard Ford, Châteauguay, QC J6J 4Z2
const center = {
  lat: 45.3492367,
  lng: -73.698506,
};

// Map container style - ensure it fills the parent div set in home.tsx
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// Options to customize map appearance (optional)
const mapOptions = {
  disableDefaultUI: true, // Hide default controls like zoom, street view
  zoomControl: true, // Optionally re-enable zoom control
  // styles: [] // Add custom map styles (e.g., from Snazzy Maps) if desired
};

// Google Maps API Key - IMPORTANT: Store securely, ideally in environment variables
const API_KEY = "AIzaSyATbWX8u-BwvDWqn805Hi1_OWPNRAr2nuo"; // Replace with your actual key

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "visualization"
)[] = ["places"]; // Load necessary libraries if needed (e.g., for Places API) - Removed 'localContext'

const InteractiveMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  // Display loading skeleton while map loads
  if (!isLoaded) return <Skeleton className="w-full h-full rounded-xl" />;

  // Display error message if map fails to load
  if (loadError) return <div>Error loading map</div>;

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden glass-border">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15} // Adjust zoom level as needed
        options={mapOptions}
      >
        {/* Add a marker for the main location */}
        <Marker position={center} title="Canada Custom Metal - Châteauguay" />

        {/* Future marker can be added here conditionally based on props */}
        {/* Example:
          {futureLocation && (
            <Marker position={futureLocation.coordinates} title={futureLocation.name} />
          )}
        */}
      </GoogleMap>
      {/* Optional: Add a glass overlay if needed for styling, but the map itself is the focus */}
      {/* <div className="absolute inset-0 glass-effect pointer-events-none"></div> */}
    </div>
  );
};

export default InteractiveMap;

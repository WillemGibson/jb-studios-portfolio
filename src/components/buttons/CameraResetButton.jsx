import { Focus } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function CameraResetButton({ resetCamera }) {
  return (
    <button
      onClick={resetCamera} // Handle camera reset on click
      aria-label="Re-center camera" // Accessibility label
      className="fixed bottom-4 left-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center
                transition-all duration-300 ease-in-out hover:bg-gray-200 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      // Tailwind classes for positioning, size, and hover/focus effects
    >
      <Focus size={24} className="text-gray-800" /> {/* Icon for the button with color */}
    </button>
  );
}
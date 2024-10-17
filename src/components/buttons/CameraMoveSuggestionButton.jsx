import { useEffect, useState } from 'react'; // Import React hooks for state and effect management
import { Camera, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"; // Import icons from lucide-react

export default function CameraMoveSuggestionButton() {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set up an interval to toggle the button's visibility
    const interval = setInterval(() => {
      // Toggle the visibility state
      setIsVisible(prev => !prev);
    }, 1000); // Change visibility every second (1000 milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className={`transition-opacity duration-500 ${isVisible ? "opacity-50" : "opacity-0"} grid grid-cols-3 gap-4 p-4 rounded-full transition-all duration-300 bg-transparent text-white pointer-events-auto`}
      aria-label="Move camera" // Accessible label for the button
      role="button" // Defines the role of the element as a button
      tabIndex={0} // Makes the div focusable for keyboard navigation
      onClick={() => console.log("Camera move icon clicked")} // Logs when the button is clicked
      onKeyPress={(e) => {
        // Handle keyboard activation
        if (e.key === "Enter") {
          console.log("Camera move icon activated by keyboard"); // Log when activated by keyboard
        }
      }}
    >
      <div className="col-start-2 flex justify-center">
        <ArrowUp className="w-10 h-10 stroke-2 stroke-white" /> {/* Up arrow icon */}
      </div>
      <div className="col-start-1 row-start-2 flex items-center">
        <ArrowLeft className="w-10 h-10 stroke-2 stroke-white" /> {/* Left arrow icon */}
      </div>
      <div className="col-start-2 row-start-2 flex items-center justify-center">
        <Camera className="w-12 h-12 stroke-white" /> {/* Camera icon */}
      </div>
      <div className="col-start-3 row-start-2 flex items-center justify-end">
        <ArrowRight className="w-10 h-10 stroke-2 stroke-white" /> {/* Right arrow icon */}
      </div>
      <div className="col-start-2 row-start-3 flex justify-center">
        <ArrowDown className="w-10 h-10 stroke-2 stroke-white" /> {/* Down arrow icon */}
      </div>
    </div>
  );
}
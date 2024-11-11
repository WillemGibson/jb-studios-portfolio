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
      className={`transition-opacity duration-500 ${isVisible ? "opacity-50" : "opacity-0"} 
      grid grid-cols-3 gap-4 p-4 rounded-full transition-all duration-300 bg-transparent text-white pointer-events-auto
      sm:grid-cols-3 sm:p-6 md:grid-cols-5 md:p-8 lg:grid-cols-5 lg:p-10`} // Responsive grid classes for various screen sizes
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
      {/* Up Arrow */}
      <div className="col-start-2 flex justify-center">
        <ArrowUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Up arrow icon with responsive sizes */}
      </div>
      
      {/* Left Arrow */}
      <div className="col-start-1 row-start-2 flex items-center">
        <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Left arrow icon */}
      </div>
      
      {/* Camera Icon */}
      <div className="col-start-2 row-start-2 flex items-center justify-center">
        <Camera className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 stroke-white" /> {/* Camera icon with responsive sizes */}
      </div>
      
      {/* Right Arrow */}
      <div className="col-start-3 row-start-2 flex items-center justify-end">
        <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Right arrow icon */}
      </div>
      
      {/* Down Arrow */}
      <div className="col-start-2 row-start-3 flex justify-center">
        <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Down arrow icon */}
      </div>
    </div>
  );
}
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
      flex justify-center items-center p-4 rounded-full bg-transparent text-white pointer-events-auto
      sm:p-6 md:p-8 lg:p-10`} // Use flex for centering the button in the parent
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
      {/* Centered grid with flex for icons */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {/* Up Arrow */}
        <div className="flex justify-center items-center col-start-2 row-start-1">
          <ArrowUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Up arrow icon */}
        </div>
        
        {/* Left Arrow */}
        <div className="flex justify-center items-center col-start-1 row-start-2">
          <ArrowLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Left arrow icon */}
        </div>
        
        {/* Camera Icon */}
        <div className="flex justify-center items-center col-start-2 row-start-2">
          <Camera className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 stroke-white" /> {/* Camera icon */}
        </div>
        
        {/* Right Arrow */}
        <div className="flex justify-center items-center col-start-3 row-start-2">
          <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Right arrow icon */}
        </div>
        
        {/* Down Arrow */}
        <div className="flex justify-center items-center col-start-2 row-start-3">
          <ArrowDown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-2 stroke-white" /> {/* Down arrow icon */}
        </div>
      </div>
    </div>
  );
}

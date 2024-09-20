import { Focus } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function CameraResetButton({ resetCamera }) {
  // Define button styles
  const buttonStyle = {
    position: "fixed",
    bottom: "16px",
    left: "16px",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <button
      onClick={resetCamera} // Handle camera reset on click
      aria-label="Re-center camera" // Accessibility label
      style={buttonStyle} // Apply button styles
      onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'} // Change background on hover
      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'} // Reset background on mouse leave
    >
      <Focus size={20} /> {/* Icon for the button */}
    </button>
  );
}
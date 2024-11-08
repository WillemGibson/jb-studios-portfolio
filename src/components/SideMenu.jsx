import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

// SideMenu component definition
export default function SideMenu() {
  // State to control the menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu's open/closed state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Variants for menu animations
  const menuVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  // Variants for hamburger lines animations
  const topLineVariants = {
    open: { rotate: 45, translateY: 1.5 },
    closed: { rotate: 0, translateY: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, translateY: -1.5 },
    closed: { rotate: 0, translateY: 0 },
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 p-2 rounded-md text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-8 h-8 flex flex-col justify-around items-center">
          {/* Top line of the hamburger */}
          <motion.span
            variants={topLineVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.3 }}
            className={`w-full h-0.5 rounded-sm transform origin-left ${isOpen ? 'bg-black' : 'bg-current'}`}
          />
          {/* Middle line of the hamburger */}
          <motion.span
            variants={middleLineVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.3 }}
            className={`w-full h-0.5 rounded-sm ${isOpen ? 'bg-black' : 'bg-current'}`}
          />
          {/* Bottom line of the hamburger */}
          <motion.span
            variants={bottomLineVariants}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            transition={{ duration: 0.3 }}
            className={`w-full h-0.5 rounded-sm transform origin-left ${isOpen ? 'bg-black' : 'bg-current'}`}
          />
        </div>
      </button>

      {/* Side Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col dark:bg-neutral-950"
      >
        <nav className="flex-grow flex flex-col justify-between pb-8 mt-16">
          <ul className="space-y-8 text-center">
            <li>
              <NavLink
                to="/about"
                className="text-neutral-950 hover:text-neutral-500 text-lg font-medium dark:text-neutral-50 dark:hover:text-neutral-50"
                onClick={handleLinkClick} // Close menu on link click
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className="text-neutral-950 hover:text-neutral-500 text-lg font-medium dark:text-neutral-50 dark:hover:text-neutral-50"
                onClick={handleLinkClick} // Close menu on link click
              >
                My Work
              </NavLink>
            </li>
          </ul>
          <div className="text-center">
            <NavLink
              to="/contact"
              className="text-neutral-950 hover:text-neutral-500 text-lg font-medium inline-flex items-center dark:text-neutral-50 dark:hover:text-neutral-50"
              onClick={handleLinkClick} // Close menu on link click
            >
              <Mail className="mr-2 h-5 w-5" />
              Work With Me
            </NavLink>
          </div>
        </nav>
      </motion.div>

      {/* Overlay to close menu when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}

/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Mail } from "lucide-react";

export default function SideMenu() {
  return (
    <>
      <nav className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col z-10">
        <div className="flex-1 flex flex-col py-8">
          <div className="flex-1 flex flex-col justify-start space-y-4">
            <NavLink
              to="/about"
              className="block py-4 px-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 text-center">
              About Us
            </NavLink>
            <NavLink
              to="/work"
              className="block py-4 px-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 text-center">
              Our Work
            </NavLink>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <NavLink
              to="/contact"
              className="flex items-center justify-center py-4 px-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
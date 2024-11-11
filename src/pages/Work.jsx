import BgScene from "@/components/BgScene";
import { NavLink } from "react-router-dom";

export default function WorkPage() {
  return (
    <section className="fixed flex items-center justify-center min-h-screen bg-black text-white">
      {/* BgScene is in the background */}
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />

      {/* Card container positioned above the BgScene */}
      <div className="relative w-full max-w-screen-xl pt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 z-20">
        {/* Card 1 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+1"
              alt="Project 1"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>

        {/* Card 2 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+2"
              alt="Project 2"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>

        {/* Card 3 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+3"
              alt="Project 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>

        {/* Card 4 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+4"
              alt="Project 4"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>

        {/* Card 5 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+5"
              alt="Project 5"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>

        {/* Card 6 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+6"
              alt="Project 6"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>
        {/* Card 6 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+6"
              alt="Project 6"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>
        {/* Card 6 */}
        <NavLink
          to="https://www.behance.net/jamiebenedet"
          className="w-full h-auto bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
        >
          <div className="relative w-full h-auto">
            <img
              src="https://via.placeholder.com/600x400/333333/ffffff?text=Project+6"
              alt="Project 6"
              className="w-full h-auto object-cover"
            />
          </div>
        </NavLink>
      </div>
    </section>
  );
}
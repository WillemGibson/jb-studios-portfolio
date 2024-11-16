import { useState } from "react";
import BgScene from "@/components/BgScene";

export default function WorkPage() {
  // Manually defined list of available images for each project folder
  const imageSets = {
    0: [
      "assets/projects/proj1/1.jpg",
      "assets/projects/proj1/2.jpg",
      "assets/projects/proj1/3.jpg",
      "assets/projects/proj1/4.jpg",
      "assets/projects/proj1/5.jpg",
    ],
    1: [
      "assets/projects/proj2/1.jpg",
      "assets/projects/proj2/2.jpg",
      "assets/projects/proj2/3.jpg",
      "assets/projects/proj2/4.jpg",
      "assets/projects/proj2/5.jpg",
    ],
    2: [
      "assets/projects/proj3/1.jpg", 
      "assets/projects/proj3/2.jpg", 
      "assets/projects/proj3/3.jpg", 
      "assets/projects/proj3/4.jpg",
    ],
  };

  // State to manage the modal and carousel
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to open the modal and set the starting image set
  const openModal = (cardIndex) => {
    const images = imageSets[cardIndex] || []; // Get the images for the selected project
    setCarouselImages(images); // Set the images based on the card clicked
    setCurrentIndex(0); // Start the carousel at the first image
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Function to go to the next image in the carousel
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  // Function to go to the previous image in the carousel
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <section className="fixed flex items-center justify-center min-h-screen bg-black text-white">
      {/* BgScene is in the background */}
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />

      {/* Card container with responsive 2-column grid */}
      <div className="fixed w-full max-w-screen-xl h-[650px] bg-black overflow-y-scroll no-scrollbar rounded-lg shadow-lg border-4 py-12 px-8 z-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-center">My Work</h1>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="w-full h-[400px] bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
            onClick={() => openModal(0)}
          >
            <div className="relative w-full h-full">
              <img
                src="assets/projects/proj1/1.jpg"
                alt="Project 1"
                className="pointer-events-none w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
                <span className="text-white text-2xl sm:text-3xl font-custom font-semibold">Match Day Designs</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="w-full h-[400px] bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
            onClick={() => openModal(1)}
          >
            <div className="relative w-full h-full">
              <img
                src="assets/projects/proj2/1.jpg"
                alt="Project 2"
                className="pointer-events-none w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
                <span className="text-white text-2xl sm:text-3xl font-custom font-semibold">Posters</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="w-full h-[400px] bg-black border-2 border-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative z-20"
            onClick={() => openModal(2)}
          >
            <div className="relative w-full h-full">
              <img
                src="assets/projects/proj3/1.jpg"
                alt="Project 3"
                className="pointer-events-none w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 z-10 flex justify-center items-center">
                <span className="text-white text-2xl sm:text-3xl font-custom font-semibold">Sports Edits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for carousel */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-30"
          onClick={closeModal}
        >
          <div className="relative h-[800px] flex justify-center items-center p-4 sm:p-8 md:p-16">
            {/* Image */}
            {carouselImages.length > 0 && (
              <img
                src={carouselImages[currentIndex]}
                alt="Modal View"
                className="pointer-events-none max-w-full max-h-full object-contain"
              />
            )}

            {/* Carousel Controls (arrows) */}
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 p-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal close on click
                prevImage();
              }}
            >
              &lt;
            </button>
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 p-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal close on click
                nextImage();
              }}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
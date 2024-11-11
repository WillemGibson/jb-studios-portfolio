import BgScene from "@/components/BgScene";

export default function AboutPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white">
      {/* Background Scene */}
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="fixed z-30 max-w-full p-6 sm:p-8 bg-black rounded-lg shadow-lg border-4 w-full sm:max-w-4xl md:max-w-6xl">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          {/* Left Section (Text) */}
          <div className="w-full mb-6 md:mb-0 md:w-2/3 md:mr-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">About Me</h1>
            <p className="mb-4 text-center md:text-left">Hi,</p>
            <p className="mb-4 text-center md:text-left">
              I’m Jamie Benedet, a passionate digital graphic designer who loves transforming ideas into visually engaging designs. With almost 2 years of experience, I specialize in creating clean, modern, and impactful designs.
            </p>
            <p className="mb-4 text-center md:text-left">
              I thrive on creatively solving problems and collaborating with clients to bring their vision to life. I believe design is not just about aesthetics but about creating meaningful experiences that connect with people.
            </p>
            <p className="mb-4 text-center md:text-left">
              Outside of design, I enjoy experimenting with new techniques, reading design blogs, and enjoying a good cup of coffee.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full mb-6 md:mb-0 md:w-1/3">
            <img 
              src="/assets/img/A7400323.jpg" 
              alt="head shot" 
              className="w-full max-w-xs pointer-events-none sm:w-96 sm:h-96 rounded-full object-cover mx-auto"
            />
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          {/* Why Work With Me Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Work With Me?</h2>
            <ul className="list-disc list-inside">
              <li>Client-Centered Designs</li>
              <li>Collaborative Process</li>
              <li>Attention to Detail</li>
              <li>On-Time Delivery</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Services</h2>
            <ul className="list-disc list-inside">
              <li>Social Media & Digital Content</li>
              <li>Brand Identity Design</li>
              <li>Print Design</li>
            </ul>
          </div>
        </div>

        {/* Final Call to Action */}
        <p className="mt-6 text-center md:text-left">
          Lets collaborate and create something amazing together! Reach out to discuss your next design project and lets bring it to life.
        </p>
      </div>
    </section>
  );
}
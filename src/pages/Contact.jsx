import BgScene from "@/components/BgScene";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white">
      {/* Background Scene */}
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />
      
      {/* Main Content Container */}
      <div className="fixed z-30 max-w-full p-6 md:p-8 bg-black rounded-lg shadow-lg border-4 w-full sm:max-w-md md:max-w-6xl">
        <div className="flex flex-col items-center justify-center w-full md:flex-row md:space-x-8">
          
          {/* Left Section (Heading + Subheading) */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
              Want to work with me?
            </h1>
            <p className="text-lg text-center md:text-left">
              <i>Send me an email</i>
            </p>
          </div>

          {/* Right Section (Contact Form) */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
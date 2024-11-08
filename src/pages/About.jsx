import BgScene from "@/components/BgScene"

export default function AboutPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white">
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />
      <div className="fixed max-w-6xl p-8 bg-black rounded-lg shadow-lg border-4 z-30">
        <div className="flex items-center">
          <div className="flex-1 mr-8">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="mb-4">Hi,</p>
            <p className="mb-4">
              I am Jamie Benedet, a passionate digital graphic designer with a love for transforming ideas into visually engaging designs. With nearly 2 years of experience in the design world, I specialize in creating clean, modern, and unique designs that make an impact.
            </p>
            <p className="mb-4">
              I am driven by the challenge of solving problems creatively, and working closely with clients to understand their vision and translate it into compelling visuals that capture their brand’s essence. My design process is rooted in understanding the goals and values of each client, and bringing their vision to life in a way that is both visually striking and functional. I believe that design is more than just aesthetics; it is about creating experiences that connect with people.
            </p>
            <p className="mb-4">
              When I’m not designing, you can usually find me experimenting with new design techniques, browsing art and design blogs for inspiration, or enjoying a good cup of coffee.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src="public/assets/img/A7400323.jpg" alt="headshot" className="w-96 h-96 rounded-full object-cover"/>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex-col">
            <h2 className="text-2xl font-semibold mt-6">Why Work With Me?</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Client Tailored Designs</li>
              <li>Collaborative Process</li>
              <li>Attention on Detail:</li>
              <li>Timely Delivery</li>
            </ul>
          </div>
          <div className="flex-col">
            <h2 className="text-2xl font-semibold mt-6">Services:</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Social Media & Digital Content:</li>
              <li>Brand Identity Design</li>
              <li>Print Design</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4">
        Let’s collaborate and create something amazing together. Feel free to reach out to discuss your next
        design project – and bring it to life.
        </p>
      </div>
    </section>
  )
}
import GlassFilter from "@/components/filters/DarkGlassFilter"

export default function AboutPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white">
      <GlassFilter className='fixed top-0 left-0 h-screen w-screen z-index-20 pointer-events-none' />
      <div className="max-w-2xl p-8 bg-transparent rounded-lg shadow-lg border-4 z-30">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hello! I'm a passionate graphic designer with a keen eye for aesthetics and a love for creativity. I specialize in creating visually stunning designs that communicate messages effectively. 
        </p>
        <p className="mb-4">
          With over [X] years of experience in the industry, I have worked on a variety of projects, from branding and marketing materials to digital illustrations and web design. My goal is to help clients bring their visions to life through innovative and engaging design solutions.
        </p>
        <p className="mb-4">
          I believe in the power of collaboration and thrive on working closely with clients to understand their needs and deliver exceptional results. When I’m not designing, you can find me exploring the outdoors, sketching in my notebook, or diving into a good book.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Skills & Expertise</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Brand Identity</li>
          <li>UI/UX Design</li>
          <li>Illustration</li>
          <li>Print Design</li>
          <li>Motion Graphics</li>
        </ul>
      </div>
    </section>
  )
}
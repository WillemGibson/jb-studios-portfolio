import BgScene from "@/components/BgScene"

export default function ContactPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-black text-white">
      <BgScene className="fixed top-0 left-0 h-screen w-screen z-10 pointer-events-none" />
      <div className="fixed max-w-6xl p-8 bg-black rounded-lg shadow-lg border-4 z-30">
        <div className="flex items-center">
          <div className="flex-1 mr-8">
            <h1 className="text-4xl font-bold mb-4">Want to work me?</h1>
            <p className="mb-4">Send me an email</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}
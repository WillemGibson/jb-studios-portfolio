import LogoScene from '../components/LogoScene';

export default function HomePage() {
  return (
    <section className='relative w-full h-screen'>
      <h1 className='fixed top-5 left-5 text-white text-2xl'>JB Studios</h1>
      <LogoScene />
    </section>
  )
}
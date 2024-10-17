import LogoScene from '../components/LogoScene';
import GlassFilter from '@/components/filters/DarkGlassFilter';

export default function HomePage() {
  return (
    <section className='relative w-full h-screen filter-'>
      <h1 className="fixed top-5 left-5 text-white text-3xl font-custom font-bold tracking-wide shadow-md z-20">JB Studios.</h1>
      <GlassFilter className='fixed top-0 left-0 h-screen w-screen z-index-10 pointer-events-none' />
      <LogoScene />
    </section>
  );
}

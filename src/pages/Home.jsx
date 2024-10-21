import LogoScene from '../components/LogoScene';
import GlassFilter from '@/components/filters/DarkGlassFilter';

export default function HomePage() {
  return (
    <section className='relative w-full h-screen'>
      <GlassFilter className='fixed top-0 left-0 h-screen w-screen z-index-10 pointer-events-none' />
      <LogoScene />
    </section>
  );
}

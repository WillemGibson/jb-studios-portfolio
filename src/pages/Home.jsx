import LogoScene from '../components/LogoScene';

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
      {/* Background scene with 3D logo */}
      <LogoScene />
    </section>
  );
}
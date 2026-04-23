import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import RevealOnScroll from '@/components/RevealOnScroll';
import Background from '@/components/Background';


export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <Hero />
      <RevealOnScroll />
    </>    
  );
}

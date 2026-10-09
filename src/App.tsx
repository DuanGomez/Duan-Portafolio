import { Nav } from './components/Nav';
import { About, DcodeaBand, Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact, Experience, Footer, Skills } from './components/Sections';
import { useReveal } from './useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DcodeaBand />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Divider from '@/components/Divider';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

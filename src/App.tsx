import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import ClawbotEngine from './components/ClawbotEngine';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <ClawbotEngine />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

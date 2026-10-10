import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Work } from './components/Work';


import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container grid-bg">
      <Navbar />
      
      <main>
        <Hero />
        <Timeline />
        <Work />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

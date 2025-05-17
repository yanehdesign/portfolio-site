import React, { useEffect } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Janet Garcia | Graphic Designer";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
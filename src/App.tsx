import { useEffect } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Janet Garcia | Graphic Designer";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExpertProfile from './components/ExpertProfile';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "The Ultimate Franchise Masterclass by Cup Time";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ExpertProfile />
      <Benefits />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
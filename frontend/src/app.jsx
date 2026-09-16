import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Footer from './components/footer';
import BackgroundIceParticles from './components/BackgroundIceParticles';
import ScoopTrayDrawer from './components/ScoopTrayDrawer';
import { MascotProvider } from './context/MascotContext';

export default function App() {
  return (
    <MascotProvider>
      <div className="relative min-h-screen overflow-x-hidden text-white selection:bg-cyan-400 selection:text-slate-950">
        {/* Animated Background Frost & Ice Particles */}
        <BackgroundIceParticles />

        {/* Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Home />
        </main>

        {/* Sub-Zero Cart Tray Drawer */}
        <ScoopTrayDrawer />

        {/* Footer */}
        <Footer />
      </div>
    </MascotProvider>
  );
}
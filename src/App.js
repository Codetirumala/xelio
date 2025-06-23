import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ring = document.querySelector('.custom-cursor-ring');
    const dot = document.querySelector('.custom-cursor-dot');
    if (!ring || !dot) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, dotX = 0, dotY = 0;
    const ringSpeed = 0.16;
    const dotSpeed = 0.32;
    function animate() {
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;
      dotX += (mouseX - dotX) * dotSpeed;
      dotY += (mouseY - dotY) * dotSpeed;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      dot.style.transform = `translate3d(${dotX + 8}px, ${dotY + 8}px, 0)`;
      requestAnimationFrame(animate);
    }
    function onMouseMove(e) {
      mouseX = e.clientX - 16; // center the ring
      mouseY = e.clientY - 16;
    }
    document.addEventListener('mousemove', onMouseMove);
    animate();

    // Hover effect
    const hoverables = 'a, button, input, textarea, select, .cursor-hover';
    function handleHover(e) {
      if (e.target.closest(hoverables)) {
        ring.classList.add('cursor-hovered');
      } else {
        ring.classList.remove('cursor-hovered');
      }
    }
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);

    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleHover);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="loader-circle">
            <img src={require('./components/images/w_logoo.png')} alt="Logo" className="loader-logo-static" />
          </div>
        </div>
      )}
      <div className="custom-cursor-ring" />
      <div className="custom-cursor-dot" />
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.4s' }}>
        <Navbar />
        <Hero />
        <Footer />
      </div>
      <button className="global-top-arrow" onClick={scrollToTop} aria-label="Back to top">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#f59e42" />
          <path d="M16 22V12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16L16 12L20 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}

export default App;

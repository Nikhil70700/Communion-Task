import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />

      <header className="hero-section">
        <div className="hero-content">
          <h1>Connect Communities</h1>
          <p>Bridging gaps between faiths with tech and a dash of fun!</p>
          <NavLink to="/events" className="cta-button">Explore Events</NavLink>
        </div>
      </header>

      <section className="slider-section">
        <h1>Welcome to Our Page</h1>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="/Slide1.avif" alt="Slide 1" />
            </div>
            <div className="slide">
              <img src="/Slide2.webp" alt="Slide 2" />
            </div>
            <div className="slide">
              <img src="/Slide3.avif" alt="Slide 3" />
            </div>
            <div className="slide">
              <img src="/Slide4.avif" alt="Slide 3" />
            </div>
            <div className="slide">
              <img src="/Slide5.avif" alt="Slide 3" />
            </div>
            <div className="slide">
              <img src="/Slide6.avif" alt="Slide 3" />
            </div>

          </div>
        </div>
      </section>


      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to Communion</h2>
          <p>Communion is an app designed to bridge the gap between people of diverse faiths, connecting them through shared events and activities that foster community and support.</p>

        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Communion App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;


import React from 'react';
import Navbar from '../Navbar/Navbar';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <Navbar />
      </header>
      
      <div className="about-container">
        <section className="about-intro">
          <h2>About Our Community</h2>
          <p>Welcome to our community events platform. We are dedicated to bringing people together through various activities and gatherings.</p>
        </section>
        
        <section className="about-mission">
          <h3>Our Mission</h3>
          <p>Our mission is to create a space where people from all walks of life can connect, share experiences, and build meaningful relationships. We believe in the power of community and the importance of celebrating diversity.</p>
        </section>
        
        <section className="about-values">
          <h3>Our Values</h3>
          <ul>
            <li><strong>Inclusivity:</strong> We welcome everyone regardless of background or beliefs</li>
            <li><strong>Respect:</strong> We treat all members with dignity and respect</li>
            <li><strong>Connection:</strong> We aim to foster genuine connections between community members</li>
            <li><strong>Growth:</strong> We encourage personal and collective growth through shared experiences</li>
          </ul>
        </section>
        
<section className="team-section">
    <h3>Meet Our Social Expert Team</h3>
    
    <div className="card-container">
        <div className="card">
            <img src="/Expert3.png" alt="Card Image" />
            <h2>Rohan K.</h2>
            <p>Catholic Community</p>
            <button>Learn More</button>
            <p>Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space. The events and...</p>
        </div>
        
        <div className="card">
            <img src="/Expert2.png" alt="Card Image" />
            <h2>David C</h2>
            <p>Hindu Heritage Temple</p>
            <button>Learn More</button>
            <p>Communion's events feature has made it easy to organize and participate in meaningful spiritual gatherings. The community's support and diverse perspectives...</p>
        </div>
        <div className="card">
            <img src="/Expert4.png" alt="Card Image" />
            <h2>Amira L.</h2>
            <p>Jewish Community</p>
            <button>Learn More</button>
            <p>Through Communion, I've joined events and discussions that broadened my perspective and connected me globally. The platform's interfaith dialogue...</p>
        </div>
        <div className="card">
            <img src="/Expert7.png" alt="Card Image" />
            <h2>Reverend Marcus</h2>
            <p>United Black Church</p>
            <button>Learn More</button>
            <p>Our expert team blends technology, spirituality, and community engagement...</p>
        </div>
        <div className="card">
            <img src="/Expert1.png" alt="Card Image" />
            <h2>Imam Amina El-Masri</h2>
            <p>Masjid Noor</p>
            <button>Learn More</button>
            <p>Our expert team blends technology, spirituality, and community engagement...</p>
        </div>
        <div className="card">
            <img src="/Expert5.png" alt="Card Image" />
            <h2>Pastor John Matthews</h2>
            <p>Christian Community</p>
            <button>Learn More</button>
            <p>The platform's interfaith dialogue features have helped me understand different perspectives and grow spiritually. Communion...</p>
        </div>
    </div>
</section>

        
        <section className="contact-info">
          <h3>Contact Us</h3>
          <p>Have questions or suggestions? Reach out to us at:</p>
          <p>Email: contact@communionhub.org</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Community St, City, State 12345</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
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
          <h3>Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="Team Member" className="team-image" />
              <h4>John Doe</h4>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="Team Member" className="team-image" />
              <h4>Jane Smith</h4>
              <p>Event Coordinator</p>
            </div>
            <div className="team-member">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="Team Member" className="team-image" />
              <h4>Mike Johnson</h4>
              <p>Community Manager</p>
            </div>
            <div className="team-member">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" alt="Team Member" className="team-image" />
              <h4>Mike Johnson</h4>
              <p>Community Manager</p>
            </div>
          </div>
        </section>
        
        <section className="contact-info">
          <h3>Contact Us</h3>
          <p>Have questions or suggestions? Reach out to us at:</p>
          <p>Email: info@communityevents.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Community St, City, State 12345</p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
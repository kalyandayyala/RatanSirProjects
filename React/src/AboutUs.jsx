import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <header className="header">
        <h1>About Us</h1>
        <p>Delivering fresh, delicious food to your doorstep</p>
      </header>

      <section className="about-content">
        <div className="about-image">
          <img src="food.jpg" alt="Our team" height={250}  />
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We bring quality, convenience, and delicious food to our customers' tables. Our mission is to revolutionize food delivery by providing fresh, high-quality meals at your convenience.
          </p>
          <p>
            Our team is dedicated to maintaining the highest standards of taste, health, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team">
          <div className="team-member">
            <img src="person1.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
          <img src="kalyannn.jpg" alt="Our team" />
            <h3>Jane Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src="emp.jpg" alt="Emily Brown" />
            <h3>Emily Brown</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
      </header>

      <section className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Our Location</h2>
          <p>123 Food Street, Foodie City, FL 12345</p>
          <h2>Call Us</h2>
          <p>(123) 456-7890</p>
          <h2>Email Us</h2>
          <p>support@fooddelivery.com</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;

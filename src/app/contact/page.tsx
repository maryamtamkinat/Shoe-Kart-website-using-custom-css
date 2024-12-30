import React from "react";
import "../styles/contact.css";

function page() {
  return (
    <section className="contact-form fade-in">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default page;

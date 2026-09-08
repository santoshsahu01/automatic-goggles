
// App.js - Simple Portfolio
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Sansah.Online</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome To The Site</h1>
      </section>

      {/* Profile Section */}
      <section className="profile-section">
        <div className="profile-card">
          <div className="profile-header">
            <h2>SANTOSH KUMAR SAHU</h2>
            <p className="title">Full Stack Developer</p>
          </div>

          <div className="profile-body">
            <div className="info-item">
              <span className="label">Email:</span>
              <span>theboysantosh@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Mobile:</span>
              <span>9754512002</span>
            </div>

            <div className="skills">
              <h3>Tech Stack</h3>
              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>React.js</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </div>

            <p className="bio">
              Building modern web applications, APIs, databases and full-stack systems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>Contact Me</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> theboysantosh@gmail.com
            </p>
            <p>
              <strong>Mobile:</strong> 9754512002
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Santosh Kumar Sahu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

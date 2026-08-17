import "./Intro.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const introText = `
> INITIALIZING PROFILE...
> ACCESS GRANTED

┌─────────────────────────────────────────────┐
│              SANTOSH KUMAR SAHU             │
├─────────────────────────────────────────────┤
│ Full Stack Developer                        │
│                                             │
│ Email  : theboysantosh@gmail.com            │
│ Mobile : 9754512002                         │
│                                             │
│ Stack:                                      │
│   Node.js   •   Express.js                  │
│   React.js  •   PostgreSQL                  │
│   MySQL     •   JavaScript                  │
│   HTML      •   CSS                         │
│                                             │
│ Building modern web applications,           │
│ APIs, databases and full-stack systems.     │
└─────────────────────────────────────────────┘

> SYSTEM READY_
`;

  // ===============================
  // SHOW INTRO AFTER 2 SECONDS
  // ===============================

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ===============================
  // TYPING EFFECT
  // ===============================

  useEffect(() => {
    if (!showIntro) return;

    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(introText.slice(0, index));

      index++;

      if (index > introText.length) {
        clearInterval(typing);
      }
    }, 20);

    return () => clearInterval(typing);
  }, [showIntro]);

  // ===============================
  // INPUT CHANGE
  // ===============================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===============================
  // EMAILJS SUBMIT
  // ===============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      const result = await emailjs.send(
        "service_q9lnecw",
        "template_gy23wkz",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        {
          publicKey: "gLO2MHFwLBZvl3JMt",
        }
      );

      console.log("EmailJS:", result);

      // SUCCESS
      setStatus("✓ MESSAGE SENT SUCCESSFULLY");

      // Clear form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus("✕ FAILED TO SEND MESSAGE");

    } finally {
      setSending(false);
    }
  };

  return (
    <div className="home">

      {/* ===============================
          LOADING
      =============================== */}

      {!showIntro && (
        <div className="loading">
          <span>LOADING SYSTEM...</span>
        </div>
      )}

      {showIntro && (
        <div className="matrix-container">

          {/* ===============================
              MATRIX BACKGROUND
          =============================== */}

          <div className="matrix-rain">

            {Array.from({ length: 80 }).map(
              (_, index) => (

                <span
                  key={index}
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay:
                      `${Math.random() * 5}s`,
                    animationDuration:
                      `${3 + Math.random() * 5}s`,
                  }}
                >
                  {Math.random() > 0.5
                    ? "01"
                    : "10"}
                </span>

              )
            )}

          </div>

          {/* ===============================
              TWO COLUMN CONTENT
          =============================== */}

          <div className="main-content">

            {/* ===============================
                LEFT TERMINAL
            =============================== */}

            <div className="terminal">

              <div className="terminal-header">

                <span>●</span>
                <span>●</span>
                <span>●</span>

                <strong>
                  santosh@portfolio:~
                </strong>

              </div>

              <pre>
                {displayText}
              </pre>

              <span className="cursor">
                █
              </span>

            </div>

            {/* ===============================
                RIGHT CONTACT
            =============================== */}

            <div className="contact-box">

              <div className="contact-header">

                <span>●</span>

                <strong>
                  CONTACT_ME
                </strong>

              </div>

              <form onSubmit={handleSubmit}>

                {/* NAME */}

                <label htmlFor="name">
                  NAME
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

                {/* EMAIL */}

                <label htmlFor="email">
                  EMAIL
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

                {/* MOBILE */}

                <label htmlFor="mobile">
                  MOBILE
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile"
                  required
                />

                {/* MESSAGE */}

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                />

                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={sending}
                >
                  {sending
                    ? "SENDING..."
                    : "SEND MESSAGE →"}
                </button>

                {/* STATUS */}

                {status && (
                  <div className="form-status">
                    {status}
                  </div>
                )}

              </form>

              {/* CONTACT DETAILS */}

              <div className="contact-details">

                <p>
                  EMAIL
                  <br />
                  <span>
                    theboysantosh@gmail.com
                  </span>
                </p>

                <p>
                  MOBILE
                  <br />
                  <span>
                    9754512002
                  </span>
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Home;
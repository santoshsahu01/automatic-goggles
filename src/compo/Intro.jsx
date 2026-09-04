
import "./Intro.css";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // MATRIX CHARACTERS
  const [matrixRain] = useState(() =>
    Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5,
      text: Math.random() > 0.5 ? "01" : "10",
    }))
  );

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
│ STACK                                       │
│                                             │
│ Node.js   •   Express.js                    │
│ React.js  •   PostgreSQL                    │
│ MySQL     •   JavaScript                    │
│ HTML      •   CSS                           │
│                                             │
│ Building modern web applications,           │
│ APIs, databases and full-stack systems.     │
└─────────────────────────────────────────────┘

> SYSTEM READY_
`;

  // SHOW INTRO
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // TYPING EFFECT
  useEffect(() => {
    if (!showIntro) return;

    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(introText.slice(0, index));
      index++;

      if (index > introText.length) {
        clearInterval(typing);
      }
    }, 15);

    return () => clearInterval(typing);
  }, [showIntro]);

  // HANDLE INPUT
  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  // SEND EMAIL
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_q9lnecw",
        "template_gy23wkz",
        formData,
        {
          publicKey: "gLO2MHFwLBZvl3JMt",
        }
      );

      setStatus("✓ MESSAGE SENT SUCCESSFULLY");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("✕ FAILED TO SEND MESSAGE");

    } finally {
      setSending(false);
    }
  };

  return (
    <div className="home">

      {/* LOADING SCREEN */}
      {!showIntro && (
        <div className="loading">
          <h2>LOADING SYSTEM...</h2>
        </div>
      )}

      {/* MAIN PORTFOLIO */}
      {showIntro && (
        <div className="matrix-container">

          {/* MATRIX BACKGROUND */}
          <div className="matrix-rain">
            {matrixRain.map((item, index) => (
              <span
                key={index}
                style={{
                  left: `${item.left}%`,
                  animationDelay: `${item.delay}s`,
                  animationDuration: `${item.duration}s`,
                }}
              >
                {item.text}
              </span>
            ))}
          </div>

          <div className="main-content">

            {/* TERMINAL PROFILE */}
            <div className="terminal">

              <div className="terminal-header">
                <div>
                  <span>●</span>
                  <span>●</span>
                  <span>●</span>
                </div>

                <strong>
                  santosh@portfolio:~
                </strong>
              </div>

              <pre>
                {displayText}
                <span className="cursor">█</span>
              </pre>

            </div>

            {/* CONTACT FORM */}
            <div className="contact-box">

              <div className="contact-header">
                <span>●</span>
                <strong>CONTACT_ME</strong>
              </div>

              <form onSubmit={handleSubmit}>

                <Input
                  label="NAME"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Input
                  label="EMAIL"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <Input
                  label="MOBILE"
                  name="mobile"
                  type="tel"
                  placeholder="Enter your mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />

                <label>MESSAGE</label>

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                />

                <button
                  type="submit"
                  disabled={sending}
                >
                  {sending
                    ? "SENDING..."
                    : "SEND MESSAGE →"}
                </button>

                {status && (
                  <div className="form-status">
                    {status}
                  </div>
                )}

              </form>

              {/* CONTACT INFO */}
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


// REUSABLE INPUT COMPONENT
function Input({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}


export default Home;

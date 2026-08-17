import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 5000;


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ===============================
// TEST API
// ===============================

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Portfolio backend is running",
  });

});


// ===============================
// CONTACT API
// ===============================

app.post("/contact", async (req, res) => {

  console.log("FORM SUBMITTED:");
  console.log(req.body);


  try {

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;


    // ===============================
    // VALIDATION
    // ===============================

    if (!name || !email || !message) {

      return res.status(400).json({

        success: false,

        message:
          "Name, email and message are required",

      });

    }


    // ===============================
    // NODEMAILER
    // ===============================

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {

          user: process.env.MAIL_USER,

          pass: process.env.MAIL_PASS,

        },

      });


    // ===============================
    // SEND EMAIL
    // ===============================

    await transporter.sendMail({

      from: process.env.MAIL_USER,

      to: process.env.MAIL_TO,

      replyTo: email,

      subject:
        subject ||
        "New Portfolio Contact",

      html: `

        <div style="
          font-family: Arial, sans-serif;
          padding: 20px;
        ">

          <h2>
            New Portfolio Contact
          </h2>

          <hr>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Subject:</strong>
            ${subject || "Not provided"}
          </p>

          <h3>
            Message
          </h3>

          <p>
            ${message}
          </p>

        </div>

      `,

    });


    console.log(
      "Email sent successfully"
    );


    res.json({

      success: true,

      message:
        "Email sent successfully!",

    });


  } catch (error) {

    console.error(
      "EMAIL ERROR:",
      error
    );


    res.status(500).json({

      success: false,

      message:
        "Failed to send email",

    });

  }

});


// ===============================
// START SERVER
// ===============================

app.listen(
  PORT,
  "0.0.0.0",
  () => {

    console.log(
      `Backend running on http://localhost:${PORT}`
    );

  }
);
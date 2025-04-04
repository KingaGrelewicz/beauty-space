import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  const { name, email, phone, treatment, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Beauty Space" <${email}>`, // E-mail nadawcy
      to: process.env.EMAIL_USER, // Twój e-mail (odbiorca)
      subject: `Nowa wiadomość od ${name}`,
      html: `
      <p><strong>Od:</strong> ${name} (${email})</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Zabieg:</strong> ${treatment}</p>
      <p><strong>Wiadomość:</strong><br>${message}</p>
    `,
    });

    console.log(`✅ Wiadomość od ${name} wysłana!`);
    res.status(200).json({ message: "E-mail wysłany!" });
  } catch (error) {
    console.error("❌ Błąd przy wysyłaniu e-maila:", error);
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Uruchomienie serwera
app.listen(PORT, () => {
  console.log(`🚀 Serwer działa na http://localhost:${PORT}`);
});

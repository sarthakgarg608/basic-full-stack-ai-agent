import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
export const sendMail = async(to,subject,text) =>{
  try {
    // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
      host: process.env.MAINTRAP_SMTP_HOST,
      port: process.env.MAINTRAP_SMTP_PORT,
      auth: {
        user: process.env.MAINTRAP_SMTP_USER,
        pass: process.env.MAINTRAP_SMTP_PASS,
      },
  });

  const info = await transporter.sendMail({
      from: '"Inngest TMS', // sender address
      to,
      subject,
      text,
  });

  console.log("Message sent: ",info.messageId)
  return info
  } catch (error) {
    console.error("Mail error ",error.message)
    throw error
  }
}
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as React from 'react';

const fromEmail = process.env.FROM_EMAIL;
const fromPass = process.env.FROM_PASS;
export async function POST(req, res) {
  try {
    const { email, subject, message } = await req.json();
    console.log('Email:', email);
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: fromEmail,
        pass: fromPass,
      },
    });

    // Define email data
    const mailOptions = {
      from: fromEmail,
      to: [fromEmail,email],
      subject: subject,
      html: `
        <div>
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>This message is submitted</p>
          <p>${message}</p>
        </div>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}

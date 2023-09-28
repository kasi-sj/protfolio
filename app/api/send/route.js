import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST(req) {
  try {
    const { email , subject, message } = await req.json().body;
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['kasinathansj@gmail.com',email],
      subject: subject,
      react: 
        <div>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>This message is submitted</p>
          <p>{message}</p>
        </div>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
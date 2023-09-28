import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'kasi <kasinathansj@gmail.com>',
      to: ['kasinathansj@gmail.com'],
      subject: "Hello world",
      react: 
        <div>
            <h1>Welcome, {"john"}!</h1>
        </div>,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
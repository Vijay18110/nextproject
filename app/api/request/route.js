import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, productName, productId } =
      await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="background-color: #f0f4f8; padding: 30px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
          
          <div style="background: #10b981; padding: 20px; text-align: center; color: white;">
            <p style="text-transform: uppercase; margin: 0; font-size: 12px; letter-spacing: 2px;">Product Inquiry</p>
            <h1 style="margin: 10px 0 0 0; font-size: 22px;">New Request for Information</h1>
          </div>

          <div style="padding: 30px;">
            <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
              <h2 style="color: #065f46; font-size: 18px; margin-top: 0;">📦 Product Details</h2>
              <p style="margin: 5px 0; color: #047857;"><strong>Item Name:</strong> ${productName}</p>
              <p style="margin: 5px 0; color: #047857;"><strong>Item SKU/ID:</strong> ${productId}</p>
            </div>

            <h3 style="color: #334155; font-size: 16px; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Customer Information</h3>
            <table style="width: 100%; color: #475569; font-size: 14px;">
              <tr><td style="padding: 5px 0;"><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Phone:</strong></td><td>${phone}</td></tr>
            </table>

            <div style="margin-top: 25px;">
              <p style="color: #64748b; font-size: 13px; font-weight: bold; margin-bottom: 8px;">ADDITIONAL COMMENTS:</p>
              <div style="background: #f8fafc; padding: 15px; border-radius: 8px; color: #334155; line-height: 1.6; border: 1px solid #e2e8f0;">
                ${message || "No specific comments provided."}
              </div>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="background: #10b981; color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-weight: bold; display: inline-block;">Reply to Customer</a>
            </div>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Request] Inquiry for ${productName}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Request sent" }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

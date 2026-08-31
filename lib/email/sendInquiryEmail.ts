import nodemailer from "nodemailer";

export type InquiryPayload = {
  companyName: string;
  country: string;
  industry: string;
  workerCount: number;
  hiringTimeline: string;
  email: string;
  phone: string;
  message: string;
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export async function sendInquiryEmail(payload: InquiryPayload): Promise<void> {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const from = requiredEnv("SMTP_FROM");
  const to = process.env.INQUIRY_TO_EMAIL ?? requiredEnv("SMTP_TO");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const subject = `New Consultation Inquiry - ${payload.companyName}`;
  const text = [
    "New recruitment consultation inquiry",
    `Company Name: ${payload.companyName}`,
    `Country: ${payload.country}`,
    `Industry: ${payload.industry}`,
    `Number of Workers: ${payload.workerCount}`,
    `Hiring Timeline: ${payload.hiringTimeline}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    "Message:",
    payload.message,
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text,
  });
}

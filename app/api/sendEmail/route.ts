import { NextResponse } from "next/server";
import { EmailTemplate } from "../../../components/email-templates/basic-mail";
import { Resend } from "resend";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const { mail, subject, message } = body;
    const { data, error } = await resend.emails.send({
      from: "Amar <contact@amarfreelance.com>",
      to: [mail],
      subject: subject,
      react: EmailTemplate({
        email: mail,
        message: message,
      }),
    });
    console.log(data);
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    const email = await prisma.email.create({
      data: {
        email: mail,
        subject: subject,
        message: message,
        user: {
          connect: {
            userId: userId,
          },
        },
      },
    });

    return NextResponse.json(
      { success: "true", resend: data, db: email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

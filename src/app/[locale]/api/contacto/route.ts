import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      mensaje,
      asunto,
    } = body;

    if (!nombre || !email || !mensaje || !asunto) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    /* =========================
       📩 EMAIL AL ADMIN
    ========================== */
    const adminHTML = `
    <div style="background:#f5f1eb;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#1e293b">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e7eb">

        <h2 style="color:#0f172a;margin-bottom:10px;font-size:24px">
          Nuevo mensaje recibido
        </h2>

        <div style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0">
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
        </div>

        <div style="margin-top:20px;padding:16px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca">
          <p style="margin:0;font-weight:bold;color:#7f1d1d">Asunto</p>
          <p style="margin:8px 0 0">${asunto}</p>
        </div>

        <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0">
          <p style="margin:0;font-weight:bold;color:#0f172a">Mensaje</p>
          <p style="margin:8px 0 0;line-height:1.6">${mensaje}</p>
        </div>

      </div>
    </div>
    `;

    await resend.emails.send({
      from: "DecoraModerna <informacion@decoramoderna.com>",
      to: ["informacion@decoramoderna.com"],
      subject: `Nuevo contacto: ${asunto}`,
      html: adminHTML,
    });

    /* =========================
       📩 EMAIL AL CLIENTE
    ========================== */
    const customerHTML = `
    <div style="background:#f5f1eb;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#1e293b">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e7eb">

        <h2 style="color:#0f172a;margin-bottom:8px;font-size:24px">
          Hemos recibido tu mensaje
        </h2>

        <p style="color:#475569;margin-bottom:20px">
          Hola <strong>${nombre}</strong>, gracias por contactar a <strong>DecoraModerna</strong>.
          Nuestro equipo revisará tu solicitud y te responderá lo antes posible.
        </p>

        <div style="margin:20px 0;padding:16px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca">
          <p style="margin:0;font-weight:bold;color:#7f1d1d">Asunto</p>
          <p style="margin:8px 0 0">${asunto}</p>
        </div>

        <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0">
          <p style="margin:0;font-weight:bold;color:#0f172a">Mensaje</p>
          <p style="margin:8px 0 0;line-height:1.6">${mensaje}</p>
        </div>

        <p style="margin-top:24px;color:#64748b;font-size:14px">
          Si necesitas agregar más información, puedes responder directamente a este correo.
        </p>

        <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb">
          <p style="margin:0;font-size:14px;color:#64748b">
            — Equipo DecoraModerna
          </p>
        </div>

      </div>
    </div>
    `;

    await resend.emails.send({
      from: "DecoraModerna <informacion@decoramoderna.com>",
      to: [email],
      subject: "Hemos recibido tu mensaje",
      html: customerHTML,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Error contacto:", error);

    return NextResponse.json(
      { error: "Error interno al enviar el mensaje" },
      { status: 500 }
    );
  }
}
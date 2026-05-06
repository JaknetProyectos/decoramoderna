import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      customer,
      items,
      subtotal,
      iva,
      total,
      orderId,
    } = await req.json();

    if (!customer?.email || !items?.length) {
      return NextResponse.json(
        { error: "Datos incompletos" },
        { status: 400 }
      );
    }

    const formatPrice = (price: number) =>
      new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
      }).format(price);

    /* =========================
       🎫 EMAIL CLIENTE
    ========================== */
    const customerHTML = `
    <div style="background:#f5f1eb;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#1e293b">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e7eb">

        <h2 style="color:#0f172a;margin-bottom:8px;font-size:24px">
          Confirmación de compra
        </h2>

        <p style="color:#475569;margin-bottom:20px">
          Gracias por confiar en <strong style="color:#0f172a">DecoraModerna</strong>.
          Estamos listos para ayudarte a transformar tu espacio.
        </p>

        <div style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0">
          <p><strong>Orden:</strong> ${orderId}</p>
          <p><strong>Cliente:</strong> ${customer.nombre}</p>
          <p><strong>Email:</strong> ${customer.email}</p>
        </div>

        <h3 style="margin-top:24px;color:#0f172a">Detalles del servicio</h3>

        ${items
          .map(
            (item: any) => `
          <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #e5e7eb">
            <span>${item.plan.name} x${item.quantity}</span>
            <span>${formatPrice(item.plan.price * item.quantity)}</span>
          </div>
        `
          )
          .join("")}

        <div style="margin-top:20px">
          <div style="display:flex;justify-content:space-between;color:#64748b">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>

          <div style="display:flex;justify-content:space-between;color:#64748b">
            <span>IVA</span>
            <span>${formatPrice(iva)}</span>
          </div>

          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px">
            <span>Total</span>
            <span style="color:#b91c1c">${formatPrice(total)}</span>
          </div>
        </div>

        <div style="margin-top:30px;padding:16px;background:#fef2f2;border-radius:12px;border:1px solid #fecaca">
          <p style="font-size:14px;color:#7f1d1d;margin:0">
            Nuestro equipo se pondrá en contacto contigo para comenzar tu proyecto.
          </p>
        </div>

        <p style="margin-top:30px;color:#64748b;font-size:12px">
          Este correo funciona como comprobante de tu compra.
        </p>

      </div>
    </div>
    `;

    /* =========================
       🧾 EMAIL NEGOCIO
    ========================== */
    const businessHTML = `
    <div style="background:#f5f1eb;padding:40px;font-family:Arial,Helvetica,sans-serif;color:#1e293b">
      <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:16px;padding:32px;border:1px solid #e5e7eb">

        <h2 style="color:#0f172a;margin-bottom:8px;font-size:24px">
          Nueva venta registrada
        </h2>

        <div style="margin:20px 0;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0">
          <p><strong>Orden:</strong> ${orderId}</p>
          <p><strong>Cliente:</strong> ${customer.nombre}</p>
          <p><strong>Email:</strong> ${customer.email}</p>
          <p><strong>Teléfono:</strong> ${customer.telefono}</p>
        </div>

        <h3 style="color:#0f172a">Servicios adquiridos</h3>

        ${items
          .map(
            (item: any) => `
          <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid #e5e7eb">
            <span>${item.plan.name} x${item.quantity}</span>
            <span>${formatPrice(item.plan.price * item.quantity)}</span>
          </div>
        `
          )
          .join("")}

        <div style="margin-top:20px">
          <div style="display:flex;justify-content:space-between;color:#64748b">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>

          <div style="display:flex;justify-content:space-between;color:#64748b">
            <span>IVA</span>
            <span>${formatPrice(iva)}</span>
          </div>

          <div style="display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px">
            <span>Total</span>
            <span style="color:#0f172a">${formatPrice(total)}</span>
          </div>
        </div>

      </div>
    </div>
    `;

    /* =========================
       📩 ENVÍO
    ========================== */
    await Promise.all([
      resend.emails.send({
        from: "DecoraModerna <informacion@decoramoderna.com>",
        to: customer.email,
        subject: `Confirmación de compra - ${orderId}`,
        html: customerHTML,
      }),

      resend.emails.send({
        from: "DecoraModerna <informacion@decoramoderna.com>",
        to: process.env.ADMIN_EMAIL!,
        subject: `Nueva venta - ${orderId}`,
        html: businessHTML,
      }),
    ]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Error checkout:", error);

    return NextResponse.json(
      { error: "Error al procesar el checkout" },
      { status: 500 }
    );
  }
}
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "DecoraModerna | Diseño de Interiores Online",
    template: "%s | DecoraModerna",
  },
  description:
    "Transforma tu espacio con DecoraModerna. Servicios de diseño de interiores online, asesoría personalizada, moodboards, renders 3D y decoración a medida para hogares y espacios comerciales.",
  keywords: [
    "diseño de interiores",
    "interiorismo online",
    "decoración de interiores",
    "asesoría de decoración",
    "diseño de interiores México",
    "renders 3D interiores",
    "home staging",
    "diseño de espacios comerciales",
    "decoración moderna",
    "DecoraModerna",
  ],
  authors: [{ name: "DecoraModerna" }],
  creator: "DecoraModerna",
  publisher: "DecoraModerna",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No definimos lang aquí porque lo hará el layout dinámico
    <html suppressHydrationWarning>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
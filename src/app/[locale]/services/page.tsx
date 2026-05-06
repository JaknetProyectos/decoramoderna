"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Check, ShoppingCart, Phone } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

interface ServiceOption {
  id: string;
  variant?: string;
  price: number;
}

interface Service {
  id: string;
  title: string;
  idealFor: string;
  options: ServiceOption[];
  features: string[];
}

const servicesEnglish: Service[] = [
  {
    id: "virtual-consulting",
    title: "Virtual design consulting",
    idealFor: "Those who want quick ideas without a complete redesign.",
    options: [{ id: "vc-1", price: 1800 }],
    features: [
      "Video call session (15 min) to review the space and discuss needs.",
      "General recommendations on layout, colors, lighting and furniture.",
      "PDF with personalized suggestions and tips.",
    ],
  },
  {
    id: "room-makeover",
    title: "Room makeover",
    idealFor: "Living rooms, bedrooms, kitchens, home offices, bathrooms, etc.",
    options: [{ id: "rm-1", price: 3600 }],
    features: [
      "Mood board (inspiration board)",
      "Suggested color palette.",
      "List of furniture and accessories with purchase links (shopping list).",
      "2D layout plan.",
    ],
  },
  {
    id: "complete-design",
    title: "Complete online interior design",
    idealFor: "People who are moving, remodeling their house or vacation apartments.",
    options: [
      { id: "cd-1", variant: "Small space (1 room, small living room)", price: 15000 },
      { id: "cd-2", variant: "Medium-sized apartment (2 bedrooms, 80-120 m²)", price: 32000 },
      { id: "cd-3", variant: "Large house/project (> 150-200 m²)", price: 65000 },
    ],
    features: [
      "Virtual survey of the space (with measurements from the client or photos).",
      "2D plans (layout, lighting, distribution).",
      "Moodboard + materials palette.",
      "3D renderings or virtual tour.",
      "Shopping list with local suppliers.",
      "Implementation manual for the client to execute with a contractor.",
    ],
  },
  {
    id: "home-staging",
    title: "Virtual home staging",
    idealFor: "Real estate agents or owners who want to speed up the sale/rental.",
    options: [{ id: "hs-1", price: 8600 }],
    features: [
      "Visual design of the space for selling or renting a property.",
      "Render with virtual furniture (no need to buy furniture).",
      "Focus on highlighting the property's strengths.",
    ],
  },
  {
    id: "commercial-design",
    title: "Design for commercial spaces",
    idealFor: "Entrepreneurs, offices, boutiques, cafes, coworkings.",
    options: [
      { id: "cds-1", variant: "Small office / very small premises (20-40 m²)", price: 10300 },
      { id: "cds-2", variant: "Moderate office space / premises + several rooms (50-100 m²)", price: 28000 },
      { id: "cds-3", variant: "Small office with strong brand identity / decorative pieces / special lighting / complex signage", price: 65100 },
    ],
    features: [
      "Efficient furniture layout.",
      "Suggested colors and materials to reflect brand identity.",
      "Lighting, signage and decoration proposal.",
      "Budget-optimized shopping list.",
    ],
  },
  {
    id: "3d-renders",
    title: "3D renders or virtual tours",
    idealFor: "Complementary or independent service.",
    options: [
      { id: "3d-1", variant: "Static 3D render (1 image, small space, medium quality)", price: 2700 },
      { id: "3d-2", variant: "Multiple renders / 5 images from different angles", price: 7600 },
      { id: "3d-3", variant: "360° / panoramic render (one scene)", price: 9500 },
      { id: "3d-4", variant: "Complete interactive virtual tour (multiple scenes, multiple spaces, navigation, etc.)", price: 46200 },
    ],
    features: [
      "3D space modeling (from measurements or plans).",
      "Texturing, lighting and ambiance.",
      "Exporting images or interactive tour.",
    ],
  },
  {
    id: "diy-advice",
    title: "DIY (do it yourself) decorating advice",
    idealFor: "Young people, students, temporary rentals, creative clients.",
    options: [
      { id: "diy-1", variant: "Short session, small space (one room/area, 20 min), basic recommendations + materials list", price: 700 },
      { id: "diy-2", variant: "1-hour session + mood board or color palette + materials list + detailed instructions", price: 3100 },
      { id: "diy-3", variant: "More comprehensive DIY advice (multiple rooms, follow-up, several options, PDF with images, simple layout plan)", price: 5300 },
    ],
    features: [
      "Low-cost suggestions for renovating a space without construction work.",
      "Step-by-step instructions for painting, wallpapering, rearranging, or decorating.",
      "List of inexpensive materials.",
    ],
  },
];

const servicesSpanish: Service[] = [
  {
    id: "virtual-consulting",
    title: "Asesoría virtual de diseño",
    idealFor: "Quienes buscan ideas rápidas sin una remodelación completa.",
    options: [{ id: "vc-1", price: 1800 }],
    features: [
      "Sesión por videollamada (15 min) para revisar el espacio y conversar sobre necesidades.",
      "Recomendaciones generales sobre distribución, colores, iluminación y mobiliario.",
      "PDF con sugerencias y consejos personalizados.",
    ],
  },
  {
    id: "room-makeover",
    title: "Renovación de habitación",
    idealFor: "Salas, recámaras, cocinas, oficinas en casa, baños, etc.",
    options: [{ id: "rm-1", price: 3600 }],
    features: [
      "Mood board (tablero de inspiración)",
      "Paleta de color sugerida.",
      "Lista de mobiliario y accesorios con enlaces de compra (shopping list).",
      "Plano de distribución 2D.",
    ],
  },
  {
    id: "complete-design",
    title: "Diseño de interiores online completo",
    idealFor: "Personas que se mudan, remodelan su casa o departamentos vacacionales.",
    options: [
      { id: "cd-1", variant: "Espacio pequeño (1 recámara, sala pequeña)", price: 15000 },
      { id: "cd-2", variant: "Departamento mediano (2 recámaras, 80-120 m²)", price: 32000 },
      { id: "cd-3", variant: "Casa/proyecto grande (> 150-200 m²)", price: 65000 },
    ],
    features: [
      "Levantamiento virtual del espacio (con medidas del cliente o fotos).",
      "Planos 2D (distribución, iluminación, acomodo).",
      "Moodboard + paleta de materiales.",
      "Renders 3D o recorrido virtual.",
      "Lista de compras con proveedores locales.",
      "Manual de implementación para ejecutar con un contratista.",
    ],
  },
  {
    id: "home-staging",
    title: "Home staging virtual",
    idealFor: "Agentes inmobiliarios o propietarios que quieran agilizar la venta/renta.",
    options: [{ id: "hs-1", price: 8600 }],
    features: [
      "Diseño visual del espacio para vender o rentar un inmueble.",
      "Render con mobiliario virtual (sin necesidad de comprar muebles).",
      "Enfoque en resaltar las fortalezas de la propiedad.",
    ],
  },
  {
    id: "commercial-design",
    title: "Diseño para espacios comerciales",
    idealFor: "Emprendedores, oficinas, boutiques, cafeterías, coworkings.",
    options: [
      { id: "cds-1", variant: "Oficina pequeña / local muy pequeño (20-40 m²)", price: 10300 },
      { id: "cds-2", variant: "Espacio de oficina moderado / local + varias habitaciones (50-100 m²)", price: 28000 },
      { id: "cds-3", variant: "Oficina pequeña con fuerte identidad de marca / piezas decorativas / iluminación especial / señalética compleja", price: 65100 },
    ],
    features: [
      "Distribución eficiente del mobiliario.",
      "Colores y materiales sugeridos para reflejar la identidad de marca.",
      "Propuesta de iluminación, señalética y decoración.",
      "Shopping list optimizada al presupuesto.",
    ],
  },
  {
    id: "3d-renders",
    title: "Renders 3D o recorridos virtuales",
    idealFor: "Servicio complementario o independiente.",
    options: [
      { id: "3d-1", variant: "Render 3D estático (1 imagen, espacio pequeño, calidad media)", price: 2700 },
      { id: "3d-2", variant: "Múltiples renders / 5 imágenes desde diferentes ángulos", price: 7600 },
      { id: "3d-3", variant: "Render 360° / panorámico (una escena)", price: 9500 },
      { id: "3d-4", variant: "Recorrido virtual interactivo completo (múltiples escenas, varios espacios, navegación, etc.)", price: 46200 },
    ],
    features: [
      "Modelado 3D del espacio (a partir de medidas o planos).",
      "Texturizado, iluminación y ambientación.",
      "Exportación de imágenes o tour interactivo.",
    ],
  },
  {
    id: "diy-advice",
    title: "Asesoría DIY (hazlo tú mismo) en decoración",
    idealFor: "Jóvenes, estudiantes, rentas temporales, clientes creativos.",
    options: [
      { id: "diy-1", variant: "Sesión corta, espacio pequeño (una habitación/área, 20 min), recomendaciones básicas + lista de materiales", price: 700 },
      { id: "diy-2", variant: "Sesión de 1 hora + mood board o paleta de color + lista de materiales + instrucciones detalladas", price: 3100 },
      { id: "diy-3", variant: "Asesoría DIY más completa (múltiples habitaciones, seguimiento, varias opciones, PDF con imágenes, plano simple)", price: 5300 },
    ],
    features: [
      "Sugerencias de bajo costo para renovar un espacio sin obra.",
      "Instrucciones paso a paso para pintar, empapelar, reacomodar o decorar.",
      "Lista de materiales económicos.",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const { addToCart } = useCart();
  const t = useTranslations("servicesPage");
  const locale = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (option: ServiceOption) => {
    addToCart({
      id: option.id,
      name: service.title,
      price: option.price,
      variant: option.variant,
    });
  };

  return (
    <div className="border border-[#341f97] bg-white">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT CONTENT */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-[#341f97]">
          <span className="text-xs uppercase tracking-[0.2em] text-[#ee5253] mb-3 block">
            {t("serviceBadge")}
          </span>

          <h3 className="text-2xl font-bold text-[#341f97] mb-2">
            {service.title}
          </h3>

          <p className="text-sm text-[#341f97] mb-6">
            <span className="font-semibold">{t("idealForLabel")}</span> {service.idealFor}
          </p>

          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-5 h-5 flex items-center justify-center border border-[#ee5253] text-[#ee5253] mt-1">
                  <Check size={14} />
                </span>
                <span className="text-sm text-[#341f97] leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PANEL (PRICING) */}
        <div className="bg-[#F8EFBA] p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-5">
            {service.options.map((option) => (
              <div key={option.id} className="border border-[#341f97] bg-white p-4">
                {option.variant && (
                  <p className="text-xs text-[#341f97] mb-2">
                    {option.variant}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xl md:text-2xl font-bold text-[#341f97]">
                      {formatPrice(option.price)}
                    </span>
                    <span className="text-xs text-[#341f97] ml-1">{t("vat")}</span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(option)}
                    className="flex items-center gap-2 px-4 py-2 border border-[#341f97] bg-[#341f97] text-white text-sm font-semibold hover:bg-[#2c187e] transition-colors"
                  >
                    <ShoppingCart size={16} />
                    {t("addButton")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const t = useTranslations("servicesPage");
  const locale = useLocale();
  const services = locale === "es" ? servicesSpanish : servicesEnglish;

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            {t("heroTitle")}
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* Personalized Service Card */}
          <div className="border border-[#341f97] bg-[#F8EFBA] p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#341f97] mb-4">
              {t("personalized.title")}
            </h3>

            <p className="text-[#341f97] mb-4">
              {t("personalized.line1")}
            </p>

            <p className="text-sm text-[#341f97] mb-6">
              {t("personalized.line2")}
            </p>

            <p className="text-sm text-[#341f97] mb-6">
              <span className="font-semibold">{t("personalized.questionLabel")}</span><br />
              {t("personalized.questionBody")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/personalizado"}>
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#341f97] text-white font-semibold">
                  <ShoppingCart size={18} />
                  {t("personalized.addToCart")}
                </button>
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#341f97] text-[#341f97] font-semibold hover:bg-[#ee5253] hover:text-white hover:border-[#ee5253]"
              >
                {t("personalized.requestQuote")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-[#341f97]">
        <div className="max-w-5xl mx-auto">
          <div className="border border-[#341f97] bg-[#F8EFBA] p-8 md:p-12">
            {/* Content */}
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#ee5253] mb-4 font-semibold">
                {t("cta.eyebrow")}
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#341f97] mb-4 leading-tight">
                {t("cta.title")}
              </h2>

              <p className="text-[#341f97] mb-2">
                {t("cta.line1")}
              </p>

              <p className="text-sm text-[#341f97] leading-relaxed">
                {t("cta.line2")}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#341f97] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#2c187e] transition-colors"
              >
                {t("cta.contactButton")}
              </Link>

              <div className="flex items-center gap-4 border border-[#341f97] bg-white px-4 py-3">
                <div className="w-10 h-10 flex items-center justify-center border border-[#341f97] bg-[#F8EFBA]">
                  <Phone className="w-5 h-5 text-[#341f97]" />
                </div>

                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#ee5253]">
                    {t("cta.phoneLabel")}
                  </p>
                  <p className="font-semibold text-[#341f97]">
                    +52 1 55 9129 4026
                  </p>
                </div>
              </div>
            </div>

            {/* Image (integrated, no float feel) */}
            <div className="flex justify-center border-t border-[#341f97] pt-8">
              <Image
                src="/flecha.png"
                alt={t("cta.imageAlt")}
                width={260}
                height={320}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
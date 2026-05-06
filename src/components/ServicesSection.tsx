"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("residential");
  const t = useTranslations("servicesSection");

  const services = [
    {
      id: "residential",
      title: t("items.residential.title"),
      description: t("items.residential.description"),
      features: [
        t("items.residential.features.f1"),
        t("items.residential.features.f2"),
        t("items.residential.features.f3"),
        t("items.residential.features.f4"),
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      id: "commercial",
      title: t("items.commercial.title"),
      description: t("items.commercial.description"),
      features: [
        t("items.commercial.features.f1"),
        t("items.commercial.features.f2"),
        t("items.commercial.features.f3"),
        t("items.commercial.features.f4"),
      ],
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      id: "online",
      title: t("items.online.title"),
      description: t("items.online.description"),
      features: [
        t("items.online.features.f1"),
        t("items.online.features.f2"),
        t("items.online.features.f3"),
        t("items.online.features.f4"),
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: "furniture",
      title: t("items.furniture.title"),
      description: t("items.furniture.description"),
      features: [
        t("items.furniture.features.f1"),
        t("items.furniture.features.f2"),
        t("items.furniture.features.f3"),
        t("items.furniture.features.f4"),
      ],
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    },
    {
      id: "lighting",
      title: t("items.lighting.title"),
      description: t("items.lighting.description"),
      features: [
        t("items.lighting.features.f1"),
        t("items.lighting.features.f2"),
        t("items.lighting.features.f3"),
        t("items.lighting.features.f4"),
      ],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    },
  ];

  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-[#341f97]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ee5253] mb-3">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#341f97] leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-sm md:text-base text-[#341f97] max-w-2xl leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <Link href={"/services"}>
            <button className="px-6 py-3 border border-[#341f97] bg-[#F8EFBA] text-[#341f97] font-semibold uppercase tracking-wider text-sm hover:bg-[#ee5253] hover:text-white hover:border-[#ee5253] transition-colors self-start lg:self-auto">
              {t("viewAll")}
            </button>
          </Link>
        </div>

        {/* Service Tabs */}
        <div className="border-y border-[#341f97] bg-[#F8EFBA]">
          <div className="flex overflow-x-auto">
            {services.map((service, index) => {
              const active = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`shrink-0 px-5 md:px-6 py-4 text-left transition-colors border-r border-[#341f97] min-w-[220px] md:min-w-[240px] ${active
                      ? "bg-white text-[#341f97]"
                      : "bg-[#F8EFBA] text-[#341f97] hover:bg-white"
                    }`}
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#ee5253] mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-sm font-semibold leading-snug">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Content */}
        <div className="mt-8 border border-[#341f97] bg-white">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-[#F8EFBA] p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-[#341f97]">
              <Image
                src={currentService.image}
                alt={currentService.title}
                width={900}
                height={650}
                className="object-cover w-full h-[320px] md:h-[420px]"
              />
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 border border-[#341f97] text-xs font-semibold uppercase tracking-[0.18em] text-[#341f97]">
                    {t("selectedService")}
                  </span>
                  <span className="h-px flex-1 bg-[#341f97]" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#341f97] mb-4">
                  {currentService.title}
                </h3>

                <p className="text-sm md:text-base text-[#341f97] leading-relaxed mb-8 max-w-2xl">
                  {currentService.description}
                </p>

                <ul className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex w-5 h-5 items-center justify-center border border-[#ee5253] text-[#ee5253] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm md:text-base text-[#341f97] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-6 border-t border-[#341f97] flex items-center gap-4">
                <div className="w-12 h-12 border border-[#341f97] bg-[#F8EFBA] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#341f97]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#ee5253] mb-1">
                    {t("contactLabel")}
                  </p>
                  <p className="font-semibold text-[#341f97] text-sm md:text-base">
                    +52 1 55 9129 4026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function InspirationSection() {
  const t = useTranslations("inspirationSection");

  const inspirations = [
    {
      title: t("items.residential.title"),
      description: t("items.residential.description"),
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=450&fit=crop",
    },
    {
      title: t("items.commercial.title"),
      description: t("items.commercial.description"),
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop",
    },
    {
      title: t("items.online.title"),
      description: t("items.online.description"),
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=450&fit=crop",
    },
    {
      title: t("items.furniture.title"),
      description: t("items.furniture.description"),
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=450&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-[#341f97]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ee5253] mb-3">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#341f97] mb-4">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-[#341f97] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {inspirations.map((item, index) => (
            <div
              key={index}
              className="border border-[#341f97] bg-[#F8EFBA] flex flex-col"
            >
              {/* Image */}
              <div className="border-b border-[#341f97]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="object-cover w-full h-[260px]"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ee5253] mb-3 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-xl font-bold text-[#341f97] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#341f97] leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
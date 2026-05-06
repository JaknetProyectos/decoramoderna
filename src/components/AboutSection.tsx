"use client";

import Image from "next/image";
import { Clock, Palette, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  const features = [
    {
      icon: Clock,
      title: t("features.fast.title"),
      description: t("features.fast.description"),
    },
    {
      icon: Palette,
      title: t("features.designers.title"),
      description: t("features.designers.description"),
    },
    {
      icon: Users,
      title: t("features.attention.title"),
      description: t("features.attention.description"),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-12 whitespace-pre-line">
          {t("title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://www.unitec.mx/hs-fs/hubfs/01.UNITEC/oferta-academica/licenciaturas/licenciatura-diseno-de-interiores-s3.webp?width=799&height=533&name=licenciatura-diseno-de-interiores-s3.webp"
                alt="Designer at work"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-[280px]"
              />
              <Image
                src="https://info.marista.edu.mx/hubfs/UMM%20-%20Blogs%202023%20-%202024/UMM%20-%20dise%C3%B1o%20de%20interiores.jpg"
                alt="Designer working with materials"
                width={300}
                height={400}
                className="rounded-lg object-cover w-full h-[280px] mt-12"
              />
            </div>

            {/* Hand-drawn decoration */}
            <svg
              className="absolute -bottom-8 -right-4 w-24 h-24 text-navy"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M48 20 C 60 35, 70 45, 75 65 M 70 60 L 75 65 L 80 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Description and Features */}
          <div>
            <p className="text-gray-600 mb-10 text-sm leading-relaxed">
              {t("description")}
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#341f97] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white bg-[#341f97]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
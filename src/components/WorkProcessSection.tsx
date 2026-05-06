"use client";

import { Calendar, MessageSquare, FileCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WorkProcessSection() {
  const t = useTranslations("workProcess");

  const steps = [
    {
      icon: Calendar,
      title: t("steps.step1.title"),
      description: t("steps.step1.description"),
    },
    {
      icon: MessageSquare,
      title: t("steps.step2.title"),
      description: t("steps.step2.description"),
    },
    {
      icon: FileCheck,
      title: t("steps.step3.title"),
      description: t("steps.step3.description"),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#341f97] border-t border-[#341f97]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t("title")}
          </h2>
          <p className="text-sm md:text-base text-white max-w-md leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Horizontal Steps */}
        <div className="flex flex-col md:flex-row border border-white">

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 flex flex-col justify-between p-6 md:p-8 bg-white text-[#341f97] relative ${index !== steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#341f97]"
                  : ""
                }`}
            >
              {/* Step number */}
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee5253] mb-4">
                {t("stepLabel", { number: index + 1 })}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 border border-[#341f97] bg-[#F8EFBA] flex items-center justify-center mb-6">
                <step.icon className="w-5 h-5 text-[#341f97]" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-6 h-px bg-[#341f97] translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
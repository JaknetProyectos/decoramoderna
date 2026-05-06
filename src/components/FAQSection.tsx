"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("faq");

  const faqs = [
    {
      question: t("items.q1.question"),
      answer: t("items.q1.answer"),
    },
    {
      question: t("items.q2.question"),
      answer: t("items.q2.answer"),
    },
    {
      question: t("items.q3.question"),
      answer: t("items.q3.answer"),
    },
    {
      question: t("items.q4.question"),
      answer: t("items.q4.answer"),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-sm">
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-medium text-navy text-sm">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600 text-sm animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Personalized CTA Card */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy" />

          <h3 className="text-2xl font-bold text-navy mb-2">
            {t("cta.title")}
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link href={"/contact"}>
              <button className="bg-[#341f97] text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm">
                {t("cta.primary")}
              </button>
            </Link>
            <Link href={"/services"}>
              <button className="btn-navy px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm">
                {t("cta.secondary")}
              </button>
            </Link>
          </div>

          <p className="text-gray-500 text-xs max-w-md mx-auto">
            {t("cta.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
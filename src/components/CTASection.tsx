"use client";

import { Link } from "@/i18n/routing";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="py-20 px-4 md:px-8 bg-white border-t border-[#341f97]">
      <div className="max-w-5xl mx-auto">

        <div className="border border-[#341f97] bg-[#F8EFBA] p-8 md:p-12">

          {/* Content */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee5253] mb-4">
              {t("eyebrow")}
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#341f97] mb-4 leading-tight">
              {t("title")}
            </h2>

            <p className="text-[#341f97] mb-2">
              {t("line1")}
            </p>

            <p className="text-sm text-[#341f97] leading-relaxed">
              {t("line2")}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            <Link href={"/contact"}>
              <button className="px-8 py-3 bg-[#341f97] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#2c187e] transition-colors">
                {t("button")}
              </button>
            </Link>

            <div className="flex items-center gap-4 border border-[#341f97] px-4 py-3 bg-white">

              <div className="w-10 h-10 flex items-center justify-center border border-[#341f97] bg-[#F8EFBA]">
                <Phone className="w-5 h-5 text-[#341f97]" />
              </div>

              <div className="text-left">
                <p className="text-xs uppercase tracking-[0.15em] text-[#ee5253]">
                  {t("phoneLabel")}
                </p>
                <p className="font-semibold text-[#341f97]">
                  +52 1 55 9129 4026
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
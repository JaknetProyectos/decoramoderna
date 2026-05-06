"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const services = t.raw("services") as string[];
  const legal = t.raw("legal") as { name: string; href: string }[];

  return (
    <footer className="bg-white border-t border-[#341f97]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Services */}
          <div className="bg-[#F8EFBA] p-6 border border-[#341f97]">
            <h3 className="font-bold text-lg mb-6 text-[#341f97]">
              {t("titles.services")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-[#341f97] text-sm hover:text-[#ee5253]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-[#F8EFBA] p-6 border border-[#341f97]">
            <h3 className="font-bold text-lg mb-6 text-[#341f97]">
              {t("titles.legal")}
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-[#341f97] text-sm hover:text-[#ee5253]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 bg-[#F8EFBA] p-6 border border-[#341f97]">
            <h3 className="font-bold text-lg mb-6 text-[#341f97]">
              {t("titles.contact")}
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs mb-1 text-[#341f97]">
                  {t("contact.phone")}
                </p>
                <p className="text-sm text-[#341f97]">
                  +52 1 55 9129 4026
                </p>
              </div>

              <div>
                <p className="text-xs mb-1 text-[#341f97]">
                  {t("contact.email")}
                </p>
                <p className="text-sm text-[#341f97]">
                  informacion@decoramoderna.com
                </p>
              </div>

              <div>
                <p className="text-xs mb-1 text-[#341f97]">
                  {t("contact.address")}
                </p>
                <p className="text-sm text-[#341f97] leading-relaxed">
                  {t("contact.fullAddress")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#341f97]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold">
                  <span className="text-[#341f97]">v</span>
                  <span className="text-[#ee5253]">i</span>
                </span>
                <div className="ml-1 text-xs leading-tight">
                  <span className="text-[#341f97]">Decora</span>
                  <span className="text-[#ee5253]">Moderna</span>
                </div>
              </div>

              <p className="text-sm text-[#341f97]">
                {t("bottom.tagline")}
              </p>
            </div>

            <p className="text-sm text-[#341f97]">
              {t("bottom.rights")}
            </p>
          </div>

          {/* Payments */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="bg-[#F8EFBA] px-4 py-2 flex items-center gap-3 border border-[#341f97]">
              
              {/* Mastercard */}
              <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" fill="white"/>
                <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                <circle cx="25" cy="12" r="7" fill="#F79E1B"/>
                <path d="M20 6.5C21.8 8 23 10.3 23 12C23 13.7 21.8 16 20 17.5C18.2 16 17 13.7 17 12C17 10.3 18.2 8 20 6.5Z" fill="#FF5F00"/>
              </svg>

              {/* Visa */}
              <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none">
                <rect width="40" height="24" fill="white"/>
                <text x="5" y="16" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial">
                  VISA
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
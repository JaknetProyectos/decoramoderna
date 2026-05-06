"use client";

import { useState } from "react";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTranslations, useLocale } from "next-intl";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, total, itemCount, removeFromCart } = useCart();

  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  const t = useTranslations("Header");
  const locale = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(locale === "es" ? "es-MX" : "en-US", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const switchLocale = locale === "es" ? "en" : "es";

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-[#341f97]">

      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-8 py-4">

        {/* Logo */}
        <Link href="/" locale={locale} className="flex items-center">
          <span className="font-bold">
            <span className="text-3xl text-[#341f97]">D</span>
            <span className="text-xl text-[#341f97]">ecora</span>
            <span className="text-3xl text-[#ee5253]">M</span>
            <span className="text-xl text-[#ee5253]">oderna</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" locale={locale} className="text-sm font-semibold text-[#341f97] hover:text-[#ee5253]">
            {t("home")}
          </Link>
          <Link href="/services" locale={locale} className="text-sm font-semibold text-[#341f97] hover:text-[#ee5253]">
            {t("services")}
          </Link>
          <Link href="/contact" locale={locale} className="text-sm font-semibold text-[#341f97] hover:text-[#ee5253]">
            {t("contact")}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">




          <div className="flex gap-2">
            <button
              onClick={() => toggleLanguage("es")}
              className={`px-3 py-1 rounded text-sm ${locale === "es" ? "bg-[#341f97] text-white" : "bg-white/10"}`}
            >
              ES
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={`px-3 py-1 rounded text-sm ${locale === "en" ? "bg-[#341f97] text-white" : "bg-white/10"}`}
            >
              EN
            </button>
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-2 px-3 py-2 border border-[#341f97] bg-[#F5E9DA] hover:bg-[#EAD9C5]"
          >
            <span className="text-sm font-medium text-[#341f97]">
              {formatPrice(total)}
            </span>
            <span className="text-xs bg-[#341f97] text-[#F5E9DA] w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
            <ShoppingCart size={18} className="text-[#341f97]" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-[#341f97] text-[#F5E9DA]"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute right-4 md:right-8 top-16 w-80 bg-[#F5E9DA] border border-[#341f97] z-50">
          <div className="p-4 border-b border-[#341f97]">
            <h3 className="font-bold text-[#341f97]">{t("cart")}</h3>
          </div>

          {items.length === 0 ? (
            <div className="p-6 text-center text-[#341f97]">
              {t("emptyCart")}
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="p-4 border-b border-[#D6C2A8] flex justify-between gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#341f97]">
                        {item.name}
                      </p>
                      {item.variant && (
                        <p className="text-xs text-[#6B7280]">
                          {item.variant}
                        </p>
                      )}
                      <p className="text-sm text-[#ee5253] font-semibold mt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#6B7280] hover:text-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-[#341f97]">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-[#341f97]">
                    {t("total")}
                  </span>
                  <span className="font-bold text-[#341f97]">
                    {formatPrice(total)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  locale={locale}
                  className="block w-full text-center py-3 bg-[#ee5253] text-white font-semibold uppercase text-sm"
                  onClick={() => setIsCartOpen(false)}
                >
                  {t("checkout")}
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5E9DA] flex flex-col">

          <div className="flex justify-end p-4 border-b border-[#341f97]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center bg-[#341f97] text-[#F5E9DA]"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col justify-between flex-1 px-8 py-8">

            <nav className="flex flex-col gap-6">
              <Link href="/" locale={locale} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-[#341f97]">
                {t("home")}
              </Link>
              <Link href="/services" locale={locale} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-[#341f97]">
                {t("services")}
              </Link>
              <Link href="/contact" locale={locale} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-[#341f97]">
                {t("contact")}
              </Link>
            </nav>

            <div className="border-t border-[#341f97] pt-6">
              <p className="text-sm text-[#6B7280] mb-2">{t("contactLabel")}</p>
              <a
                href="tel:+525591294026"
                className="flex items-center gap-2 text-[#341f97] font-semibold"
              >
                <Phone size={18} />
                +52 1 55 9129 4026
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useContact } from "@/hooks/useContact";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const { sendContactForm, isLoading } = useContact();
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    asunto: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    await sendContactForm({
      nombre: formData.name,
      email: formData.email,
      telefono: formData.phone,
      mensaje: formData.message,
      servicioDeseado: formData.asunto,
      asunto: formData.asunto || t("defaultSubject"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      asunto: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 md:px-8 bg-[#F8EFBA] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest text-[#341f97] font-semibold">
            {t("heroEyebrow")}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#341f97] mt-4 mb-6 leading-tight">
            {t("heroTitle")}
          </h1>

          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>
        </div>

        {/* subtle shape */}
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#ee5253]/10 blur-3xl" />
      </section>

      {/* CONTENT */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* INFO SIDE */}
          <div>
            <h2 className="text-3xl font-bold text-[#341f97] mb-10">
              {t("infoTitle")}
            </h2>

            <div className="space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4 bg-[#F8EFBA]/40 p-5 rounded-xl border border-[#F8EFBA]">
                <div className="w-12 h-12 rounded-lg bg-[#341f97] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#341f97]">
                    {t("phoneLabel")}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t("phoneValue")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#ee5253] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#341f97]">
                    {t("emailLabel")}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t("emailValue")}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#341f97]/90 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#341f97]">
                    {t("addressLabel")}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t("addressValue")}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-lg bg-[#ee5253]/90 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#341f97]">
                    {t("hoursLabel")}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t("hoursValue")}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM SIDE */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 md:p-10">

            <h2 className="text-2xl font-bold text-[#341f97] mb-6">
              {t("formTitle")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Row */}
              <div className="grid md:grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder={t("namePlaceholder")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:border-[#341f97] focus:outline-none transition"
                />

                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:border-[#341f97] focus:outline-none transition"
                />

                <input
                  type="tel"
                  placeholder={t("phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:border-[#341f97] focus:outline-none transition"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-[#ee5253] text-white rounded-lg font-semibold tracking-wide hover:opacity-90 transition disabled:opacity-50"
              >
                {isLoading ? t("sendingButton") : t("sendButton")}
              </button>

            </form>
          </div>



        </div>
      </section>


      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5624463103522!2d-99.1887371!3d19.431302499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8aab7711ea9%3A0x42dcd53b6cf9b20!2sAv.%20Pdte.%20Masaryk%20178%2C%20Polanco%2C%20Polanco%20V%20Secc%2C%20Miguel%20Hidalgo%2C%2011560%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1778027298329!5m2!1ses-419!2smx"
        className="w-full"
        height="450"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </main>
  );
}
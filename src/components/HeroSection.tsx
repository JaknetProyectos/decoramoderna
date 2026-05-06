"use client";

import { useState } from "react";
import Image from "next/image";
import { useContact } from "@/hooks/useContact";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const { sendContactForm, isLoading } = useContact();
  const t = useTranslations("Hero");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affair: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    await sendContactForm({
      nombre: formData.name,
      email: formData.email,
      asunto: formData.affair || t("defaultSubject"),
      mensaje: formData.message,
    });

    setFormData({
      name: "",
      email: "",
      affair: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-white border-b border-[#341f97]">

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-8">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#341f97] leading-tight">
              {t("title.line1")}<br />{t("title.line2")}
            </h1>

            {/* Visual block */}
            <div>
              <Image
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=600&fit=crop"
                alt="Professional worker"
                width={500}
                height={600}
                className="object-cover w-full h-[420px]"
                priority
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#F8EFBA] border border-[#341f97] p-8">

              <h2 className="text-xl font-bold text-[#341f97] mb-6 text-center">
                {t("form.title")}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  placeholder={t("form.placeholders.name")}
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-14 px-4 border border-[#341f97] bg-white focus:outline-none"
                />

                <input
                  type="email"
                  placeholder={t("form.placeholders.email")}
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-14 px-4 border border-[#341f97] bg-white focus:outline-none"
                />

                <input
                  type="text"
                  placeholder={t("form.placeholders.subject")}
                  value={formData.affair}
                  onChange={(e) =>
                    setFormData({ ...formData, affair: e.target.value })
                  }
                  className="w-full h-14 px-4 border border-[#341f97] bg-white focus:outline-none"
                />

                <textarea
                  placeholder={t("form.placeholders.message")}
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-[#341f97] bg-white focus:outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-[#341f97] text-white font-semibold uppercase tracking-wide hover:bg-[#2c187e] transition disabled:opacity-50"
                >
                  {isLoading ? t("form.sending") : t("form.submit")}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
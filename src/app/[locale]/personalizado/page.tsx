"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, User, Mail, Hash, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";
import { useAlert } from "@/context/AlertContext";

export default function CustomProductPage() {
  const { addToCart } = useCart();
  const t = useTranslations("CustomProduct");
  const { showAlert } = useAlert()

  const [form, setForm] = useState({
    folio: "",
    total: "",
    nombre: "",
    apellidos: "",
    email: "",
    descripcion: "",
  });

  const setField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.folio || !form.total || !form.nombre || !form.email) {

      showAlert({
        title: "Error",
        message: t("alerts.requiredFields")
      })
      return;
    }

    addToCart({
      id: `custom-${Date.now()}`,
      name: t("productName"),
      price: Number(form.total),
      description: form.descripcion,
      meta: {
        folio: form.folio,
        nombre: form.nombre,
        apellidos: form.apellidos,
        email: form.email,
        descripcion: form.descripcion,
      },
    });

    showAlert({
      title: t("alerts.addedToCart"),
      message: ""
    })

    setForm({
      folio: "",
      total: "",
      nombre: "",
      apellidos: "",
      email: "",
      descripcion: "",
    });
  };

  const inputClass =
    "w-full h-14 pl-12 pr-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-teal transition";

  return (
    <div>
      <Header />

      <main className="min-h-screen bg-cream pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t("title")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* INFO CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-teal text-sm uppercase tracking-widest">
                  {t("badge")}
                </span>

                <h2 className="text-3xl font-bold text-navy mt-4 mb-4">
                  {t("infoTitle")}
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  {t("infoText")}
                </p>
              </div>

              <div className="mt-10 p-5 rounded-xl bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-600 space-y-1">
                  ✔ {t("steps.folio")}
                  <br />
                  ✔ {t("steps.amount")}
                  <br />
                  ✔ {t("steps.details")}
                </p>
              </div>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-10 space-y-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">
                {t("formTitle")}
              </h3>

              {/* Folio */}
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("placeholders.folio")}
                  value={form.folio}
                  onChange={(e) => setField("folio", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Total */}
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="number"
                  placeholder={t("placeholders.total")}
                  value={form.total}
                  onChange={(e) => setField("total", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Nombre */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("placeholders.name")}
                  value={form.nombre}
                  onChange={(e) => setField("nombre", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Apellidos */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("placeholders.lastName")}
                  value={form.apellidos}
                  onChange={(e) => setField("apellidos", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder={t("placeholders.email")}
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Descripción */}
              <div className="relative">
                <FileText className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                <textarea
                  placeholder={t("placeholders.description")}
                  value={form.descripcion}
                  onChange={(e) => setField("descripcion", e.target.value)}
                  className="w-full min-h-[120px] pl-12 pr-4 py-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-teal transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-navy hover:bg-opacity-90 transition font-semibold text-white"
              >
                {t("button")}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
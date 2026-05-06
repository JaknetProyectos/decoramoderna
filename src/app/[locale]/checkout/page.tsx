"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAlert } from "@/context/AlertContext";
import { processEtominPayment } from "@/lib/payment";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  CalendarDays,
  ShieldCheck,
  Building2,
  Globe,
  FileText,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type CheckoutForm = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  telefono: string;
  city: string;
  state: string;
  country: string;
  direccion: string;
  cp: string;
  cardNumber: string;
  cardName: string;
  month: string;
  year: string;
  cvv: string;
};

type CheckoutErrors = Partial<Record<keyof CheckoutForm, string>>;

const initialForm: CheckoutForm = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  telefono: "",
  city: "",
  state: "",
  country: "México",
  direccion: "",
  cp: "",
  cardNumber: "",
  cardName: "",
  month: "",
  year: "",
  cvv: "",
};

function Field({
  label,
  error,
  optional = false,
  optionalLabel,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  optionalLabel?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-[#341f97] uppercase tracking-[0.08em]">
        {label}
        {optional ? <span className="text-[#ee5253]"> {optionalLabel}</span> : null}
      </label>
      {children}
      {error ? <p className="text-xs text-[#ee5253]">{error}</p> : null}
    </div>
  );
}

function inputClass(hasError?: boolean) {
  return [
    "w-full h-14 rounded-none bg-white text-[#341f97] placeholder:text-[#6B7280]",
    "border px-4 outline-none transition-colors",
    hasError
      ? "border-[#ee5253] focus:border-[#ee5253]"
      : "border-[#341f97] focus:border-[#ee5253]",
  ].join(" ");
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-4 h-4 text-[#ee5253]" />
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#341f97]">
        {children}
      </h3>
    </div>
  );
}

export default function CheckoutPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const { showAlert } = useAlert();
  const locale = useLocale();
  const t = useTranslations("CheckoutPage");

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId] = useState(() => `IMP-${Date.now()}`);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [errors, setErrors] = useState<CheckoutErrors>({});

  const hasItems = useMemo(() => items.length > 0, [items.length]);
  const subtotal = total;
  const iva = subtotal * 0.16;

  const numberLocale = locale === "es" ? "es-MX" : "en-US";

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(numberLocale, {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(price);

  const setField = <K extends keyof CheckoutForm>(key: K, value: CheckoutForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
  };

  const validateForm = () => {
    const nextErrors: CheckoutErrors = {};
    const emailRegex = /^\S+@\S+\.\S+$/;
    const onlyDigits = (value: string) => value.replace(/\D/g, "");

    if (!form.firstName.trim()) nextErrors.firstName = t("required");
    if (!form.lastName.trim()) nextErrors.lastName = t("required");
    if (!form.email.trim()) nextErrors.email = t("required");
    else if (!emailRegex.test(form.email.trim())) nextErrors.email = t("invalidEmail");

    if (!form.telefono.trim()) nextErrors.telefono = t("required");
    else if (onlyDigits(form.telefono).length < 8) nextErrors.telefono = t("invalidPhone");

    if (!form.city.trim()) nextErrors.city = t("required");
    if (!form.state.trim()) nextErrors.state = t("required");
    if (!form.country.trim()) nextErrors.country = t("required");
    if (!form.direccion.trim()) nextErrors.direccion = t("required");
    if (!form.cp.trim()) nextErrors.cp = t("required");
    else if (onlyDigits(form.cp).length < 4) nextErrors.cp = t("invalidPostalCode");

    if (!form.cardNumber.trim()) nextErrors.cardNumber = t("required");
    else if (onlyDigits(form.cardNumber).length < 13) nextErrors.cardNumber = t("invalidCardNumber");

    if (!form.cardName.trim()) nextErrors.cardName = t("required");

    if (!form.month.trim()) nextErrors.month = t("required");
    else {
      const month = Number(form.month);
      if (!Number.isInteger(month) || month < 1 || month > 12) nextErrors.month = t("invalidMonth");
    }

    if (!form.year.trim()) nextErrors.year = t("required");
    else if (!/^\d{2}$/.test(form.year.trim())) nextErrors.year = t("invalidYear");

    if (!form.cvv.trim()) nextErrors.cvv = t("required");
    else if (!/^\d{3,4}$/.test(form.cvv.trim())) nextErrors.cvv = t("invalidCVV");

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items.length === 0 || total <= 0) {
      showAlert({
        type: "warning",
        title: t("emptyCartAlertTitle"),
        message: t("emptyCartAlertMessage"),
        confirmText: t("emptyCartConfirm"),
      });
      return;
    }

    if (!validateForm()) {
      showAlert({
        type: "warning",
        title: t("reviewDataAlertTitle"),
        message: t("reviewDataAlertMessage"),
        confirmText: t("reviewDataConfirm"),
      });
      return;
    }

    setIsProcessing(true);

    try {
      const customerFullName = [form.firstName, form.middleName, form.lastName]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();

      const paymentResponse = await processEtominPayment({
        amount: Number(total.toFixed(2)),
        orderId,
        customer: {
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          middleName: form.middleName.trim() || undefined,
          city: form.city.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          direccion: form.direccion.trim(),
          state: form.state.trim(),
          cp: form.cp.trim(),
          country: form.country.trim(),
        },
        cardData: {
          number: form.cardNumber.replace(/\s/g, ""),
          name: form.cardName.trim(),
          month: form.month.trim().padStart(2, "0"),
          year: form.year.trim(),
          cvv: form.cvv.trim(),
        },
      });

      const normalizedItems = items.map((item) => ({
        plan: {
          name: item.name,
          price: item.price,
        },
        quantity: 1,
      }));

      try {
        const checkoutResponse = await fetch(`/${locale ?? "es"}/api/checkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            customer: {
              nombre: customerFullName,
              email: form.email.trim(),
              telefono: form.telefono.trim(),
              firstName: form.firstName.trim(),
              middleName: form.middleName.trim() || "",
              lastName: form.lastName.trim(),
              city: form.city.trim(),
              state: form.state.trim(),
              country: form.country.trim(),
              direccion: form.direccion.trim(),
              cp: form.cp.trim(),
            },
            items: normalizedItems,
            subtotal,
            iva,
            total,
            payment: paymentResponse,
          }),
        });

        if (!checkoutResponse.ok) {
          throw new Error(t("mailSendError"));
        }
      } catch (mailErr) {
        console.error("Error enviando correo de checkout:", mailErr);

        showAlert({
          type: "warning",
          title: t("paymentApprovedTitle"),
          message: t("paymentApprovedMailIssueMessage"),
          confirmText: t("understood"),
        });

        clearCart();
        resetForm();
        return;
      }

      showAlert({
        type: "success",
        title: t("paymentApprovedTitle"),
        message: t("paymentApprovedMessage"),
        confirmText: t("great"),
      });

      clearCart();
      resetForm();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : t("paymentFailedFallback");

      showAlert({
        type: "error",
        title: t("paymentFailedTitle"),
        message: errorMessage,
        confirmText: t("retry"),
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-[#341f97]">
        <div className="border-b border-[#341f97] bg-[#F8EFBA]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#341f97] hover:text-[#ee5253] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToServices")}
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="space-y-8">
              <div className="border border-[#341f97] bg-[#F8EFBA] p-6 md:p-8">
                <span className="text-[#ee5253] text-sm font-semibold uppercase tracking-[0.22em]">
                  {t("checkoutBadge")}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                  {t("cartTitle")}
                </h1>
              </div>

              {hasItems ? (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="border border-[#341f97] bg-white p-6"
                    >
                      <div className="flex flex-col xl:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-[#341f97]">
                                {item.name}
                              </h3>
                              <p className="text-sm text-[#6B7280]">{item.id}</p>
                              {item.variant ? (
                                <p className="text-sm text-[#6B7280] mt-1">
                                  {item.variant}
                                </p>
                              ) : null}
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="text-[#6B7280] hover:text-[#ee5253] transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>

                          {item.description ? (
                            <p className="text-[#341f97] text-sm leading-relaxed">
                              {item.description}
                            </p>
                          ) : null}
                        </div>

                        <div className="flex flex-row xl:flex-col items-center xl:items-end justify-between xl:justify-start gap-4">
                          <div className="flex items-center gap-2 bg-[#F8EFBA] border border-[#341f97] rounded-none px-2 py-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center rounded-none hover:bg-white transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>

                            <span className="font-medium w-8 text-center text-[#341f97]">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center rounded-none hover:bg-white transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold text-[#341f97]">
                              {formatPrice(item.price)}
                            </p>
                            <p className="text-sm text-[#6B7280]">{t("plusVat")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-[#341f97] bg-white p-10 md:p-14 text-center">
                  <div className="w-20 h-20 border border-[#341f97] bg-[#F8EFBA] flex items-center justify-center mx-auto mb-6">
                    <ShoppingBag className="w-10 h-10 text-[#341f97]" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 text-[#341f97]">
                    {t("emptyCartTitle")}
                  </h2>
                  <p className="text-[#341f97] mb-8 max-w-md mx-auto">
                    {t("emptyCartDescription")}
                  </p>
                  <Link href="/services">
                    <button className="h-14 px-8 bg-[#ee5253] hover:bg-[#d93f40] transition-colors text-white font-semibold rounded-none">
                      {t("emptyCartButton")}
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {hasItems ? (
              <form
                onSubmit={handleCheckout}
                className="sticky top-6 border border-[#341f97] bg-[#F8EFBA] p-6 md:p-8"
              >
                <div className="border-b border-[#341f97] pb-4 mb-6">
                  <SectionTitle icon={FileText}>{t("summaryAndPaymentTitle")}</SectionTitle>

                  <div className="space-y-3">
                    <div className="flex justify-between text-[#341f97]">
                      <span>{t("subtotal")}</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#341f97]">
                      <span>{t("vat")}</span>
                      <span className="font-medium">{formatPrice(iva)}</span>
                    </div>
                    <div className="h-px bg-[#341f97]" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-[#341f97]">{t("total")}</span>
                      <span className="text-2xl font-bold text-[#ee5253]">
                        {formatPrice(total + iva)}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280]">
                      {t("order")} {orderId}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div className="border border-[#341f97] bg-white p-5 md:p-6">
                    <SectionTitle icon={User}>{t("customerDataTitle")}</SectionTitle>

                    <div className="space-y-4">
                      <Field label={t("nameLabel")} error={errors.firstName}>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("namePlaceholder")}
                            value={form.firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            className={`${inputClass(!!errors.firstName)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field
                        label={t("middleNameLabel")}
                        optional
                        optionalLabel={t("optional")}
                        error={errors.middleName}
                      >
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            placeholder={t("middleNamePlaceholder")}
                            value={form.middleName}
                            onChange={(e) => setField("middleName", e.target.value)}
                            className={`${inputClass(!!errors.middleName)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("lastNameLabel")} error={errors.lastName}>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("lastNamePlaceholder")}
                            value={form.lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            className={`${inputClass(!!errors.lastName)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("emailLabel")} error={errors.email}>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="email"
                            required
                            placeholder={t("emailPlaceholder")}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            className={`${inputClass(!!errors.email)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("phoneLabel")} error={errors.telefono}>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="tel"
                            required
                            placeholder={t("phonePlaceholder")}
                            value={form.telefono}
                            onChange={(e) => setField("telefono", e.target.value)}
                            className={`${inputClass(!!errors.telefono)} pl-11`}
                          />
                        </div>
                      </Field>
                    </div>
                  </div>

                  <div className="border border-[#341f97] bg-white p-5 md:p-6">
                    <SectionTitle icon={Building2}>{t("billingAddressTitle")}</SectionTitle>

                    <div className="space-y-4">
                      <Field label={t("cityLabel")} error={errors.city}>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("cityPlaceholder")}
                            value={form.city}
                            onChange={(e) => setField("city", e.target.value)}
                            className={`${inputClass(!!errors.city)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("stateLabel")} error={errors.state}>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("statePlaceholder")}
                            value={form.state}
                            onChange={(e) => setField("state", e.target.value)}
                            className={`${inputClass(!!errors.state)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("countryLabel")} error={errors.country}>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("countryPlaceholder")}
                            value={form.country}
                            onChange={(e) => setField("country", e.target.value)}
                            className={`${inputClass(!!errors.country)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("addressLabel")} error={errors.direccion}>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("addressPlaceholder")}
                            value={form.direccion}
                            onChange={(e) => setField("direccion", e.target.value)}
                            className={`${inputClass(!!errors.direccion)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("postalCodeLabel")} error={errors.cp}>
                        <div className="relative">
                          <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("postalCodePlaceholder")}
                            value={form.cp}
                            onChange={(e) => setField("cp", e.target.value)}
                            className={`${inputClass(!!errors.cp)} pl-11`}
                          />
                        </div>
                      </Field>
                    </div>
                  </div>

                  <div className="border border-[#341f97] bg-white p-5 md:p-6">
                    <SectionTitle icon={CreditCard}>{t("cardDataTitle")}</SectionTitle>

                    <div className="space-y-4">
                      <Field label={t("cardNumberLabel")} error={errors.cardNumber}>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            maxLength={16}
                            placeholder={t("cardNumberPlaceholder")}
                            inputMode="numeric"
                            value={form.cardNumber}
                            onChange={(e) => setField("cardNumber", e.target.value)}
                            className={`${inputClass(!!errors.cardNumber)} pl-11`}
                          />
                        </div>
                      </Field>

                      <Field label={t("cardNameLabel")} error={errors.cardName}>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                          <input
                            type="text"
                            required
                            placeholder={t("cardNamePlaceholder")}
                            value={form.cardName}
                            onChange={(e) => setField("cardName", e.target.value)}
                            className={`${inputClass(!!errors.cardName)} pl-11`}
                          />
                        </div>
                      </Field>

                      <div className="grid grid-cols-3 gap-3">
                        <Field label={t("monthLabel")} error={errors.month}>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                            <input
                              type="text"
                              required
                              placeholder={t("monthPlaceholder")}
                              maxLength={2}
                              value={form.month}
                              onChange={(e) => setField("month", e.target.value)}
                              className={`${inputClass(!!errors.month)} pl-11`}
                            />
                          </div>
                        </Field>

                        <Field label={t("yearLabel")} error={errors.year}>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                            <input
                              type="text"
                              required
                              placeholder={t("yearPlaceholder")}
                              maxLength={2}
                              value={form.year}
                              onChange={(e) => setField("year", e.target.value)}
                              className={`${inputClass(!!errors.year)} pl-11`}
                            />
                          </div>
                        </Field>

                        <Field label={t("cvvLabel")} error={errors.cvv}>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                            <input
                              type="password"
                              required
                              placeholder={t("cvvPlaceholder")}
                              maxLength={4}
                              value={form.cvv}
                              onChange={(e) => setField("cvv", e.target.value)}
                              className={`${inputClass(!!errors.cvv)} pl-11`}
                            />
                          </div>
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-14 rounded-none bg-[#ee5253] hover:bg-[#d93f40] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {t("processing")}
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      {t("proceedToPayment")}
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-[#341f97] mt-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t("securePayment")}</span>
                </div>

                <div className="mt-6 pt-6 border-t border-[#341f97]">
                  <div className="flex items-center justify-center gap-4">
                    <Image
                      src="/visa-mastercard.png"
                      alt={t("paymentMethodsAlt")}
                      width={150}
                      height={40}
                      className="h-8 w-auto opacity-90"
                    />

                    <Image
                      src="/etomin.png"
                      alt={t("paymentMethodsAlt")}
                      width={120}
                      height={70}
                    />
                  </div>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import Image from "next/image";

export type AlertType = "error" | "success" | "warning" | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

const typeStyles: Record<
  AlertType,
  {
    badge: string;
    iconWrap: string;
    iconColor: string;
    button: string;
    titleColor: string;
    textColor: string;
    surface: string;
    border: string;
  }
> = {
  success: {
    badge: "bg-[#F8EFBA] text-[#341f97]",
    iconWrap: "bg-[#341f97]",
    iconColor: "text-white",
    button: "bg-[#341f97] hover:bg-[#2c187e] text-white",
    titleColor: "text-[#341f97]",
    textColor: "text-[#341f97]",
    surface: "bg-white",
    border: "border-[#341f97]",
  },
  error: {
    badge: "bg-[#ee5253] text-white",
    iconWrap: "bg-[#ee5253]",
    iconColor: "text-white",
    button: "bg-[#ee5253] hover:bg-[#d93f40] text-white",
    titleColor: "text-[#341f97]",
    textColor: "text-[#341f97]",
    surface: "bg-white",
    border: "border-[#341f97]",
  },
  warning: {
    badge: "bg-[#F8EFBA] text-[#341f97]",
    iconWrap: "bg-[#ee5253]",
    iconColor: "text-white",
    button: "bg-[#341f97] hover:bg-[#2c187e] text-white",
    titleColor: "text-[#341f97]",
    textColor: "text-[#341f97]",
    surface: "bg-white",
    border: "border-[#341f97]",
  },
  info: {
    badge: "bg-[#341f97] text-white",
    iconWrap: "bg-[#F8EFBA]",
    iconColor: "text-[#341f97]",
    button: "bg-[#341f97] hover:bg-[#2c187e] text-white",
    titleColor: "text-[#341f97]",
    textColor: "text-[#341f97]",
    surface: "bg-white",
    border: "border-[#341f97]",
  },
};

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AlertOptions | null>(null);

  const showAlert = useCallback((opts: AlertOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsOpen(false);
    if (options?.onClose) {
      options.onClose();
    }
    setTimeout(() => setOptions(null), 150);
  }, [options]);

  const type = options?.type || "info";
  const styles = typeStyles[type];
  const DefaultIcon =
    type === "success"
      ? CheckCircle
      : type === "error"
      ? AlertCircle
      : type === "warning"
      ? AlertTriangle
      : Info;

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      {isOpen && options && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[#0f172a]/70"
            onClick={hideAlert}
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-title"
            className={`relative w-full max-w-lg ${styles.surface} ${styles.border} border shadow-2xl`}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#341f97] bg-[#F8EFBA] px-5 py-4">
              <span
                className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${styles.badge}`}
              >
                {type}
              </span>

              <button
                onClick={hideAlert}
                className="w-10 h-10 flex items-center justify-center border border-[#341f97] bg-white text-[#341f97] hover:bg-[#F8EFBA] transition-colors"
                aria-label="Cerrar alerta"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 ${styles.iconWrap} flex items-center justify-center border border-[#341f97]`}>
                  <div className={styles.iconColor}>
                    {options.icon || <DefaultIcon className="h-8 w-8" />}
                  </div>
                </div>
              </div>

              {/* Image */}
              {options.image && (
                <div className="relative aspect-video w-full mb-6 border border-[#341f97] bg-[#F8EFBA]">
                  <Image
                    src={options.image}
                    alt="Alert"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Text */}
              <div className="text-center mb-8">
                <h3
                  id="alert-title"
                  className={`text-2xl font-bold ${styles.titleColor} mb-3`}
                >
                  {options.title}
                </h3>
                <p className={`${styles.textColor} text-sm md:text-base leading-relaxed`}>
                  {options.message}
                </p>
              </div>

              {/* Action */}
              <button
                onClick={hideAlert}
                className={`w-full h-14 border border-[#341f97] font-semibold uppercase tracking-wider text-sm transition-colors ${styles.button}`}
              >
                {options.confirmText || "Continuar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert debe ser usado dentro de AlertProvider");
  }
  return context;
};
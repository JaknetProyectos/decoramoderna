"use client";

import { useState } from "react";
import { useAlert } from "@/context/AlertContext";
import { useLocale } from "next-intl";

interface ContactData {
    nombre: string;
    email: string;
    telefono?: string;
    mensaje: string;
    servicioDeseado?: string;
    presupuesto?: string;
    asunto: string;
}

export function useContact() {
    const [isLoading, setIsLoading] = useState(false);
    const { showAlert } = useAlert();
    const locale = useLocale()

    const sendContactForm = async (data: ContactData) => {
        setIsLoading(true);

        try {
            const response = await fetch(`/${locale ?? "es"}/api/contacto`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Error al enviar el mensaje");
            }

            showAlert({
                title: "¡Mensaje Enviado!",
                message: "Gracias por contactarnos. Un especialista de Vanguardia Tecnológica te contactará pronto.",
                confirmText: "Excelente",
            });

            return { success: true };
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido";

            showAlert({
                title: "Error de Envío",
                message: errorMessage,
                confirmText: "Reintentar",
            });

            return { success: false, error: errorMessage };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        sendContactForm,
        isLoading,
    };
}
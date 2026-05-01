// ═══════════════════════════════════════════════════════════════════
// PIENEZZA YACHT — CONFIGURACIÓN CENTRAL
// Edita SOLO este archivo el martes para conectar todos los servicios.
// Busca los valores marcados como REPLACE_WITH_... y sustitúyelos.
// ═══════════════════════════════════════════════════════════════════

const PIENEZZA_CONFIG = {

  // ============ WHATSAPP ============
  // Formato: código de país + número, sin espacios, sin +
  whatsappNumber: "16452073161",
  whatsappMessage: "Hi! I'd like to book a charter on Pienezza Yacht",

  // ============ CALENDLY ============
  // Crea 2 Event Types en calendly.com y pega las URLs aquí
  // Ej: https://calendly.com/pienezza-yacht/charter-4-horas
  calendlyUrl4hr: "REPLACE_WITH_CALENDLY_4HR_URL",
  calendlyUrl6hr: "REPLACE_WITH_CALENDLY_6HR_URL",

  // ============ STRIPE DEPOSIT ============
  stripeDepositUrl: "https://buy.stripe.com/7sY28q89O7HI38m9htejK00",

  // ============ EMAIL & TELÉFONO ============
  contactEmail: "info@pienezzayacht.com",
  contactPhone: "+16452073161",
  contactPhoneDisplay: "+1 (645) 207-3161",

  // ============ PAQUETES ============
  packages: {
    fourHour: {
      id: "4hr",
      name: "Charter 4 Hours",
      price: 800,
      duration: "4 hours"
    },
    sixHour: {
      id: "6hr",
      name: "Charter 6 Hours",
      price: 1200,
      duration: "6 hours"
    }
  }
};

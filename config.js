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
  calendlyUrl4hr: "https://calendly.com/pienezzayacht/pienezza-yacht",
  calendlyUrl6hr: "https://calendly.com/pienezzayacht/charter-6hr",

  // ============ EMAIL & TELÉFONO ============
  contactEmail: "info@pienezzayacht.com",
  contactPhone: "+16452073161",
  contactPhoneDisplay: "+1 (645) 207-3161",

  // ============ AMBERJACK CALENDLY ============
  amberjackCalendly4hr: "https://calendly.com/pienezzayacht/amberjack-4hr",
  amberjackCalendly6hr: "https://calendly.com/pienezzayacht/pienezza-yacht-amberjack-6hrs",

  // ============ PERSHING 64 CALENDLY ============
  pershingCalendly4hr: "https://calendly.com/pienezzayacht/pienezza-yacht-pershing-4hrs",
  pershingCalendly6hr: "https://calendly.com/pienezzayacht/pienezza-yacht-pershing-6hrs",
  pershingDeposit: 1000,

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

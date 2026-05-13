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

  // ============ PAQUETES ============
  // Bareboat Charter — bareboat rate + hourly captain fee (captain available, not included)
  packages: {
    fourHour: {
      id: "4hr",
      name: "Bareboat Charter 4 Hours",
      price: 800,
      bareboatRate: 600,
      captainRate: 50,
      duration: "4 hours",
      description: "Bareboat rate: $600 + Captain: $50/hr × 4hrs = $200 (Total $800)"
    },
    sixHour: {
      id: "6hr",
      name: "Bareboat Charter 6 Hours",
      price: 1200,
      bareboatRate: 900,
      captainRate: 50,
      duration: "6 hours",
      description: "Bareboat rate: $900 + Captain: $50/hr × 6hrs = $300 (Total $1,200)"
    }
  }
};

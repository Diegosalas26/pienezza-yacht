# SETUP TUESDAY — Pienezza Yacht

El único archivo que debes editar es `config.js`. Todo lo demás ya está listo.

---

## 1. Valores a reemplazar en config.js

Abre `config.js` y reemplaza estos 4 placeholders:

| # | Variable | Dónde conseguirlo |
|---|----------|-------------------|
| 1 | `calendlyUrl4hr` | Calendly → Event Types → tu event de 4 horas → Copy Link |
| 2 | `calendlyUrl6hr` | Calendly → Event Types → tu event de 6 horas → Copy Link |
| 3 | `stripeUrl4hr` | Stripe → Payment Links → link del producto $800 → Copy |
| 4 | `stripeUrl6hr` | Stripe → Payment Links → link del producto $1,200 → Copy |

**Estos ya tienen valores reales (no tocar salvo que cambien):**

| Variable | Valor |
|----------|-------|
| `whatsappNumber` | `15624756245` |
| `contactEmail` | `info@pienezzayacht.com` |
| `contactPhone` | `+15624756245` |

---

## 2. Orden de conexión de servicios

Sigue este orden exacto para evitar dependencias.

---

### Paso 1 — Stripe (20–30 min)

1. Ir a [stripe.com](https://stripe.com) → Sign up o Log in
2. Activar cuenta (requiere datos bancarios del negocio)
3. En el dashboard, ir a **Products** → "+ Add product"
   - Producto 1: nombre `Charter 4 Hours` · precio $800 · one time
   - Producto 2: nombre `Charter 6 Hours` · precio $1,200 · one time
4. Para cada producto: abrir el producto → **Payment Links** → "+ Create link"
5. Copiar los 2 URLs → pegar en `config.js` en `stripeUrl4hr` y `stripeUrl6hr`

> **Tip:** Empieza en modo Test (switch en la esquina superior izquierda del dashboard). Cambia a Live solo cuando hayas probado el flujo completo con `4242 4242 4242 4242`.

---

### Paso 2 — Calendly (15–20 min)

1. Ir a [calendly.com](https://calendly.com) → Sign up con el email del negocio
2. Ir a **Event Types** → "+ New Event Type" → "One-on-One"
   - Event 1: nombre `Charter 4 Hours` · duración 240 min · configurar horarios disponibles
   - Event 2: nombre `Charter 6 Hours` · duración 360 min · configurar horarios disponibles
3. **Conectar Google Calendar** (reemplaza TimeTree):
   - Ir a **Integrations** → Calendar Connections → Add Google Calendar
   - Calendly revisará conflictos en tiempo real contra tu Google Calendar
4. Copiar los Event Type URLs → pegar en `config.js` en `calendlyUrl4hr` y `calendlyUrl6hr`

> **Tip:** En cada Event Type puedes configurar: buffer time antes/después, máximo de reservas por día, y preguntas adicionales al cliente (ej. "¿Alguna ocasión especial?").

---

### Paso 3 — Actualizar config.js

```javascript
// Ejemplo de config.js completo después del martes:
const PIENEZZA_CONFIG = {
  whatsappNumber: "15624756245",
  whatsappMessage: "Hi! I'd like to book a charter on Pienezza Yacht",

  calendlyUrl4hr: "https://calendly.com/pienezza-yacht/charter-4-horas",  // ← tu URL real
  calendlyUrl6hr: "https://calendly.com/pienezza-yacht/charter-6-horas",  // ← tu URL real

  stripeUrl4hr: "https://buy.stripe.com/XXXXXXXX",   // ← tu URL real
  stripeUrl6hr: "https://buy.stripe.com/YYYYYYYY",   // ← tu URL real

  contactEmail: "info@pienezzayacht.com",
  contactPhone: "+15624756245",
  contactPhoneDisplay: "+1 (562) 475-6245",

  packages: {
    fourHour: { id: "4hr", name: "Charter 4 Hours", price: 800, duration: "4 hours" },
    sixHour:  { id: "6hr", name: "Charter 6 Hours", price: 1200, duration: "6 hours" }
  }
};
```

---

### Paso 4 — Deploy a GitHub Pages

Ejecuta estos comandos en la terminal, dentro de la carpeta del proyecto:

```bash
git add config.js
git commit -m "Connect Calendly and Stripe — go live"
git push origin main
```

GitHub Pages despliega automáticamente en ~1–2 minutos.

---

### Paso 5 — Verificar en producción

1. Abrir la URL del sitio en GitHub Pages
2. Seguir la lista de QA completa del archivo `TESTING.md`
3. Probar el flujo completo:
   - Click Reserve (rate card 6hr) → Calendly → reserva → Stripe → pagar con `4242 4242 4242 4242`
4. Probar WhatsApp desde el celular
5. ✅ Listo para entregar

---

## 3. Dominio custom (si aplica)

Si van a usar `pienezzayacht.com` u otro dominio:

1. Comprar el dominio en Namecheap, Squarespace Domains, etc.
2. En GitHub: **Settings** → **Pages** → **Custom domain** → escribir el dominio → Save
3. En el DNS del dominio, agregar estos registros tipo A:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Esperar propagación DNS: puede tardar de 10 min a 24 horas

---

## 4. Notas

- **Formulario de inquiry**: ya funciona con web3forms. El email de destino está configurado en el dashboard de web3forms bajo la access key actual. Si el dueño quiere cambiar el email de destino, debe hacerlo en [web3forms.com](https://web3forms.com) → dashboard.
- **WhatsApp**: el número +1 (562) 475-6245 ya está activo. Si el negocio quiere un número de WhatsApp Business diferente, solo cambiar `whatsappNumber` en `config.js`.
- **Google Calendar / TimeTree**: una vez que Calendly esté conectado a Google Calendar, las reservas aparecen ahí automáticamente. TimeTree se puede discontinuar cuando el dueño esté cómodo con el nuevo flujo.

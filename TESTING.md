# TESTING GUIDE — Pienezza Yacht

## 1. Modal de Reserva

**Abrir desde cada punto de entrada:**
- "Reserve Now" en nav desktop → modal abre con 6hr pre-seleccionado
- "Reserve" en menu móvil (hamburger) → modal abre
- "Book Your Charter" en el hero → modal abre
- "Reserve" en rate card 4 horas → modal abre con **4hr** pre-seleccionado y borde dorado
- "Reserve" en rate card 6 horas → modal abre con **6hr** pre-seleccionado y borde dorado

**Cerrar el modal:**
- Click en X (esquina superior derecha) → cierra
- Click en el overlay oscuro fuera del box → cierra
- Tecla Escape → cierra

**Selector de paquete:**
- Click en "4 Hours" → borde dorado, fondo más claro, botón de WhatsApp actualiza el mensaje
- Click en "6 Hours" → ídem

---

## 2. WhatsApp (ya activo con número real)

**Probar desde el modal:**
1. Abrir modal → seleccionar paquete
2. Click en "Reserve via WhatsApp"
3. Debe abrir `wa.me` con número `+15624756245`
4. Mensaje pre-llenado esperado (paquete 4hr):
   ```
   Hi! I'd like to book a charter on Pienezza Yacht — Charter 4 Hours ($800)
   ```
5. Mensaje pre-llenado esperado (paquete 6hr):
   ```
   Hi! I'd like to book a charter on Pienezza Yacht — Charter 6 Hours ($1,200)
   ```

**Verificar link directo en browser:**
```
https://wa.me/15624756245?text=Hi!%20I%27d%20like%20to%20book%20a%20charter%20on%20Pienezza%20Yacht%20%E2%80%94%20Charter%206%20Hours%20(%241%2C200)
```

---

## 3. Calendly → Stripe (hoy con placeholders)

**Comportamiento actual (antes del martes):**
- Click en "Reserve & Pay Online" → aparece un alert explicando que Calendly aún no está configurado
- Esto es **correcto** mientras los URLs sean REPLACE_...

**Después de conectar el martes:**
1. Click en "Reserve & Pay Online" (con 4hr seleccionado)
2. Popup de Calendly debe abrirse con el event type de 4 horas
3. Seleccionar fecha y hora → llenar datos → confirmar
4. Página redirige automáticamente al Stripe Payment Link de $800
5. En Stripe, usar tarjeta de prueba: `4242 4242 4242 4242` · fecha futura · cualquier CVC

**Repetir el flujo con 6hr** (popup 6 horas → Stripe $1,200)

---

## 4. Formulario de Inquiry (Contact section)

El formulario ya está conectado a **web3forms.com** con una access key activa.

**Probar:**
1. Llenar: nombre, apellido, email (campos requeridos)
2. Click en "Send Inquiry"
3. La página redirige a la confirmación de web3forms
4. Verificar que el email llegó al buzón registrado en web3forms

---

## Lista de QA del martes (antes de entregar)

### Modal
- [ ] Abre desde los 5 puntos de entrada
- [ ] Pre-selección 4hr funciona al venir del rate card 4hr
- [ ] Pre-selección 6hr funciona al venir del rate card 6hr
- [ ] Cierra con X, overlay y Escape
- [ ] Animación suave (sin parpadeo)
- [ ] En mobile aparece como bottom sheet (sube desde abajo)
- [ ] Scroll interno si el contenido es largo en pantallas pequeñas

### WhatsApp
- [ ] Link abre WhatsApp con el número correcto
- [ ] Mensaje incluye nombre del paquete y precio correcto
- [ ] Funciona en iPhone (WhatsApp app)
- [ ] Funciona en Android (WhatsApp app)
- [ ] Funciona en desktop (WhatsApp Web)

### Calendly + Stripe (martes)
- [ ] Event type 4hr se abre correctamente
- [ ] Event type 6hr se abre correctamente
- [ ] Después de reservar en Calendly, redirige a Stripe
- [ ] Stripe muestra el precio correcto ($800 ó $1,200)
- [ ] Flujo completo con tarjeta `4242 4242 4242 4242` funciona

### Formulario
- [ ] Envío llega al email correcto
- [ ] Validación de campos requeridos funciona
- [ ] Funciona en mobile

### Contacto
- [ ] Teléfono en sección Contact muestra +1 (562) 475-6245
- [ ] Teléfono en footer muestra +1 (562) 475-6245
- [ ] Click en teléfono abre marcador en mobile
- [ ] Email links abren cliente de correo

### Diseño general
- [ ] Fuentes, colores y espaciado idénticos al diseño original
- [ ] Hero, gallery, lightbox, testimonios y secciones siguen funcionando
- [ ] Responsive en iPhone Safari (tráfico de Instagram bio)
- [ ] Responsive en Android Chrome
- [ ] Responsive en desktop Chrome y Safari

### Performance
- [ ] El script de Calendly **NO** se carga en el primer load (verificar en DevTools → Network)
- [ ] El script de Calendly SÍ aparece en Network después de hacer click en "Reserve & Pay Online"

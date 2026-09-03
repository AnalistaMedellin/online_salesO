# Landing B2B — Canal Digital Autovenz

Landing page para captar talleres, almacenes automotrices y flotas, y convertirlos en clientes del canal de venta digital corporativo de Autovenz.

## Stack

- Vite + React
- Tailwind CSS v4
- lucide-react (íconos)

## Correr en local

```
npm install
npm run dev
```

## Pendientes

- [ ] **Número de WhatsApp real** — `src/config.js` tiene un placeholder (`573000000000`).
- [ ] **Videos reales** del "Manifiesto VIP" y "Operación Reloj Suizo" — hoy el modal muestra "Video próximamente" (`VipVideo.jsx`, `OperationProcess.jsx`). Enfoque de cada uno: **Manifiesto VIP** (`VipVideo.jsx`) es institucional — oficinas y equipo de Autovenz; **Operación Reloj Suizo** (`OperationProcess.jsx`) es la operación de bodega/logística. No confundir el material al reemplazar los placeholders.
- [ ] **Fotos reales** de producto/almacén — hoy se usan imágenes de stock de Unsplash (Hero, OperationProcess, VipVideo).
- [ ] **Verificar contenido de las respuestas de FAQ** — montos y condiciones de crédito redactados provisionalmente, confirmar con el negocio (`FAQ.jsx`).
- [ ] **Botón "Hablar con un asesor corporativo"** — hoy apunta a `href="#"`, falta decidir si es `mailto:` o WhatsApp también.
- [ ] **Revisar responsive** en mobile/tablet real.
- [ ] **Dominio/hosting** donde se publicará el sitio.

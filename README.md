# Safe Ports Website

Landing corporativa de Safe Ports y portal público de acceso para clientes de Own Terra.

Own Terra es el producto inmobiliario insignia de Safe Ports. El acceso a la aplicación se configura al construir el sitio mediante una variable de entorno.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Arquitectura

- `src/App.jsx`: composición de la landing.
- `src/components/`: componentes reutilizables por sección.
- `src/data/content.js`: contenido del ecosistema, beneficios, dashboards, KPIs y testimonios.
- `src/lib/useCountUp.js`: animación de KPIs al hacer scroll.
- `src/index.css`: Tailwind, tokens visuales y utilidades.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
VITE_OWN_TERRA_URL=https://app.example.com npm run build
npm run preview
```

`VITE_OWN_TERRA_URL` habilita el botón del portal de clientes. Si no está definida, la página muestra el acceso como pendiente y evita enviar al usuario a un enlace incompleto.

## Deploy

Configuración recomendada:

- Build command: `npm run build`
- Publish directory: `dist`

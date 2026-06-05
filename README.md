# Own Terra Website

Landing oficial de Own Terra Ecosystems, separada de `own-terra-frontend` y `own-terra-backend`.

Own Terra Ecosystems es una plataforma SaaS empresarial para centralizar el ciclo completo de una empresa inmobiliaria: lotes, propiedades, desarrollos, clientes, contratos, cobranza, finanzas, construcción, marketing y analítica.

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
npm run build
npm run preview
```

## Deploy

Configuración recomendada:

- Build command: `npm run build`
- Publish directory: `dist`

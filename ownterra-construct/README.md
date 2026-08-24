# Ownterra Construct — Website

Landing pública de Ownterra Construct, el ERP para cuantificar y presupuestar obra
(números generadores, presupuesto híbrido APU/alzado/paramétrico y catálogo maestro de
insumos), y portal de acceso para clientes.

## Stack

- React
- Vite
- JavaScript
- Lucide React

## Arquitectura

- `src/App.jsx`: composición completa de la landing (nav, hero, módulos, demo, portal de acceso, contacto).
- `src/index.css`: tokens visuales (paleta amarillo/negro/gris) y estilos de la página.
- `src/assets/logo-mark.png`: isotipo (grúa + hoja) recortado con fondo transparente.
- `public/videos/`: video de demostración y su poster.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
VITE_OWN_TERRA_URL=https://app.example.com/construccion npm run build
npm run preview
```

`VITE_OWN_TERRA_URL` habilita el botón del portal de clientes (por defecto apunta a
`https://dev.own-terra.com/construccion`).

## Deploy

Configuración recomendada:

- Build command: `npm run build`
- Publish directory: `dist`

# Own Terra Public Website (current implementation)

Este repositorio contiene el sitio público funcional que hoy presenta el ecosistema Own Terra. El nombre del repositorio es histórico; no significa que exista otro sitio productivo bajo `own-terra-website/`, que actualmente es solo un placeholder vacío.

Antes de rediseñar, renombrar o desplegar, seguir el brief [`../own-terra-obsidian/19 - Public Website Brief.md`](../own-terra-obsidian/19%20-%20Public%20Website%20Brief.md). El contenido público distingue Lands como aplicación web, Properties como vista previa funcional y Construction como exploración sin módulo operativo.

Landing pública de Own Terra con navegación de producto, solicitud de demo y un enlace de utilidad hacia la aplicación autenticada cuando se configura su URL.

El sitio no almacena datos operativos ni sustituye el login, la sesión o los portales de la aplicación. El acceso autenticado se configura al construir el sitio mediante una variable de entorno.

## Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Arquitectura

- `src/App.jsx`: landing bilingüe y formulario de calificación para demos.
- `src/Hub.jsx`: comparador público del estado de las soluciones.
- `src/ProductLanding.jsx`: páginas de Lands, Properties y la exploración de Construction.
- `src/data/publicProducts.js`: catálogo compartido por Home y Hub; cambiar aquí nombres, estados, resúmenes y etiquetas.
- `src/components/`: componentes reutilizables por sección.
- `src/data/content.js`: contenido del ecosistema, beneficios, dashboards, KPIs y testimonios.
- `src/lib/useCountUp.js`: animación de KPIs al hacer scroll.
- `src/index.css`: Tailwind, tokens visuales y utilidades.

## Desarrollo

```bash
npm install
npm run dev
```

Verificar que los estados públicos y las declaraciones obligatorias no hayan
regresado:

```bash
npm test
```

## Producción

```bash
VITE_SITE_URL=https://www.example.com \
VITE_OWN_TERRA_URL=https://app.example.com \
npm run build
npm run preview
```

- `VITE_SITE_URL` es obligatorio en producción y debe contener el origen público final, sin `/` al final. Se usa para los metadatos sociales absolutos.
- `VITE_OWN_TERRA_URL` es opcional y debe apuntar a la aplicación autenticada real. Si no está definida, la página muestra “Solicitar acceso” y evita enviar al usuario a desarrollo o a un enlace incompleto.

No usar URLs `dev`, `localhost` o `pages.dev` para `VITE_OWN_TERRA_URL` en el despliegue público.

## Estado público del producto

- **Lands — Aplicación web:** los flujos existen; deben verificarse contra el backend y los permisos del entorno objetivo antes de cada release.
- **Properties — Vista previa funcional:** la UI existe, pero gran parte de los módulos usa datos demo, locales o en memoria.
- **Construction — Exploración:** no tiene rutas operativas en la aplicación autenticada.
- **Finance — En evolución:** es una vista transversal; las reglas contables y la conciliación todavía requieren validación.

## Deploy

Configuración recomendada:

- Build command: `npm run build`
- Publish directory: `dist`

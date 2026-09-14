import {
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileSignature,
  Hammer,
  Home,
  Landmark,
  LineChart,
  Map,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Contacto", href: "#contacto" },
];

export const loginUrl = import.meta.env.VITE_OWN_TERRA_URL?.trim() || "#contacto";

export const quickBenefits = [
  "Una organización",
  "Permisos por aplicación",
  "Contexto compartido",
];

export const ecosystemApps = [
  {
    name: "Own Terra Core",
    category: "Plataforma compartida",
    description: "Organización, sesión, equipo, clientes, agenda, formularios, documentos y permisos compartidos.",
    icon: Network,
    statusLabel: "Core compartido",
  },
  {
    name: "Own Terra Lands",
    category: "Aplicación web",
    description: "Fraccionamientos, planos, lotes, clientes, contratos, cobranza, documentos y reportes para equipos que venden tierra.",
    icon: Map,
    statusLabel: "Aplicación web",
  },
  {
    name: "Own Terra Properties",
    category: "Vista previa funcional",
    description: "Portafolio, propietarios, propiedades, unidades, comunidades, rentas y operación con datos principalmente demo o locales.",
    icon: Home,
    statusLabel: "Vista previa funcional",
  },
  {
    name: "Finanzas",
    category: "Vista transversal",
    description: "UI en evolución para ingresos, egresos, cobranza, cuentas y reportes; las reglas contables aún requieren validación.",
    icon: BadgeDollarSign,
    statusLabel: "En evolución",
  },
  {
    name: "Own Terra Construction",
    category: "Exploración",
    description: "Concepto sin módulo operativo ni rutas activas dentro de la aplicación autenticada.",
    icon: Hammer,
    statusLabel: "Exploración",
  },
];

export const benefits = [
  {
    title: "Operación centralizada",
    description: "Core conecta organización, identidad, equipo, clientes, agenda y documentos con las verticales habilitadas.",
    icon: Network,
  },
  {
    title: "Mayor control financiero",
    description: "Visualiza saldos, vencimientos, transacciones registradas y compromisos financieros por proyecto o cliente.",
    icon: Landmark,
  },
  {
    title: "Mejor seguimiento comercial",
    description: "Convierte leads en clientes con un proceso claro desde el primer contacto hasta el cierre.",
    icon: BriefcaseBusiness,
  },
];

export const dashboardTabs = [
  {
    label: "Dashboard CORE",
    icon: BarChart3,
    metric: "$204k",
    title: "Panel central del ecosistema",
    description: "Resumen comercial y financiero con ingresos del mes, ventas, lotes disponibles, inventario total y contratos activos.",
    rows: ["Ingresos del mes", "Ventas del mes", "Lotes disponibles", "Contratos activos"],
    image: "/dashboard/core.png",
    imageAlt: "Panel CORE del ecosistema Own Terra con aplicaciones, finanzas del ecosistema y módulos disponibles.",
  },
  {
    label: "Gestión de lotes",
    icon: Map,
    metric: "700",
    title: "Inventario vivo por fraccionamiento",
    description: "Controla carga de lotes, disponibilidad, apartados, vendidos, etapas, medidas y estado comercial de cada unidad.",
    rows: ["Lotes disponibles", "Lotes vendidos", "Apartados", "Inventario total"],
    image: "/dashboard/gestion-lotes.png",
    imageAlt: "Vista de fraccionamientos con proyectos, plano de referencia y matriz de lotes disponibles, apartados y vendidos.",
  },
  {
    label: "Contratos",
    icon: FileSignature,
    metric: "2",
    title: "Repositorio de contratos y cierres",
    description: "Administra contratos activos, montos, clientes, propiedades, avance, edición, impresión y descarga de PDF.",
    rows: ["Contratos activos", "Compraventa", "Avance promedio", "PDF disponibles"],
    image: "/dashboard/contratos.png",
    imageAlt: "Repositorio de contratos de Own Terra con contratos activos, montos, clientes y acciones de PDF.",
  },
  {
    label: "Clientes",
    icon: Users,
    metric: "2",
    title: "Clientes & CRM conectados al core",
    description: "Acompaña compradores, prospectos y asesores con identidad del ecosistema, contratos, historial de transacciones, notas y documentos.",
    rows: ["Clientes vinculados", "Compradores activos", "Contratos activos", "Vencimientos pendientes"],
    image: "/dashboard/clientes.png",
    imageAlt: "Vista de Clientes y CRM de Own Terra con perfil, contratos, pagos y documentos del cliente.",
  },
  {
    label: "Reportes",
    icon: LineChart,
    metric: "72",
    title: "Reportes financieros por cliente",
    description: "Genera estados de cuenta con monto contratado, saldo pendiente, historial de transacciones registradas y plan de vencimientos.",
    rows: ["Plan de vencimientos", "Saldo pendiente", "Vencimientos pendientes", "Reporte imprimible"],
    image: "/dashboard/reportes.png",
    imageAlt: "Reporte financiero del cliente con resumen de cuenta, comportamiento de pago, contratos y plan de pagos.",
  },
];

export const kpis = [
  { label: "sesión y organización compartidas", value: 1, prefix: "", suffix: "" },
  { label: "verticales principales: Lands y Properties", value: 2, prefix: "", suffix: "" },
  { label: "niveles públicos: aplicación, vista previa y exploración", value: 3, prefix: "", suffix: "" },
  { label: "niveles en Properties: organización, propiedad y unidad", value: 3, prefix: "", suffix: "" },
];

export const trustSignals = [
  { label: "Datos protegidos", icon: ShieldCheck },
  { label: "Operación trazable", icon: ClipboardCheck },
  { label: "Decisiones inteligentes", icon: CheckCircle2 },
];

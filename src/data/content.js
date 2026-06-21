import {
  BadgeDollarSign,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  FileSignature,
  Hammer,
  Home,
  Landmark,
  LineChart,
  Map,
  Megaphone,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Contacto", href: "#contacto" },
];

export const loginUrl = "https://ownterra-app-dev.pages.dev/";

export const quickBenefits = [
  "CRM inmobiliario",
  "Contratos digitales",
  "Control financiero",
];

export const ecosystemApps = [
  {
    name: "Own Terra Lands",
    category: "Lotificaciones",
    description: "Administración de lotificaciones, terrenos, disponibilidad, etapas y estatus comerciales.",
    icon: Map,
  },
  {
    name: "Own Terra Neighborhoods",
    category: "Comunidades",
    description: "Gestión de condominios, fraccionamientos, residentes, cuotas y operación comunitaria.",
    icon: Building2,
    comingSoon: true,
  },
  {
    name: "CRM",
    category: "Comercial",
    description: "Directorio de clientes con pipeline de etapas, historial de contacto, citas y estado de cuenta.",
    icon: Users,
  },
  {
    name: "Finanzas",
    category: "Seguimiento",
    description: "Registro de transacciones, seguimiento de vencimientos, alertas de pago y control financiero por proyecto.",
    icon: BadgeDollarSign,
  },
  {
    name: "Analytics",
    category: "Inteligencia",
    description: "Reportes de ventas, comisiones, cobranza e inventario con datos en tiempo real por organización.",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Own Terra Properties",
    category: "Propiedades",
    description: "Gestión de propiedades, rentas, contratos, mantenimiento e inventario inmobiliario.",
    icon: Home,
    comingSoon: true,
    finalStage: true,
  },
  {
    name: "Construcción",
    category: "Obra",
    description: "Seguimiento de obras, avance físico, tareas, responsables y proyectos en ejecución.",
    icon: Hammer,
    comingSoon: true,
    finalStage: true,
  },
  {
    name: "Marketing",
    category: "Crecimiento",
    description: "Gestión de campañas inmobiliarias, canales, leads y rendimiento comercial.",
    icon: Megaphone,
    comingSoon: true,
    finalStage: true,
  },
];

export const benefits = [
  {
    title: "Operación centralizada",
    description: "Toda la información crítica del negocio vive en una sola fuente de verdad, sin hojas de cálculo ni sistemas aislados.",
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
  { label: "propiedades administradas", value: 10000, prefix: "+", suffix: "" },
  { label: "proyectos inmobiliarios", value: 500, prefix: "+", suffix: "" },
  { label: "organizaciones conectadas", value: 50, prefix: "+", suffix: "" },
  { label: "disponibilidad operativa", value: 99.9, prefix: "", suffix: "%" },
];

export const trustSignals = [
  { label: "Datos protegidos", icon: ShieldCheck },
  { label: "Operación trazable", icon: ClipboardCheck },
  { label: "Decisiones inteligentes", icon: CheckCircle2 },
];



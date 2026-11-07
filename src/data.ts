// Contenido del portafolio (basado en la hoja de vida de Duan).

export const PROFILE = {
  name: 'Duan Esteban Gómez Rojas',
  short: 'Duan Gómez',
  role: 'Desarrollador de Software',
  location: 'Medellín, Colombia',
  email: 'duangomez8@gmail.com',
  phone: '+57 323 468 6377',
  whatsapp: 'https://wa.me/573234686377',
  github: 'https://github.com/DuanGomez',
  dcodea: 'https://www.instagram.com/dcod.ea/',
  summary:
    'Desarrollador de software con enfoque autodidacta, técnico en Desarrollo de Software y estudiante de Ingeniería de Software. ' +
    'Construyo aplicaciones de punta a punta —del diseño de la interfaz a la API y la base de datos— y tengo experiencia en el sector deportivo. ' +
    'Me caracterizo por mi responsabilidad, compromiso y capacidad de adaptación.',
};

export const STATS = [
  { value: '12+', label: 'proyectos publicados' },
  { value: '7', label: 'meses en WeSportech' },
  { value: '4.º', label: 'semestre de Ingeniería' },
];

export interface Project {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image?: string;
  gallery?: string[];
  demo?: string;
  repo?: string;
  accent: string;
}

const PAGES = 'https://duangomez.github.io';
const GH = 'https://github.com/DuanGomez';

export const PROJECTS: Project[] = [
  {
    id: 'vexli',
    name: 'Vexli',
    kicker: 'Inventario y caja diaria para tiendas',
    summary: 'Punto de venta para tiendas pequeñas: se vende en segundos con lector de código de barras, cada venta descuenta el inventario y al final del día la caja se cierra con arqueo y diferencia.',
    highlights: ['Caja con cobro en efectivo, transferencia, tarjeta o mixto, cálculo del cambio, recibo y anulaciones que devuelven existencias', 'Inventario con costo promedio ponderado, conteos, mermas, alertas de existencias mínimas e historial de movimientos', 'Resumen del día, reportes de margen y vitrina pública con pedidos por WhatsApp; una sola demo con un mes de ventas'],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
    image: 'projects/vexli.webp',
    gallery: ['projects/vexli-panel.webp'],
    demo: 'https://vexli-caja.pages.dev/',
    repo: `${GH}/Vexli`,
    accent: '#16A34A',
  },
  {
    id: 'vellum',
    name: 'Vellum',
    kicker: 'Agenda de citas para barberías, estéticas y consultorios',
    summary: 'Cada negocio tiene su página de reservas: el cliente elige servicio, profesional y una hora libre de verdad, y el negocio gestiona su agenda del día y recuerda las citas por WhatsApp.',
    highlights: ['Disponibilidad calculada en el servidor: horarios con pausas, ausencias, duración del servicio y citas tomadas, sin dobles reservas', 'Agenda con una columna por profesional, estados de la cita, clientes con historial y reportes de ingresos e inasistencia', 'Recordatorios con un toque por WhatsApp y envío automático opcional con la API oficial de Meta'],
    stack: ['Angular', 'TypeScript', 'PHP', 'Laravel', 'PostgreSQL'],
    image: 'projects/vellum.webp',
    gallery: ['projects/vellum-panel.webp'],
    demo: 'https://vellum-citas.pages.dev/',
    repo: `${GH}/Vellum`,
    accent: '#B4532A',
  },
  {
    id: 'beside',
    name: 'Beside',
    kicker: 'App móvil para estar cerca de los tuyos',
    summary: 'App para Android e iPhone que muestra en un mapa nocturno dónde está tu gente en tiempo real, con su batería y la canción que suena en su Spotify, y avisa cuando llegan a sus lugares.',
    highlights: ['Ubicación en segundo plano que resiste el ahorro de batería de cada marca, con modo «juntitos» cuando dos personas están cerca', 'Avisos automáticos de llegadas, salidas y batería baja desde el servidor (Supabase + ntfy)', 'Mapa vectorial MapLibre con estilo propio, historial de 30 días que se limpia solo y actualizaciones dentro de la app'],
    stack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'MapLibre'],
    image: 'projects/beside.webp',
    gallery: ['projects/beside-lugares.webp'],
    demo: 'https://duangomez.github.io/Beside/demo/',
    repo: `${GH}/Beside`,
    accent: '#F2789A',
  },
  {
    id: 'brackit',
    name: 'Brackit',
    kicker: 'SaaS de gestión de torneos',
    summary: 'Plataforma multi-organización para ligas, clubes y empresas: cada una gestiona sus torneos, sedes, canchas, equipos y árbitros, y publica marcadores en vivo en su propia página.',
    highlights: ['Programación automática en canchas que respeta horarios, bloqueos y descanso de los equipos', 'Consola del árbitro en el celular con marcador en vivo por WebSocket', '7 deportes con sus reglas, roles por organización y planes con límites'],
    stack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    image: 'projects/brackit.webp',
    gallery: ['projects/brackit-panel.webp'],
    demo: 'https://brackit.dcodea-correo.workers.dev/',
    repo: `${GH}/Brackit`,
    accent: '#1F5BFF',
  },
  {
    id: 'wms',
    name: 'WMS',
    kicker: 'SaaS de monitoreo de flotas',
    summary: 'Plataforma multi-empresa para ver en tiempo real los vehículos de una pyme sobre el mapa de Medellín, con geocercas, alertas automáticas y reportes.',
    highlights: ['Mapa en vivo con simulador GPS sobre una ruta real de Medellín', 'Geocercas dibujadas a mano y alertas de robo, desvío y parada', 'API de Azure Functions que en la demo corre completa en el navegador'],
    stack: ['Angular', 'Azure Functions', 'Node.js', 'SQLite', 'Leaflet'],
    image: 'projects/wms.webp',
    gallery: ['projects/wms-dashboard.webp'],
    demo: `${PAGES}/WMS/`,
    repo: `${GH}/WMS`,
    accent: '#2F6FED',
  },
  {
    id: 'waia',
    name: 'Waia',
    kicker: 'Asistente de WhatsApp para negocios',
    summary: 'Producto SaaS que atiende el WhatsApp de un negocio: responde preguntas frecuentes, comparte precios del catálogo y convierte consultas en clientes potenciales.',
    highlights: ['Motor de reglas propio: intención, contexto y captura de datos', 'Simulador de conversaciones con transferencia a una persona', 'Un mismo producto configurado para restaurante, tienda y barbería'],
    stack: ['Angular', 'TypeScript', 'Signals', 'SVG'],
    image: 'projects/waia.webp',
    gallery: ['projects/waia-resumen.webp'],
    demo: `${PAGES}/Waia/`,
    repo: `${GH}/Waia`,
    accent: '#0E8A50',
  },
  {
    id: 'laboratorio-de-masas',
    name: 'Laboratorio de Masas',
    kicker: 'Física interactiva en 3D',
    summary: 'App educativa donde dos bolas de acero cromado siguen las leyes de Newton: empuje con fricción, choques con restitución, caída libre con aire y un péndulo de Newton.',
    highlights: ['Motor de física puro con paso fijo de 2 ms y 20 pruebas unitarias', 'Escena Three.js con reflejos PMREM, sombras y cámara con límites', 'Conclusiones automáticas en lenguaje sencillo al terminar cada experimento'],
    stack: ['Angular', 'Three.js', 'TypeScript', 'Vitest'],
    image: 'projects/laboratorio.webp',
    gallery: ['projects/laboratorio-pendulo.webp'],
    demo: `${PAGES}/Laboratorio-de-Masas/`,
    repo: `${GH}/Laboratorio-de-Masas`,
    accent: '#0071E3',
  },
  {
    id: 'smartkitchen',
    name: 'SmartKitchen',
    kicker: 'POS para restaurantes',
    summary: 'Sistema de punto de venta: el mesero toma pedidos por mesa, cada plato llega a su estación y la caja factura con propina.',
    highlights: ['Pantallas por estación: cocina, barra y cocina mexicana', 'Bloqueo de ítems a los 2 minutos de enviados', 'Roles con JWT y facturación con 0/5/10 % de servicio'],
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
    image: 'projects/smartkitchen.webp',
    gallery: ['projects/smartkitchen-cocina.webp'],
    demo: `${PAGES}/SmartKitchen/`,
    repo: `${GH}/SmartKitchen`,
    accent: '#FF6B35',
  },
  {
    id: 'trainix',
    name: 'Trainix',
    kicker: 'Gestión de gimnasios',
    summary: 'Plataforma para administrar un gimnasio: clientes, planes, membresías, pagos, caja, asistencia, rutinas y reportes.',
    highlights: ['Check-in por código o documento con reglas de membresía', 'Caja con cierre y diferencia contra el efectivo esperado', 'Reportes financieros exportables a Excel'],
    stack: ['Angular', 'NestJS', 'TypeORM', 'SQLite'],
    image: 'projects/trainix.webp',
    demo: `${PAGES}/Trainix/`,
    repo: `${GH}/Trainix`,
    accent: '#E6A400',
  },
  {
    id: 'saas-ventas',
    name: 'SaaS Ventas',
    kicker: 'SaaS multi-tienda',
    summary: 'Cada negocio tiene su propia vitrina y su panel de administración; los clientes compran directo por WhatsApp.',
    highlights: ['Multi-tenant: datos aislados por tienda', 'Panel con productos, variantes, fotos y estadísticas', 'Marca configurable: logo, color y tipografía'],
    stack: ['Angular', 'TypeScript', 'Node.js', 'Express'],
    image: 'projects/saas-ventas.webp',
    gallery: ['projects/saas-store.webp'],
    demo: `${PAGES}/SaaS-Ventas/`,
    repo: `${GH}/SaaS-Ventas`,
    accent: '#22A556',
  },
  {
    id: 'doose',
    name: 'Doose Tattoo',
    kicker: 'Estudio de tatuajes',
    summary: 'Portafolio de tatuajes con favoritos, servicios con carrito de compras y reserva de citas por tatuador.',
    highlights: ['Agenda que respeta duración y cupos por tatuador', 'Panel admin de servicios, portafolio y mensajes', 'Proyecto en equipo con Scrum'],
    stack: ['Angular', 'Spring Boot', 'SCSS'],
    image: 'projects/doose.webp',
    gallery: ['projects/doose-portfolio.webp'],
    demo: `${PAGES}/Doose/`,
    repo: `${GH}/Doose`,
    accent: '#C9A84C',
  },
  {
    id: 'dasama',
    name: 'Dasama Joyería',
    kicker: 'Sitio web para una joyería',
    summary: 'Sitio de una joyería de Medellín: colecciones, fichas de producto y compra directa por WhatsApp.',
    highlights: ['Catálogo con ficha y galería por pieza', 'Animaciones suaves y diseño responsive', 'HTML, CSS y JavaScript sin dependencias'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: 'projects/joyeria.webp',
    demo: `${PAGES}/Damasa-Joyeria/`,
    repo: `${GH}/Damasa-Joyeria`,
    accent: '#B8892F',
  },
];

export const ACADEMIC = {
  name: 'Hotelero',
  kicker: 'Proyecto universitario · Java',
  summary: 'Sistema de gestión hotelera con estructuras de datos implementadas a mano: pilas, colas y listas enlazadas mediante nodos.',
  stack: ['Java', 'Estructuras de datos', 'POO'],
};

export const EXPERIENCE = [
  {
    role: 'Desarrollador de Software',
    company: 'WeSportech',
    period: 'Marzo – Octubre · 7 meses',
    points: [
      'Desarrollo de aplicaciones para el sector deportivo y proyectos de gestión de restaurantes, gimnasios y eventos, además de módulos de facturación.',
      'Trabajo con Angular, Node.js, Cosmos DB, Moodle y Azure DevOps, entre otras tecnologías.',
      'Contribución en proyectos para la Liga Antioqueña de Fútbol y Los Paisitas.',
      'Trabajo en equipo con Scrum, fortaleciendo conocimientos técnicos y colaboración.',
    ],
  },
  {
    role: 'Fundador',
    company: 'Dcodea',
    period: 'Actualidad',
    points: [
      'Estudio de código y diseño: desarrollo web, software a medida y merch para developers.',
      'Diseño y construcción de proyectos completos, del diseño de la interfaz al despliegue.',
    ],
  },
];

export const EDUCATION = [
  { title: 'Ingeniería de Software', place: 'TdeA', status: 'En curso · 4.º semestre' },
  { title: 'Técnico en Desarrollo de Software', place: 'Cesde', status: 'Finalizado · 2024' },
  { title: 'Bachiller Académico', place: 'Colegio Bautista de Castilla', status: 'Finalizado' },
];

export const SKILLS = [
  { area: 'Frontend', icon: 'layout', items: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3 / SASS'] },
  { area: 'Backend', icon: 'server', items: ['Java 17+', 'Spring Boot', 'Hibernate', 'Node.js', 'Express', 'APIs REST'] },
  { area: 'Bases de datos', icon: 'database', items: ['PostgreSQL', 'MySQL', 'Cosmos DB', 'Modelado de datos'] },
  { area: 'Herramientas', icon: 'tool', items: ['Git', 'GitHub', 'Azure DevOps', 'Moodle', 'Docker (básico)'] },
] as const;

export const SOFT_SKILLS = ['Comunicación asertiva', 'Trabajo en equipo (Scrum)', 'Autogestión', 'Responsabilidad y compromiso', 'Capacidad de adaptación'];

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo', value: 100 },
  { name: 'Inglés', level: 'Intermedio', value: 60 },
];

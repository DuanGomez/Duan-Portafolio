// Contenido del portafolio (basado en la hoja de vida de Duan).

export const PROFILE = {
  name: 'Duan Esteban Gómez Rojas',
  short: 'Duan Gómez',
  role: 'Desarrollador de Software',
  location: 'Medellín, Colombia',
  email: 'duangomez8@gmail.com',
  phone: '+57 323 292 2041',
  whatsapp: 'https://wa.me/573232922041',
  github: 'https://github.com/DuanGomez',
  dcodea: 'https://www.instagram.com/dcod.ea/',
  summary:
    'Desarrollador de software con enfoque autodidacta, técnico en Desarrollo de Software y estudiante de Ingeniería de Software. ' +
    'Construyo aplicaciones de punta a punta —del diseño de la interfaz a la API y la base de datos— y tengo experiencia en el sector deportivo. ' +
    'Me caracterizo por mi responsabilidad, compromiso y capacidad de adaptación.',
};

export const STATS = [
  { value: '6+', label: 'proyectos publicados' },
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

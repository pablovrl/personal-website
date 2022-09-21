export interface Project {
  image: string;
  pageUrl?: string;
  githubUrl: string;
  title?: string;
  description?: string;
  iconColor: "white" | "black";
}

export interface Job {
  company: string;
  date: string;
  position: string;
  description: string;
  technologies: string[];
  companyUrl?: string;
}

export const projects: Project[] = [
  {
    image: "/auth-app.png",
    iconColor: "black",
    pageUrl: "https://auth-app-orpin.vercel.app",
    githubUrl: "https://github.com/pablovrl/auth-app",
    title: "Auth App",
    description:
      "Una simple página de autenticación, creada para aprender sobre JWT y rutas protegidas.",
  },
  {
    image: "/pokeapi-card.png",
    iconColor: "black",
    pageUrl: "https://pokemon-card-ten.vercel.app/",
    githubUrl: "https://github.com/pablovrl/pokemon-card",
    title: "Pokemon Card",
    description:
      "Página web para ver la información de distintos Pokémons, utilizando la PokeAPI.",
  },
  {
    image: "/prueba-docmovi.png",
    iconColor: "black",
    githubUrl: "https://github.com/pablovrl/prueba-docmovi",
    title: "Prueba Técnica Docmovi",
    description: "Prueba técnica para la empresa Docmovi.",
  },
  {
    image: "/calculador-promedio.png",
    iconColor: "black",
    pageUrl: "https://calculador-promedio-theta.vercel.app/",
    githubUrl: "https://github.com/pablovrl/calculador-promedio",
    title: "Calculador Promedio",
    description:
      "Una simple aplicación web que calcula el promedio de tus notas.",
  },
  {
    image: "/personal-website.png",
    iconColor: "white",
    pageUrl: "http://pablovillarroel.xyz",
    githubUrl: "https://github.com/pablovrl/personal-website",
    title: "Página Personal",
    description:
      "Página web personal, en la que encontrarás mi experiencia profesional y proyectos personales.",
  },
];

export const jobs: Job[] = [
  {
    company: "Docmovi",
    companyUrl: "https://docmovi.com/",
    date: "Ene 2022 - Mar 2022",
    position: "Desarrollador Full-Stack",
    description:
      "Segunda práctica profesional (jornada laboral completa), participé en el desarrollo de una página web para contratación de planes, incluyendo apartado de administrador para ver pagos y cambiar precios de planes, en la cual creé componentes responsivos basándome en un diseño de Figma, también colaboré con el desarrollo de una API REST creando endpoints para la autentificación de usuarios, recuperación de contraseñas y CRUDs de tablas.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Loopback 4",
      "PostgreSQL",
      "TDD",
      "Jest",
      "Cypress",
      "SCRUM",
      "Jira",
      "Transbank SDK",
    ],
  },
  {
    company: "Pryx",
    companyUrl: "https://pryx.cl/",
    date: "Mar 2021 - Jun 2021",
    position: "Desarrollador Back-End",
    description:
      "Primera práctica profesional, desarrollé una API REST para una plataforma de IoT.",
    technologies: ["Django", "Django REST framework", "PostgreSQL"],
  },
];

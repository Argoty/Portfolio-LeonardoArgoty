import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
  FaJava,
  FaGitAlt
} from "react-icons/fa6";

import projectImage1 from "../assets/p1.png";
import projectImage2 from "../assets/p2.png";
import projectImage3 from "../assets/p3.png";
import projectImage4 from "../assets/p4.png";
import projectImage5 from "../assets/p5.png";
import projectImage6 from "../assets/p6.png";

import esIcon from '../assets/es.png';
import enIcon from '../assets/en.png';

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress, SiSpringboot } from "react-icons/si";
import { FaNodeJs, FaVuejs, FaJsSquare } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}

export const NAVIGATION_LINKS = [
  { label: "Sobre Mi", href: "#bio" },
  { label: "Proyectos", href: "#projects" },
  { label: "Tecnologías", href: "#skills" },
  { label: "Experiencia", href: "#work" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export const HERO = {
  name: "LEONARDO ARGOTY",

  qualities: [
    "Desarrollador Web.",
    "Ingeniero de Software en Formación.",
    "Programador."
  ],
  description: "Soy desarrollador web Full-Stack, apasionado por resolver problemas de lógica de negocio y optimizar procesos. También diseño interfaces intuitivas y funcionales para ofrecer soluciones digitales completas.",

};

export const LANGUAGES = [
  { icon: esIcon, name: 'Español', level: 'Nativo' },
  { icon: enIcon, name: 'Inglés', level: 'A2' },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Vocabularios de Inglés para practicar",
    description:
      "Amplíe su vocabulario en inglés a través de ejercicios interactivos diseñados para un aprendizaje eficaz utilizando Vue y FastAPI.",
    image: projectImage1,
    githubLink: "https://github.com/Argoty/vocabularios_frontend",
    url: "https://vocabularios.netlify.app/#/",
    technologies: ["Vue Js", "Vuetify", "FastAPI", "MongoDB"],
  },
  {
    id: 2,
    name: "Chat en tiempo real con múltiples usuarios",
    description:
      "Web de chat en tiempo real que permite una comunicación y colaboración fluidas entre múltiples usuarios que utilizan Quasar.",
    image: projectImage2,
    githubLink: "https://github.com/Argoty/chat-quasar",
    url: "https://chatleonardo.netlify.app/",
    technologies: ["Vue Js", "Quasar", "Firebase"],
  },
  {
    id: 3,
    name: "E-commerce sobre cosas para el hogar.",
    description:
      "Explore nuestro comercio electrónico de artículos básicos para el hogar para obtener productos elegantes y funcionales utilizando Vue y Express.",
    image: projectImage3,
    githubLink: "https://github.com/Argoty/e-commerce1-frontend",
    url: "https://jysdistribuidora.vercel.app/",
    technologies: ["Vue Js", "Express", "MongoDB"],
  },
  {
    id: 4,
    name: "Sitio web de Eventos",
    description:
      "Descubra un sitio web de eventos con listados completos y registro sencillo para diversas reuniones utilizando nextjs.",
    image: projectImage4,
    githubLink: "https://github.com/Argoty/RendezVibe",
    url: "https://rendezvibe.vercel.app/",
    technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
  },
  {
    id: 5,
    name: "RubikTimer ( Cronometro de cubo de rubik )",
    description:
      "Sitio web donde puedes cronometrar tiempos de resoluciones de un cubo de rubik, donde quedara registrado tus tiempos.",
    image: projectImage5,
    githubLink: "https://github.com/Argoty/RubikTimer",
    url: "https://rubiktimer1.netlify.app/",
    technologies: ["Javascript", "React.js", "Tailwind.css"],
  },
  {
    id: 6,
    name: "FinanzApp ( Aplicación de finanzas personales )",
    description:
      "Aplicación de escritorio donde puedes llevar un control de tus finanzas personales, donde puedes registrar tus ingresos, gastos, ahorros...",
    image: projectImage6,
    githubLink: "https://github.com/Argoty/finanzapp-backend",
    url: "https://www.mediafire.com/file/vkm3ksig68jh6ny/FinanzAppEjecutable.zip/file",
    technologies: ["Java", "Springboot", "MySQL", "Azure"],
  },
];

export const BIO = [
  `Soy Javier Leonardo Argoty Roa, tengo ${calcularEdad("2006-08-10")} años y soy de Villavicencio, Colombia. Me especializo como desarrollador web frontend, con experiencia también creando APIs REST para proyectos full‑stack, orientados a usabilidad y rendimiento.`,
  
  `Empecé en 2022 de forma autodidacta, tomando cursos online y desarrollando proyectos con JavaScript, Vue, Express, y Java, etc. He fortalecido mi lógica y habilidades técnicas a través de retos reales y producción colaborativa.`,
  
  `Actualmente estudio Ingeniería de Software en la Institución Universitaria EAM, lo que refleja mi compromiso con el crecimiento y la excelencia académica. Busco roles donde aportar mi versatilidad, continuar aprendiendo y diseñar soluciones que realmente impacten.`,
];


export const SKILLS = [
  {
    icon: <FaJsSquare className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Javascript",
  },
  {
    icon: <FaVuejs className="text-4xl text-green-400 lg:text-5xl" />,
    name: "Vue / Vuetify",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-400 lg:text-5xl" />,
    name: "MongoDB",
  },
  {
    icon: <DiMysql className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "MySQL",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
  },
  {
    icon: <FaJava className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Java",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Springboot",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express",
  },
  {
    icon: <FaGitAlt className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "Git",
  },
];

export const EXPERIENCES = [
  {
    title: "Desarrollador Frontend",
    company: "Titan Soluciones S.A.S",
    duration: "Octubre 2022 - Presente",
    description:
      "Desarrollé interfaces de usuario utilizando Vue.js con su libreria vuetify para diseñar los estilos, logrando una experiencia de usuario moderna e interactiva. Utilicé librerías como pdfmake para generar documentos PDF dinámicos y personalizados según las necesidades del usuario. Diseñé e implementé formularios interactivos, mejorando la recopilación y validación de datos del usuario.Implementé lógica de estado en tiempo real para mejorar la usabilidad de los formularios y reducir errores de entrada. Realización de revisiones, pruebas de funcionalidad y depuración de código Javascript.",
    technologies: ["Javascript", "Vue.js", "Vuetify", "Pdfmake"],
  },
];

export const EDUCATION = [
  {
    degree: "Ingenieria Software",
    institution: "Universidad EAM",
    duration: "Febrero 2024 - En curso",
    description:
      "Cursando la carrera de Ingenieria Software, la cual contiene un tecnólogo al 5 semestre y al 8 semestre el titulo profesional, desarrollando mayormente en Java, enfocado en desarrollo de Apps empresariales.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/javier-leonardo-argoty-roa-21b5b82b6/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80 text-[#0A66C2]" />,
  },
  {
    href: "https://github.com/Argoty",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="text-[#5865F2] hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/argoty__/",
    icon: <FaInstagram fontSize={25} className="text-[#E4405F] hover:opacity-80" />,
  },


];

export const CONTACT = {
  email: "leonardoargotydev@gmail.com",
  location: "Armenia, Colombia"
}

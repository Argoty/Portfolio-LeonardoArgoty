import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/p1.png";
import projectImage2 from "../assets/p2.png";
import projectImage3 from "../assets/p3.png";
import projectImage4 from "../assets/p4.png";

import esIcon from '../assets/es.png';
import enIcon from '../assets/en.png';

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs, FaVuejs, FaJsSquare } from "react-icons/fa";

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
  description:
    `Soy un desarrollador web de Colombia, apasionado en crear interfaces de usuario buenas y funcionales. Me gusta transformar ideas en experiencias web atractivas.`,
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
      "Explore nuestro comercio electrónico de artículos básicos para el hogar para obtener una selección seleccionada de productos elegantes y funcionales utilizando Vue y Express.",
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
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },

];

export const BIO = [
  `Soy Javier Leonardo Argoty Roa de Villavicencio, Colombia. Tengo ${calcularEdad("2006-08-10")} años, soy desarrollador web autodidacta, me enfoco especialmente en la parte del frontend, aunque he realizado proyectos que incluyen backend donde he creado API rests.`,
  "Empece a programar por hobbie en 2022, viendo cursos por internet y nutriendo mi conocimiento y lógica de programación por mi cuenta.",
  "Actualmente estudio Ingeniería Software en la Universidad EAM, me apasiona el mundo de la tecnología, tengo conocimientos solidos en Javascript, he manejado bastante el framework de Vue al igual que Express por la parte del backend.",
];

export const SKILLS = [
  {
    icon: <FaJsSquare className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "Javascript",
    experience: "Proficiente",
  },
  {
    icon: <FaVuejs className="text-4xl text-green-400 lg:text-5xl" />,
    name: "Vue",
    experience: "Avanzado",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express",
    experience: "Competente",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Competente",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-400 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Competente",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Proficiente",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "Competente",
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

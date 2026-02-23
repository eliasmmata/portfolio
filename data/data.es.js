// ============================================
// UI COPY - ESPAÑOL
// ============================================
export const uiContent = {
  locale: "es",
  htmlLang: "es",
  metaTitle:
    "Portfolio de Elías Moreno. Full Stack developer en Madrid, España",
  menu: {
    toggleOpen: "Abrir menú",
    toggleClose: "Cerrar menú",
    cv: "Mi CV",
    portfolio: "Portfolio",
    about: "Sobre mí",
    currentStack: "Stack actual",
    googlePlus: "Únete a mí en Google+",
    openGooglePlusJoke: "Abrir broma de Google+",
    languageSwitcherLabel: "Selector de idioma",
    switchToEnglish: "Cambiar a inglés",
    switchToSpanish: "Cambiar a español",
  },
  accessibility: {
    navImage: "Avatar de space invader",
    laptopImage: "Portátil",
    imacImage: "Ordenador personal",
    iphoneImage: "Teléfono móvil",
    spaceImage: "Foto espacial",
    alteregoImage: "Retrato de Elías",
  },
  hero: {
    name: "Elías Moreno Mata",
    oldText: "Venimos en son de paz",
    newText: "Nos vamos en son de paz",
    descriptionHtml:
      '<span class="color-change text-bold">Full Stack Developer</span>, con más de cinco años de experiencia en proyectos de equipo e independientes. <span class="whoami-specialized">Especializado en Node.js y Next.js</span>. A veces también diseño webs : ). <span class="whoami-detail"><span class="whoami-specialized">Apasionado por programar, construir y explorar</span> nuevas tecnologías como la IA sin olvidar dónde empezó todo.</span>',
    watchMeHtml:
      "Mírame en tu portátil para vivir la experiencia completa de <span>hover</span>!",
  },
  sectionTwo: {
    titleHtml:
      '<span class="color-change text-bold">Stack actual</span> y creciendo',
    cvButton: "Abrir CV",
    portfolioButton: "Ver portfolio",
  },
  sections: {
    lastProjectsTitle: "Últimos proyectos Full Stack",
    lastProjectsSubtitle: "#NextJs #React #MySql #NodeJs #ReactNative",
    wordpressTitle: "Trabajos WordPress",
    wordpressSubtitle: "¿Has probado a apagarlo y encenderlo?",
    aboutTitle: "Sobre mí",
    aboutSubtitle:
      "Nacido en los 80, criado en los 90 y viviendo a tope el siglo XXI",
    stackTitle: "Stack actual",
    stackSubtitle: "Bailando electro-pop como un robot de 1984",
    contactTitle: "¿Me quieres? Puedes tenerme",
    contactSubtitle: "Excepto para ayudarte con la furgoneta de mudanza",
  },
  form: {
    legendHtml:
      'Datos a salvo de Space Invaders <span class="legend-mobile-hide">y de señores feudales digitales </span>:',
    nameLabel: "Di tu nombre ♪ , di tu nombreee ♪ :",
    namePlaceholder: "Ser Duncan el Alto",
    emailLabel: "¿Digo qué? Digo email:",
    emailPlaceholder: "madre_de_dragones@dracarys.dev",
    messageLabel: "Cuéntame más, cuéntame más:",
    messagePlaceholder:
      "No seas tímido, mi tesssoro...\nTambién puedes hablar conmigo pulsando el fantasma del footer : )",
    privacyTitle: "* Privacidad",
    privacyBodyHtml:
      'Al usar este formulario aceptas el almacenamiento y tratamiento de tus datos por parte de este sitio web. <br class="br-desktop" /> Lee nuestra Política de Privacidad para más información sobre cómo tratamos tus datos.',
    agree: "Acepto",
    submit: "Enviar",
    tooltip: "Rellena todos los campos correctamente",
  },
  footer: {
    backToTop: "Volver arriba",
    copyrightLabel: "Copyright ©",
    authorName: "Elías Moreno",
    separator: " • ",
    copyrightRole: "Full Stack Developer y Diseñador en Madrid",
  },
  googlePlusJoke: {
    title: "Reunión de Google+",
    text: "No funcionó bro, déjalo ir",
    close: "Cerrar",
    imageAlt: "Planta rodadora",
  },
  modal: {
    title: "¡Gracias!",
    bodyHtml:
      'Tu mensaje se ha entregado correctamente.<br>Revisa tu email y <span class="text-color-primary">no olvides la carpeta de Spam</span> por si acaso.',
    confirmButton: "OK",
    learnFrontend: "Aprende FrontEnd",
  },
};

// ============================================
// DATA ARRAYS - Full Stack Projects
// ============================================
export const fullStackProjects = [
  {
    id: "fedesaproject",
    title: "Negocio de clínica",
    description: "NextJs",
    url: "https://fedesa2-szzy.vercel.app",
    buttonText: "Ir a la página",
  },
  {
    id: "velezleaksproject",
    title: "Periódico digital + CMS",
    description: "NextJs, NodeJs, Strapi",
    url: "https://www.velezleaks.org",
    buttonText: "Ir a la página",
  },
  {
    id: "pitayafenicia",
    title: "Tienda de frutas",
    description: "NextJs, Google Analytics",
    url: "https://pitayafenicia.es",
    buttonText: "Ir a la web",
  },
  {
    id: "appproject",
    title: "App móvil",
    description: "React Native, NodeJs, MySQL",
    url: "https://play.google.com/store/apps/details?id=org.name.vm&hl=es",
    buttonText: "Ir a Play Store",
  },
  {
    id: "editoroddsproject",
    title: "Proyecto interno Besoccer",
    description: "PHP, MySQL",
    url: "https://drive.google.com/file/d/16Cq6JHifjzvclV7wpi7g_iDgmXZ2CEeN/view?usp=sharing",
    buttonText: "Ir a la demo",
  },
  {
    id: "filterstore",
    title: "Concepto de tienda de filtros",
    description: "NextJs, TypeScript",
    url: "https://filter-react-store23.netlify.app",
    buttonText: "Ir a la demo",
  },
];

// ============================================
// DATA ARRAYS - WordPress Work
// ============================================
export const wordpressProjects = [
  {
    id: "philjackson",
    title: "Phil Jackson Company",
    description: "Web corporativa digital",
    url: "https://philjackson.es/",
    buttonText: "Ir a la página",
  },
  {
    id: "manuelburgos",
    title: "Manuel Burgos",
    description: "Web de arquitectura",
    url: "https://manuelburgos.es/",
    buttonText: "Ir a la página",
  },
  {
    id: "bang",
    title: "Bang Studio",
    description: "Tienda de zapatillas personalizadas",
    url: "https://bangstudio.es/",
    buttonText: "Ir a la página",
  },
  {
    id: "vesania",
    title: "Vesania Moda",
    description: "Tienda de ropa para mujer",
    url: "https://vesaniamoda.es/",
    buttonText: "Ir a la página",
  },
  {
    id: "ownstyle",
    title: "Ownstyle Banus",
    description: "Tienda urbana",
    url: "https://ownstylebanus.com/",
    buttonText: "Ir a la página",
  },
  {
    id: "zarzaparrilla",
    title: "Zarzaparrilla Saloon",
    description: "Blog del oeste",
    url: "https://www.oestevaquero.com/zarzaparrilla-saloon/",
    buttonText: "Ir a la página",
  },
  {
    id: "lacueva",
    title: "Gastrobar La Cueva",
    description: "Restaurante",
    url: "https://www.gastrobarlacueva.com/",
    buttonText: "Ir a la página",
  },
  {
    id: "oestevaquero",
    title: "Oeste Vaquero",
    description: "Web nicho de Amazon",
    url: "https://www.oestevaquero.com/",
    buttonText: "Ir a la página",
  },
];

// ============================================
// DATA ARRAYS - Stack
// ============================================
export const stack = [
  {
    title: "JS, TypeScript y PHP",
    description: [
      "He trabajado a diario durante más de cinco años con esos lenguajes, ahora intentando conectar a nivel senior con flujos de IA e implicándome más en la visión global.",
      "Abierto a trabajar con ambos lenguajes y con ganas de seguir aprendiendo después de ellos.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#work-section",
  },
  {
    title: "Full Stack",
    description: [
      'Me encanta desarrollar webs, APIs, bases de datos, lo que necesites... Mira mi último proyecto personal <a href="https://pruebacomun-production.vercel.app" target="_blank" class="link-highlight">aquí</a> y valora mis habilidades. Espero que te guste : )',
      "No todo es programar. Solo casi todo.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#last-projects",
  },
  {
    title: "React Native y Expo",
    description: [
      "Apps móviles para iOS y Android usando React Native y Expo. Simplifica el desarrollo y el despliegue.",
      "Podemos construir prototipos rápidos y apps multiplataforma sin escribir código nativo.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#last-projects",
  },
  {
    title: "React y NextJS",
    description: [
      "Framework basado en React para crear aplicaciones web con SSR y generación estática. Incluye funcionalidades como renderizado en servidor y servicio de archivos estáticos.",
      "Construye aplicaciones web de alto rendimiento y amigables para SEO de forma sencilla.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#last-projects",
  },
  {
    title: "Diseño web",
    description: [
      "Diseñamos tu web desde cero. Cuéntanos tu idea, tu negocio o tu perfil y nos ocupamos de todo.",
      "Querremos tu proyecto como si fuera nuestro. Te involucras mucho o te despreocupas por completo, tú eliges.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#work-section",
  },
  {
    title: "Sitios WordPress",
    description: [
      "Más del 70% de las webs se crean con WordPress. Diseños económicos basados en plantilla para que puedas lanzar tu web en pocos días.",
      "Te recomendamos el mejor hosting y los esenciales para que puedas mantenerla fácilmente.",
    ],
    buttonText: "Ver más",
    buttonUrl: "#work-section",
  },
];

// ============================================
// DATA ARRAYS - Junior Projects (Not active)
// ============================================
export const juniorProjects = [
  {
    id: "slidesproject",
    title: "Demo de diseño Slides",
    description: "React y Ownl Carousel",
    url: "http://carousel-owl-react.herokuapp.com/",
    buttonText: "Ir a la página",
  },
  {
    id: "weteachfrontend",
    title: "We Teach Frontend",
    description: "NextJS, Tailwind, MongoDB",
    url: "https://weteachfrontend.com/",
    buttonText: "Ir a la página",
  },
  {
    id: "cardsproject",
    title: "Demo Fetch, Crud, Posts",
    description: "React y TypeScript",
    url: "https://cards-project-react.netlify.app/",
    buttonText: "Ir a la demo",
  },
];

// ============================================
// DATA ARRAYS - About Me Cards
// ============================================
export const aboutMeCards = [
  {
    title: "Málaga, Londres, Barcelona, Madrid.",
    description: [
      "No conoces un lugar hasta que vives en él. Trabajar en estas grandes ciudades me abrió la mente a otro nivel.",
      "Después de volver a casa un tiempo, empiezo una segunda etapa en mi querida Madrid.",
    ],
    buttonText: "Ir a Instagram",
    buttonUrl: "https://www.instagram.com/eliasmmata/",
  },
  {
    title: "De la universidad al autoaprendizaje.",
    description: [
      "Si mi carrera de Pedagogía me enseñó algo, fue la importancia del aprendizaje continuo. Por eso nunca dejo de conocer y adoptar cosas nuevas en este maravilloso mundo de la programación y el diseño.",
      "Soy una persona ecléctica, intentando conectar puntos como dijo aquella mente maravillosa. Ahora, por fin, puedo considerarme <span class='color-change text-bold'>Full Stack Developer.</span>",
    ],
    buttonText: "Ir a Linkedin",
    buttonUrl: "https://www.linkedin.com/in/pabloeliasmorenomata/",
  },
  {
    title: "CV Vital",
    description: [
      "Quise recopilar todas las enseñanzas fuera del currículo clásico. Aquí están reunidas lecturas, aprendizajes, charlas y la sabiduría de personas extraordinarias que me impactaron.",
      "Todo lo que absorbí me hizo la persona que soy. Aquí puedes verlo.",
    ],
    buttonText: "Echar un vistazo",
    buttonUrl: "https://prezi.com/view/VGAlVGrVltMb5SGFs90O/",
  },
];

// ============================================
// DATA ARRAYS - Current Stack
// ============================================
export const currentStack = [
  {
    src: "../images/logos/javascript-logo.png",
    alt: "Logo de JavaScript",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/node-logo.png",
    alt: "Logo de Node.js",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/react-logo.png",
    alt: "Logo de React",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/next-logo.png",
    alt: "Logo de Next.js",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/php-logo.png",
    alt: "Logo de PHP",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/mysql-logo.png",
    alt: "Logo de MySQL",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/docker-logo.png",
    alt: "Logo de Docker",
    imgClass: "tech-logo-docker",
  },
  {
    src: "../images/logos/git-logo.png",
    alt: "Logo de Git",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/typescript-logo.png",
    alt: "Logo de TypeScript",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/css-logo.png",
    alt: "Logo de CSS",
    imgClass: "tech-logo-css",
  },
  {
    src: "../images/logos/tailwind-logo.png",
    alt: "Logo de Tailwind CSS",
    imgClass: "tech-logo",
  },
  {
    src: "../images/logos/pm2-logo.png",
    alt: "Logo de PM2",
    imgClass: "tech-logo-pm2",
  },
];

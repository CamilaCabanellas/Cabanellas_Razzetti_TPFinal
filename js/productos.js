/* productos.js 
   Datos de las obras. main.js recorre este array y arma las tarjetas en productos.html.
   Para agregar una obra: sumar un objeto nuevo al array (la categoría debe ser una de:
   "pintura", "escultura", "fotografia" o "grafica"). */
const productos = [
  {
    id: 1,
    titulo: "Horizonte en ocre",
    artista: "Lucía Ferrante",
    tecnica: "Óleo sobre lienzo · 80 × 100 cm · 2024",
    descripcion: "Capas de ocre y tierra que evocan la llanura al atardecer.",
    precio: 480000,
    categoria: "pintura",
    img: "ocre.jpg",
    alt: "Pintura abstracta de paisaje en tonos ocre y terracota, enmarcada en madera"
  },
  {
    id: 2,
    titulo: "Casa sin ventanas",
    artista: "Tomás Aguirre",
    tecnica: "Acrílico sobre tela · 60 × 80 cm · 2023",
    descripcion: "Una arquitectura cerrada que invita a imaginar lo que pasa adentro.",
    precio: 620000,
    categoria: "pintura",
    img: "sinventanas.jpg",
    alt: "Pintura de un volumen de hormigón sobre fondo negro, con marco negro"
  },
  {
    id: 3,
    titulo: "Sedimento III",
    artista: "Valentina Ruiz",
    tecnica: "Técnica mixta sobre madera · 50 × 50 cm · 2025",
    descripcion: "Arena, pigmento y resina sobre tabla: el tiempo hecho materia.",
    precio: 350000,
    categoria: "pintura",
    img: "sedimientos.jpg",
    alt: "Obra de textura rugosa en tonos tierra, óxido y gris"
  },
  {
    id: 4,
    titulo: "Interior con luz",
    artista: "Mateo Benítez",
    tecnica: "Óleo sobre lino · 70 × 90 cm · 2024",
    descripcion: "Un ambiente doméstico atravesado por la luz de la tarde.",
    precio: 890000,
    categoria: "pintura",
    img: "interior.jpg",
    alt: "Pintura de una habitación vacía con luz dorada entrando por la ventana"
  },
  {
    id: 5,
    titulo: "Raíz",
    artista: "Julia Mansilla",
    tecnica: "Cerámica esmaltada · 35 cm de alto · 2024",
    descripcion: "Forma orgánica modelada a mano y esmaltada en tonos tierra.",
    precio: 410000,
    categoria: "escultura",
    img: "raiz.jpg",
    alt: "Escultura de cerámica con forma de ramas, sobre un pedestal de madera oscura"
  },
  {
    id: 6,
    titulo: "Patio de Gorriti",
    artista: "Nicolás Pereyra",
    tecnica: "Fotografía giclée · 60 × 40 cm · 2023",
    descripcion: "Edición de diez ejemplares, firmada y numerada.",
    precio: 180000,
    categoria: "fotografia",
    img: "patio.jpg",
    alt: "Fotografía en blanco y negro de una planta en un patio de paredes descascaradas"
  },
  {
    id: 7,
    titulo: "Marea baja",
    artista: "Lucía Ferrante",
    tecnica: "Aguafuerte sobre papel · 30 × 40 cm · 2022",
    descripcion: "Grabado en tinta sepia sobre papel de algodón.",
    precio: 150000,
    categoria: "grafica",
    img: "marea.jpg",
    alt: "Grabado sepia con líneas que recuerdan curvas de nivel, enmarcado en madera"
  },
  {
    id: 8,
    titulo: "Umbral",
    artista: "Tomás Aguirre",
    tecnica: "Óleo sobre tabla · 100 × 120 cm · 2025",
    descripcion: "Gran formato que juega con el límite entre adentro y afuera.",
    precio: 1150000,
    categoria: "pintura",
    img: "umbral.jpg",
    alt: "Pintura abstracta de formas geométricas en tonos marrón, óxido y negro"
  }
];

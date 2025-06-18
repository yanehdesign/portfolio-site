import { Project, ProcessItem } from '../types';

// Featured Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Puebla",
    imageUrl: "/images/CalmCulturePuebla.png",
    description: "A rebrand that reflects the calm spirit and culture of Puebla.",
    details: "I focused on simplicity and softness, using photography and minimal design to let the city's story come through clearly.",
    goal: "Let Puebla's calm and culture speak for itself.",
    role: "Lead Designer",
    tools: ["Photoshop", "Illustrator"],
    challenges: "Blending modern design with traditional roots.",
    extraImages: [
      "/images/brandcover.png",
      "/images/brandstationary.png",
      "/images/brandbag.png"
    ]
  },
  {
    id: 2,
    title: "Puebla: Process",
    imageUrl: "/images/pueblaresearch.png",
    description: "A behind-the-scenes look at the Puebla brand.",
    details: "This shows the early research, sketches, and ideas that shaped the final design. It’s messy in a good way — where things start to come together.",
    goal: "Show how ideas turn into design.",
    role: "Concept & Research",
    tools: ["Sketchbook", "Adobe XD", "Miro"],
    challenges: "Shaping raw ideas into a clear direction.",
    extraImages: [
      "/images/another1.png",
      "/images/another2.png"
    ]
  },
  {
    id: 3,
    title: "PAUSE Magazine",
    imageUrl: "/images/pausecover.png",
    description: "Turning everyday topics into bold, fun spreads.",
    details: "PAUSE is about slowing down and finding beauty in the ordinary. I used playful layouts and type to make it feel fresh and surprising.",
    goal: "Make people pause and enjoy the small things.",
    role: "Editor & Designer",
    tools: ["InDesign", "Photoshop"],
    challenges: "Keeping it fun without losing readability.",
    extraImages: [
      "/images/pause1.png",
      "/images/pause2.png"
    ]
  },
  {
    id: 4,
    title: "Masć",
    imageUrl: "/images/postermasc.png",
    description: "A poster series full of energy and expression.",
    details: "This was a space to experiment — bold colors, dynamic shapes, and movement. I wanted it to feel alive and unapologetically creative.",
    goal: "Celebrate bold, unfiltered self-expression.",
    role: "Visual Designer",
    tools: ["Illustrator", "After Effects"],
    challenges: "Keeping the energy without overcomplicating it.",
    extraImages: [
      "/images/masc1.png",
      "/images/masc2.png"
    ]
  },
  {
    id: 5,
    title: "Ver: Latin Film Series",
    imageUrl: "/images/verposters.png",
    description: "A film event that highlights Latin roots and stories.",
    details: "This project connected my love for film with my cultural background. I used warm tones and textures to make it feel personal and heartfelt.",
    goal: "Shine a light on Latin stories — visually and emotionally.",
    role: "Creative Direction",
    tools: ["Photoshop", "Premiere Pro"],
    challenges: "Keeping it emotional without overdesigning.",
    extraImages: [
      "/images/ver1.png",
      "/images/ver2.png"
    ]
  },
  {
    id: 6,
    title: "Summit Coffee: Sip Line",
    imageUrl: "/images/summitcoffee.png",
    description: "A fun, outdoorsy brand for a new coffee line.",
    details: "I designed this with nature in mind — small icons, warm colors, and a relaxed feel. It's made for easy moments, like hikes or slow mornings.",
    goal: "Make coffee branding feel friendly and down-to-earth.",
    role: "Brand Designer",
    tools: ["Illustrator", "Photoshop"],
    challenges: "Balancing playfulness with professionalism.",
    extraImages: []
  }
];

// Design Process Steps
export const processItems: ProcessItem[] = [
  {
    id: 1,
    title: "Initial Research",
    description: "Starting with deep research and hand-drawn concepts to explore possibilities.",
    imageUrl: "/images/process/research.jpg"
  },
  {
    id: 2,
    title: "Type & Design",
    description: "Developing the visual language through typography and core design elements.",
    imageUrl: "/images/process/typography.jpg"
  },
  {
    id: 3,
    title: "Concept Development",
    description: "Refining ideas and creating cohesive design systems.",
    imageUrl: "/images/process/concept.jpg"
  },
  {
    id: 4,
    title: "Digital Implementation",
    description: "Bringing designs to life in digital form with precise execution.",
    imageUrl: "/images/process/digital.jpg"
  }
];

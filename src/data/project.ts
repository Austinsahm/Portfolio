export const projectData = {
  webProjects: [
    {
      id: "wp1",
      title: "My Portfolio",
      description: "Built with Next.js",
      image: "/Portfolio.jpg",
      details:
        "This is a personal portfolio website built with Next.js, showcasing my web development, UI/UX design, and graphic design projects. It includes interactive elements, smooth transitions, and a responsive layout to provide a seamless experience across all devices. The website also leverages Next.js' server-side rendering for fast performance and SEO optimization.",
    },
    {
      id: "wp2",
      title: "All-Glow Website",
      description: "Built with CMS (Wordpress)",
      image: "/All-Glow.jpg",
      details:
        "All-Glow's website was built with WordPress as a content management system (CMS) to showcase their products and services. The website features an intuitive user interface, easy navigation, and a blog section for product updates and customer engagement. The design is mobile-responsive, ensuring a great experience on any device.",
    },
    {
      id: "wp3",
      title: "Orbitmile",
      description: "Built with CMS (Wordpress)",
      image: "/orbitmile.jpg",
      details:
        "Orbitmile is a travel and booking website developed using WordPress. The project integrates a custom booking system that allows users to easily search and book flights, hotels, and activities. The design is clean and modern, with a focus on usability and intuitive navigation, ensuring a seamless experience for travelers.",
    },
  ],
  uiuxProjects: [
    {
      id: "uiux1",
      title: "Dashboard UI/UX",
      description: "Figma prototype for an All-In-One Social Media Platform",
      image: "/Social Software Dashboard.jpg",
      details:
        "This project involved creating a comprehensive dashboard UI/UX prototype using Figma for a social media platform. The design prioritizes user engagement and ease of navigation, with a focus on key features such as notifications, posts, messaging, and analytics. The dashboard includes a dark mode option for enhanced user experience and accessibility.",
    },
    {
      id: "uiux2",
      title: "Landing Page UI/UX",
      description: "Landing page for a company that sells tyres and batteries",
      image: "/Obat.jpg",
      details:
        "For this project, I designed a high-converting landing page for a company specializing in tyres and batteries. The page highlights the company’s best-selling products, promotions, and customer testimonials. The layout is clean, with strong calls to action and easy navigation, ensuring customers can find the products they need with ease.",
    },
    {
      id: "uiux3",
      title: "Krypto Landing Page",
      description: "Landing page for a demo crypto company",
      image: "/Krypto.jpg",
      largeImage: "/Desktop - 1.jpg",
      details:
        "The Krypto Landing Page was designed for a demo crypto company. The design aims to attract investors and potential users by offering a modern, sleek interface with clear and concise information. The landing page features an interactive token calculator, current market prices, and a prominent call-to-action to join the platform. The design focuses on trust-building with a secure and professional aesthetic.",
    },
  ],
  graphicProjects: [
    {
      id: "gp1",
      title: "TFC Poster",
      description: "Brand Flyer (Fashion)",
      image: "/TFC.jpg",
      details:
        "This fashion poster was created for Tee Famous Collection (TFC), a fashion brand. The design captures the brand’s youthful and trendy spirit, incorporating bold typography, striking colors, and modern graphics. The flyer promotes the latest collection, with a focus on casual wear, and is designed to capture the attention of fashion enthusiasts.",
    },
    {
      id: "gp2",
      title: "AKA GENTS Poster",
      description: "Brand Flyer (Fashion)",
      image: "/Aka Gents.jpg",
      details:
        "This poster was created for AKA GENTS, a limited training program for aspiring gentlemen. The design incorporates sophisticated typography, elegant color schemes, and imagery that reflects the brand’s upscale, exclusive nature. The flyer aims to evoke a sense of professionalism and luxury, encouraging people to sign up for the limited slots available.",
    },
    {
      id: "gp3",
      title: "STUNNING Church Poster",
      description: "Church Flyer",
      image: "/Church Poster v2.jpg",
      details:
        "This church flyer promotes an upcoming event at STUNNING Church. The design combines a spiritual and welcoming theme, featuring serene imagery and uplifting typography. The poster aims to invite community members to worship, prayer meetings, and special events, with clear event details and contact information.",
    },
    {
      id: "gp4",
      title: "Burger Poster",
      description: "Fast Food Flyer",
      image: "/Burger.jpg",
      details:
        "This poster was created for a fast food restaurant offering a variety of burgers. The design uses vibrant colors and mouth-watering images of the burgers to entice customers. Bold, clear typography highlights special offers and promotions, ensuring the flyer grabs attention and drives foot traffic to the restaurant.",
    },
    {
      id: "gp5",
      title: "Opium Pearl",
      description: "Beauty Product",
      image: "/Perfume.jpg",
      details:
        "This beauty product poster was designed for Opium Pearl, a luxury fragrance brand. The design features elegant, minimalistic imagery with a focus on the perfume bottle and its opulent packaging. The flyer’s goal is to evoke a sense of luxury and sophistication, enticing customers to try the new fragrance.",
    },
    {
      id: "gp6",
      title: "Beauty Poster",
      description: "Beauty Product",
      image: "/Beauty Poster.jpg",
      details:
        "This beauty poster was created to promote a new line of skincare products. The design focuses on clean lines, soft pastel colors, and a natural aesthetic, emphasizing the purity and effectiveness of the beauty products. The poster highlights key ingredients and benefits, encouraging customers to explore the range.",
    },
    {
      id: "gp7",
      title: "NIKE Poster",
      description: "Brand Flyer",
      image: "/Nike Shoe.jpg",
      details:
        "This brand flyer was designed for Nike to promote their latest shoe collection. The design incorporates bold imagery, strong typography, and energetic visuals to reflect the athletic and performance-driven nature of the brand. The flyer showcases the shoes in action, targeting fitness enthusiasts and sports lovers.",
    },
  ],
};

// Function to find a project by ID
export const findProjectById = (id: string) => {
  const allProjects = [
    ...projectData.webProjects,
    ...projectData.uiuxProjects,
    ...projectData.graphicProjects,
  ];

  console.log(allProjects, "All Projects"); // Log all projects
  return allProjects.find((project) => project.id === id);
};

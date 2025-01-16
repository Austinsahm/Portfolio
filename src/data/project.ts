export const projectData = {
  webProjects: [
    {
      id: "0",
      title: "Web Project 1",
      description: "Built with Next.js",
      image: "/path-to-image1.jpg",
      details: "This is a detailed description of Web Project 1.",
    },
    {
      id: "1",
      title: "Web Project 2",
      description: "E-commerce website",
      image: "/path-to-image2.jpg",
      details: "This is a detailed description of Web Project 2.",
    },
  ],
  uiuxProjects: [
    {
      id: "2",
      title: "UI/UX Project 1",
      description: "Figma prototype for a mobile app",
      image: "/path-to-image3.jpg",
      details: "This is a detailed description of UI/UX Project 1.",
    },
    {
      id: "3",
      title: "UI/UX Project 2",
      description: "Design system for a SaaS product",
      image: "/path-to-image4.jpg",
      details: "This is a detailed description of UI/UX Project 2.",
    },
  ],
  graphicProjects: [
    {
      id: "gp1",
      title: "TFC Poster",
      description: "Brand Flyer (Fashion)",
      image: "/TFC.jpg",
      details: "This is a detailed description of Graphic Project 2.",
    },
    {
      id: "gp2",
      title: "AKA GENTS Poster",
      description: "Brand Flyer (Fashion)",
      image: "/Aka Gents.jpg",
      details: "This is a detailed description of Graphic Project 2.",
    },
    {
      id: "gp3",
      title: "STUNNING Church Poster",
      description: "Church Flyer",
      image: "/Church Poster v2.jpg",
      details: "This is a detailed description of Graphic Project 1.",
    },
    {
      id: "gp4",
      title: "Burger Poster",
      description: "Fast Food Flyer",
      image: "/Burger.jpg",
      details: "This is a detailed description of Graphic Project 2.",
    },
    {
      id: "gp5",
      title: "Opium Pearl",
      description: "Beauty Product",
      image: "/Perfume.jpg",
      details: "This is a detailed description of Graphic Project 2.",
    },
    {
      id: "gp6",
      title: "Beauty Poster",
      description: "Beauty Product",
      image: "/Beauty Poster.jpg",
      details: "This is a detailed description of Graphic Project 2.",
    },
    {
      id: "gp7",
      title: "NIKE Poster",
      description: "Brand Flyer",
      image: "/Nike Shoe.jpg",
      details: "This is a detailed description of Graphic Project 2.",
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

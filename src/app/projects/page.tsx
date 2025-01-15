"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Projects() {
  const webDevelopmentProjects = [
    { title: "Web Project 1", description: "Built with Next.js.", image: "/path-to-image1.jpg" },
    { title: "Web Project 2", description: "E-commerce website.", image: "/path-to-image2.jpg" },
  ];

  const uiUxProjects = [
    { title: "UI/UX Design 1", description: "Mobile app design.", image: "/path-to-image3.jpg" },
    { title: "UI/UX Design 2", description: "Dashboard interface.", image: "/path-to-image4.jpg" },
  ];

  const graphicDesignProjects = [
    { title: "Graphic Design 1", description: "Brand identity.", image: "/path-to-image5.jpg" },
    { title: "Graphic Design 2", description: "Poster design.", image: "/path-to-image6.jpg" },
  ];

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800"
        >
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCarousel = (projects) => (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className="w-full"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <section className="w-full max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-gray-400">
            A showcase of my work in Web Development, UI/UX Design, and Graphic Design.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-400 mb-8">Projects showcasing modern frameworks and CMS.</p>
          <div className="block md:hidden">{renderCarousel(webDevelopmentProjects)}</div>
          <div className="hidden md:block">{renderProjects(webDevelopmentProjects)}</div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">UI/UX Design</h2>
          <p className="text-gray-400 mb-8">Creative and user-friendly designs.</p>
          <div className="block md:hidden">{renderCarousel(uiUxProjects)}</div>
          <div className="hidden md:block">{renderProjects(uiUxProjects)}</div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Graphic Design</h2>
          <p className="text-gray-400 mb-8">Innovative branding and visual storytelling.</p>
          <div className="block md:hidden">{renderCarousel(graphicDesignProjects)}</div>
          <div className="hidden md:block">{renderProjects(graphicDesignProjects)}</div>
        </section>
      </section>
    </main>
  );
}

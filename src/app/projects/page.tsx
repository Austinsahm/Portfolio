"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { projectData } from "@/data/project";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/data/types";

export default function Projects() {
  const { webProjects, uiuxProjects, graphicProjects } = projectData;

  const renderProjects = (projects: Project[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800 pb-2"
        >
          <Image
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            width={500} // Adjust width according to your needs
            height={192} // Adjust height according to your needs
          />
          <div className="p-4 ">
            <h3 className="font-bold text-lg ">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <Button className="">
              <Link href={`/projects/${project.id}`}>
                {/* <a className="text-blue-400 underline mt-2 inline-block"> */}
                View Details
                {/* </a> */}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCarousel = (projects: Project[]) => (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className="w-full"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className="group relative rounded-lg overflow-hidden shadow-lg bg-gray-800 pb-4">
            <Image
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              width={500} // Adjust width according to your needs
              height={192} // Adjust height according to your needs
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {project.description}
              </p>

              <Button className="mb-1">
                {" "}
                <Link href={`/projects/${project.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-20 p-8 md:p-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <section className="w-full max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Projects
          </h1>
          <p className="text-lg text-gray-400">
            A showcase of my work in Web Development, UI/UX Design, and Graphic
            Design.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Web Development</h2>
          <p className="text-gray-400 mb-8">
            Projects showcasing modern frameworks and CMS.
          </p>
          <div className="block md:hidden">{renderCarousel(webProjects)}</div>
          <div className="hidden md:block">{renderProjects(webProjects)}</div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">UI/UX Design</h2>
          <p className="text-gray-400 mb-8">
            Creative and user-friendly designs.
          </p>
          <div className="block md:hidden">{renderCarousel(uiuxProjects)}</div>
          <div className="hidden md:block">{renderProjects(uiuxProjects)}</div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Graphic Design</h2>
          <p className="text-gray-400 mb-8">
            Innovative branding and visual storytelling.
          </p>
          <div className="block md:hidden">
            {renderCarousel(graphicProjects)}
          </div>
          <div className="hidden md:block">
            {renderProjects(graphicProjects)}
          </div>
        </section>
      </section>
    </main>
  );
}

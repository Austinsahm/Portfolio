import { findProjectById } from "@/data/project";
import { Project } from "@/data/types";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const project: Project | undefined = findProjectById(id);

  if (!project) {
    notFound(); // Return a 404 page if the project is not found
  }

  return (
    <main className="min-h-screen pt-20 p-8 md:p-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Project Title */}
        {project.title && (
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {project.title}
          </h1>
        )}

        {/* Main Project Image */}
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title || "Project Image"}
          className="w-full rounded-lg shadow-lg mb-8"
          priority
          unoptimized
          width={500}
          height={300}
        />

        {/* Technologies Used */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Description */}
        {project.description && (
          <p className="text-lg mb-4">{project.description}</p>
        )}

        {/* Project Details */}
        {project.details && (
          <p className="text-gray-400 mb-6">{project.details}</p>
        )}

        {/* Project Links */}
        {(project.demo || project.code) && (
          <div className="flex gap-4 mb-8">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Demo
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                View Code
              </a>
            )}
          </div>
        )}

        {/* Project Gallery */}
        {project.pictures && project.pictures.length > 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 gap-6">
              {project.pictures.map((picture) => (
                <div key={picture.id} className="relative">
                  {picture.description && (
                    <p className="mb-2 text-md text-gray-400">
                      {picture.description}
                    </p>
                  )}
                  <Image
                    src={picture.url || "/placeholder.svg"}
                    alt={picture.name || "Project Image"}
                    width={500}
                    height={0}
                    style={{ height: "auto" }}
                    unoptimized
                    priority
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

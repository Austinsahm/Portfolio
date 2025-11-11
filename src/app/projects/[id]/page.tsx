import { findProjectById } from "@/data/project";
import { ChevronDown, ExternalLink, Code } from "lucide-react";
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
    <main className="min-h-screen pt-20 p-8 md:p-24 bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Project Title */}
        {project.title && (
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600">
            {project.title}
          </h1>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {/* Main Project Image */}
            <div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title || "Project Image"}
                className="w-full rounded-lg shadow-lg mb-8"
                width={800}
                height={600}
                priority
                unoptimized
              />
            </div>

            {/* Technologies Used */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  Technologies Used
                </h2>
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

            {/* Project Links */}
            {(project.demo || project.code) && (
              <div className="flex gap-4 mb-8">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    View Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
                  >
                    <Code className="mr-2" size={18} />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            {/* Project Description */}
            {project.description && (
              <p className="text-lg mb-4">{project.description}</p>
            )}

            {/* Project Details */}
            {project.details && (
              <p className="text-gray-300 mb-6">{project.details}</p>
            )}

            {/* Project Deliverables */}
            {project.deliverables && project.deliverables.length > 0 && (
              <details className="w-full bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                <summary className="text-xl font-bold mb-4 text-purple-500 flex justify-between items-center cursor-pointer">
                  Project Deliverables
                  <ChevronDown
                    size={20}
                    className="inline-block transform transition-transform duration-200"
                  />
                </summary>
                <ol className="list-decimal pl-8 space-y-3 mt-4">
                  {project.deliverables.map((deliverable, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed hover:text-white transition-colors"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {/* Skills */}
            {project.skills && project.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome */}
            {project.outcome && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
                <p className="text-gray-300">{project.outcome}</p>
              </div>
            )}
          </div>
        </div>

        {/* Project Gallery */}
        {project.pictures && project.pictures.length > 0 && (
          <div className="w-full mt-12">
            <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
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
                    width={800}
                    height={600}
                    className="rounded-lg shadow-md w-full"
                    priority
                    unoptimized
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

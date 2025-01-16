import { findProjectById } from "@/data/project";
import { notFound } from "next/navigation";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = findProjectById(params.id);

  console.log(project + " Im Here");

  if (!project) {
    notFound(); // Return a 404 page if the project is not found
  }

  return (
    <main className="min-h-screen pt-20 p-8 md:p-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-lg shadow-lg mb-8"
        />
        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-gray-400">{project.details}</p>
      </div>
    </main>
  );
}

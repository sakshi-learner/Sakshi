import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../resources/Project'

function Projects() {
  return (
    <div className="bg-gray-900 py-10 px-5">
      <SectionTitle title="Projects" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-gray-800 border border-teal-700 rounded-lg overflow-hidden
              transition-all duration-300
              hover:shadow-lg hover:shadow-teal-500/30
              hover:-translate-y-1
              min-h-[420px]
              flex flex-col
            "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Title */}
              <h1 className="text-teal-400 text-lg font-semibold">
                {project.title}
              </h1>

              {/* Description (2 lines max) */}
              <p className="text-gray-300 mt-1 text-sm line-clamp-2">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-700 text-teal-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features (max 3) */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-gray-600 text-gray-300 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-teal-400 hover:underline"
              >
                View Project →
              </a>
            </div>
           
          </div>
        ))}
        <p className='text-gray-400'>and many more...</p>
      </div>
    </div>
  )
}

export default Projects

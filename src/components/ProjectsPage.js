import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectData from './ProjectData';


const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-8">Projects</h2>

        {/* Search Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 bg-gray-800 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="absolute right-4 top-4 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block text-sm text-pink-500 hover:underline"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

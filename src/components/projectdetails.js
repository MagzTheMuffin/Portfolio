import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from './ProjectData';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === projectId);

  const [validMedia, setValidMedia] = useState({
    video: false,
    pdf: false,
    presentation: false,
  });

  useEffect(() => {
    const checkMedia = async () => {
      const checkUrl = async (url) => {
        if (!url || url.trim() === '') return false;
        try {
          const res = await fetch(url, { method: 'HEAD' });
          return res.ok;
        } catch {
          return false;
        }
      };

      const [videoOk, pdfOk, presOk] = await Promise.all([
        checkUrl(project?.video),
        checkUrl(project?.pdf),
        checkUrl(project?.presentation),
      ]);

      setValidMedia({ video: videoOk, pdf: pdfOk, presentation: presOk });
    };

    checkMedia();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen text-white bg-black p-8 pt-24">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/projects" className="text-pink-500 hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-black p-8 pt-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {project.image?.trim() && (
        <img src={project.image} alt={project.title} className="w-full rounded-xl mb-6" />
      )}

      {project.summary?.trim() && (
        <p className="text-gray-300 mb-6 whitespace-pre-line">{project.summary}</p>
      )}

      {validMedia.video && (
        <video controls className="w-full mb-6 rounded-xl">
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {validMedia.pdf && (
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-2">📄 Report</h2>
          <iframe
            src={project.pdf}
            className="w-full h-[800px] rounded-xl border border-gray-700 shadow-lg"
            title={`${project.title} PDF`}
          />
        </div>
      )}

      {validMedia.presentation && (
        <div className="w-full mb-8">
          <h2 className="text-2xl font-semibold mb-2">📊 Presentation</h2>
          <div className="aspect-video w-full max-w-full">
            <iframe
              src={project.presentation}
              className="w-full h-full rounded-xl border border-gray-700 shadow-lg"
              allowFullScreen
              title={`${project.title} Presentation`}
            />
          </div>
        </div>
      )}

      {project.github?.trim() && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:underline block mb-4"
        >
          🛠 View on GitHub
        </a>
      )}

      <Link to="/projects" className="mt-8 inline-block text-pink-400 hover:underline">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetails;

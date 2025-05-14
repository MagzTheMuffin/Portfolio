import React from 'react';
import resumePDF from './CmagriResume.pdf'; // Adjust path as needed

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8 pt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-light mb-8">Resume</h2>

        {/* Download Button */}
        <div className="mb-8">
          <a
            href={resumePDF}
            download
            className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* PDF Embed */}
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
          <iframe
            src={resumePDF}
            title="Charlie Magri Resume"
            className="w-full h-[80vh]"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;

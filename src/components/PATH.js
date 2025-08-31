import React from 'react';

const GameShowcasePage = () => {
  // List of screenshot URLs, reversed
  const screenshots = Array.from({ length: 8 }, (_, i) => 
  `${process.env.PUBLIC_URL}/photos/ss${i + 1}.webp`
).reverse();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Hero Section with background image */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/photos/backround1.webp)` }}
      >
        <div className="bg-black/50 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">PATH</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Get ready for an arcade puzzle solver! 
            With over 1000 skin combinations, and millions of generative puzzles, theres endless challenges for you to complete and get a new high score!
          </p>
        </div>
      </div>

      {/* Demo Video Section */}
      <div className="max-w-3xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Gameplay Demo</h2>
        <video
          src={`${process.env.PUBLIC_URL}/videos/DEMO.mp4`}
          controls
          className="w-full rounded-2xl shadow-lg max-h-96 mx-auto"
        ></video>
      </div>

      {/* Screenshots Gallery */}
      <div className="max-w-4xl mx-auto my-16 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {screenshots.map((shot, index) => (
            <img
              key={index}
              src={shot}
              alt={`Screenshot ${index + 1}`}
              className="w-full rounded-2xl shadow-lg object-cover max-h-81"
            />
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <p className="text-center my-16">
            Currently waiting approval on googleplay and appstore
     </p> 
      <div className="text-center my-16">
        <a
          href="#"
          className="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 text-white font-semibold py-4 px-8 rounded-xl shadow-lg"
        >
          Coming September 2025
        </a>
      </div>
    </div>
  );
};

export default GameShowcasePage;

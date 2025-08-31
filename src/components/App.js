import { useEffect } from 'react';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';
import Carousel from './Carousel';
import PATH from './PATH';
import ProjectsPage from './ProjectsPage';
import Header from './Header'; // Import the new Header component
import './App.css';
import ProjectDetail from './projectdetails'; 
import ResumePage from './ResumePage';
import Footer from './Footer';
import HobbyCard from './HobbyCard';

const frontEndSkills = [
  'HTML', 'JavaScript', 'React', 'CSS', 'UML Paradigm', 'Figma', 'Visual Paradigm', 'SolidWorks', 'AutoCad'
];

const backEndSkills = [
  'C', 'SQL', 'C#', 'Python', 'C++', 'ARM Assembly', 'RISC-V Assembly', 'Arduino', 'VHDL', 'Verilog', 'FreeRTOS', 'uC/OS-III'
];

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1,
    });

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => observer.observe(section));

    return () => observer.disconnect(); // Clean up
  }, []);

  const hobbies = [
    {
      title: "Game Design",
      description:
        "I enjoy designing indie games that combine storytelling, mechanics, and aesthetic design. I use Godot and Unity to build out prototypes and love working on complex mechanics like procedural generation and pathfinding. Game design allows me to merge creativity with logic in a really engaging way.",
      imageArray: [
        `${process.env.PUBLIC_URL}/photos/gamejams.webp`,
        `${process.env.PUBLIC_URL}/photos/path2.webp`,
      ],
      imageSize: { width: "220px", height: "220px" },
    },
    {
      title: "Pixel Art",
      description:
        "Pixel art is my favorite visual medium, I create custom sprites and tilesets for my games, focusing on animations, lighting, and retro-inspired designs. It gives me a visual break from coding and helps me enhance the look of my projects with a distinct personal style.",
      imageArray: [
        `${process.env.PUBLIC_URL}/gifs/burgerjump.gif`,
        `${process.env.PUBLIC_URL}/gifs/hoecycleF.gif`,
        `${process.env.PUBLIC_URL}/gifs/port.gif`,
      ],
      reverse: true,
    },
    {
      title: "Cooking & Food",
      description:
        "I love cooking and exploring different cuisines, from slow-cooked stews to sushi. Cooking allows me to disconnect from my digital environment and create something tangible and shareable.",
      imageArray: [
        `${process.env.PUBLIC_URL}/photos/food1.webp`,
        `${process.env.PUBLIC_URL}/photos/food2.webp`,
        `${process.env.PUBLIC_URL}/photos/food3.webp`,
        `${process.env.PUBLIC_URL}/photos/food4.webp`,
      ],
      imageSize: { width: "220px", height: "293.3px" },
    },
  ];
  



  return (
    <div className="min-h-screen bg-dark-navy text-gray-200 pt-20">
      <main className="container mx-auto px-8 mb-16 py-20">
        <div className="mb-4 text-teal-400">Hi, my name is</div>
        <h1 className="text-6xl font-light mb-4 text-gray-100">Charlie Magri.</h1>
        <h2 className="text-5xl font-light mb-8 text-gray-400">Computer Engineer</h2>
        <p className="max-w-2xl text-gray-400 mb-8">
          I've recently graduated from the University of Guelph and breaking into
          software engineering. I have a passion for project design and indie game development,
          ready to use these skills in an industry setting.
        </p>
      </main>
  
      {/* About Me Section */}
      <section className="container mx-auto px-8 mb-16 fade-in-section">
        <h2 className="text-4xl font-light mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-teal-400">
            {/* Replace 'your-photo.jpg' with your actual image path */}
            <img 
              src={`${process.env.PUBLIC_URL}/photos/face2.webp`} 
              alt="Charlie Magri" 
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* About Text */}
          <div className="flex-1">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm passionate about bridging the gap between engineering and creativity.
              From software engineering to indie game development, I love building things 
              that are both functional and beautifully designed. Outside of coding, you’ll find 
              me exploring new technologies, gaming, or designing new personal projects!
            </p>
          </div>
        </div>
      </section>
  
      {/* Skills Section */}
      <section className="container mx-auto px-8 mb-16 fade-in-section">
        <h2 className="text-4xl font-light mb-8">Skills</h2>
        <h3 className="text-2xl mb-4">Front End & Design</h3>
        <Carousel items={frontEndSkills} />
        <h3 className="text-2xl mt-12 mb-4">Back End & Embedded</h3>
        <Carousel items={backEndSkills} />
      </section>
      
      {/* Upcoming Release Section */}
<section className="container mx-auto px-8 mb-16 fade-in-section">
  <h2 className="text-4xl font-light mb-8">Upcoming Release</h2>

  <div
    className="relative rounded-3xl overflow-hidden shadow-xl"
    style={{
      height: "400px",
      backgroundImage: `url(${process.env.PUBLIC_URL}/photos/backround1.webp)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Full overlay with blur + dark tint */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div className="p-12 rounded-2xl text-center">
        <h3 className="text-3xl font-semibold text-grey mb-6">PATH</h3>

        <Link
          to="/PATH"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
        >
          Take Me There →
        </Link>
      </div>
    </div>
  </div>
</section>



      <section className="container mx-auto px-8 mb-16 fade-in-section">
    </section>
        <section className="container mx-auto px-8 mb-16 fade-in-section">
      <h2 className="text-4xl font-light mb-12">Hobbies</h2>
      {hobbies.map((hobby, idx) => (
        <HobbyCard key={idx} {...hobby} /> 
      ))}
    </section>

    </div>
  );
};


const App = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Header onContactClick={scrollToFooter} />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/PATH" element={<PATH />} />
      </Routes>
      <Footer ref={footerRef} />
    </Router>
  );
};

export default App;
// Header.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import throttle from 'lodash/throttle';

const Header = ({ onContactClick }) => {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const header = document.querySelector('.sticky-header');
      if (!header) return;

      if (window.pageYOffset) {
        header.classList.add("is-active");
      } else {
        header.classList.remove("is-active");
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    onContactClick?.();
  };

  return (
    <header className="js-header sticky-header sticky top-0 bg-black text-white z-50 shadow-md">
      <nav className="flex justify-center items-center gap-x-8 py-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <a href="#contact" onClick={handleContactClick} className="hover:underline">Contact</a>
        <Link to="/resume" className="hover:underline">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;

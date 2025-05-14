// Footer.js
import React from 'react';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-dark-navy text-gray-300 p-8 mt-16 text-center">
      <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
      <p>Phone: +1 519-719-0769</p>
      <p>Email: CharlieMagri03@Gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/charlie-magri-23808326a/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">CharlieMagri</a></p>
      <p>GitHub: <a href="https://github.com/MagzTheMuffin" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">MagzTheMuffin</a></p>
    </footer>
  );
});

export default Footer;

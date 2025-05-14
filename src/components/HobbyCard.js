import React, { useEffect, useState } from 'react';

const HobbyCard = ({
  title,
  description,
  imageArray = [],
  reverse,
  borderStyle = "border-4 border-teal-400",
  imageSize = { width: "240px", height: "240px" },
  glowColor = "rgba(13, 148, 136, 0.4)"
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageArray.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % imageArray.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imageArray]);

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}>
      <div
        className={`relative rounded-lg overflow-hidden ${borderStyle}`}
        style={{
          width: imageSize.width,
          height: imageSize.height,
          boxShadow: `0 0 12px 4px ${glowColor}`,
          backgroundColor: "#000"
        }}
      >
        {imageArray.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={title}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ imageRendering: 'pixelated' }}
          />
        ))}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl mb-4 text-teal-400">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HobbyCard;

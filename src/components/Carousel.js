import React, { useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const totalWidth = carousel.scrollWidth; // Get the total width of the carousel
        carousel.style.animation = `scroll ${totalWidth / 30}s linear infinite`; // Set animation duration
    }, [items]);

    // Duplicate the items to create a seamless loop
    const duplicatedItems = [...items, ...items];

    return (
        <div className="carousel-wrapper">
            <div className="carousel-track" ref={carouselRef}>
                {duplicatedItems.map((skill, index) => (
                    <span key={index} className="carousel-item">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
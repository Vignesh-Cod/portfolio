import React, { useState } from 'react';
import websiteImag from '../assets/ecommerce-websites.jpg';
import websiteImag2 from '../assets/food-ecommerce.jpg';
import websiteImag3 from '../assets/website-blog.jpg';

export default function Project() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            image: websiteImag,
            title: "Chat App",
            description: "A chat app bulid with React.js and Firebase host with vercel.com",
            liveLink: "https://chat-app-two-brown-92.vercel.app/",
            sourceCode: "https://github.com/Vignesh-Cod/Chat-App"
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="Project" className="py-20 px-5 bg-primary text-white text-center">
            <h1 className="text-4xl font-bold mb-5">Projects</h1>
            <p className="mb-10">Here are some of my best projects. Slide through to explore them!</p>
            <div className="relative max-w-[600px] mx-auto">
                <div className="bg-secondary p-5 rounded-lg shadow-lg">
                    <img
                        className="h-[200px] w-full object-cover rounded-lg mb-5"
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                    />
                    <h2 className="text-xl font-bold mb-3">{projects[currentIndex].title}</h2>
                    <p className="text-sm mb-5">{projects[currentIndex].description}</p>
                    <div className="flex justify-between">
                        <a
                            href={projects[currentIndex].liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                        >
                            Code Live
                        </a>
                        <a
                            href={projects[currentIndex].sourceCode}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Source Code
                        </a>
                    </div>
                </div>
                <button
                    onClick={handlePrevious}
                    className="absolute top-[50%] left-0 bg-primary text-white px-4 py-2 rounded-l-lg hover:bg-gray-800 transition-colors"
                >
                    &#8249;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-[50%] right-0 bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors"
                >
                    &#8250;
                </button>
            </div>
        </section>
    );
}

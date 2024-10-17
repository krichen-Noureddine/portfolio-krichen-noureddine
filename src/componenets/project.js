import React, { useState, useEffect } from 'react';
import Flickity from 'flickity'; // Import Flickity for the carousel
import 'flickity/css/flickity.css'; // Import Flickity styles

const projects = [
  {
    title: "Health Spotlight",
    coverImage: "/img/1-1.png",
    images: ["/img/1-1.png", "/img/1-2.png","/img/1-3.png", "/img/1-4.png"],
    description: "Health Spotlight is a web application for promoting health initiatives.",
    functionalities: [
      "User health tracking",
      "Health tips and recommendations",
      "Integration with health databases"
    ],
    tags: ["Angular", "React", "Node.js"],
  },
  {
    title: "Cloud Managment Platform",
    coverImage: "/img/2-3.png", // Placeholder image
    images: ["/img/2-1.png", "/img/2-2.png","/img/2-3.png","/img/2-4.png"], // Placeholder images
    description: "A comprehensive intern management app designed to streamline the administration of Azure subscriptions and Office 365 licenses for Insomea.",
    functionalities: [
      "Centralized Dashboard: Offers a real-time view of Azure subscription details and Office 365 licenses, allowing for efficient monitoring and management from one platform.",
      "Automated Reminders: Includes automated alerts for renewal dates and critical deadlines to prevent missed renewals and service interruptions.",
      "Historical Tracking: Maintains a record of client subscriptions and historical cost data, providing clear insights into past expenses and usage patterns."
    ],
    tags: ["React JS","Next Js","Power BI", "SSo","Azure", "Office 365", "Entra Id",],
  },
  // Add more projects as needed
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    const openModal = (project) => {
        setActiveProject(project);
    };

    const closeModal = () => {
        setActiveProject(null);
    };

    useEffect(() => {
        let flkty;
        if (activeProject) {
            flkty = new Flickity('.carousel', {
                cellAlign: 'center',
                contain: true,
                wrapAround: true,
                pageDots: false,
                prevNextButtons: true,
                draggable: true,
                resize: true,
                adaptiveHeight: true, // Adjust height based on image
            });
        }

        return () => {
            if (flkty) flkty.destroy();
        };
    }, [activeProject]);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Projects</h1>
                <hr />
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            className="project-tile"
                            key={index}
                            onClick={() => openModal(project)}
                        >
                            <figure className="figure-custom">
                                <img src={project.coverImage} alt={project.title} />
                            </figure>
                            <div className="project-title">{project.title}</div>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {activeProject && (
                <div className={`modal ${activeProject ? 'is-active' : ''}`}>
                    <div className="modal-background" onClick={closeModal}></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">{activeProject.title}</p>
                            <button className="delete" aria-label="close" onClick={closeModal}></button>
                        </header>
                        <section className="modal-card-body">
                            {/* Flickity Carousel for Project Images */}
                            <div className="carousel">
                                {activeProject.images.map((image, index) => (
                                    <div className="carousel-cell" key={index}>
                                        <figure className="figure-custom">
                                            <img src={image} alt={`Project slide ${index}`} />
                                        </figure>
                                    </div>
                                ))}
                            </div>

                            {/* Project Description */}
                            <div className="content" style={{ marginTop: '0.5rem' }}>
                                <p>{activeProject.description}</p>
                                <p>Functionalities:</p>
                                <ul>
                                    {activeProject.functionalities.map((func, i) => (
                                        <li key={i}>{func}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-success" onClick={closeModal}>Close</button>
                        </footer>
                    </div>
                </div>
            )}
        </section>
    );
};


export default Projects;

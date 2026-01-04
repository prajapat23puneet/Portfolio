import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    // High-Impact "Case Studies" derived from experience
    const projects = [
        {
            title: "Legacy System Migration",
            category: "System Architecture",
            description: "Architected a product-wide migration from ASPX to C# REST services. Reduced technical debt and improved API response times by 40%.",
            tech: ["C#", ".NET Core", "REST API", "SQL"],
            link: null,
            github: null
        },
        {
            title: "Internal DevTools Ecosystem",
            category: "Developer Experience (DX)",
            description: "Engineered a dynamic Server Maintenance Dashboard and Performance Monitor using ag-grid. Transformed hardcoded workflows into customizable systems, significantly reducing manual operational overhead.",
            tech: ["ASP.NET Core", "React", "ag-grid", "SQL"],
            link: null,
            github: null
        },
        {
            title: "Enterprise Slack Bot",
            category: "Automation",
            description: "Developed a comprehensive integration automating critical team workflows, reducing manual server maintenance time by 15 hours/week.",
            tech: ["Node.js", "Slack API", "AWS Lambda", "Webhooks"],
            link: null,
            github: null
        },
        {
            title: "YOLOv5 Vision System",
            category: "AI / Machine Learning",
            description: "Built a real-time object detection system for security applications. Optimized inference speed for edge deployment.",
            tech: ["Python", "PyTorch", "OpenCV", "YOLOv5"],
            link: null,
            github: null
        },
        {
            title: "Sign Language Recognition",
            category: "Research Paper",
            description: "Published research on using Computer Vision to bridge communication gaps for the hearing impaired. Achieved 95% accuracy.",
            tech: ["Python", "TensorFlow", "OpenCV", "Research"],
            link: "https://www.irjmets.com/uploadedfiles/paper//issue_4_april_2023/36269/final/fin_irjmets1681992577.pdf",
            github: null
        }
    ];

    // 3D Tilt Options
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 15,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.02,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Case Studies</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt options={defaultOptions} className="project-card-tilt">
                                <div className="project-card glass">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FaCode />
                                        </div>
                                        <div className="card-links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                                            )}
                                            {(!project.github && !project.link) && (
                                                <div className="nda-badge">
                                                    <FaLock /> <span>Internal</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <span className="project-category">{project.category}</span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <ul className="tech-list">
                                            {project.tech.map((tech, i) => (
                                                <li key={i}>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

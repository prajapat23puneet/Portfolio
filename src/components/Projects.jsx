import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
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
            link: "https://www.irjmets.com/",
            github: null
        }
    ];

    return (
        <SectionWrapper id="projects" title="Case Studies">
            <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.02}
                                transitionSpeed={1000}
                                className="project-card-tilt"
                            >
                                <div className="project-card glass">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FaCode />
                                        </div>
                                        <div className="card-links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                    <FaGithub />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )}
                                            {/* NDA Badge if no links exist */}
                                            {(!project.github && !project.link) && (
                                                <div className="nda-badge" title="Proprietary Project">
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
        </SectionWrapper>
    );
};

export default Projects;

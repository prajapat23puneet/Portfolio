import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLock } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import SecureLink from './SecureLink';
import './Projects.css';

const Projects = () => {
    // Project Case Studies
    const projects = [
        {
            title: "n8n Job Automator",
            category: "Workflow Automation",
            description: "A 100% free-to-run autonomous agent architected on self-hosted n8n and Docker. Ingeniously leverages free-tier APIs (Gemini 2.0 Flash, SerpAPI) to aggregate jobs, tailor resumes, and predict hiring manager emails without a single dollar in operational costs.",
            tech: ["n8n", "Docker", "Gemini AI", "Python", "Workflow Automation"],
            github: "https://github.com/prajapat23puneet/Auto-Apply-Jobs"
        },
        {
            title: "Nexus IDE",
            category: "Distributed Systems",
            description: "A real-time \"Vibe Coding\" platform engineered for high concurrency. Features a Redis Backplane for scaling SignalR across instances, RedLock for distributed data integrity, and deployment on the Fly.io edge network.",
            tech: ["SignalR", "Redis", "React", ".NET 8", "Distributed Systems"],
            link: "https://nexus-ide.netlify.app/",
            github: "https://github.com/prajapat23puneet/ide"
        },
        {
            title: "Nexus Vyapaar",
            category: "Event-Driven Architecture",
            description: "A Distributed E-Commerce Orchestrator utilizing the Saga Pattern for long-lived transactions without 2-phase commits. Implements event-driven architecture using MassTransit, RabbitMQ, and PostgreSQL with optimistic concurrency.",
            tech: [".NET 8", "MassTransit", "RabbitMQ", "Saga Pattern", "PostgreSQL"],
            link: "https://vyapaar-nexus.netlify.app",
            github: "https://github.com/prajapat23puneet/vyaapar-nexus-core"
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
                                            <SecureLink href={project.github} className="project-icon" aria-label="View on GitHub">
                                                <FaGithub />
                                            </SecureLink>
                                        )}
                                        {project.link && (
                                            <SecureLink href={project.link} className="project-icon" aria-label="View Live Demo">
                                                <FaExternalLinkAlt />
                                            </SecureLink>
                                        )}
                                        {/* NDA Badge */}
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

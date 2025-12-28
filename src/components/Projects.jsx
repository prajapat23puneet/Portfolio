import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Achievements & Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3 className="project-title">'Sign Language Recognition' Research Paper</h3>
                        <p className="project-desc">
                            Authored and published a research paper on using Computer Vision and Machine Learning for real-time sign language recognition, aiding communication for the hearing impaired.
                        </p>
                        <div className="project-tags">
                            <span>Python</span>
                            <span>OpenCV</span>
                            <span>Machine Learning</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3 className="project-title">AWS Academy Graduate Cloud Architecting</h3>
                        <p className="project-desc">
                            Achieved Cloud Architecting Certification. Demonstrated proficiency in designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.
                        </p>
                        <div className="project-tags">
                            <span>AWS</span>
                            <span>Cloud Architecture</span>
                            <span>Certification</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

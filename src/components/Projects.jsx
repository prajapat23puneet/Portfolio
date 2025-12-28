import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Achievements & Projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3 className="project-title">
                            <a href="https://www.irjmets.com/uploadedfiles/paper//issue_4_april_2023/36269/final/fin_irjmets1681992577.pdf" target="_blank" rel="noopener noreferrer">
                                'Sign Language Recognition' Research Paper ↗
                            </a>
                        </h3>
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
                        <h3 className="project-title">
                            <a href="https://www.credly.com/badges/29711874-b666-44e7-a1e6-3858daea357e/print" target="_blank" rel="noopener noreferrer">
                                AWS Academy Graduate Cloud Architecting ↗
                            </a>
                        </h3>
                        <p className="project-desc">
                            Achieved Cloud Architecting Certification. Demonstrated proficiency in designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.
                        </p>
                        <div className="project-tags">
                            <span>AWS</span>
                            <span>Cloud Architecture</span>
                            <span>Certification</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3 className="project-title">
                            <a href="https://drive.google.com/file/d/1OYLHDu8Cf_CKnzm-83jqugO73GRulWLC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Cisco Networking Academy LoR ↗
                            </a>
                        </h3>
                        <p className="project-desc">
                            Letter of Recommendation from Cisco Networking Academy, recognizing strong performance and dedication in networking concepts.
                        </p>
                        <div className="project-tags">
                            <span>Networking</span>
                            <span>Cisco</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3 className="project-title">
                            <a href="https://drive.google.com/file/d/1ZzWFP6dhuQR3LNyimNZDm4g5srwjRcfE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Java Foundations Certificate ↗
                            </a>
                        </h3>
                        <p className="project-desc">
                            Oracle Academy Java Foundations Cumulative Final Exam certificate, validating core Java programming skills.
                        </p>
                        <div className="project-tags">
                            <span>Java</span>
                            <span>Oracle Academy</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;

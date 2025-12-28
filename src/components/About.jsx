import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    <div className="experience-card">
                        <h3 className="role">Software Development Engineer</h3>
                        <h4 className="company">Planful Inc</h4>
                        <ul className="achievements">
                            <li>Architected product-wide migrations from ASPX to C# REST services, improving maintainability and scalability.</li>
                            <li>Built performance monitoring tools to enhance system reliability and observability.</li>
                        </ul>
                    </div>

                    <div className="experience-card">
                        <h3 className="role">SDE Intern</h3>
                        <h4 className="company">
                            <a href="https://drive.google.com/file/d/1JRHfShZ-YJb2-CV4gNgEXh0nfiIkdWFJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="company-link">
                                Camncloud Technologies ↗
                            </a>
                        </h4>
                        <ul className="achievements">
                            <li>Worked on YOLOv5 object detection algorithms for real-time applications.</li>
                            <li>Developed predictive models to analyze data trends and optimize decision-making.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

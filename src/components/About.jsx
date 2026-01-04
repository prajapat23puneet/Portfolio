import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-grid">
                    <div className="experience-card glass">
                        <div className="card-header">
                            <h3 className="role">Software Development Engineer</h3>
                            <span className="date">Aug 2024 – Dec 2025</span>
                        </div>
                        <h4 className="company">Planful Inc</h4>
                        <ul className="achievements">
                            <li>Architected product-wide migrations from ASPX to C# REST services, improving maintainability and scalability.</li>
                            <li>Built performance monitoring tools to enhance system reliability and observability.</li>
                            <li>Elevated test suite stability from 60% to 85% success rate across 5,000 test cases.</li>
                        </ul>
                    </div>

                    <div className="experience-card glass">
                        <div className="card-header">
                            <h3 className="role">Software Development Engineer Intern</h3>
                            <span className="date">Jan 2024 – Jul 2024</span>
                        </div>
                        <h4 className="company">Planful Inc</h4>
                        <ul className="achievements">
                            <li>Developed comprehensive Slack Bot integration automating critical team workflows.</li>
                            <li>Implemented multiple Server Maintenance Tool features leveraging ag-grid and ASP.NET Core.</li>
                            <li>Collaborated extensively on API testing and validation.</li>
                        </ul>
                    </div>

                    <div className="experience-card glass">
                        <div className="card-header">
                            <h3 className="role">SDE Intern</h3>
                            <span className="date">Aug 2023 – Sep 2023</span>
                        </div>
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

                <h2 className="section-title education-title">Education</h2>
                <div className="education-card glass">
                    <div className="card-header">
                        <h3 className="degree">Bachelor of Technology in Computer Science Engineering</h3>
                        <span className="date">2020 – 2024</span>
                    </div>
                    <h4 className="institution">Acropolis Institute of Technology and Research, Indore</h4>
                    <p className="cgpa">CGPA: 7.62</p>
                </div>
            </div>
        </section>
    );
};

export default About;

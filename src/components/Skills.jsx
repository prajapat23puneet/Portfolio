import React from 'react';
import './Skills.css';

const skillsData = {
    "Languages": ["C#", "Java", "Python", "JavaScript", "SQL"],
    "Frontend": ["React", "Angular", "HTML5", "CSS3", "ag-grid"],
    "Backend": ["ASP.NET Core", "Spring Framework", "REST APIs"],
    "Tools": ["AWS", "Git", "Postman", "Playwright"]
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="skill-category glass">
                            <h3 className="category-title">{category}</h3>
                            <div className="skill-tags">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

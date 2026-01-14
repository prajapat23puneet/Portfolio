import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaHtml5, FaCss3, FaJava, FaPython, FaAws, FaGitAlt, FaDocker, FaRobot } from 'react-icons/fa';
import { SiDotnet, SiSpring, SiJavascript, SiTypescript, SiPostman, SiMysql } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import SectionWrapper from './SectionWrapper';

const skillsData = {
    "Frontend": [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }
    ],
    "Backend": [
        { name: "C#", icon: <TbBrandCSharp />, color: "#239120" },
        { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "SQL Server", icon: <DiMsqlServer />, color: "#CC2927" }
    ],
    "Tools": [
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Playwright", icon: <FaRobot />, color: "#2EAD33" }
    ]
};

const Skills = () => {
    return (
        <SectionWrapper id="skills" title="Technical Skills">
            <div className="skills-wrapper">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="category-section">
                        <h3 className="category-title">{category}</h3>
                        <div className="skills-grid">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-card glass"
                                    whileHover={{ y: -5 }}
                                    style={{ "--glow-color": skill.color }}
                                >
                                    <div className="icon-wrapper" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;

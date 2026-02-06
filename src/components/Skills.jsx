import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaHtml5, FaCss3, FaJava, FaPython, FaAws, FaGitAlt, FaDocker, FaRobot, FaTable, FaServer, FaCode, FaProjectDiagram, FaPlug, FaDatabase, FaChartLine, FaNetworkWired, FaCubes } from 'react-icons/fa';
import { SiDotnet, SiSpring, SiJavascript, SiTypescript, SiPostman, SiMysql, SiPostgresql, SiRedis, SiRabbitmq, SiGithubactions, SiApachekafka, SiSpringboot } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import SectionWrapper from './SectionWrapper';

const skillsData = {
    "Frontend": [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "ag-grid", icon: <FaTable />, color: "#1E88E5" }
    ],
    "Backend": [
        { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "gRPC", icon: <FaPlug />, color: "#244C5A" },
        { name: "MassTransit", icon: <FaProjectDiagram />, color: "#512BD4" },
        { name: "RabbitMQ", icon: <SiRabbitmq />, color: "#FF6600" },
        { name: "Kafka", icon: <SiApachekafka />, color: "#231F20" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" }
    ],
    "Data & Storage": [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "SQL Server", icon: <DiMsqlServer />, color: "#CC2927" },
        { name: "H2", icon: <FaDatabase />, color: "#0000BB" }
    ],
    "Tools": [
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Playwright", icon: <FaRobot />, color: "#2EAD33" },
        { name: "n8n", icon: <FaCode />, color: "#FF6D5A" },
        { name: "YARP", icon: <FaServer />, color: "#512BD4" }
    ],
    "Computer Science Fundamentals": [
        { name: "Data Structures", icon: <FaProjectDiagram />, color: "#00758F" },
        { name: "Algorithms", icon: <FaChartLine />, color: "#FF6B6B" },
        { name: "System Design", icon: <FaNetworkWired />, color: "#4ECDC4" },
        { name: "OOP", icon: <FaCubes />, color: "#95E1D3" }
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

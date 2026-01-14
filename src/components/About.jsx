import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExperienceCard from './ExperienceCard';
import './About.css';

const EXPERIENCE_DATA = [
    {
        role: 'Software Development Engineer',
        date: 'Aug 2024 – Dec 2025',
        company: 'Planful Inc',
        achievements: [
            'Architected product-wide migrations from ASPX to C# REST services, improving maintainability and scalability.',
            'Built performance monitoring tools to enhance system reliability and observability.',
            'Elevated test suite stability from 60% to 85% success rate across 5,000 test cases.'
        ]
    },
    {
        role: 'Software Development Engineer Intern',
        date: 'Jan 2024 – Jul 2024',
        company: 'Planful Inc',
        achievements: [
            'Developed comprehensive Slack Bot integration automating critical team workflows.',
            'Implemented multiple Server Maintenance Tool features leveraging ag-grid and ASP.NET Core.',
            'Collaborated extensively on API testing and validation.'
        ]
    },
    {
        role: 'SDE Intern',
        date: 'Aug 2023 – Sep 2023',
        company: 'Camncloud Technologies',
        companyLink: 'https://drive.google.com/file/d/1JRHfShZ-YJb2-CV4gNgEXh0nfiIkdWFJ/view?usp=sharing',
        achievements: [
            'Worked on YOLOv5 object detection algorithms for real-time applications.',
            'Developed predictive models to analyze data trends and optimize decision-making.'
        ]
    }
];

const About = () => {
    return (
        <SectionWrapper id="about" title="Experience">
            <div id="experience" className="experience-grid">
                {EXPERIENCE_DATA.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        role={experience.role}
                        date={experience.date}
                        company={experience.company}
                        companyLink={experience.companyLink}
                        achievements={experience.achievements}
                    />
                ))}
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
        </SectionWrapper>
    );
};

export default About;

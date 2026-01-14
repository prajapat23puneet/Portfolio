import React from 'react';

const ExperienceCard = ({ role, date, company, companyLink, achievements }) => {
    return (
        <div className="experience-card glass">
            <div className="card-header">
                <h3 className="role">{role}</h3>
                <span className="date">{date}</span>
            </div>
            <h4 className="company">
                {companyLink ? (
                    <a href={companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                        {company} ↗
                    </a>
                ) : (
                    company
                )}
            </h4>
            <ul className="achievements">
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'NASTP',
      location: 'Rawalpindi',
      date: 'Feb 2024 - Present',
      description: 'Hands-on experience as a .NET Developer, specializing in .NET and C#, with a strong focus on developing scalable web and desktop applications. Proven ability to integrate databases effectively to drive project success and improve performance, enhancing cross-platform and front-end development capabilities.'
    },
    {
      title: 'Cyber Security Developer',
      company: 'MoIt, Government of Pakistan',
      location: 'Rawalpindi',
      date: 'March 2023 - Feb 2024',
      description: 'Hands-on experience as a .NET Developer, specializing in C#, with a focus on developing secure desktop applications. Adept at integrating cybersecurity best practices to ensure robust functionality and alignment with project objectives.'
    }
  ];

  return (
    <section className="section">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="item-header">
            <div>
              <h3>{exp.title}</h3>
              <div className="company">{exp.company}</div>
              <div className="location">{exp.location}</div>
            </div>
            <div className="date">{exp.date}</div>
          </div>
          <p className="description">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;

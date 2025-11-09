import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'OOP, DS, COAL, WEB, VISUAL PROGRAMMING',
      institution: 'Comsats University Islamabad',
      date: '2015-2019',
      grade: '3.48'
    },
    {
      degree: 'FSc Pre-Engineering',
      institution: 'PHYSICS, MATHS, CHEMISTRY',
      date: '2012-2014',
      grade: '72 %'
    },
    {
      degree: 'Matric',
      institution: 'PHYSICS, CHEMISTRY, BIOLOGY, MATHS',
      date: '2010-2012',
      grade: '89 %'
    }
  ];

  return (
    <section className="section">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="item-header">
            <div>
              <h3>{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
            </div>
            <div className="date">{edu.date}</div>
          </div>
          <p className="description">Grade: {edu.grade}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;

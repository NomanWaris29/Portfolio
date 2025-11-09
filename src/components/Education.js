import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'BS Computer Science',
      subjects: '(OOP, DS, COAL, Web, Visual Programming)',
      institution: 'Comsats University',
      date: '2015-2019',
      grade: 'CGPA : 3.48'
    },
    {
      degree: 'FSc Pre-Engineering',
      subjects: '(PHYSICS, MATHS, CHEMISTRY)',
      institution: 'F.G Sir Syed College The Mall Rwp',
      date: '2012-2014',
      grade: 'Grade : 72 %'
    },
    {
      degree: 'Matric',
      subjects: '(PHYSICS, CHEMISTRY, BIOLOGY, MATHS)',
      institution: 'F.G Public Secondary School Rwp',
      date: '2010-2012',
      grade: 'Grade : 89 %'
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
              {edu.subjects && <div className="subjects">{edu.subjects}</div>}
              <div className="institution">{edu.institution}</div>
            </div>
            <div className="date">{edu.date}</div>
          </div>
          <p className="description">{edu.grade}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;

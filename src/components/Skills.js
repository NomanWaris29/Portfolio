import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C#', rating: 5 },
    { name: 'Java', rating: 4 },
    { name: 'SQL', rating: 4 },
    { name: 'ASP.NET', rating: 5 },
    { name: 'Javascript', rating: 4 },
    { name: 'Node.js', rating: 3 },
    { name: 'Python', rating: 2 }
  ];

  const renderStars = (rating) => {
    return (
      <div className="skill-rating">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`star ${index < rating ? '' : 'empty'}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.name}</h3>
            {renderStars(skill.rating)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const Languages = () => {
  const languages = [
    { name: 'English', rating: 4 },
    { name: 'Urdu', rating: 5 },
    { name: 'Punjabi', rating: 5 }
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
      <h2>Languages</h2>
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <h3>{language.name}</h3>
            {renderStars(language.rating)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;

import React from 'react';

const Interests = () => {
  const interests = [
    {
      category: 'Sports',
      items: 'Cricket, Football, Badminton, Tennis'
    },
    {
      category: 'Books',
      items: 'History, Religious, Fiction'
    },
    {
      category: 'Movies',
      items: 'Science Fiction, History, Mystery'
    }
  ];

  return (
    <section className="section">
      <h2>Interests</h2>
      <div className="interests-section">
        {interests.map((interest, index) => (
          <div key={index} className="interest-category">
            <h3>{interest.category}</h3>
            <p>{interest.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;

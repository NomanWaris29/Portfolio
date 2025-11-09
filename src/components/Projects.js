import React from 'react';

const Projects = () => {
  const professionalProjects = [
    {
      title: 'Communication Gateways',
      description: 'Designed and implemented communication gateways using C# and .NET to enable secure and efficient data exchange between systems. Focused on protocol integration, error handling, routing, and system integration to ensure reliable connectivity across distributed applications.'
    },
    {
      title: '3D Mapping Application',
      description: 'Developed a 3D mapping application using JavaScript for the frontend and Java for the backend. Integrated geospatial data visualization, interactive map features, and real-time updates, ensuring smooth user experience across multiple platforms.'
    },
    {
      title: 'Secure Desktop Application Development',
      description: 'Developed and maintained secure desktop applications using C# and .NET, with a strong focus on implementing security best practices. Integrated robust authentication mechanisms, encrypted data storage, and secure communication protocols to ensure robust and compliant software solutions.'
    },
    {
      title: 'Stock Management System',
      description: 'Built a comprehensive stock management system using C# and .NET to track inventory, manage stock levels, and automate reordering processes. Implemented real-time reporting, barcode scanning integration, and multi-user access controls for efficient warehouse operations.'
    },
    {
      title: 'Clinic Management System',
      description: 'Developed a complete clinic management system using C# and .NET to streamline patient appointments, medical records, billing, and prescription management. Features include patient registration, appointment scheduling, electronic health records, and automated billing with insurance integration.'
    }
  ];

  const academicProjects = [
    {
      title: 'ASK && FREELANCE',
      description: 'Website Developed using MEAN Stack technologies',
      date: '2019'
    },
    {
      title: 'FNF TRACKER',
      description: 'Android Application developed to keep track of friends and family',
      date: '2018'
    },
    {
      title: 'IMDB System',
      description: 'Movie Database system developed using Data Structures concepts',
      date: '2016'
    }
  ];

  return (
    <section className="section">
      <h2>Professional Projects</h2>
      <div className="projects-grid">
        {professionalProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '40px' }}>Academic Projects</h2>
      <div className="projects-grid">
        {academicProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <div className="date">{project.date}</div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

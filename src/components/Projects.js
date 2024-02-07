import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'EC2 Update',
      description: 'This script is meant to run an update on the remote instance IP that is passed in.',
      githubLink: 'https://github.com/javyduty/autoupdateec2',
      imageUrl: 'https://www.logicata.com/wp-content/uploads/2020/08/Amazon-EC2@4x-e1593195270371.png',
    },
    {
      title: 'Cloud Formation Templates',
      description: 'Cloud formation templates for different infrastructure & resource deployments.',
      githubLink: 'https://github.com/javyduty/cloud-formation',
      imageUrl: 'https://seeklogo.com/images/A/aws-cloudformation-logo-11F173F931-seeklogo.com.png',
    },
    {
      title: 'Microservices Example',
      description: 'A microservice application with continuous integration and continuous deployment solution.',
      githubLink: 'https://github.com/javyduty/microservice',
      imageUrl: 'https://images.unsplash.com/photo-1667372459567-3853510dd5ce?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img className="project-image" src={project.imageUrl} alt={project.title} />
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

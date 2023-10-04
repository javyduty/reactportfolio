import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Chat Server and Client',
      description: 'Chatting application that can handle multiple users alerts users when new user joins chat alerts users when user signs out catalogs sent messages by users.',
      githubLink: 'https://github.com/javyduty/Chat',
      imageUrl: 'https://github.com/javyduty/Chat/blob/master/image/Chat_image.png?raw=true',
    },
    {
      title: 'EC2 Update',
      description: 'This script is meant to run an update on the remote instance IP that is passed in.',
      githubLink: 'https://github.com/javyduty/autoupdateec2',
      imageUrl: 'https://www.logicata.com/wp-content/uploads/2020/08/Amazon-EC2@4x-e1593195270371.png',
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

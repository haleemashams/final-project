import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{project.title}</h3>
            <p>Developer: {project.developer}</p>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

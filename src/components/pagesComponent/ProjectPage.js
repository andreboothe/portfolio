import React from 'react';

// Components
import ProjectCard from './ProjectCard';



const ProjectPage = ({projects, projectImages}) => {
    
    const projectCards = projects.map((project, index) => {
        return (
        
            <ProjectCard 
                key = {index}
                title = {project.name.replace("-", " ")}
                description = {project.description}
                githubRepo = {project.html_url}
                displayExternalLink = {
                    (project.homepage === null || project.homepage === '')?'d-none':''
                }
                hostedSite = {project.homepage}
                imgSrc = {projectImages[project.name]}
            />
    )});


    

    return (
        <section id="projects" className="section full-height scrollspy">
            <h1 className="page-header">Projects</h1>

            <div className="container">
                <div className="row project-card">
                    {projectCards}
                    
                </div>

                <p className="flow-text text-center">You may also view some of my other projects that have yet to make 
                    it into my github repo on my   
                    <a href="https://codepen.io/dra-boothe/" className="hoverline"
                    target="_blank" rel="noopener noreferrer"> Codepen
                    </a>
                </p>
            </div>
            
        </section>
    );

}

export default ProjectPage;
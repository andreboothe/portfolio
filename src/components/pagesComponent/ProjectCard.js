import React from 'react';



const ProjectCard = ({title, imgSrc, description, githubRepo, displayExternalLink, hostedSite}) => {

    

    return (
        <div className="col s12 m6 l4">
            <div className="card small">

                <div className="card-image">
                    <img src={imgSrc} alt="" className="activator"/>
                </div>

                <div className="card-content">
                    <span className="card-title no-border capitalize  activator blue-text">
                        {title}
                        <i className="Small material-icons right">more_vert</i>
                    </span>
                </div>

                <div className="card-reveal" style={{transform: 'translateY(0px)'}}>
                
                    <div className="card-content">
                        <span className="card-title blue-text description-title">
                            Description
                            <i className="Small material-icons right">close</i>
                        </span>
                        <p className="flow-text">{description}</p>
                    </div>
                    

                    <div className="card-action">
                        <a 
                            className={`tooltipped ${displayExternalLink}`}
                            href={hostedSite}
                            target="_blank" 
                            data-position="top" data-tooltip="Hosted app"
                            rel="noopener noreferrer">
                            
                            <i className="fas fa-external-link-alt fa-3x "
                               >
                            </i>
                        </a>
                        <a 
                            className="tooltipped"
                            href={githubRepo} 
                            target="_blank"
                            data-position="top" data-tooltip="Source"
                            rel="noopener noreferrer">
                            <i className="fab fa-github-square fa-3x "></i>
                        </a>
                    </div>
                </div>   
                    
            
            </div>
        </div>
    );
}

export default ProjectCard;
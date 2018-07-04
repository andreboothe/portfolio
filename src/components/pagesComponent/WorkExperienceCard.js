import React from 'react';

const WorkExperienceCard = ({aTagLink, infoTitle, title, date, info, companyImg, tools, jobTitle}) => {

    const infoList = info.map((info, index) => {
        return <li key={index} className="collection-item ">{info}</li>
    });

    return (
        <div className="col s12 m9">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        <img src={companyImg} alt="" className="left-align"/>
                        <a href={aTagLink}
                            className="hoverline company-name"
                            target="_blank" 
                            rel="noopener noreferrer">
                            {title}
                        </a>
                        <span className="job-title job-title__header">{jobTitle}</span>
                    </span>
                    <h6 className="job-title job-title__sub">{jobTitle}</h6>
                    <h6 className="info-title">{infoTitle}</h6>
                    <ul className="collection">
                        {infoList}
                        <li>Tools: {tools}</li>
                    </ul>
                    <p className="date">{date}</p> 
                </div>
            </div>
        </div>
    );
}

export default WorkExperienceCard;
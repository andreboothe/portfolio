import React from 'react';

// Components
import WorkExperienceCard from './WorkExperienceCard';

const WorkExperiencePage = ({workExperienceList}) => {

    const workExperienceCards = workExperienceList.map((experience, index) => {
        return <WorkExperienceCard 
            key = {index}
            subTitle = {experience.subTitle}
            title = {experience.title}
            aTagLink = {experience.aTagLink}
            info = {experience.info}
            date = {experience.date}
            companyImg = {experience.companyImg}
            jobTitle = {experience.jobTitle}
            infoTitle = {experience.infoTitle}
            tools = {experience.tools}
        />
    });

    return (

        <section id="work-experience" className="section full-height scrollspy">
            <h1 className="page-header">Work Experience</h1>

            <div className="container">
                
                    <div className="row">
                        {workExperienceCards}
                    </div>
               
            </div>
            
        </section>

    );
}

export default WorkExperiencePage;
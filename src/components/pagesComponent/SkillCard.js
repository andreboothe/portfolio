import React from 'react';

const SkillCard = ({category}) => {

    const skillsArray = category.skills.map((skill, index) => {
        return (
            
            <div className="col s6 m2" key={index}>
                <img src={skill.imgSrc} alt="" className="responsive-img"/>
                <h6>{skill.name}</h6>     
            </div>
        );
    });

    return (
        <div className="card">
            <div className="card-content">
                <h4 className="blue-text">{category.name}</h4>
                <div className="row text-center">
                    {skillsArray}
                </div>
            </div>
        </div>
        
        
    );
}

export default SkillCard;
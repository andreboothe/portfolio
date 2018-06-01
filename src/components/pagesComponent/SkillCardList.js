import React from 'react';

// Components
import SkillCard from './SkillCard';



const SkillCardList = ({skillList}) => {

    const skillCategory = skillList.map((category, index) => {
        return (
            <SkillCard 
                key={index}
                category={category}
            />
        );
    });

    return (
        <div className="container">
            {skillCategory}
        </div>
    );
}

export default SkillCardList;

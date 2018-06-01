import React from 'react';

// Components
import SkillCardList from './SkillCardList';


const SkillPage = ({skillList}) => {

    return (
        <section id="skills" className="section scrollspy full-height">
            <h1 className="page-header">Skills</h1>
            
            <SkillCardList 
                skillList = {skillList}
            />
        </section>
    );
}

export default SkillPage;
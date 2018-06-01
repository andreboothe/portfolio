import React from 'react';

// Components
import SkillCardList from './SkillCardList';

// Assets
import skillList from './skillList';

const SkillPage = () => {

    return (
        <section id="skills" className="section scrollspy">
            <h1 className="page-header">Skills</h1>
            
            <SkillCardList 
                skillList = {skillList}
            />
        </section>
    );
}

export default SkillPage;
import React from 'react';

// Components
import EduCard from './EduCard';

const EducationPage = () => {

    return (
        <section id="education" className="section scrollspy full-height">
            <h1 className="page-header">Education</h1>
            <div className="container">
                <div className="row eduCard">
                    <EduCard 
                        subTitle ="Jamaica, JM| 2017"
                        title ="University of The West Indies"
                        aTagLink="https://www.mona.uwi.edu/"
                        info="BSc. Computer Science"
                    />
                </div>
            </div>
        </section>
    );
}

export default EducationPage;
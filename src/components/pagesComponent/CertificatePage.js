import React from 'react';

// Components
import EduCard from './EduCard';

const CertificatePage = () => {

    return (
        <section id="certificates" className="section full-height scrollspy">
            <h1 className="page-header">Certificates</h1>
            <div className="container">
                <div className="row eduCard">

                    <EduCard 
                        title ="Front End Development "
                        subTitle ="FreeCodeCamp |May 2018"
                        aTagLink="https://www.freecodecamp.org/certification/andreboothe/legacy-front-end"
                        info="Free Code Camp's Front End Development programcovers an estimated 
                                400 hours of course work that includes 
                                HTML5, CSS, JavaScript and jQuery."
                    />
                    
                    <EduCard 
                        title ="JavaScript Algorithms and Data Structures Projects "
                        subTitle ="FreeCodeCamp |June 2018"
                        aTagLink="https://www.freecodecamp.org/certification/andreboothe/javascript-algorithms-and-data-structures"
                        info="Free Code Camp's JavaScript Algorithms and Data Structures Projects 
                                covers an estimated 300 hours of course work that involves
                                , intermediate and adavnced algorithm scripting."
                    />

                </div>
            </div>
        </section>
    );
}

export default CertificatePage;
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
                        info="Free Code Camp's Front End Development program covers an estimated 
                                400 hours of course work that includes 
                                HTML5, CSS, JavaScript and jQuery."
                    />
                    
                    <EduCard 
                        title ="JavaScript Algorithms and Data Structures Projects "
                        subTitle ="FreeCodeCamp |June 2018"
                        aTagLink="https://www.freecodecamp.org/certification/andreboothe/javascript-algorithms-and-data-structures"
                        info="Free Code Camp's JavaScript Algorithms and Data Structures Projects 
                                covers an estimated 300 hours of course work that involves
                                ES6, Regular Expressions, Data Structures, Object Oriented Programming, Debugging
                                Functional Programming, Basic and Intermediate Algorithm Scripting."
                    />

                    <EduCard 
                        title ="Responsive Web Design "
                        subTitle ="FreeCodeCamp |June 2018"
                        aTagLink="https://www.freecodecamp.org/certification/andreboothe/responsive-web-design"
                        info="Free Code Camp's Responsive Web Design program covers an estimated 
                                300 hours of course work that includes 
                                HTML5, CSS, Applied Visiual Design, Applied Accessibility, Responsive Web Design 
                                Principles, CSS Flexbox  and CSS Grid."
                    />    
                </div>
            </div>
        </section>
    );
}

export default CertificatePage;
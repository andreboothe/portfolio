import React from 'react';

const AboutPage = () => {
    return (
        <section id="about" className="section scrollspy full-height">
            <h1 className="page-header">About</h1>
            <div className="container flow-text">
                <blockquote>
                    <h3 className="blue-text">
                        Continuously growing Front End Developer with a drive for clean efficient 
                        code and learning new technologies.
                    </h3>
                </blockquote>
                <p>
                    Ever since I was young, I always found software rather mysterious. Thus when the
                    time came for me to pick a field of study, only Computer Science truly spoke to me 
                    as it allowed me to combine my natural passion for problem solving and my drive
                    to unlock the mysteries of code.
                </p>
                <p>
                    After graduating I was now armed with all the knowledge of every Com. Sci.
                    course U.W.I (University of the West indies) had to offer. Thus I began my journey of self learning, to forge
                    myself into a web developer. Using resources like FreeCodeCamp, Udemy, Youtube, 
                    etc to gather the knowledge and skills necessary for a developer in today's times.
                </p>
                <p>
                    <span>Current Focus</span>: Front End Web Development (using the React.js framework)
                </p>
            </div>
            
        </section>
    );
}

export default AboutPage;
import React from 'react';

const EducationPage = () => {

    return (
        <section id="education" className="section scrollspy full-height">
            <h1 className="page-header">Education</h1>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <a href="https://www.mona.uwi.edu/">
                                    <span className="card-title hoverline">
                                    University of The West Indies
                                    </span>
                                </a>
                                <p className="sub-title">Jamaica, JM| 2017</p>

                                <ul className="collection">
                                    <li>
                                        <p className="collection-item card-info">BSc. Computer Science</p>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationPage;
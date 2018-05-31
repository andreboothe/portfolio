import React from 'react';

const ConatctPage = () => {

    return (
        <section id="contact" className="section scrollspy full-height">
            <h1 className="page-header">Contact</h1>
            <div className="container">
                <a href="mailto:boothe.andre@live.com">
                    <i className="fas fa-envelope-square fa-2x "></i>
                    <span>boothe.andre@live.com </span>
                </a>
                <a href="https://github.com/andreboothe">
                    <i className="fab fa-github-square fa-2x"></i>
                    <span>github.com/andreboothe </span>
                </a>
                <a href="https://www.linkedin.com/in/andre-boothe-552b6549/">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <span>linkedin.com/in/andre-boothe-552b6549 </span>
                </a>
            
            </div>
            
        </section>
    );
}

export default ConatctPage;
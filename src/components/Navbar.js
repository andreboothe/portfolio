import React from 'react';

const Navbar = () => {

    return (
        <div>
            {/* Top fixed nav bar */}
            <div className="navbar-fixed">
                <nav className="teal lighten-1">
                    <div className="container">
                        <div className="nav-wrapper ">
                            <a href="#home" className="brand-logo">
                                <h3>Andre Boothe</h3>
                            </a>
                            <a href="" data-target="mobile-nav" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="waves-effect waves-light" href="#About">About</a></li>
                                <li><a className="waves-effect waves-light" href="#Skills">Skills</a></li>
                                <li><a className="waves-effect waves-light" href="#Projects">Projects</a></li>
                                <li><a className="waves-effect waves-light" href="#Education">Education</a></li>
                                <li><a className="waves-effect waves-light" href="#Certificates">Certificates</a></li>
                                <li><a className="waves-effect waves-light" href="#Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </nav>   
            </div>

            {/* Side nav bar */}
            <ul id="mobile-nav" className="sidenav collection with-header center">
                <li className="collection-header teal white-text  ">
                    <h3>Andre Boothe</h3>
                    <span>Front End Developer</span>
                </li>
                <li className="collection-item waves-effect waves-teal">
                    <a className="teal-text" href="#About">
                        <i className="fas fa-user fa-2x  teal-text"></i>
                        <p>About</p>
                    </a>
                </li>
                <li className="collection-item waves-effect waves-green">
                    <a className="green-text" href="#Skills">
                        <i className="fas fa-chart-bar fa-2x green-text"></i>
                        <p>Skills</p>
                    </a>
                </li>
                <li className="collection-item waves-effect waves-red">
                    <a className="red-text" href="#Projects">
                        <i className="fas fa-project-diagram fa-2x red-text"></i>
                        <p>Projects</p>
                    </a>
                </li>
                <li className="collection-item waves-effect waves-orange">
                    <a className="orange-text" href="#Education">
                        <i className="fas fa-graduation-cap fa-2x orange-text"></i>
                        <p>Education</p>
                    </a>
                </li>
                <li className="collection-item waves-effect waves-blue">
                    <a className="blue-text text-darken-1" href="#Certificates">
                        <i className="fas fa-certificate fa-2x blue-text"></i>
                        <p>Certificates</p>
                    </a>
                </li>
                <li className="collection-item waves-effect waves-purple">
                    <a className="purple-text" href="#Contact">
                        <i className="fas fa-envelope fa-2x purple-text"></i>
                        <p>Contact</p>
                    </a>
                </li>
            </ul>
        </div>
        

    );
}

export default Navbar;
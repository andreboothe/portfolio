import React from 'react';

const NavBar = () => {
    return (

        <div className="navbar-fixed">
            <nav className="teal lighten-1">
                <div className="container">
                    <div className="nav-wrapper ">
                        <a href="#home" className="brand-logo waves-effect waves-light">
                            <h3>Andre Boothe</h3>
                        </a>
                        <a href="" data-target="mobile-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="waves-effect waves-light" href="#about">About</a></li>
                            <li><a className="waves-effect waves-light" href="#work-experience">Experience</a></li>
                            <li><a className="waves-effect waves-light" href="#skills">Skills</a></li>
                            <li><a className="waves-effect waves-light" href="#projects">Projects</a></li>
                            <li><a className="waves-effect waves-light" href="#education">Education</a></li>
                            <li><a className="waves-effect waves-light" href="#certificates">Certificates</a></li>
                            <li><a className="waves-effect waves-light" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>   
        </div>
    );
}

export default NavBar;
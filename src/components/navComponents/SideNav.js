import React from 'react';

// Components
import NavItem from './NavItem';

const SideNav = () => {
    return (
        <ul id="mobile-nav" className="sidenav collection with-header center">
            
            <NavItem 
                liTagClasses = "collection-header "
                aTagClasses = "teal white-text"
                link = "#home"
                content = {
                    <div>
                        <h3>Andre Boothe</h3>
                        <span>Front End Developer</span>
                    </div>
                }
                icon="hide-on-med-and-down"
            />

            <NavItem 
                liTagClasses = "collection-item waves-effect waves-teal"
                aTagClasses = "teal-text"
                link = "#about"
                content = {<p>About</p>}
                icon = "fas fa-user fa-2x  teal-text"
            />

            <NavItem 
                liTagClasses = "collection-item waves-effect waves-green"
                aTagClasses = "green-text"
                link = "#skills"
                content = {<p>Skills</p>}
                icon = "fas fa-chart-bar fa-2x green-text"
            />
            
            <NavItem 
                liTagClasses = "collection-item waves-effect waves-red"
                aTagClasses = "red-text"
                link = "#projects"
                content = {<p>Projects</p>}
                icon = "fas fa-project-diagram fa-2x red-text"
            />     

            <NavItem 
                liTagClasses = "collection-item waves-effect waves-orange"
                aTagClasses = "orange-text"
                link = "#education"
                content = {<p>Education</p>}
                icon = "fas fa-graduation-cap fa-2x orange-text"
            /> 

            <NavItem 
                liTagClasses = "collection-item waves-effect waves-blue"
                aTagClasses = "blue-text text-darken-1"
                link = "#certificates"
                content = {<p>Certificates</p>}
                icon = "fas fa-certificate fa-2x blue-text"
            />

            <NavItem 
                liTagClasses = "collection-item waves-effect waves-purple"
                aTagClasses = "purple-text"
                link = "#contact"
                content = {<p>Contact</p>}
                icon = "fas fa-envelope fa-2x purple-text"
            />
        </ul>

    );
}

export default SideNav;
import React from 'react';

const NavItem = ({liTagClasses, aTagClasses, icon, content, link }) => {

    return (

        <li className={liTagClasses}>
            <a className={aTagClasses} href={link}>
                <i className={icon}></i>
                {content}
            </a>
        </li>
    );
}

export default  NavItem;
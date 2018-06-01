import React from 'react';

const EduCard = ({aTagLink, title, subTitle, info}) => {

    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <a href={aTagLink}
                    target="_blank" rel="noopener noreferrer">
                        <span className="card-title hoverline">{title}</span>
                    </a>
                    <p className="sub-title">{subTitle}</p>

                    <ul className="collection">
                        <li><p className="collection-item ">{info}</p></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default EduCard;
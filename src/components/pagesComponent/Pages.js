import React from 'react';

// Components
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const Pages = () => {

    return (
        <section className="section">
            <LandingPage />
            <AboutPage />
            <ContactPage />
        </section>
        
    );
}

export default Pages;

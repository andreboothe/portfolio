import React from 'react';

// Components
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';
import SkillPage from './SkillPage';

const Pages = () => {

    return (
        <section className="section">
            <LandingPage />
            <AboutPage />
            <EducationPage />
            <SkillPage />
            <ContactPage />
        </section>
        
    );
}

export default Pages;

import React from 'react';

// Components
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';
import SkillPage from './SkillPage';
import CertificatePage from './CertificatePage';

const Pages = () => {

    return (
        <section className="section">
            <LandingPage />
            <AboutPage />
            <SkillPage />
            <EducationPage />
            <CertificatePage />
            <ContactPage />
        </section>
        
    );
}

export default Pages;

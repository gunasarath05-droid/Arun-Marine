import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import PartnersSection from '../components/home/PartnersSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedYachts from '../components/home/FeaturedYachts';
import StatsSection from '../components/home/StatsSection';
import FeaturedArticles from '../components/home/FeaturedArticles';
import CTA from '../components/home/CTA';

const Home = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Hero />
            <AboutSection />
            <FeaturedYachts />
            <PartnersSection />
            <ServicesSection />
            <StatsSection />
            <FeaturedArticles />
            <CTA />
        </div>
    );
};

export default Home;

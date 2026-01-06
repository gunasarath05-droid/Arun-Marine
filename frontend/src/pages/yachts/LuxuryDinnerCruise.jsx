import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/IMG-20250623-WA0146-890x664.jpg';

const LuxuryDinnerCruisePage = () => {
    return (
        <YachtLayout
            name="Luxury Dinner Cruise 124ft"
            tagline="Oceanic Grandeur & Dining"
            price="1500 AED"
            per="/ hour"
            capacity="300 PAX"
            cabins="4"
            length="124ft"
            departure="AL SEEF"
            featuredImage={yachtImg}
            description={
                <>
                    <p>Redefine your dining experience on the water with our massive 124ft Luxury Dinner Cruise. This floating palace is specifically designed for high-capacity events, weddings, and corporate galas, offering three tiers of unparalleled deck space and climate-controlled comfort.</p>
                    <p>With a capacity to host up to 300 guests, the vessel features dual grand ballrooms, panoramic glass windows, and a state-of-the-art buffet area. Whether you're cruising through Al Seef or the modern Dubai Water Canal, this yacht provides a stable and majestic platform for the city's most prestigious gatherings.</p>
                </>
            }
            nextLink="/yacht/bu-mubarak"
            nextName="BU MUBARAK 85ft"
            prevLink="/yacht/regal-package"
            prevName="REGAL Package 33ft"
        />
    );
};

export default LuxuryDinnerCruisePage;

import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/WhatsApp-Image-2025-06-30-at-14-06-38-1-890x664.jpeg';

const BuMubarakPage = () => {
    return (
        <YachtLayout
            name="BU MUBARAK 85ft"
            tagline="Majestic Maritime Elegance"
            price="1200 AED"
            per="/ hour"
            capacity="41 PAX"
            cabins="3"
            length="85ft"
            departure="Dubai Marina"
            featuredImage={yachtImg}
            description={
                <>
                    <p>Step aboard the Bu Mubarak, a luxurious yacht designed to provide unforgettable moments on the waters of Dubai and beyond. Combining elegance, comfort, and performance, this yacht is ideal for family gatherings, private parties, corporate events, or serene cruising experiences.</p>
                    <p>The Bu Mubarak features a spacious deck with ample seating, perfect for relaxing under the sun or enjoying the stunning sea views. Its beautifully designed interiors include comfortable lounges, air-conditioned cabins, and a modern kitchen equipped for onboard dining. With advanced safety measures and a professional crew dedicated to your service, your journey will be both secure and relaxing.</p>
                </>
            }
            nextLink="/yacht/mahboob"
            nextName="MAHBOOB 78ft"
            prevLink="/yacht/luxury-dinner-cruise"
            prevName="Luxury Dinner Cruise 124ft"
        />
    );
};

export default BuMubarakPage;

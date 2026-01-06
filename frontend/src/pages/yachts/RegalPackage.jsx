import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/p10-1.jpg';

const RegalPackagePage = () => {
    return (
        <YachtLayout
            name="REGAL Package 33ft"
            tagline="Modern Leisure Cruiser"
            price="600 AED"
            per="/ hour"
            capacity="8 PAX"
            cabins="1"
            length="33ft"
            departure="Marina Harbour"
            featuredImage={yachtImg}
            description={
                <>
                    <p>The Regal 33ft combines modern leisure design with exceptional handling. It's an open-format cruiser that maximizes sun space and social areas, making it a favorite for afternoon coastal tours and birthday celebrations.</p>
                    <p>Equipped with a modern sound system and comfortable lounging pads, the Regal offers a fun and active environment. Its shallow draft allows it to get closer to the shore, perfect for those who want to experience the crystal clear waters of Dubai up close.</p>
                </>
            }
            nextLink="/yacht/luxury-dinner-cruise"
            nextName="Luxury Dinner Cruise 124ft"
            prevLink="/yacht/nora-package"
            prevName="NORA Package 33ft"
        />
    );
};

export default RegalPackagePage;

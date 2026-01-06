import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/IMG-20250707-WA0038-890x664.jpg';

const MahboobPage = () => {
    return (
        <YachtLayout
            name="MAHBOOB 78ft"
            tagline="Private Nautical Retreat"
            price="950 AED"
            per="/ hour"
            capacity="25 PAX"
            cabins="3"
            length="78ft"
            departure="Dubai Harbour"
            featuredImage={yachtImg}
            description={
                <>
                    <p>The Mahboob 78ft is the epitome of private maritime luxury, designed for those who appreciate the finer things in life. Perfect for intimate gatherings of up to 25 guests, this vessel offers a sophisticated balance of indoor comfort and outdoor leisure space.</p>
                    <p>Featuring a sleek profile and exceptional stability, the Mahboob is a favorite for sunset cruises and family explorations. The yacht is equipped with top-tier navigation technology and an attentive crew to ensure every moment on the Dubai Harbour waters is perfect.</p>
                </>
            }
            nextLink="/yacht/mrg-package"
            nextName="MRG Package 82ft"
            prevLink="/yacht/bu-mubarak"
            prevName="BU MUBARAK 85ft"
        />
    );
};

export default MahboobPage;

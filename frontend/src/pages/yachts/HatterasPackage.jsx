import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/CR6_8643.jpg';

const HatterasPackagePage = () => {
    return (
        <YachtLayout
            name="HATTERAS 64ft"
            tagline="Classic Performance & Style"
            price="1100 AED"
            per="/ hour"
            capacity="22 PAX"
            cabins="2"
            length="64ft"
            departure="Marina Harbour"
            featuredImage={yachtImg}
            description={
                <>
                    <p>Experience the legendary performance of the Hatteras 64ft. Known for its robust engineering and classic marine lines, this yacht provides a stable and powerful platform for exploring the Arabian Gulf in total comfort.</p>
                    <p>The interior is crafted with rich wood finishes and plush seating, creating an atmosphere of timeless luxury. With a capacity of 22 guests, it's the ideal size for families or small groups who want a private, high-end experience on the water.</p>
                </>
            }
            nextLink="/yacht/nora-package"
            nextName="NORA Package 33ft"
            prevLink="/yacht/mrg-package"
            prevName="MRG Package 82ft"
        />
    );
};

export default HatterasPackagePage;

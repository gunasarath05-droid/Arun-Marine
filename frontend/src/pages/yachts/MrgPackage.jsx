import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/WhatsApp-Image-2025-07-16-at-18-42-01_cc5e08ed-r8zewwyzbsfxy.jpg';

const MrgPackagePage = () => {
    return (
        <YachtLayout
            name="MRG Package 82ft"
            tagline="Grand Maritime Journey"
            price="1350 AED"
            per="/ hour"
            capacity="35 PAX"
            cabins="2"
            length="82ft"
            departure="Marina Harbour"
            featuredImage={yachtImg}
            description={
                <>
                    <p>The MRG Package 82ft offers a grand maritime experience, combining extensive deck space with elegant interior styling. This vessel is a premier choice for those looking to host medium-sized groups in a setting that exudes sophistication and luxury.</p>
                    <p>Designed for both performance and leisure, the MRG features 2 spacious cabins and a wide-open flybridge that provides breathtaking views of the Dubai coastline. Whether it's a corporate event or a private celebration, the MRG ensures every guest feels the prestige of the voyage.</p>
                </>
            }
            nextLink="/yacht/hatteras-package"
            nextName="HATTERAS 64ft"
            prevLink="/yacht/mahboob"
            prevName="MAHBOOB 78ft"
        />
    );
};

export default MrgPackagePage;

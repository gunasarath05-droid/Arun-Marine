import React from 'react';
import YachtLayout from '../../components/yachts/YachtLayout';
import yachtImg from '../../assets/images/1000604809-1-rcuy3bg6ki5c90ybp7arxmcra9m2lpzt5fho6egrfc.jpg';

const NoraPackagePage = () => {
    return (
        <YachtLayout
            name="NORA Package 33ft"
            tagline="Swift Coastal Explorer"
            price="600 AED"
            per="/ hour"
            capacity="8 PAX"
            cabins="1"
            length="33ft"
            departure="Marina Harbour"
            featuredImage={yachtImg}
            description={
                <>
                    <p>The NORA 33ft is the perfect vessel for those who love speed and direct contact with the sea. This swift coastal explorer is designed for quick trips, private fishing excursions, or intimate sun-seeking adventures with your closest group.</p>
                    <p>Don't be fooled by its size; the NORA offers a premium feel with high-quality finishes and an efficient layout. It's the most versatile choice in our fleet for navigating the smaller canals and reaching hidden spots along the coast quickly and in style.</p>
                </>
            }
            nextLink="/yacht/regal-package"
            nextName="REGAL Package 33ft"
            prevLink="/yacht/hatteras-package"
            prevName="HATTERAS 64ft"
        />
    );
};

export default NoraPackagePage;

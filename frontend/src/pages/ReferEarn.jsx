import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';

// Images
import heroBg from '../assets/images/cc-e1740379326241.jpg'; // Use a generic yacht image
import flyerImg from '../assets/images/refer-earn-722x1024.jpg'; // The Refer & Earn flyer
import ctaBg from '../assets/images/5023-1.jpg'; // The CTA background image

const ReferEarn = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PageHero title="Refer & Earn" bgImage={heroBg} />

            <section className="pt-12 md:pt-16 lg:pt-20">
                <div className="container mx-auto px-6 text-center">
                    <p className="max-w-3xl mx-auto text-gray-500 mb-8 md:mb-12 leading-relaxed text-base md:text-lg">
                        Earn Rewards by Referring Friends! Share the experience of our exceptional boat registration, technical services, and yacht rentals with your network. For every successful referral, you'll earn credits towards our services, making it easier and more rewarding for you to enjoy our offerings. The more you refer, the more you earn – it's that simple!
                    </p>

                    <div className="flex justify-center mb-12">
                        <div className="max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-white">
                            <img src={flyerImg} alt="Refer and Earn Flyer" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-widest text-xs">
                            <Share2 className="w-4 h-4" />
                            Start Referring Now
                        </Link>
                    </div>
                </div>
                <div className="h-[300px] md:h-[450px] lg:h-[600px] w-full mt-8 md:mt-12">
                    <img
                        src={ctaBg}
                        alt="Marine Services"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </section>
        </div>
    );
};

export default ReferEarn;
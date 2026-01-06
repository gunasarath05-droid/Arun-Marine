import React from 'react';
import { Link } from 'react-router-dom';
// Using a yacht image for the background, assuming reusing hero or another asset
import ctaBg from '../../assets/images/CR6_2519-Edited.jpg';

const CTA = () => {
    return (
        <section className="relative py-32 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={ctaBg}
                    alt="Yacht Charter"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply"></div>
                
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Set Sail</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                    Ready to Set Sail? <br />
                    <span className="italic font-medium">Charter Your Dream Yacht Today!</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link
                        to="/about"
                        className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-12 rounded shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-widest text-xs"
                    >
                       Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;

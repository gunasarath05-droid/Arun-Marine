import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/images/CR6_2519-Edited.jpg';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-secondary overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Luxury Yacht in Dubai"
                    className="w-full h-full object-cover"
                />
                {/* Gradient from top to bottom (light blue tint to transparent to darker bottom) to match design */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-black/40"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto mt-16">
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 leading-tight drop-shadow-lg tracking-tight">
                    Premium Yacht Services <br />
                    <span className="italic">& Rentals</span>
                </h1>

                <p className="text-sm md:text-lg mb-8 max-w-xl mx-auto font-medium tracking-widest uppercase opacity-90 drop-shadow-md">
                    Navigate Legally, Sail Confidently.<br />
                    <span className="text-[10px] md:text-xs opacity-80 mt-2 block">Secure your vessel with hassle-free legal solutions</span>
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <Link
                        to="/contact"
                        className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-12 rounded shadow-[0_10px_20px_rgba(255,107,0,0.3)] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs md:text-sm"
                    >
                        Book Now
                    </Link>
                </div>
            </div>

            {/* Decorative bottom fade if needed */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default Hero;

import React from 'react';

const PageHero = ({ title, bgImage, className = "" }) => {
    return (
        <section className={`relative h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold mb-4 drop-shadow-xl">{title}</h1>
                <div className="w-16 md:w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
        </section>
    );
};

export default PageHero;

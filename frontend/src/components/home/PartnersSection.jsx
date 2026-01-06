import React from 'react';
import tasneefLogo from '../../assets/images/Tasneef_Logo-1.png';
import traLogo from '../../assets/images/TRA_Logo-1.png';
import pcfcLogo from '../../assets/images/PCFC-Customs-New-logo-final-1024x467.jpg';
import dmcaLogo from '../../assets/images/DMCA_Logo-1.png';
import meiLogo from '../../assets/images/full-aspx_-1536x864.jpg';

const PartnersSection = () => {
    const logos = [
        { src: tasneefLogo, alt: "Tasneef" },
        { src: traLogo, alt: "TRA" },
        { src: pcfcLogo, alt: "PCFC Customs" },
        { src: dmcaLogo, alt: "DMCA" },
        { src: meiLogo, alt: "MEI" },
    ];

    return (
        <section className="py-20 bg-white relative">
            {/* Top border accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

            <div className="container mx-auto px-6">
                {/* Minimalist Header */}
                <div className="text-center mb-20">
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.3em] mb-6">
                        Registry Partners
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary max-w-3xl mx-auto leading-relaxed">
                        Authorized by UAE's Leading Maritime Authorities
                    </h2>
                </div>

                {/* Logos with dividers */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Hover indicator line */}
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></div>

                                <div className="relative px-4 py-6 flex items-center justify-center min-w-[140px] min-h-[100px]">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-16 md:max-h-20 w-auto object-contain filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;

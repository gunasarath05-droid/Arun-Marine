import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../../assets/images/CR6_5531-Edited-1-scaled-rcuy44l5wmrm15tlnzceaeh9en26le0dd4u.jpg';
import secondaryImage from '../../assets/images/3139-1.jpg';

const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Text Section (Left) */}
                    <div className="md:w-1/2 relative z-10">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
                            The Best Marine <br />
                            Registration services <br />
                            <span className="text-primary italic">in UAE</span>
                        </h2>

                        <div className="w-3/4 space-y-6 text-gray-500 text-lg leading-relaxed font-light text-justify">
                            <p>
                                We are specialized in all kinds of boat registration services.
                                Our expert team of naval architects and marine consultants ensures your vessel
                                creates a safe marine environment by strictly adhering to maritime regulations.
                            </p>
                            <p>
                                From basic design and stability analysis to fire and safety inspections, we provide
                                comprehensive engineering and legal solutions for your marine needs.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                to="/about"
                                className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-10 rounded shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-wider text-xs"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Images Section (Right) */}
                    <div className="md:w-50 h-[800px] relative">
                        {/* Main large image */}
                        <div className="relative z-10 rounded-md overflow-hidden shadow-2xl">
                            <img
                                src={mainImage}
                                alt="Marine Services"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Secondary overlapping image (simulating the layered look) */}
                        <div className="absolute -bottom-16 -left-48 z-20 w-3/4 rounded-md overflow-hidden shadow-2xl border-2 border-white hidden md:block">
                            <img
                                src={secondaryImage}
                                alt="Detail"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Decorative background shape */}
                        <div className="absolute -top-10 -right-10 w-[500px] h-[500px] bg-gray-50 rounded-md -z-10 transform rotate-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

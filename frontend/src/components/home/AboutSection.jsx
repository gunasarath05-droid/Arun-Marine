import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Shield, Users } from 'lucide-react';
import mainImage from '../../assets/images/CR6_5531-Edited-1-scaled-rcuy44l5wmrm15tlnzceaeh9en26le0dd4u.jpg';
import secondaryImage from '../../assets/images/3139-1.jpg';

const AboutSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 transform skew-x-12 translate-x-1/2 hidden md:block"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Images Section (Left on Desktop) */}
                    <div className="lg:w-1/2 relative order-2 lg:order-1" data-aos="fade-right">
                        <div className="relative group">
                            {/* Main large image */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-[1.02]">
                                <img
                                    src={mainImage}
                                    alt="Marine Services"
                                    className="w-full h-[500px] lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Secondary overlapping image */}
                            <div className="absolute -bottom-12 -right-12 z-20 w-1/2 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-8 border-white hidden md:block transform transition-transform duration-700 hover:-translate-y-2">
                                <img
                                    src={secondaryImage}
                                    alt="Detail"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>

                            {/* Floating Experience Badge */}
                            <div className="absolute -top-8 -left-8 z-30 bg-primary text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center animate-bounce-slow">
                                <span className="text-4xl font-bold font-serif leading-none">2022</span>
                                <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Since</span>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 -z-10 opacity-20 hidden lg:block">
                                <svg width="100%" height="100%" viewBox="0 0 100 100">
                                    <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1.5" fill="#FF6B00" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#dotPattern)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Text Section (Right on Desktop) */}
                    <div className="lg:w-1/2 relative z-10 order-1 lg:order-2" data-aos="fade-left">
                        <div className="mb-6 flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-gray-600 font-semibold uppercase tracking-[0.3em] text-md">Who we are</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-secondary mb-8 leading-[1.1]" data-aos="fade-up" data-aos-delay="300">
                            Crafting Elite <br />
                            <span className="text-primary italic relative">
                                Marine
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                                    <path d="M0 5C20 5 30 2 50 2C70 2 80 5 100 5" stroke="#FF6B00" strokeWidth="2" fill="none" opacity="0.3" />
                                </svg>
                            </span> <br />
                            Experiences
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="400">
                            <p className="font-medium text-secondary/80">
                                Arun Marine is UAE's premier destination for specialized boat registration and marine consulting.
                            </p>
                            <p className="text-base text-gray-500">
                                “We are authorized service agents for the Emirates Classification Society (TASNEEF), offering comprehensive vessel inspections and surveys led by our expert in-house naval architects. We ensure compliance with all local authority requirements for vessels under the new G.C.C. code, including the mandatory technical specifications needed to complete the UAE’s updated registration process.”
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12" data-aos="fade-up" data-aos-delay="500">
                            {[
                                { icon: <Shield size={18} />, text: 'Authorized Registry' },
                                { icon: <Award size={18} />, text: 'Certified Architects' },
                                { icon: <Users size={18} />, text: 'Expert Legal Advice' },
                                { icon: <CheckCircle2 size={18} />, text: 'Global Standards' }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 group">
                                    <div className="text-primary group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <span className="text-sm font-bold text-secondary uppercase tracking-wider">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up" data-aos-delay="600">
                            <Link
                                to="/about"
                                className="group relative bg-secondary text-white font-bold py-5 px-12 rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 text-xs uppercase tracking-widest"
                            >
                                <span className="relative z-10">Learn Our Story</span>
                                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

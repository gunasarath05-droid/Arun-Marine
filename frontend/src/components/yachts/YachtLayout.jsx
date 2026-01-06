import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Ship,
    Anchor,
    Wind,
    Clock,
    MapPin,
    CheckCircle2,
    Phone,
    MessageCircle,
    ArrowRight,
    Camera,
    Info
} from 'lucide-react';
import PageHero from '../PageHero';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/images/who_we_are_bg.jpg';

const YachtLayout = ({
    name,
    tagline,
    price,
    per = "/ hour",
    capacity,
    cabins,
    length,
    departure,
    featuredImage,
    gallery = [],
    description,
    amenities = [],
    nextLink,
    nextName,
    prevLink,
    prevName
}) => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <PageHero title={name} bgImage={heroBg} className="h-[45vh]" />

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left: Main Content */}
                    <div className="lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[1px] w-12 bg-primary"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{tagline || "Elite Fleet"}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-10 leading-tight">
                                {name}
                            </h1>
                        </motion.div>

                        {/* Image Gallery Mockup */}
                        <motion.div
                            className="grid grid-cols-4 gap-4 mb-16"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="col-span-4 rounded-sm overflow-hidden h-[500px] shadow-2xl relative group">
                                <img src={featuredImage} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-sm">
                                    <div className="flex items-center gap-3 text-white">
                                        <Camera className="w-5 h-5" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Main Deck View</span>
                                    </div>
                                </div>
                            </div>
                            {/* Placeholder gallery items if not provided */}
                            {(gallery.length > 0 ? gallery : [1, 2, 3, 4]).slice(0, 4).map((_, idx) => (
                                <div key={idx} className="col-span-1 rounded-sm overflow-hidden h-32 bg-gray-100 shadow-lg cursor-pointer hover:opacity-80 transition-opacity">
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <Camera className="w-6 h-6" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100 mb-16">
                            <div className="flex flex-col items-center text-center group">
                                <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-serif font-bold text-secondary">{capacity}</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Capacity</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <Ship className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-serif font-bold text-secondary">{cabins}</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cabins</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <Anchor className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-serif font-bold text-secondary">{length}</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Length</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <MapPin className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <span className="text-2xl font-serif font-bold text-secondary truncate w-full px-2">{departure}</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Departure</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <Info className="w-5 h-5 text-primary" />
                                <h3 className="text-2xl font-serif font-bold text-secondary m-0">About this Experience</h3>
                            </div>
                            <div className="space-y-6">
                                {description || "Experience unprecedented luxury on the Arabian Gulf."}
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="bg-[#f8f7f5] p-12 rounded-sm border-l-8 border-primary">
                            <h3 className="text-2xl font-serif font-bold text-secondary mb-8">Onboard Amenities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                                {(amenities.length > 0 ? amenities : [
                                    "Professional Crew",
                                    "Air Conditioned Cabins",
                                    "State-of-the-art Sound System",
                                    "Refreshments & Ice",
                                    "Fishing Equipment (On request)",
                                    "Swimming Platform",
                                    "Sun Deck with Seating",
                                    "Onboard Kitchen"
                                ]).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Footer */}
                        {(nextLink || prevLink) && (
                            <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                                {prevLink ? (
                                    <Link to={prevLink} className="group flex flex-col items-start gap-2">
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            <ArrowRight className="w-3 h-3 rotate-180" />
                                            Previous Experience
                                        </div>
                                        <span className="text-xl font-serif font-bold text-secondary group-hover:text-primary transition-colors">{prevName}</span>
                                    </Link>
                                ) : <div />}

                                {nextLink ? (
                                    <Link to={nextLink} className="group flex flex-col items-end gap-2 text-right">
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            Next Experience
                                            <ArrowRight className="w-3 h-3" />
                                        </div>
                                        <span className="text-xl font-serif font-bold text-secondary group-hover:text-primary transition-colors">{nextName}</span>
                                    </Link>
                                ) : <div />}
                            </div>
                        )}
                    </div>

                    {/* Right: Sidebar Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32 space-y-8">
                            {/* Booking Card */}
                            <div className="bg-secondary p-10 rounded-sm shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 opacity-80">Standard Pricing</p>
                                <div className="flex items-baseline gap-2 text-white mb-8 border-b border-white/10 pb-8">
                                    <span className="text-5xl font-serif font-bold">{price}</span>
                                    <span className="text-sm opacity-60 font-medium">{per}</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center justify-between text-xs text-white/70 font-bold uppercase tracking-widest">
                                        <span>Duration</span>
                                        <span className="text-white">Minimum 2 Hours</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs text-white/70 font-bold uppercase tracking-widest">
                                        <span>Includes</span>
                                        <span className="text-white">Fuel & Crew</span>
                                    </div>
                                </div>

                                <a
                                    href="https://wa.me/971556595096"
                                    target="_blank"
                                    className="block w-full bg-primary hover:bg-[#e65c00] text-white font-bold py-5 px-8 text-center rounded-sm transition-all uppercase tracking-[0.2em] text-xs shadow-xl hover:translate-y-[-2px]"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Request Availability
                                    </div>
                                </a>

                                <p className="mt-6 text-[10px] text-center text-white/40 font-bold uppercase tracking-widest">No hidden charges • Expert assistance</p>
                            </div>

                            {/* Trust Markers */}
                            <div className="bg-white border border-gray-100 p-8 rounded-sm">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
                                    <Anchor className="w-4 h-4 text-primary" />
                                    Why Book This Yacht?
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">Top-rated professional crew with years of navigation excellence.</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">Impeccably maintained vessel ensuring safety and luxury.</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Box */}
                            <div className="p-8 border-2 border-dashed border-gray-200 text-center rounded-sm group hover:border-primary transition-colors">
                                <p className="text-sm font-serif font-bold text-secondary mb-4 italic">Prefer a private consultation?</p>
                                <div className="flex items-center justify-center gap-4">
                                    <a href="tel:+971556595096" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </a>
                                    <a href="https://wa.me/971556595096" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all shadow-sm">
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YachtLayout;

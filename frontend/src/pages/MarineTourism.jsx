import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Users, Ship, Anchor, MapPin, Search, Filter, ArrowRight } from 'lucide-react';

// Images
import heroBg from '../assets/images/who_we_are_bg.jpg';
import yacht1 from '../assets/images/IMG-20250623-WA0146-890x664.jpg';
import yacht2 from '../assets/images/WhatsApp-Image-2025-06-30-at-14-06-38-1-890x664.jpeg';
import yacht3 from '../assets/images/IMG-20250707-WA0038-890x664.jpg';
import yacht4 from '../assets/images/WhatsApp-Image-2025-07-16-at-18-42-01_cc5e08ed-r8zewwyzbsfxy.jpg';
import yacht5 from '../assets/images/CR6_8643.jpg';
import yacht6 from '../assets/images/1000604809-1-rcuy3bg6ki5c90ybp7arxmcra9m2lpzt5fho6egrfc.jpg';
import yacht7 from '../assets/images/p10-1.jpg';

const MarineTourism = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeFilter, setActiveFilter] = useState('All');

    const yachts = [
        {
            id: 1,
            name: "Luxury Dinner Cruise 124ft",
            capacity: "300 PAX",
            cabins: "4",
            departure: "AL SEEF",
            price: "1500 AED",
            category: "Yachts",
            image: yacht1,
            link: "/yacht/luxury-dinner-cruise"
        },
        {
            id: 2,
            name: "BU MUBARAK 85ft",
            capacity: "41 PAX",
            cabins: "3",
            departure: "Dubai Marina",
            price: "1200 AED",
            category: "Yachts",
            image: yacht2,
            link: "/yacht/bu-mubarak"
        },
        {
            id: 3,
            name: "MAHBOOB 78ft",
            capacity: "25 PAX",
            cabins: "3",
            departure: "Dubai Harbour",
            price: "950 AED",
            category: "Yachts",
            image: yacht3,
            link: "/yacht/mahboob"
        },
        {
            id: 4,
            name: "MRG Package 82ft",
            capacity: "35 PAX",
            cabins: "2",
            departure: "Marina Harbour",
            price: "1350 AED",
            category: "Package",
            image: yacht4,
            link: "/yacht/mrg-package"
        },
        {
            id: 5,
            name: "HATTERAS 64ft",
            capacity: "22 PAX",
            cabins: "2",
            departure: "Marina Harbour",
            price: "1100 AED",
            category: "Package",
            image: yacht5,
            link: "/yacht/hatteras-package"
        },
        {
            id: 6,
            name: "NORA Package 33ft",
            capacity: "8 PAX",
            cabins: "1",
            departure: "Marina Harbour",
            price: "600 AED",
            category: "Package",
            image: yacht6,
            link: "/yacht/nora-package"
        },
        {
            id: 7,
            name: "REGAL Package 33ft",
            capacity: "8 PAX",
            cabins: "1",
            departure: "Marina Harbour",
            price: "600 AED",
            category: "Package",
            image: yacht7,
            link: "/yacht/regal-package"
        }
    ];

    const filters = ['All', 'Yachts', 'Package'];
    const filteredYachts = activeFilter === 'All'
        ? yachts
        : yachts.filter(y => y.category === activeFilter);

    return (
        <div className="bg-white min-h-screen">
            <PageHero
                title="Marine Tourism"
                bgImage={heroBg}
                className="h-[45vh]"
            />

            <div className="container mx-auto px-6 py-24">
                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" data-aos="fade-up">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-12 bg-primary"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Elite Sea Experiences</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-6 leading-tight">
                            Explore Our Exclusive <br /> Yacht Collection
                        </h2>
                        <p className="text-gray-500 font-medium leading-relaxed max-w-lg">
                            From intimate cruises to grand gala events on the water, discover the perfect vessel for your next Dubai adventure.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 bg-[#f8f7f5] p-2 rounded-sm border border-gray-100">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${activeFilter === filter
                                    ? 'bg-secondary text-white shadow-lg'
                                    : 'text-gray-400 hover:text-secondary'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Yacht Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredYachts.map((yacht, idx) => (
                            <motion.div
                                key={yacht.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-sm overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col group hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
                            >
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={yacht.image}
                                        alt={yacht.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-0 right-0 bg-primary text-white font-bold py-3 px-6 text-sm rounded-bl-sm">
                                        <span className="text-lg">{yacht.price}</span>
                                        <span className="text-[10px] font-normal opacity-80"> / hr</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm px-4 py-1 text-[9px] font-bold uppercase tracking-widest text-secondary rounded-full border border-white/20">
                                            {yacht.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-10 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-8 group-hover:text-primary transition-colors line-clamp-1">
                                        {yacht.name}
                                    </h3>

                                    <div className="grid grid-cols-3 gap-4 border-y border-gray-50 py-6 mb-8">
                                        <div className="text-center">
                                            <p className="text-secondary font-bold text-sm mb-1">{yacht.capacity}</p>
                                            <p className="text-[9px] font-bold uppercase tracking-tighter text-gray-400">Capacity</p>
                                        </div>
                                        <div className="text-center border-x border-gray-100">
                                            <p className="text-secondary font-bold text-sm mb-1">{yacht.cabins}</p>
                                            <p className="text-[9px] font-bold uppercase tracking-tighter text-gray-400">Cabins</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-secondary font-bold text-sm mb-1 truncate px-1">{yacht.departure}</p>
                                            <p className="text-[9px] font-bold uppercase tracking-tighter text-gray-400">Start</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <Link
                                            to={yacht.link}
                                            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group/btn transition-all no-underline"
                                        >
                                            Explore Features
                                            <span className="w-8 h-[1px] bg-secondary group-hover/btn:w-12 group-hover/btn:bg-primary transition-all"></span>
                                            <ArrowRight className="w-3 h-3 group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results Fallback */}
                {filteredYachts.length === 0 && (
                    <div className="text-center py-20 grayscale opacity-20">
                        <Anchor className="w-20 h-20 mx-auto mb-6" />
                        <p className="text-2xl font-serif font-medium">No matches found for this category</p>
                    </div>
                )}
            </div>

            {/* Bottom Section - Charter Support */}
            <div className="bg-secondary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[200px] -mr-[400px] -mt-[400px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center" data-aos="zoom-in">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Ready to Sail the City of Gold?</h3>
                    <p className="text-white/60 max-w-2xl mx-auto mb-12 text-lg font-medium leading-relaxed italic">
                        "Our dedicated concierge team is available 24/7 to help you plan the perfect nautical experience Tailored to your specific needs."
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="bg-primary hover:bg-[#e65c00] text-white font-bold py-5 px-12 rounded-sm transition-all uppercase tracking-widest text-xs shadow-2xl">
                            Request Custom Quote
                        </Link>
                        <a href="https://wa.me/971556595096" target="_blank" className="flex items-center gap-4 text-white hover:text-primary transition-colors uppercase tracking-[0.2em] font-bold text-[10px]">
                            <Ship className="w-5 h-5" />
                            Direct WhatsApp Assist
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarineTourism;

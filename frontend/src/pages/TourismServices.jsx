import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Palmtree, Sunset, Waves, GlassWater, Anchor, Search, Ruler, BedDouble, Users } from 'lucide-react';

// Images
import heroBg from '../assets/images/CR6_8643.jpg'; // Tourism Hero
import yachtImg from '../assets/images/bg-yacht.png'; // Generic Yacht Image

const TourismServices = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Data extracted from reference site
    const fleet = [
        { name: "MRG", length: "82 Ft", cabins: "2", capacity: "35 PAX", departure: "Marina Harbour", type: "Luxury Yacht" },
        { name: "HATTERAS", length: "64 Ft", cabins: "02", capacity: "22 PAX", departure: "Marina Harbour", type: "Luxury Yacht" },
        { name: "MAHBOOB", length: "78 Ft", cabins: "3", capacity: "25 PAX", departure: "Dubai Harbour", type: "Luxury Yacht" },
        { name: "BU MUBARAK", length: "85 Ft", cabins: "2", capacity: "41 PAX", departure: "Dubai Marina", type: "Luxury Yacht" },
        { name: "NORA", length: "33 Ft", cabins: "01", capacity: "08 PAX", departure: "Marina Harbour", type: "Standard Boat" },
        { name: "REGAL", length: "33 Ft", cabins: "01", capacity: "8 PAX", departure: "Marina Harbour", type: "Standard Boat" },
    ];

    return (
        <div className="bg-white">
            <PageHero title="Marine Tourism" bgImage={heroBg} className="h-[40vh]" />

            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Main Content (Left, 3/4 width) */}
                    <div className="lg:w-3/4" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6 leading-tight">
                            Explore Dubai's Waters <br />
                            <span className="italic text-secondary">In Style</span>
                        </h2>

                        <blockquote className="text-gray-600 font-medium italic mb-10 border-l-4 border-primary pl-6 py-4 bg-gray-50 text-sm leading-relaxed">
                            "Whether you're seeking a serene sunset cruise, an adrenaline-fueled jet ski adventure, or a luxurious private yacht party, we craft unforgettable marine experiences tailored to your desires."
                        </blockquote>

                        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
                            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                                <img src={yachtImg} alt="Luxury Yacht" className="w-full h-auto" />
                            </div>
                            <div className="md:w-1/2">
                                <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Luxury Private Yacht Rentals</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Traditional Dhow Cruises</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Jet Ski & Water Sports</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Sunset Dinner Cruises</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Corporate Events & Weddings</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Deep Sea Fishing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-16">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Select Your Vessel</p>
                            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">Our Premium <br /> Fleet</h2>

                            {/* Fleet Grid - Matching Registration Design Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {fleet.map((boat, index) => (
                                    <div key={index} className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
                                        <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                            {boat.type.includes('Yacht') ? <Anchor className="w-10 h-10" /> : <Waves className="w-10 h-10" />}
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-secondary mb-2">{boat.name}</h3>
                                        <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                        <p className="text-xs text-gray-500 leading-loose font-medium">
                                            Length: {boat.length} <br />
                                            Cabins: {boat.cabins} <br />
                                            Capacity: {boat.capacity} <br />
                                            Departure: {boat.departure}
                                        </p>
                                        <Link to="/contact" className="inline-block mt-4 text-xs font-bold text-primary hover:text-secondary uppercase tracking-widest border-b border-primary hover:border-secondary pb-1 transition-all">
                                            Book This Vessel
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why Choose Us Section - Matching Registration Design */}
                        <div data-aos="fade-up">
                            <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">Why Cruise With Us?</h2>

                            <div className="bg-[#f8f7f5] p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2 text-sm text-gray-500 space-y-6">
                                    <p className="italic font-medium text-gray-600">Experience the magic of Dubai from the open sea. We promise tailored experiences, luxury vessels, and unforgettable memories.</p>
                                    <p className="test-xs font-bold text-gray-600">Our Promise:</p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Luxury Fleet:</strong> Well-maintained yachts and boats for every occasion.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Expert Crew:</strong> Professional captains and crew to ensure your safety and comfort.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Tailored Packages:</strong> Customized routes, catering, and decorations.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Refreshments Included:</strong> Complimentary drinks to keep you hydrated.</span></li>
                                    </ul>
                                    <Link to="/contact" className="inline-block bg-primary hover:bg-[#e65c00] text-white font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl transition-all uppercase tracking-widest text-xs mt-4">
                                        Book Your Trip
                                    </Link>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <img src={heroBg} alt="Why Choose Us" className="w-full h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right, 1/4 width) - Matching Registration Structure */}
                    <div className="lg:w-1/4 space-y-12 h-fit sticky top-24" data-aos="fade-left">
                        {/* Search Widget */}
                        <div className="bg-white">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Search</h4>
                            <div className="flex relative">
                                <input type="text" className="w-full border border-gray-200 pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-primary bg-gray-50 placeholder-gray-400" placeholder="Search..." />
                                <button className="absolute right-0 top-0 h-full px-4 text-white bg-primary hover:bg-[#e65c00] transition-colors">
                                    <Search className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Our Services Nav */}
                        <div className="">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Services</h4>
                            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
                                <ul className="divide-y divide-gray-100">
                                    <li>
                                        <Link to="/services/registration" className="block p-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">Registration Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/engineering" className="block p-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">Engineering Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/tourism" className="block p-4 text-sm font-bold text-primary bg-gray-50">Marine Tourism</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/maintenance" className="block p-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">Yacht Maintenance</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Recent Posts - Matching Registration Design */}
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 leading-tight">Recent <br /> Posts</h3>
                            <div className="w-12 h-0.5 bg-gray-200 mb-6"></div>
                            <ul className="space-y-4 text-xs font-bold underline decoration-gray-300 underline-offset-4">
                                <li><Link to="#" className="text-secondary hover:text-primary transition-colors">Discover the Luxurious World of Yachting and Marine Tourism in Dubai</Link></li>
                                <li><Link to="#" className="text-secondary hover:text-primary transition-colors">Discover the Luxurious World of Yachting and Marine Tourism in Dubai</Link></li>
                                <li><Link to="#" className="text-secondary hover:text-primary transition-colors">Discover the Luxurious World of Yachting and Marine Tourism in Dubai</Link></li>
                                <li><Link to="#" className="text-secondary hover:text-primary transition-colors">Discover Dubai from the Sea</Link></li>
                                <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors uppercase">EXITING NEWS, DUBAI CAPTAINS!</Link></li>
                            </ul>
                        </div>

                        {/* Recent Comments - Matching Registration Design */}
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-secondary mb-6 leading-tight">Recent <br /> Comments</h3>
                            <div className="w-12 h-0.5 bg-gray-200 mb-6"></div>
                            <ul className="space-y-4 text-xs">
                                <li><span className="text-primary">arun_admin</span> on <Link to="#" className="text-primary hover:text-[#e65c00] underline decoration-primary/30 uppercase font-bold">EXITING NEWS, DUBAI CAPTAINS!</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourismServices;

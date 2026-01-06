
import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Anchor, Settings, Ship, Wrench } from 'lucide-react';
import PartnersSection from '../components/home/PartnersSection';

// Import images (using placeholders or existing assets for now, plan to swap)
import serviceBg from '../assets/images/who_we_are_bg.jpg'; // Assuming this exists or using hero
import regImg from '../assets/images/full-aspx_-1536x864.jpg'; // Placeholder
import engImg from '../assets/images/5023-1.jpg'; // Placeholder
import tourImg from '../assets/images/CR6_8643.jpg'; // Placeholder
import maintImg from '../assets/images/p10-1.jpg'; // Placeholder


const Services = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PageHero title="Our Services" bgImage={serviceBg} />

            <section className="py-12 md:py-16 lg:py-20 text-center container mx-auto px-6">
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Expert Solutions Delivered</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-12 md:mb-16 max-w-4xl mx-auto leading-tight">
                    "Registration, Technical Support, and Rentals Made Easy."
                </h2>

                <div className="space-y-16 md:space-y-20 lg:space-y-24">
                    {/* Service 1: Registration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                        <div className="rounded-xl overflow-hidden shadow-2xl h-[250px] md:h-[350px] lg:h-[400px]">
                            <img src={regImg} alt="Registration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4 md:mb-6">Registration Services</h3>
                            <ul className="space-y-3 mb-8 text-gray-500 text-sm font-medium">
                                <li>• Commercial & Private Boat Registration</li>
                                <li>• Renewal of Registration</li>
                                <li>• Cancellation of Registration</li>
                                <li>• Foreign License Registration</li>
                                <li>• Transfer of Ownership</li>
                                <li>• VHF Application</li>
                                <li>• Seaman's Card Application</li>
                                <li>• Boat Driving License</li>
                            </ul>
                            <Link to="/services/registration" className="bg-primary text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs">
                                See More
                            </Link>
                        </div>
                    </div>

                    {/* Service 2: Engineering */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left md:flex-row-reverse">
                        <div className="md:order-2 rounded-xl overflow-hidden shadow-2xl h-[250px] md:h-[350px] lg:h-[400px]">
                            <img src={engImg} alt="Engineering" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="md:order-1">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4 md:mb-6">Engineering Services</h3>
                            <ul className="space-y-3 mb-8 text-gray-500 text-sm font-medium">
                                <li>• Basic Design</li>
                                <li>• Stability & Performance</li>
                                <li>• General Arrangement, Lines Plan & Tank Capacity Plan</li>
                                <li>• Fire & Safety</li>
                                <li>• Condition & Evaluation</li>
                                <li>• Inspection Surveys</li>
                                <li>• Dry Docking Plan</li>
                                <li>• Owner Representative</li>
                            </ul>
                            <Link to="/services/engineering" className="bg-primary text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs">
                                See More
                            </Link>
                        </div>
                    </div>

                    {/* Service 3: Marine Tourism */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                        <div className="rounded-xl overflow-hidden shadow-2xl h-[250px] md:h-[350px] lg:h-[400px]">
                            <img src={tourImg} alt="Tourism" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4 md:mb-6">Marine Tourism</h3>
                            <ul className="space-y-3 mb-8 text-gray-500 text-sm font-medium">
                                <li>• Traditional Dhow Cruises (Dubai Creek, Al Seef & Marina)</li>
                                <li>• Private Luxury Yahcts (Sunset Cruises, Birthday parties, proposals)</li>
                                <li>• Jet Ski & Jet Car Adventures</li>
                                <li>• Scuba Diving & Water Sports</li>
                                <li>• Event Bookings (Corporate functions, weddings)</li>
                                <li>• Sunset & Dinner Cruises</li>
                            </ul>
                            <Link to="/services/tourism" className="bg-primary text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs">
                                See More
                            </Link>
                        </div>
                    </div>

                    {/* Service 4: Maintenance */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
                        <div className="md:order-2 rounded-xl overflow-hidden shadow-2xl h-[250px] md:h-[350px] lg:h-[400px]">
                            <img src={maintImg} alt="Maintenance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="md:order-1">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4 md:mb-6">Yacht Maintenance</h3>
                            <ul className="space-y-3 mb-8 text-gray-500 text-sm font-medium">
                                <li>• Boat repair services</li>
                                <li>• Yacht engine servicing</li>
                                <li>• Antifouling & hull cleaning</li>
                                <li>• Decking and teak work</li>
                                <li>• Yacht polishing and detailing</li>
                                <li>• Electrical & mechanical inspection</li>
                                <li>• Propeller & shaft alignment</li>
                                <li>• Annual Maintenance</li>
                            </ul>
                            <Link to="/services/maintenance" className="bg-primary text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dark Blue Features Section */}
            <section className="bg-[#0b1c3e] py-16 md:py-20 lg:py-24 text-white relative overflow-hidden">
                {/* Background Map Outline Overlay - subtle */}
                <div
                    className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')` }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header inside the dark section */}
                    <div className="text-center mb-20">
                        <div className="inline-block mb-3">
                            <span className="h-[2px] w-8 bg-primary inline-block align-middle mr-2"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs align-middle">Our Expertise</span>
                            <span className="h-[2px] w-8 bg-primary inline-block align-middle ml-2"></span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">What We Offer</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                        {/* Registration Services */}
                        <Link to="/services/registration" className="group">
                            <div className="text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                                <Anchor size={50} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors text-white">Registration Services</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">Efficient Boat Registration Services and Reliable solutions for all vessel types.</p>

                            <div className="relative h-8 flex items-center overflow-hidden">
                                {/* Initial Arrow */}
                                <div className="absolute left-0 text-white text-2xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                                    →
                                </div>
                                {/* Revealed Read More + Arrow */}
                                <div className="flex items-center text-white text-lg font-bold opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <span>Read More</span>
                                    <span className="ml-2 text-2xl">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Engineering Services */}
                        <Link to="/services/engineering" className="group">
                            <div className="text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                                <Settings size={50} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors text-white">Engineering Services</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">Expert Boat Technical Services, Ensuring smooth Sailing and structural integrity.</p>

                            <div className="relative h-8 flex items-center overflow-hidden">
                                {/* Initial Arrow */}
                                <div className="absolute left-0 text-white text-2xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                                    →
                                </div>
                                {/* Revealed Read More + Arrow */}
                                <div className="flex items-center text-white text-lg font-bold opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <span>Read More</span>
                                    <span className="ml-2 text-2xl">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Marine Tourism */}
                        <Link to="/services/tourism" className="group">
                            <div className="text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                                <Ship size={50} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors text-white">Marine Tourism</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">Unforgettable Packages for Boat and Yacht Rentals across the UAE.</p>

                            <div className="relative h-8 flex items-center overflow-hidden">
                                {/* Initial Arrow */}
                                <div className="absolute left-0 text-white text-2xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                                    →
                                </div>
                                {/* Revealed Read More + Arrow */}
                                <div className="flex items-center text-white text-lg font-bold opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <span>Read More</span>
                                    <span className="ml-2 text-2xl">→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Yacht Maintenance */}
                        <Link to="/services/maintenance" className="group">
                            <div className="text-white mb-6 transform group-hover:translate-x-4 transition-transform duration-500">
                                <Wrench size={50} strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors text-white">Yacht Maintenance</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">Premium Yacht Maintenance Support to keep your vessel in peak condition.</p>

                            <div className="relative h-8 flex items-center overflow-hidden">
                                {/* Initial Arrow */}
                                <div className="absolute left-0 text-white text-2xl transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                                    →
                                </div>
                                {/* Revealed Read More + Arrow */}
                                <div className="flex items-center text-white text-lg font-bold opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                    <span>Read More</span>
                                    <span className="ml-2 text-2xl">→</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="text-center mt-20">
                        <Link
                            to="/services"
                            className="inline-block bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-12 rounded shadow-[0_10px_20px_rgba(255,107,0,0.3)] transition-all hover:-translate-y-1 uppercase tracking-widest text-xs"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            <PartnersSection />

            {/* Best Service Section */}
            <section className="py-12 md:py-16 lg:py-20 bg-gray-50 flex items-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 flex gap-4 h-[300px] md:h-[350px] lg:h-[400px]">
                            <img src={tourImg} alt="Service 1" className="w-1/2 h-full object-cover rounded-lg" />
                            <img src={regImg} alt="Service 2" className="w-1/2 h-full object-cover rounded-lg mt-12" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Highlights</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4">
                                Best Service We Strive to Provide, <br />
                                <span className="text-primary">Our Customers</span>
                            </h2>
                            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                Our customers inspire our industry, and we're committed to protecting them. Through innovation, experience, and small impactful changes, we're driving programs for a cleaner, sustainable future.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-secondary font-medium">
                                <li className="flex items-center"><span className="text-primary mr-2">✓</span> Amazing packages</li>
                                <li className="flex items-center"><span className="text-primary mr-2">✓</span> Technical support</li>
                                <li className="flex items-center"><span className="text-primary mr-2">✓</span> Registration service</li>
                            </ul>
                            <Link to="/about" className="bg-primary text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchServices } from '../../api';
import { Anchor, Settings, Ship, Wrench } from 'lucide-react';
import ctaBg from '../../assets/images/5023-1.jpg';

const ServicesSection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            const data = await fetchServices();
            setServices(data);
            setLoading(false);
        };
        loadServices();
    }, []);

    return (
        <section className="bg-white">
            {/* Top Featured Image */}
            <div className="relative h-[600px] w-full" data-aos="zoom-out" data-aos-duration="1500">
                <img
                    src={ctaBg}
                    alt="Marine Services"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Services Grid Section */}
            <div className="bg-[#0b1c3e] py-24 text-white relative overflow-hidden">
                {/* Background Map Outline Overlay - subtle */}
                <div
                    className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')` }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header inside the dark section */}
                    <div className="text-center mb-20" data-aos="fade-up">
                        <div className="inline-block mb-3">
                            <span className="h-[2px] w-8 bg-primary inline-block align-middle mr-2"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs align-middle">Our Expertise</span>
                            <span className="h-[2px] w-8 bg-primary inline-block align-middle ml-2"></span>
                        </div>
                        <h2 className="text-5xl font-serif font-bold mb-6">What We Offer</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Registration Services */}
                        <Link to="/services/registration" className="group" data-aos="fade-up" data-aos-delay="100">
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
                        <Link to="/services/engineering" className="group" data-aos="fade-up" data-aos-delay="200">
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
                        <Link to="/services/tourism" className="group" data-aos="fade-up" data-aos-delay="300">
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
                        <Link to="/services/maintenance" className="group" data-aos="fade-up" data-aos-delay="400">
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
            </div>
        </section>
    );
};

export default ServicesSection;

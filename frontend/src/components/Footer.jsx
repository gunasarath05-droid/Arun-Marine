import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b1c3e] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
                    {/* Brand / About */}
                    <div className="md:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            {/* Use logo if available here or text */}
                            <h3 className="text-3xl font-serif font-bold italic">Marine Services</h3>
                        </Link>
                        <p className="text-gray-400 mb-8 max-w-sm leading-relaxed text-sm">
                            Navigate Legally, Sail Confidently! Secure your vessel with hassle-free legal solutions.
                            The premier choice for yacht registration and marine consultancy in the UAE.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                                <Facebook className="w-4 h-4" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                                <Linkedin className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary"></span>
                        </h4>
                        <ul className="space-y-4 text-sm font-medium tracking-wide">
                            <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center"><span className="mr-2">›</span> Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center"><span className="mr-2">›</span> Who We Are</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center"><span className="mr-2">›</span> Our Services</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center"><span className="mr-2">›</span> Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8 text-white relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-primary"></span>
                        </h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                                <p>Dubai Digital Park, <br /> Dubai Silicon Oasis, UAE</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <p>info@marineservices.ae</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <p>+971 50 123 4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center bg-[#0b1c3e] text-xs text-gray-500 font-medium uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Arun Marine Services. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

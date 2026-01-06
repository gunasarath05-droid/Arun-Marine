import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import logo from '../assets/images/AMRS-Logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile services dropdown state
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to determine text color based on state
    const getTextColor = (isSubLink = false) => {
        if (isSubLink) return 'text-gray-600 hover:text-primary';
        if (!isScrolled) return 'text-white hover:text-primary'; // White text on all pages when not scrolled
        return 'text-secondary hover:text-primary'; // Dark text when scrolled
    };

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Who We Are', href: '/about' },
        {
            name: 'Our Services',
            href: '/services',
            subLinks: [
                { name: 'Registration Services', href: '/services/registration' },
                { name: 'Engineering Services', href: '/services/engineering' },
                { name: 'Marine Tourism', href: '/services/tourism' },
                { name: 'Yacht Maintenance', href: '/services/maintenance' },
            ],
        },
        { name: 'Refer & Earn', href: '/refer-earn' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
                }`}
        >
            <nav className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                alt="Marine Services"
                                className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-28'}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navigation.map((item) => {
                            const isActive = item.subLinks
                                ? item.subLinks.some(subItem => location.pathname === subItem.href) || location.pathname === item.href
                                : location.pathname === item.href;

                            return (
                                <div key={item.name} className="relative group">
                                    {item.subLinks ? (
                                        <>
                                            <Link
                                                to={item.href}
                                                className={`${getTextColor()} transition-colors font-bold text-sm uppercase tracking-widest flex items-center focus:outline-none pb-1 ${isActive ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'
                                                    }`}
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 w-4 h-4" />
                                            </Link>
                                            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-4 border-primary overflow-hidden">
                                                <div className="py-2">
                                                    {item.subLinks.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            className={`block px-6 py-3 text-sm font-medium hover:text-primary hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${location.pathname === subItem.href ? 'text-primary bg-gray-50' : 'text-gray-600'
                                                                }`}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className={`${getTextColor()} transition-colors font-bold text-sm uppercase tracking-widest pb-1 ${isActive ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="focus:outline-none"
                        >
                            {isMenuOpen ? <X className="h-8 w-8 text-primary" /> : <Menu className={`h-8 w-8 ${!isScrolled ? 'text-white' : 'text-secondary'}`} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl absolute left-4 right-4 top-full p-4 border border-gray-100">
                        {navigation.map((item) => {
                            const isActive = item.subLinks
                                ? item.subLinks.some(subItem => location.pathname === subItem.href) || location.pathname === item.href
                                : location.pathname === item.href;

                            return (
                                <div key={item.name}>
                                    {item.subLinks ? (
                                        <div>
                                            <div className="flex items-center w-full">
                                                <Link
                                                    to={item.href}
                                                    className={`flex-grow py-3 px-4 hover:bg-gray-50 hover:text-primary transition-colors font-bold rounded-l-md ${isActive ? 'bg-primary/10 text-primary' : 'text-secondary'
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                                <button
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    className="py-3 px-4 text-secondary hover:bg-gray-50 hover:text-primary border-l border-gray-100 transition-colors rounded-r-md"
                                                >
                                                    {isServicesOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                                                </button>
                                            </div>
                                            {isServicesOpen && (
                                                <div className="pl-4 space-y-1 bg-gray-50 rounded-md mb-2">
                                                    {item.subLinks.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            className={`block py-2 px-4 text-sm hover:text-primary font-medium ${location.pathname === subItem.href ? 'text-primary bg-white rounded' : 'text-gray-600'
                                                                }`}
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className={`block py-3 px-4 hover:bg-gray-50 hover:text-primary transition-colors font-bold rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'text-secondary'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import logo from '../assets/images/AMRS-Logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Mobile services dropdown state
    const location = useLocation();

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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
        { name: 'About Us', href: '/about' },
        {
            name: 'Our Services',
            href: '/services',
            subLinks: [
                { name: 'Registration', href: '/services/registration' },
                { name: 'Engineering', href: '/services/engineering' },
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
            <nav className="container mx-auto px-4 md:px-6 relative">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center" onClick={handleScrollToTop}>
                            <img
                                src={logo}
                                alt="Marine Services"
                                className={`transition-all duration-300 w-auto max-w-full object-contain ${isScrolled ? 'h-12 md:h-16' : 'h-20 md:h-28'}`}
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
                                    <Link
                                        to={item.href}
                                        onClick={handleScrollToTop}
                                        className={`${getTextColor()} transition-all duration-300 font-bold text-sm uppercase tracking-widest flex items-center focus:outline-none group py-1`}
                                    >
                                        <div className="relative">
                                            {item.name}
                                            <div className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                                }`} />
                                        </div>
                                        {item.subLinks && (
                                            <ChevronDown className={`ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180`} />
                                        )}
                                    </Link>

                                    {item.subLinks && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-4 border-primary overflow-hidden translate-y-2 group-hover:translate-y-0">
                                            <div className="py-2">
                                                {item.subLinks.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.href}
                                                        onClick={handleScrollToTop}
                                                        className={`block px-6 py-3 text-sm font-medium hover:text-primary hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${location.pathname === subItem.href ? 'text-primary bg-gray-50' : 'text-gray-600'
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
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
                    <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl absolute left-4 right-4 top-full p-4 border border-gray-100 z-[100]">
                        {navigation.map((item) => {
                            const isActive = item.subLinks
                                ? item.subLinks.some(subItem => location.pathname === subItem.href) || location.pathname === item.href
                                : location.pathname === item.href;

                            return (
                                <div key={item.name} className="mb-1 last:mb-0">
                                    {item.subLinks ? (
                                        <div>
                                            <div className={`flex items-center w-full rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-gray-50'
                                                }`}>
                                                <Link
                                                    to={item.href}
                                                    className="flex-grow py-3 px-4 font-bold"
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        handleScrollToTop();
                                                    }}
                                                >
                                                    {item.name}
                                                </Link>
                                                <button
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    className="py-3 px-4 border-l border-gray-100/50 transition-colors"
                                                >
                                                    {isServicesOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                                                </button>
                                            </div>
                                            {isServicesOpen && (
                                                <div className="mt-1 ml-4 space-y-1 bg-gray-50 rounded-md border-l-2 border-primary/20">
                                                    {item.subLinks.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.href}
                                                            className={`block py-3 px-4 text-sm hover:text-primary font-medium transition-colors ${location.pathname === subItem.href ? 'text-primary bg-white/50 rounded shadow-sm' : 'text-gray-600'
                                                                }`}
                                                            onClick={() => {
                                                                setIsMenuOpen(false);
                                                                handleScrollToTop();
                                                            }}
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
                                            onClick={() => {
                                                setIsMenuOpen(false);
                                                handleScrollToTop();
                                            }}
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

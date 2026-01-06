import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import CountUp from 'react-countup';

import roshiniImg from '../../assets/images/IMG_3252-Roshini-G-1-scaled-e1739261584259.jpg';
import jrajImg from '../../assets/images/IMG_20250208_103351569-J-Raj-scaled-e1739261370516.jpg';
import meeraImg from '../../assets/images/20230609_195639-meera-muthu-scaled.jpg';
import mehdiImg from '../../assets/images/Gemini_Generated_Image_3f8ygg3f8ygg3f8y.png';
import thanigaivelImg from '../../assets/images/IMG-20250128-WA0022-Thanigaivel-Mani-2-e1739261010441.jpeg';



import weImg from '../../assets/images/WhatsApp-Image-2024-12-30-at-11-46-38-AM-1-scaled-rcuy51hgnf.jpeg';
import weImg2 from '../../assets/images/WhatsApp-Image-2024-12-30-at-11-36-00-AM-2-rcuy3i0zg72eet2un.jpeg';

import bgYacht from '../../assets/images/bg-yacht.png';
import { Link } from 'react-router-dom';



// Use same images for testimonials
const avatar1 = roshiniImg;
const avatar2 = jrajImg;

const testimonials = [
    {
        name: "Roshini G",
        role: "Pro",
        image: roshiniImg,
        text: "We are grateful to Arun Marine Registration Services for providing a seamless solution for transferring ownership of our boat. Their expertise and efficient processing made the entire experience smooth and hassle-free. We highly recommend their services!",
    },
    {
        name: "J Raj",
        role: "Marine Consultant",
        image: jrajImg,
        text: "A truly professional experience. Their knowledge of UAE maritime regulations is unmatched. We rely on them for all our fleet's compliance needs.",
    },
    {
        name: "Meera Muthu",
        role: "Manager",
        image: meeraImg,
        text: "Arun Marine's professionalism, attention to detail, and technical expertise made them an essential partner in the success of our project. I highly recommend their services to anyone in need of reliable and high-quality naval architecture and engineering support.",
    },
    {
        name: "Mehdi Honarvar.",
        role: "Manager",
        image: mehdiImg,
        text: "Mr.Arun is exactly what you need about boat license. He guides you as well to suces thank you Mehdi.",
    },
    {
        name: "Thanigaivel Mani",
        role: "Manager",
        image: thanigaivelImg,
        text: "I am satisfied with the registration services by Arun Marine Registration Services. Do continue the good work always. All the very best guys.",
    }
];

// Duplicate items for infinite loop
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const StatsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(testimonials.length);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const handleTransitionEnd = () => {
        if (currentIndex >= testimonials.length * 2) {
            setCurrentIndex(testimonials.length);
        } else if (currentIndex < testimonials.length) {
            setCurrentIndex(testimonials.length * 2 - 1);
        }
    };

    const nextSlide = () => setCurrentIndex((prev) => prev + 1);
    const prevSlide = () => setCurrentIndex((prev) => prev - 1);
    // Top stats from the image


    return (
        <React.Fragment>
            {/* Stats Counter Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10" data-aos="fade-up">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { label: "Vessel Registrations", value: 1000, suffix: "+" },
                            { label: "Elite Clients", value: 250, suffix: "+" },
                            { label: "Managed Yachts", value: 150, suffix: "+" },
                            { label: "Successful Projects", value: 120, suffix: "+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center relative group">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-serif font-bold text-gray-50 -z-10 select-none group-hover:text-gray-100 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-4 flex justify-center items-baseline gap-1">
                                        <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                                        <span className="text-primary text-3xl font-serif">{stat.suffix}</span>
                                    </h3>
                                    <div className="h-0.5 w-12 bg-primary/40 mx-auto mb-6 group-hover:w-20 transition-all"></div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-secondary transition-colors italic">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Map Outline Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] bg-center bg-no-repeat bg-contain pointer-events-none"
                    style={{ backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')` }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div
                        className="relative group/carousel"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {/* Custom Auto-scrolling Grid */}
                        <div className="overflow-hidden px-2">
                            <motion.div
                                className="flex gap-4 md:gap-8"
                                animate={{ x: `calc(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3))}% - ${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 32) / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3)}px)` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onAnimationComplete={handleTransitionEnd}
                                style={{
                                    display: 'flex'
                                }}
                            >
                                {extendedTestimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-1/3 flex-shrink-0"
                                        style={{
                                            width: typeof window !== 'undefined' && window.innerWidth < 768
                                                ? '100%'
                                                : 'calc(33.333% - 21.333px)'
                                        }}
                                    >
                                        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary opacity-5 group-hover:opacity-10 transition-opacity" />

                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-50 shadow-sm z-10" />
                                            ) : (
                                                <div className={`w-20 h-20 rounded-full ${item.bgColor} mb-6 flex items-center justify-center text-primary font-bold text-xl border-4 border-gray-50 z-10 uppercase`}>
                                                    {item.initials}
                                                </div>
                                            )}
                                            <h4 className="text-xl font-bold text-secondary relative z-10">{item.name}</h4>
                                            <span className="text-primary text-xs uppercase tracking-widest font-bold mt-1 relative z-10">{item.role}</span>
                                            <p className="text-gray-500 italic mb-6 leading-relaxed relative z-10">"{item.text}"</p>

                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-2 mt-12">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx + testimonials.length)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${(currentIndex % testimonials.length) === idx ? 'bg-primary w-8' : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Satisfaction / Team / Promise Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Topographical Background Pattern - subtle */}
                <div
                    className="absolute inset-0 opacity-[90%] pointer-events-none bg-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bgYacht})`,
                        backgroundSize: '1000px'
                    }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Images / Team Collage (Left) */}
                        <div className="lg:w-1/2 flex gap-6 items-start" data-aos="fade-right">
                            <div className="w-1/2 mt-12">
                                <div className="rounded-sm overflow-hidden shadow-2xl">
                                    <img src={weImg} alt="Marine Service Team" className="w-full h-[450px] lg:h-[600px] object-cover" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="rounded-sm overflow-hidden shadow-2xl">
                                    <img src={weImg2} alt="Yacht Operation" className="w-full h-[450px] lg:h-[600px] object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content (Right) */}
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-left">
                            <div className="mb-6">
                                <span className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] opacity-70">Highlights</span>
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-serif font-medium text-secondary mb-10 leading-[1.1]">
                                We aim to offer <br />
                                <span className="text-secondary italic">100% satisfaction</span> <br />
                                <span className="text-primary">services,</span>
                            </h2>

                            <p className="text-gray-600 mb-12 max-w-lg leading-relaxed text-lg">
                                We aspire to be your trusted partner, the first choice for solutions that embody quality, continuity, innovation, and global reach.
                            </p>

                            <ul className="space-y-6 mb-14">
                                <li className="flex items-center text-secondary font-semibold text-lg" data-aos="fade-up" data-aos-delay="200">
                                    <span className="text-primary mr-4 text-xl">✓</span>
                                    Trusted Registration Services
                                </li>
                                <li className="flex items-center text-secondary font-semibold text-lg" data-aos="fade-up" data-aos-delay="300">
                                    <span className="text-primary mr-4 text-xl">✓</span>
                                    Amazing Packages for Yacht Rentals
                                </li>
                                <li className="flex items-center text-secondary font-semibold text-lg" data-aos="fade-up" data-aos-delay="400">
                                    <span className="text-primary mr-4 text-xl">✓</span>
                                    Unlimited Trip Time
                                </li>
                                <li className="flex items-center text-secondary font-semibold text-lg" data-aos="fade-up" data-aos-delay="500">
                                    <span className="text-primary mr-4 text-xl">✓</span>
                                    Huge Destination Selection
                                </li>
                            </ul>

                            <Link to="/about" className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-6 rounded-lg w-fit shadow-xl transition-all duration-300 uppercase tracking-widest text-xs">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default StatsSection;

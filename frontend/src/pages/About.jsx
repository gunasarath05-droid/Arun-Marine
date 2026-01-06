import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Quote, Anchor } from 'lucide-react';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import aboutBg from '../assets/images/who_we_are_bg.jpg'; // Extracted Hero BG
import bgYacht from '../assets/images/bg-yacht.png'; // Extracted Hero BG
import officeImg from '../assets/images/WhatsApp-Image-2025-07-16-at-18-42-01_cc5e08ed-r8zewwyzbsfxy.jpg'; // Extracted Team Photo
import floatingImg from '../assets/images/1000604809-1-rcuy3bg6ki5c90ybp7arxmcra9m2lpzt5fho6egrfc.jpg';
import ctaBg from '../assets/images/who_we_are_bg.jpg'; // Extracted CTA BG
import avatar1 from '../assets/images/IMG_3252-Roshini-G-1-scaled-e1739261584259.jpg';
import avatar2 from '../assets/images/IMG_20250208_103351569-J-Raj-scaled-e1739261370516.jpg';
import avatar3 from '../assets/images/20230609_195639-meera-muthu-scaled.jpg';
import avatar4 from '../assets/images/Gemini_Generated_Image_3f8ygg3f8ygg3f8y.png';
import avatar5 from '../assets/images/IMG-20250128-WA0022-Thanigaivel-Mani-2-e1739261010441.jpeg';

const About = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-white overflow-hidden font-sans text-gray-700">
            {/* Page Hero */}
            <PageHero title="Who We Are" bgImage={aboutBg} className="h-[50vh] " />

            {/* Discover More / About Section */}
            <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-white" data-aos="fade-up">
                {/* Subtle Background Pattern */}
                <div
                    className="absolute inset-0 opacity-[20%] pointer-events-none bg-repeat bg-center"
                    style={{
                        backgroundImage: `url(${bgYacht})`,
                        backgroundSize: '800px'
                    }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        {/* LEFT: Image & 'Start In' Graphic */}
                        <div className="lg:w-1/2 relative min-h-[400px] md:min-h-[550px] lg:min-h-[650px]">
                            {/* Background Big Number */}
                            <div className="absolute -top-4 sm:-top-8 md:-top-16 right-0 md:-right-8 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-serif font-bold text-[#c09550] leading-none select-none opacity-50 sm:opacity-100">
                                <CountUp end={2022} duration={1} enableScrollSpy scrollSpyOnce />
                            </div>

                            <div className="hidden md:block absolute top-1/3 -left-12 text-[10px] font-bold tracking-[0.4em] text-primary uppercase -rotate-90 origin-left">
                                <span className="border-l-2 border-primary pl-4 py-1">EST. IN</span>
                            </div>

                            {/* Main Image */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={slideInRight}
                                className="relative z-10 w-full max-w-[520px] mt-8 md:mt-12"
                            >
                                <div className="rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] relative group">
                                    <img src={officeImg} alt="Arun Marine Team" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent group-hover:from-transparent transition-all duration-500"></div>
                                </div>
                            </motion.div>

                            {/* Floating Image Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.7, duration: 1.2, ease: "easeOut" }
                                }}
                                viewport={{ once: true }}
                                className="absolute -bottom-20 right-0 w-[320px] h-[420px] z-20 rounded-sm overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.3)] border-[4px] border-white hidden lg:block"
                            >
                                <img src={floatingImg} alt="Maritime Professional" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-secondary to-transparent">
                                    <div className="flex items-center gap-2 text-white">
                                        <Anchor className="w-4 h-4" />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Maritime Excellence</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="h-[2px] w-12 bg-primary"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">About Our Legacy</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-6 md:mb-10 leading-tight">
                                    Discover More About <br />
                                    <span className="text-primary italic">Arun Marine Services</span>
                                </h2>
                                <p className="text-base md:text-lg text-secondary font-serif font-bold mb-6 md:mb-8 italic border-l-4 border-primary pl-4 md:pl-6 py-2 bg-gray-50">
                                    "Arun Marine Registration Services (AMRS) — Your Complete Marine Partner in the UAE!"
                                </p>
                                <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed text-sm font-medium">
                                    Founded by Mr. Arun Subramanian and partnered with Mr. Sathish Subramaniyan, Arun Marine Registration Services offers a powerful combination of expert marine compliance and personalized tourism experiences.
                                    <br /><br />
                                    Authorized by <strong className="text-secondary font-bold font-serif italic">DUBAI MARITIME AUTHORITY (DMA)</strong>, <strong className="text-secondary font-bold font-serif italic">MINISTRY OF ENERGY AND INFRASTRUCTURE (MOEI)</strong>, and other leading UAE maritime bodies, we support private boat owners, commercial operators, and tourism companies with excellence.
                                </p>

                                <h4 className="text-secondary font-serif font-bold mb-6 text-xl">We Specialise In:</h4>
                            </motion.div>

                            <motion.ul
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {[
                                    "Private & Commercial Registration",
                                    "UAE Boat Driving Licenses",
                                    "Technical Yacht Maintenance",
                                    "Marine Tourism & Events",
                                    "Multilingual Expert Support",
                                    "Secure Documentation Handling"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-center gap-3 text-secondary text-xs font-bold uppercase tracking-wider"
                                    >
                                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                        </div>
                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link to="/services" className="bg-primary hover:bg-[#e65c00] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-5 px-12 rounded-sm shadow-xl transition-all hover:translate-y-[-2px] inline-block">
                                    Our Full Services
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="py-16 md:py-20 lg:py-24 bg-gray-50 text-center relative z-10" data-aos="fade-up">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-xl mb-10 border border-gray-100">
                            <Anchor className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-6 md:mb-10 leading-tight">Our Vision</h3>
                        <p className="text-gray-500 leading-relaxed mb-6 text-justify md:text-center text-lg font-medium">
                            To become the UAE’s most trusted all-in-one marine solutions provider — delivering seamless service across registration, licensing, technical maintenance, and luxury yacht rentals.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-12 text-justify md:text-center font-medium max-w-3xl mx-auto">
                            We aim to simplify every step of your marine journey with transparency, efficiency, and a hands-on approach. Whether you’re registering a vessel, planning a sea celebration, or in need of end-to-end marine support — AMRS is not just a service provider, but your marine partner for life.
                        </p>
                        <Link to="/services" className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] border-b-2 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all">
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden" data-aos="fade-up">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { label: "Vessel Registrations", value: 1000, suffix: "+" },
                            { label: "Elite Clients", value: 250, suffix: "+" },
                            { label: "Managed Yachts", value: 150, suffix: "+" },
                            { label: "Successful Projects", value: 120, suffix: "+" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center relative group">
                                <div className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl font-serif font-bold text-gray-50 -z-10 select-none group-hover:text-gray-100 transition-colors">
                                    {stat.value}
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary mb-3 md:mb-4 flex justify-center items-baseline gap-1">
                                        <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                                        <span className="text-primary text-2xl md:text-3xl font-serif">{stat.suffix}</span>
                                    </h3>
                                    <div className="h-0.5 w-12 bg-primary/40 mx-auto mb-6 group-hover:w-20 transition-all"></div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-secondary transition-colors italic">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 lg:py-32 bg-[#f8f7f5] relative overflow-hidden" data-aos="fade-up">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="h-[1px] w-8 bg-primary"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Voices of Trust</span>
                            <span className="h-[1px] w-8 bg-primary"></span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary italic">What Our Port of Call Says</h2>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="pb-20 testimonials-swiper"
                    >
                        {/* Testimonial 1 - Roshini G */}
                        <SwiperSlide>
                            <div className="bg-white p-6 md:p-10 lg:p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col items-center text-center relative group hover:border-primary/20 transition-all">
                                <div className="absolute top-8 left-8">
                                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity rotate-180" />
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-1">Roshini G</h4>
                                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold font-serif italic">Pro</span>
                                </div>
                                <img src={avatar1} alt="Roshini G" className="w-32 h-32 rounded-full object-cover mb-8 border-8 border-[#f8f7f5] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-secondary font-serif font-medium italic text-lg leading-relaxed">
                                    "We are grateful to Arun Marine Registration Services for providing a seamless solution for transferring ownership of our boat. Their expertise and efficient processing made the entire experience smooth and hassle-free. We highly recommend their services!"
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 2 - J Raj */}
                        <SwiperSlide>
                            <div className="bg-white p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col items-center text-center relative group hover:border-primary/20 transition-all">
                                <div className="absolute top-8 left-8">
                                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity rotate-180" />
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-1">J Raj</h4>
                                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold font-serif italic">Marine Consultant</span>
                                </div>
                                <img src={avatar2} alt="J Raj" className="w-32 h-32 rounded-full object-cover mb-8 border-8 border-[#f8f7f5] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-secondary font-serif font-medium italic text-lg leading-relaxed">
                                    "A truly professional experience. Their knowledge of UAE maritime regulations is unmatched. We rely on them for all our fleet's compliance needs and they never disappoint."
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 3 - Meera Muthu */}
                        <SwiperSlide>
                            <div className="bg-white p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col items-center text-center relative group hover:border-primary/20 transition-all">
                                <div className="absolute top-8 left-8">
                                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity rotate-180" />
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-1">Meera Muthu</h4>
                                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold font-serif italic">Manager</span>
                                </div>
                                <img src={avatar3} alt="Meera Muthu" className="w-32 h-32 rounded-full object-cover mb-8 border-8 border-[#f8f7f5] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-secondary font-serif font-medium italic text-lg leading-relaxed">
                                    "Arun Marine's professionalism, attention to detail, and technical expertise made them an essential partner in the success of our project. I highly recommend their services to anyone in need of reliable and high-quality naval architecture and engineering support."
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 4 - Mehdi Honarvar */}
                        <SwiperSlide>
                            <div className="bg-white p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col items-center text-center relative group hover:border-primary/20 transition-all">
                                <div className="absolute top-8 left-8">
                                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity rotate-180" />
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-1">Mehdi Honarvar</h4>
                                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold font-serif italic">Manager</span>
                                </div>
                                <img src={avatar4} alt="Mehdi Honarvar" className="w-32 h-32 rounded-full object-cover mb-8 border-8 border-[#f8f7f5] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-secondary font-serif font-medium italic text-lg leading-relaxed">
                                    "Mr. Arun is exactly what you need about boat license. He guides you as well to success. Thank you!"
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 5 - Thanigaivel Mani */}
                        <SwiperSlide>
                            <div className="bg-white p-12 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col items-center text-center relative group hover:border-primary/20 transition-all">
                                <div className="absolute top-8 left-8">
                                    <Quote className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-opacity rotate-180" />
                                </div>
                                <div className="mb-6">
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-1">Thanigaivel Mani</h4>
                                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold font-serif italic">Manager</span>
                                </div>
                                <img src={avatar5} alt="Thanigaivel Mani" className="w-32 h-32 rounded-full object-cover mb-8 border-8 border-[#f8f7f5] shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <p className="text-secondary font-serif font-medium italic text-lg leading-relaxed">
                                    "I am satisfied with the registration services by Arun Marine Registration Services. Do continue the good work always. All the very best guys."
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-secondary" data-aos="zoom-out">
                <div className="absolute inset-0 z-0">
                    <img
                        src={ctaBg}
                        alt="Ready to Charter"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 md:mb-10 leading-tight">Ready to Experience <br className="hidden md:block" />The Peak of Luxury?</h2>
                        <Link to="/contact" className="bg-primary hover:bg-[#e65c00] text-white text-[10px] font-bold uppercase tracking-[0.3em] py-6 px-16 rounded-sm shadow-2xl transition-all hover:translate-y-[-4px] inline-block border border-primary">
                            Charter Your Yacht
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;

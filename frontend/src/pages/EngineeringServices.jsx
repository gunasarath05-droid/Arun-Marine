import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Ruler, Anchor, ShieldAlert, ClipboardCheck, Search, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Images
import heroBg from '../assets/images/5023-1.jpg';
import contentImg from '../assets/images/p10-1.jpg';

const EngineeringServices = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PageHero title="Engineering Services" bgImage={heroBg} className="h-[40vh]" />

            <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Main Content (Left, 3/4 width) */}
                    <div className="lg:w-3/4" data-aos="fade-up">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4 md:mb-6 leading-tight">
                                Expert Marine <br />
                                <span className="italic text-secondary">Technical Solutions</span>
                            </h2>

                            <blockquote className="text-gray-600 font-medium italic mb-10 border-l-4 border-primary pl-6 py-4 bg-gray-50 text-sm leading-relaxed">
                                "When it comes to your yacht’s safety, performance, and compliance, you need more than just a service—you need expertise. Our technical services offer thorough assessments and the most detailed reports."
                            </blockquote>
                        </motion.div>

                        <motion.div
                            className="flex flex-col md:flex-row gap-8 mb-16 items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                                <img src={contentImg} alt="Marine Engineering" className="w-full h-auto" />
                            </div>
                            <div className="md:w-1/2">
                                <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                    {[
                                        "Stability & Performance Analysis",
                                        "Fire & Safety Plans",
                                        "Condition Surveys",
                                        "Damage Assessment",
                                        "Dry Docking Supervision",
                                        "Structural Design"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <div className="mb-16">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Technical expertise you can trust</p>
                            <h2 className="text-4xl font-serif font-bold text-secondary mb-6">Key Engineering <br /> Services</h2>

                            {/* Services Grid - Matching Registration Design */}
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                {/* Stability */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <Anchor className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Stability Booklets</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Essential stability calculations <br />
                                        Safe operating limits <br />
                                        Regulatory compliance <br />
                                        Trim & stability analysis
                                    </p>
                                </motion.div>

                                {/* Condition Reports */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <ClipboardCheck className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Condition Reports</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Pre-purchase surveys <br />
                                        Maintenance evaluation <br />
                                        Structural integrity check <br />
                                        System performance test
                                    </p>
                                </motion.div>

                                {/* Damage Surveys */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <ShieldAlert className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Damage Surveys</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Insurance claim reports <br />
                                        Incident investigation <br />
                                        Repair estimation <br />
                                        Root cause analysis
                                    </p>
                                </motion.div>

                                {/* Design & Layout */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <Ruler className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Design & Layout</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        General Arrangement (GA) <br />
                                        Lines Plans <br />
                                        Structural Modification <br />
                                        Tank Capacity Plans
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Why Choose Us Section - Matching Registration Design */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8 md:mb-12 text-center">Why Choose Our Engineering?</h2>

                            <div className="bg-[#f8f7f5] p-6 md:p-10 lg:p-12 rounded-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                                <div className="md:w-1/2 text-sm text-gray-500 space-y-6">
                                    <p className="italic font-medium text-gray-600">We specialize in delivering accurate reports and assessments. Our team ensures your yacht remains in excellent condition.</p>
                                    <p className="test-xs font-bold text-gray-600">Here's why you should trust us:</p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Experienced Team:</strong> Years of expertise in yacht safety and technical evaluation.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Comprehensive Services:</strong> From Pre-Purchase Surveys to Fire & Safety Plans.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Accurate Reports:</strong> Detailed reports to help you make informed decisions.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Trust & Integrity:</strong> We put your yacht’s safety first with transparent services.</span></li>
                                    </ul>
                                    <Link to="/contact" className="inline-block bg-primary hover:bg-[#e65c00] text-white font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl transition-all uppercase tracking-widest text-xs mt-4">
                                        Consult an Engineer
                                    </Link>
                                </div>
                                <div className="md:w-1/2">
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
                                    >
                                        <img src={heroBg} alt="Why Choose Us" className="w-full h-auto object-cover" />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right, 1/4 width) - Matching Registration Structure */}
                    <div className="lg:w-1/4 space-y-8 md:space-y-12 h-fit lg:sticky lg:top-24" data-aos="fade-left">
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

                        {/* Our Services Nav (Kept for navigation utility, though not in Registration sample) */}
                        <div className="">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Services</h4>
                            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
                                <ul className="divide-y divide-gray-100">
                                    <li>
                                        <Link to="/services/registration" className="block p-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">Registration Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/engineering" className="block p-4 text-sm font-bold text-primary bg-gray-50">Engineering Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/tourism" className="block p-4 text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors">Marine Tourism</Link>
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

export default EngineeringServices;

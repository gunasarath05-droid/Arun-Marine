import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { FileCheck, RefreshCw, ShieldCheck, MoreHorizontal, Search } from 'lucide-react';

// Images
import heroBg from '../assets/images/who_we_are_bg.jpg';
import contentImg from '../assets/images/full-aspx_-1536x864.jpg'; // Yacht image
import whyChooseImg from '../assets/images/CR6_2519-Edited.jpg'; // Another yacht image

const RegistrationServices = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <PageHero title="Registration Services" bgImage={heroBg} className="h-[40vh]" /> {/* Adjusted height */}

            <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Main Content (Left, 3/4 width to match proportion) */}
                    <div className="lg:w-3/4" data-aos="fade-up">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-secondary mb-4 md:mb-6 leading-tight">
                            The Best Yacht Registration Services in <br />
                            <span className="italic text-secondary">UAE</span>
                        </h2>

                        <blockquote className="text-gray-600 font-medium italic mb-6 md:mb-10 border-l-4 border-primary pl-4 md:pl-6 py-3 md:py-4 bg-gray-50 text-sm leading-relaxed">
                            "Our Registration Services cover everything from vessel registration to ownership transfers and license applications, making the process simple and hassle-free."
                        </blockquote>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-12 md:mb-16 items-center">
                            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                                <img src={contentImg} alt="Yacht Registration" className="w-full h-auto" />
                            </div>
                            <div className="md:w-1/2">
                                <ul className="space-y-3 text-sm text-gray-500 font-medium">
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Commercial & Private Boat Registration</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Renewal of Registration</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Cancellation of Registration</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Foreign License Registration</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Transfer of Ownership</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> VHF Application</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Seaman's Card Application</li>
                                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span> Boat Driving License</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mb-16">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Find the service that suits your needs</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4 md:mb-6">Choose the <br className="hidden md:block" /> Right Plan</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg">
                                Choosing the right service is essential for ensuring compliance, safety, and smooth operations. Whether you need a <strong>new vessel registration</strong>, a <strong>renewal</strong>, or important safety certifications, we offer a range of services tailored to both <strong>commercial</strong> and <strong>private vessel</strong> owners.
                            </p>

                            {/* Plans Grid - Matching Design Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* New Registration */}
                                <div className="bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <FileCheck className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">New <br /> Registration</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Jet Ski : 350AED <br />
                                        Commercial/Private: <br />
                                        12m: 730 AED Private, <br />
                                        Below 12m 500 AED <br />
                                        Above 12 m 100 AED
                                    </p>
                                </div>

                                {/* Renewal */}
                                <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <RefreshCw className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Renewal</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Commercial: 1540 Addl <br />
                                        mt 730 AED Private <br />
                                        Above 12 metre 800 <br />
                                        AED Jet Ski : 350 AED
                                    </p>
                                </div>

                                {/* Fire Safety Plan */}
                                <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <ShieldCheck className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Fire Safety Plan</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xl font-bold text-secondary">1500 AED</p>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mt-6 mb-2">Transfer of <br /> Ownership</h3>
                                    <p className="text-xl font-bold text-secondary mt-2">500 AED</p>
                                </div>

                                {/* Other */}
                                <div className="bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100 text-center group hover:-translate-y-2 transition-all duration-300">
                                    <div className="text-primary mb-4 opacity-80 group-hover:scale-110 transition-transform flex justify-center">
                                        <MoreHorizontal className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-secondary mb-2">Other</h3>
                                    <hr className="w-12 mx-auto border-t-2 border-primary my-4" />
                                    <p className="text-xs text-gray-500 leading-loose font-medium">
                                        Stability Booklet: <br />
                                        15000 AED DMA <br />
                                        Logbook: 50 AED <br />
                                        Seaman Blue Card : <br />
                                        250 AED Hull <br />
                                        Number: 200 AED <br />
                                        Muster List: 50 AED
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us Section */}
                        <div data-aos="fade-up">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8 md:mb-12 text-center">Why Choose Us?</h2>

                            <div className="bg-[#f8f7f5] p-6 md:p-10 lg:p-12 rounded-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center"> {/* Changed background color */}
                                <div className="md:w-1/2 text-sm text-gray-500 space-y-6">
                                    <p className="italic font-medium text-gray-600">Choose us for a smooth and reliable registration process. Our team is dedicated to ensuring all your paperwork and formalities are handled with precision and efficiency.</p>
                                    <p className="test-xs font-bold text-gray-600">Here's why you should trust us:</p>
                                    <ul className="space-y-4">
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Seamless Process:</strong> We ensure a hassle-free registration process, managing all paperwork for you.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Dedicated Support:</strong> Our expert team is always available to guide you through every step of the registration process.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Comprehensive Services:</strong> From vessel registration to licensing, we provide a full range of services tailored to your needs.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Regulatory Compliance:</strong> We stay up to date with all maritime laws and regulations, ensuring your yacht is always compliant.</span></li>
                                        <li className="flex items-start"><span className="text-black font-bold mr-2">•</span> <span><strong>Fast Turnaround:</strong> We work efficiently to minimize downtime, helping you get your registration and licenses completed quickly.</span></li>
                                    </ul>
                                    <Link to="/contact" className="inline-block bg-primary hover:bg-[#e65c00] text-white font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl transition-all uppercase tracking-widest text-xs mt-4">
                                        Get a Free Consultation
                                    </Link>
                                </div>
                                <div className="md:w-1/2">
                                    <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                        <img src={whyChooseImg} alt="Why Choose Us" className="w-full h-auto object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar (Right, 1/4 width) */}
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

                        {/* Recent Posts */}
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

                        {/* Recent Comments */}
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

export default RegistrationServices;

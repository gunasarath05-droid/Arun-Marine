import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Search,
    Calendar,
    User,
    MessageCircle,
    Tag,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    ArrowRight
} from 'lucide-react';
import PageHero from '../PageHero';
import heroBg from '../../assets/images/CR6_2519-Edited.jpg';

const BlogLayout = ({
    category,
    title,
    date,
    author = "Admin",
    comments = "0 Comments",
    featuredImage,
    children
}) => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const recentPosts = [
        { title: "EXCITING NEWS, DUBAI CAPTAINS!", link: "/blog/dubai-captains" },
        { title: "We organize your full-service yacht charter", link: "/blog/yacht-charter" },
        { title: "Discover the Luxurious World of Yachting...", link: "/blog/luxurious-yachting" },
        { title: "Discover Dubai from the Sea", link: "/blog/dubai-from-sea" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
                style={{ scaleX }}
            />

            <PageHero title="Journal" bgImage={heroBg} className="h-[45vh]" />

            <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Floating Social Share (Desktop) */}
                    <div className="hidden lg:block lg:w-16">
                        <div className="sticky top-32 flex flex-col items-center gap-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] -rotate-90 origin-center whitespace-nowrap mb-8 opacity-40">Share Story</span>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100 text-secondary hover:bg-secondary hover:text-white transition-all">
                                <Facebook className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100 text-secondary hover:bg-secondary hover:text-white transition-all">
                                <Twitter className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-100 text-secondary hover:bg-secondary hover:text-white transition-all">
                                <Linkedin className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <div className="bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                                    {category}
                                </div>
                                <div className="h-[1px] w-12 bg-gray-200"></div>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                                    <Calendar className="w-3.5 h-3.5 text-primary" />
                                    <span>{date}</span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-secondary mb-12 leading-[1.1]">
                                {title}
                            </h1>

                            <div className="flex items-center gap-6 mb-16 pb-12 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                        <User className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Written by</p>
                                        <p className="text-sm font-bold text-secondary">{author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Join the discussion</p>
                                        <p className="text-sm font-bold text-secondary">{comments}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[16/9] rounded-sm overflow-hidden mb-20 shadow-[-20px_20px_60px_rgba(0,0,0,0.08)]"
                        >
                            <img src={featuredImage} alt={title} className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Article Content */}
                        <div className="blog-content text-gray-600 font-medium leading-[1.8] text-lg lg:text-xl">
                            {children}
                        </div>

                        {/* Social Share (Mobile) */}
                        <div className="lg:hidden flex items-center gap-4 py-12 border-y border-gray-100 mt-20">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Share:</span>
                            <div className="flex gap-4">
                                <Facebook className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
                                <Twitter className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
                                <Linkedin className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
                            </div>
                        </div>

                        {/* Bottom Tags */}
                        <div className="flex items-center gap-4 mt-20">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-gray-50 px-5 py-2.5 rounded-full text-secondary hover:bg-primary hover:text-white transition-all cursor-pointer">
                                <Tag className="w-3.5 h-3.5" />
                                <span>Dubai Yachting</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-gray-50 px-5 py-2.5 rounded-full text-secondary hover:bg-primary hover:text-white transition-all cursor-pointer">
                                <Tag className="w-3.5 h-3.5" />
                                <span>Maritime News</span>
                            </div>
                        </div>

                        {/* Author Card */}
                        <div className="mt-24 bg-[#FAFAFA] p-12 rounded-sm border-l-8 border-secondary flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white shrink-0">
                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                    <User className="w-12 h-12 text-gray-300" />
                                </div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h4 className="text-2xl font-serif font-bold text-secondary mb-4">Arun Admin</h4>
                                <p className="text-gray-500 leading-relaxed mb-6">Expert in UAE maritime regulations and luxury yachting operations. Dedicated to providing the most reliable registration and support services for captains and yacht owners across the GCC.</p>
                                <Link to="/contact" className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                                    Contact Author <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 space-y-16">
                            {/* Search */}
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-6 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Explore Articles
                                </h4>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Type search..."
                                        className="w-full bg-[#f8f7f5] border-none px-6 py-4 text-sm focus:ring-1 focus:ring-primary placeholder-gray-400"
                                    />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors">
                                        <Search className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Recent News */}
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Latest Stories
                                </h4>
                                <div className="space-y-8">
                                    {recentPosts.map((post, idx) => (
                                        <div key={idx} className="group cursor-pointer">
                                            <Link to={post.link}>
                                                <p className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{idx % 2 === 0 ? "Insights" : "Trending"}</p>
                                                <h5 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors leading-relaxed line-clamp-2 underline decoration-gray-100 group-hover:decoration-primary/30 underline-offset-4">
                                                    {post.title}
                                                </h5>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-secondary p-10 rounded-sm text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <h4 className="text-2xl font-serif font-bold mb-4 relative z-10">Need Expert Counsel?</h4>
                                <p className="text-sm opacity-70 mb-8 relative z-10 font-medium">Get professional advice for your yacht registration or maintenance today.</p>
                                <Link to="/contact" className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-4 px-8 block text-center rounded-sm hover:brightness-110 transition-all relative z-10">
                                    Speak with Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Content Styling */}
            <style>{`
                .blog-content p {
                    margin-bottom: 2rem;
                }
                .blog-content h2, .blog-content h3 {
                    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-top: 3.5rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content h2 { font-size: 2.25rem; }
                .blog-content h3 { font-size: 1.875rem; }
                
                .dropcap::first-letter {
                    float: left;
                    font-size: 4.5rem;
                    line-height: 1;
                    font-weight: 700;
                    margin-right: 0.75rem;
                    margin-top: 0.25rem;
                    color: #c97f1c; /* Primary color fallback */
                    font-family: ui-serif, Georgia, serif;
                }
                
                .premium-quote {
                    position: relative;
                    padding: 3rem;
                    background: #f8f7f5;
                    border-left: 6px solid #1a1a1a;
                    font-style: italic;
                    font-family: ui-serif, Georgia, serif;
                    font-size: 1.25rem;
                    margin: 3.5rem 0;
                    color: #333;
                }
            `}</style>
        </div>
    );
};

export default BlogLayout;

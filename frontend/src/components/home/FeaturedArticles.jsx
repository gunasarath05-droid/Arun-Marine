import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import blog1 from '../../assets/images/Blog01-1-1024x1024.jpeg';
import blog2 from '../../assets/images/Untitled-design-4-630x630.png';
import blog3 from '../../assets/images/Untitled-design-1-1-2-1024x1024.png';
import blog4 from '../../assets/images/Untitled-design-1-630x630.png';

const FeaturedArticles = () => {
    const articles = [
        {
            id: 1,
            title: "EXCITING NEWS, DUBAI CAPTAINS!",
            date: "Mar 10, 2024",
            image: blog1,
            category: "News",
            link: "/blog/dubai-captains"
        },
        {
            id: 2,
            title: "We organize your full-service yacht charter",
            date: "Feb 28, 2024",
            image: blog2,
            category: "Standard",
            link: "/blog/yacht-charter"
        },
        {
            id: 3,
            title: "Discover the Luxurious World of Yachting and Marine Tourism in Dubai",
            date: "Feb 28, 2024",
            image: blog3,
            category: "News",
            link: "/blog/luxurious-yachting"
        },
        {
            id: 4,
            title: "Discover Dubai from the Sea",
            date: "Feb 28, 2024",
            image: blog4,
            category: "Media",
            link: "/blog/dubai-from-sea"
        }
    ];

    // Extended articles for infinite loop
    const extendedArticles = [...articles, ...articles, ...articles];

    const [currentIndex, setCurrentIndex] = useState(articles.length);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll logic
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const handleTransitionEnd = () => {
        if (currentIndex >= articles.length * 2) {
            setCurrentIndex(articles.length);
        } else if (currentIndex < articles.length) {
            setCurrentIndex(articles.length * 2 - 1);
        }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3">
                        <span className="h-[2px] w-8 bg-primary inline-block align-middle mr-2"></span>
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] align-middle">From Our Blog</span>
                        <span className="h-[2px] w-8 bg-primary inline-block align-middle ml-2"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-2">Featured Articles</h2>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: `calc(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth < 1024 ? (window.innerWidth < 768 ? 1 : 2) : 3))}% - ${currentIndex * (32 / (typeof window !== 'undefined' && window.innerWidth < 1024 ? (window.innerWidth < 768 ? 1 : 2) : 3))}px)` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onAnimationComplete={handleTransitionEnd}
                            style={{ display: 'flex' }}
                        >
                            {extendedArticles.map((article, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                                    style={{
                                        width: typeof window !== 'undefined'
                                            ? (window.innerWidth < 768 ? '100%' : window.innerWidth < 1024 ? 'calc(50% - 16px)' : 'calc(33.333% - 21.333px)')
                                            : '33.333%'
                                    }}
                                >
                                    <div className="group cursor-pointer">
                                        <Link to={article.link || "#"}>
                                            <div className="overflow-hidden rounded-xl mb-6 h-80 shadow-lg relative">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary rounded-full">
                                                    {article.category}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-3 font-semibold tracking-wide uppercase">
                                                <span>{article.date}</span>
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <span>By Admin</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary group-hover:text-primary transition-colors leading-tight mb-4 line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] group-hover:underline">Read Article</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="text-center mt-16">
                        <div className="flex justify-center gap-3">
                            {articles.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx + articles.length)}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${(currentIndex % articles.length) === idx ? 'bg-primary w-8' : 'bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticles;

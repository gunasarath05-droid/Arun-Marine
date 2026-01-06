import React from 'react';
import BlogLayout from '../../components/blog/BlogLayout';
import blogImg from '../../assets/images/Blog01-1-1024x1024.jpeg';

const DubaiCaptainsNews = () => {
    return (
        <BlogLayout
            category="News"
            title="EXCITING NEWS, DUBAI CAPTAINS!"
            date="Mar 10, 2024"
            featuredImage={blogImg}
        >
            <p className="dropcap">
                Attention all boat owners and maritime enthusiasts in Dubai! We have some incredible updates to share with our community of captains. As part of our commitment to providing the best marine services in the UAE, we are launching a series of new initiatives designed to make your yachting experience even more seamless.
            </p>

            <h3>Enhanced Registration Services</h3>
            <p>
                We are proud to announce our new express boat registration service. Captains can now complete their ownership transfers and license renewals in record time, thanks to our streamlined digital partnership with local maritime authorities.
            </p>

            <p className="premium-quote">
                "Our mission is to simplify the complexities of maritime regulations so you can spend more time on the water and less time on paperwork."
            </p>

            <h3>Captains' Rewards Program</h3>
            <p>
                Starting this month, we are introducing an exclusive rewards program for our loyal clients. Earn points on every registration, maintenance check, or charter booking and redeem them for premium yachting accessories or service discounts.
            </p>

            <div className="bg-primary p-12 rounded-sm text-white mb-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110"></div>
                <p className="text-2xl font-serif font-bold opacity-95 leading-relaxed text-center relative z-10">
                    Stay tuned for our upcoming "Ramadan Giveaway" where one lucky captain will win a full year of premium yacht maintenance!
                </p>
            </div>

            <p>
                At Arun Marine Services, we believe in building a strong community of maritime professionals and leisure boaters. These updates are just the beginning of what we have planned for 2024. Your satisfaction and ease on the water remain our top priorities.
            </p>
        </BlogLayout>
    );
};

export default DubaiCaptainsNews;

import React from 'react';
import yacht1 from '../../assets/images/IMG-20250623-WA0146-890x664.jpg';
import yacht2 from '../../assets/images/WhatsApp-Image-2025-06-30-at-14-06-38-1-890x664.jpeg';
import yacht3 from '../../assets/images/IMG-20250707-WA0038-890x664.jpg';
import bgYacht from '../../assets/images/bg-yacht.png';
import { Link } from 'react-router-dom';

const FeaturedYachts = () => {
    const yachts = [
        {
            id: 1,
            name: "Luxury Dinner Cruise 124ft",
            Capacity: "300 PAX",
            cabins: "4",
            Departure: "AL SEEF",
            price: "1500 AED/h",
            formattedPrice: "1500 AED",
            per: "/ hour",
            image: yacht1,
            link: "/yacht/luxury-dinner-cruise"
        },
        {
            id: 2,
            name: "BU MUBARAK 85ft",
            Capacity: "41 PAX",
            cabins: "3",
            Departure: "Dubai Marina",
            price: "1200 AED/h",
            formattedPrice: "1200 AED",
            per: "/ hour",
            image: yacht2,
            link: "/yacht/bu-mubarak"
        },
        {
            id: 3,
            name: "MAHBOOB 78ft",
            Capacity: "25 PAX",
            cabins: "3",
            Departure: "Dubai Harbour",
            price: "950 AED/h",
            formattedPrice: "950 AED",
            per: "/ hour",
            image: yacht3,
            link: "/yacht/mahboob"
        }
    ];

    return (
        <section className="py-24 bg-[#fcfcfc] relative">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[95%] bg-fixed bg-repeat"
                style={{ backgroundImage: `url(${bgYacht})` }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-3">
                        <span className="h-[2px] w-8 bg-primary inline-block align-middle mr-2"></span>
                        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs align-middle">Our Fleet</span>
                        <span className="h-[2px] w-8 bg-primary inline-block align-middle ml-2"></span>
                    </div>
                    <h2 className="text-5xl font-serif font-bold text-secondary mb-6">Featured Yachts</h2>
                    {/* Placeholder for the specific separator image in design if available */}
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {yachts.map((yacht) => (
                        <div key={yacht.id} className="bg-white rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-50 flex flex-col">
                            <div className="relative overflow-hidden h-72">
                                <img
                                    src={yacht.image}
                                    alt={yacht.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-0 right-0 bg-primary text-white font-bold py-2 px-5 text-sm z-10 rounded-bl-lg shadow-md">
                                    <span className="text-lg">{yacht.formattedPrice}</span>
                                    <span className="text-xs font-normal opacity-90">{yacht.per}</span>
                                </div>
                            </div>

                            <div className="p-8 text-center flex-grow flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-secondary mb-6 group-hover:text-primary transition-colors">{yacht.name}</h3>

                                <div className="flex justify-center items-center gap-6 text-sm text-gray-500 border-t border-b border-gray-100 py-5 mb-8">
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-semibold text-secondary text-lg">{yacht.Capacity}</span>
                                        <span className="text-[10px] uppercase tracking-wider">Capacity</span>
                                    </div>
                                    <div className="w-px h-10 bg-gray-100"></div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-semibold text-secondary text-lg">{yacht.cabins}</span>
                                        <span className="text-[10px] uppercase tracking-wider">Cabins</span>
                                    </div>
                                    <div className="w-px h-10 bg-gray-100"></div>
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-semibold text-secondary text-lg">{yacht.Departure}</span>
                                        <span className="text-[10px] uppercase tracking-wider">Departure</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Link to={yacht.link} className="text-[#e65c00] font-bold uppercase tracking-wider text-xs">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link to="/yachts" className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-10 rounded shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-wider text-xs">
                        View All Yachts
                    </Link> 
                </div>
            </div>
        </section>
    );
};

export default FeaturedYachts;

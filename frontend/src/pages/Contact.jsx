import React, { useState, useEffect } from 'react';
import { submitContactForm } from '../api';
import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Info, MessageSquare, Facebook, Instagram } from 'lucide-react';

// Images
import contactBg from '../assets/images/JNS1098-1-scaled-e1740201948283.jpg'; // Generic hero
import skylineBg from '../assets/images/CR6_2519-Edited.jpg'; // For bottom banner

const Contact = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitContactForm(formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-white">
            <PageHero title="Contact Us" bgImage={contactBg} />

            {/* Split Content Section */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        {/* Contact Details (Left) */}
                        <div className="md:w-1/3">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-6 md:mb-8">Contact Details</h2>

                            <div className="space-y-8 text-sm text-gray-500 font-medium">
                                <div>
                                    <p className="mb-1">Arun Marine Registration Services</p>
                                    <p className="mb-1">Office No:1</p>
                                    <p className="mb-1">203, Crystal Building</p>
                                    <p className="mb-1">Al Karama,</p>
                                    <p>Dubai, UAE</p>
                                </div>

                                <div>
                                    <p className="text-primary underline">info@marineservices.ae</p>
                                </div>

                                <div>
                                    <p>+971 556595096</p>
                                    <p>+971 (0)4 238 5587</p>
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                        <Facebook className="w-4 h-4" />
                                    </div>
                                    <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                        <Instagram className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Right) */}
                        <div className="md:w-2/3">
                            {status === 'success' ? (
                                <div className="bg-green-50 p-8 rounded-lg text-center border border-green-100">
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-4">Thank you for getting in touch.</p>
                                    <button onClick={() => setStatus('idle')} className="text-primary font-bold hover:underline">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text" name="name" placeholder="Name" required
                                                value={formData.name} onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded focus:border-primary focus:outline-none bg-gray-50 placeholder-gray-400 text-sm"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email" name="email" placeholder="Email Address" required
                                                value={formData.email} onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded focus:border-primary focus:outline-none bg-gray-50 placeholder-gray-400 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text" name="phone" placeholder="Phone"
                                                value={formData.phone} onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded focus:border-primary focus:outline-none bg-gray-50 placeholder-gray-400 text-sm"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Info className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text" name="subject" placeholder="Subject" required
                                                value={formData.subject} onChange={handleChange}
                                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded focus:border-primary focus:outline-none bg-gray-50 placeholder-gray-400 text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                        <textarea
                                            name="message" rows="5" placeholder="How can we help you? Feel free to get in touch!" required
                                            value={formData.message} onChange={handleChange}
                                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded focus:border-primary focus:outline-none bg-gray-50 placeholder-gray-400 text-sm"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" required className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded" />
                                        <span className="text-xs text-gray-400">I agree that my submitted data is being collected and stored.</span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="bg-primary text-white font-bold py-4 px-8 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider text-xs w-48 disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'Sending...' : 'Get In Touch'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Map */}
            <div className="w-full h-[300px] md:h-[400px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.610580977464!2d55.3022!3d25.2415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzI5LjQiTiA1NcKwMTgnMDguMCJF!5e0!3m2!1sen!2sae!4v1631234567890!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map"
                ></iframe>
            </div>

            {/* Bottom Banner CTA */}
            <section className="relative py-16 md:py-24 lg:py-28 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <img src={skylineBg} alt="Dubai Skyline" className="w-full h-full object-cover opacity-60" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2 text-primary">Rental Agency</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 md:mb-8">
                        Looking to Rent or <br />
                        Register Your Yacht?
                    </h2>
                    <button className="bg-primary hover:bg-[#e65c00] text-white font-bold py-4 px-10 rounded shadow-lg transition-transform hover:-translate-y-1 uppercase tracking-widest text-xs">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Contact;

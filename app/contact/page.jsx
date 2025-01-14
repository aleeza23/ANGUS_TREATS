import React from 'react';
import Conatiner from '@/components/Container';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'));

const ContactSection = () => {
    return (
        <Conatiner>
            <section className="text-white body-font relative bg-[#0f0f0f] container mx-auto p-5 sm:p-10 md:p-16">
                <div className="container px-5  mx-auto">
                    <div className="flex flex-col text-center w-full mb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white font-pirata-one tracking-widest">
                            Contact Us
                        </h1>
                      
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder='Enter your name...'
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder='Enter your email...'
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder='Enter your message...'
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-yellow-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                    Send
                                </button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Conatiner>
    );
};

export default ContactSection;

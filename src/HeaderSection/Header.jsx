import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import display from "../assets/display.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const heroImages = [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1600&auto=format&fit=crop",
        // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full">
            <header className="bg-black w-full px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="logo flex gap-3 items-center">
                    <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
                    <p className="text-amber-50 font-semibold text-lg md:text-xl">Ada Psychiatry</p>
                </div>

                <button
                    className="lg:hidden text-amber-50 focus:outline-none cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>

                <nav className="hidden lg:flex gap-6 items-center">
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[15px]">Who we are</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[15px]">Who we Treat</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[15px]">Services</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[15px]">Resources</a>
                    <button className="bg-[linear-gradient(90deg,_#C18C2C_0%,_#FCF38A_50.52%,_#C18C2C_100%)] text-[#16171d] font-sans font-semibold text-[15px] px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity">
                        Book an Appointment
                    </button>
                </nav>
            </header>

            {isMenuOpen && (
                <div className="lg:hidden bg-black w-full px-6 pb-6 flex flex-col gap-4 items-start border-t border-gray-800 pt-4">
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[16px]">Who we are</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[16px]">Who we Treat</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[16px]">Services</a>
                    <a href="#" className="text-amber-50 hover:text-yellow-300 transition-colors font-sans font-medium text-[16px]">Resources</a>
                    <button className="w-full sm:w-auto bg-[linear-gradient(90deg,_#C18C2C_0%,_#FCF38A_50.52%,_#C18C2C_100%)] text-[#16171d] font-sans font-semibold text-[16px] px-8 py-3 rounded-full cursor-pointer mt-2 hover:opacity-90 transition-opacity">
                        Book an Appointment
                    </button>
                </div>
            )}

            <div className="relative w-full h-screen">
                {/* Background image */}
                <img
                    src={heroImages[index]}
                    alt="mental health"
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay left */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute top-1/2 left-16 -translate-y-1/2 text-white max-w-xl">
                    <h1 className="text-6xl font-semibold leading-tight mb-6">
                        NEED A MENTAL <br /> HEALTH PROVIDER?
                    </h1>

                    <p className="text-2xl mb-4">No Look Further</p>

                    <p className="text-xl leading-9 text-gray-200 mb-8">
                        Our goal is to provide a safe, comfortable, and warm environment so that
                        you can openly discuss your mental health needs.
                    </p>

                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] text-black font-medium cursor-pointer">
                        Learn More →
                    </button>

                    {/* Slider dots */}
                    {/* <div className="flex gap-4 mt-16">
                        <div className="w-3 h-3 rounded-full bg-[#C18C2C]" />
                        <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                        <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                        <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                        <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
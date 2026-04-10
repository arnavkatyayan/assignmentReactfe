import React, { useState } from "react";
import Logo from "../assets/logo.png";
import display from "../assets/display.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full">
            <header className="bg-black w-full px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="logo flex gap-3 items-center">
                    <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
                    <p className="text-amber-50 font-semibold text-lg md:text-xl">Ada Psychiatry</p>
                </div>

                <button
                    className="lg:hidden text-amber-50 focus:outline-none"
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

            <div className="w-full relative">
                <img src={display} alt="display image" className="w-full h-[300px] md:h-[450px] lg:h-[565px] object-cover object-center block" />
            </div>
        </div>
    );
}
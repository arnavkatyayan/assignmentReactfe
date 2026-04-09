import React from "react";
import Logo from "../assets/logo.png";
import display from "../assets/display.png";
export default function Header() {
    return (
        <div className="header-class">
            <div className="logo flex gap-2 items-center">
                <img src={Logo} alt="Logo" className="mt-5" />
                <p className="text-amber-50">Ada Psychiatry</p>
            </div>
            <div className="nav-links flex gap-4 items-center mt-5">
                <a
                    href="#"
                    className="text-amber-50 font-sans font-medium text-[14px] leading-[52px] tracking-normal"
                >
                    Who we are
                </a>
                <a
                    href="#"
                    className="text-amber-50 font-sans font-medium text-[14px] leading-[52px] tracking-normal"
                >
                    Who we Treat
                </a>
                <a
                    href="#"
                    className="text-amber-50 font-sans font-medium text-[14px] leading-[52px] tracking-normal"
                >
                    Services
                </a>
                <a
                    href="#"
                    className="text-amber-50 font-sans font-medium text-[14px] leading-[52px] tracking-normal"
                >
                    Resources
                </a>
                <button className="w-3xs bg-[linear-gradient(90deg,_#C18C2C_0%,_#FCF38A_50.52%,_#C18C2C_100%)] text-[#16171d] font-sans font-medium text-[14px] leading-[52px] tracking-normal px-4 py-2 rounded-4xl cursor-pointer">
                    Book an Appointment
                </button>
            </div>
            <div className="display-image">
                <img src={display} alt="display image" className="display-image-dimensions" />
            </div>
        </div>

    );
}
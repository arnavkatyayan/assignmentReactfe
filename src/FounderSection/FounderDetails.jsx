import React from "react";
import founder from "../assets/founder.png"
export default function FounderDetails() {
    return (
        <div className="w-full bg-[#F7EED9] py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                {/* Founder Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={founder}
                        alt="founder"
                        className="w-full max-w-[500px] mx-auto rounded-lg object-cover"
                    />
                </div>

                {/* Founder Content */}
                <div className="w-full lg:w-1/2 border-2 border-[#DAA520] rounded-xl p-6 md:p-8 flex flex-col gap-4 font-sans bg-transparent">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Meet the Founder
                    </h1>

                    <p className="text-xl md:text-2xl font-bold">
                        Lakeisha Appleton
                    </p>

                    <p className="text-lg md:text-xl font-medium">
                        FNP-C, PMHNP- BC
                    </p>

                    <p className="text-base md:text-lg leading-8 font-medium text-gray-800">
                        “Mental health problems don’t define who you are. They are something
                        you experience. You walk in the rain and you feel the rain, but,
                        importantly, YOU ARE NOT THE RAIN.” — Matt Haig
                    </p>

                    <button className="bg-[linear-gradient(90deg,_#C18C2C_0%,_#FCF38A_50.52%,_#C18C2C_100%)] text-[#16171d] font-semibold text-[15px] px-6 py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity w-fit self-center">
                        Learn More →
                    </button>
                </div>
            </div>
        </div>
    );
}
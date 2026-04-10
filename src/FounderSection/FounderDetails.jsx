import React from "react";
import founder from "../assets/founder.png"
export default function FounderDetails() {
    return (
        <div className="w-full bg-[#F7EED9] relative h-[590px] flex justify-center items-center gap-4">
            <img src={founder} alt="founder" className="absolute top-10 left-70 w-[35%]" />
            <div className="absolute top-10 right-40 w-[35%] h-[457px] border-3 border-[#DAA520] rounded-lg flex flex-col gap-4 pt-[10px]">
                <h1 className="text-4xl font-bold">Meet the Founder</h1>
                <p className="text-2xl font-bold">Lakeisha Appleton</p>
                <p className="text-2xl font-medium">FNP-C, PMHNP- BC</p>
                <p className="text-xl font-medium">
                    “Mental health problems don’t define who you are. They are something you experience.
                    You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.”
                    — Matt Haig
                </p>
                <button className="bg-[linear-gradient(90deg,_#C18C2C_0%,_#FCF38A_50.52%,_#C18C2C_100%)] text-[#16171d] font-sans font-semibold text-[15px] px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity w-[200px] self-center">
                    Learn More →
                </button>
            </div>
        </div>
    );
}
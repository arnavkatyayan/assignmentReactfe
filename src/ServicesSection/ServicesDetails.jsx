import React, { useState } from "react";
import psych from "../assets/PsychiatricEvaluation.webp";
import psych2 from "../assets/PsychiatricEvaluation2.webp";
import psych3 from "../assets/PsychiatricEvaluation3.webp";
import psych4 from "../assets/PsychiatricEvaluation4.webp";
import psych5 from "../assets/PsychiatricEvaluation5.webp";
import psych6 from "../assets/PsychiatricEvaluation6.webp";
export default function ServicesDetails() {
    const [openReason, setOpenReason] = useState(0);

    const reasons = [
        {
            title: "Convenient access",
            description: "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
        },
        {
            title: "Concierge approach",
            description: "We provide highly personalized, direct care to ensure your specific needs are met promptly and comprehensively.",
        },
        {
            title: "High quality service",
            description: "Our dedicated professionals employ evidence-based approaches to deliver the best possible outcomes for your mental health.",
        },
        {
            title: "Trusted and empathic providers",
            description: "Our warm, compassionate team is committed to creating a safe, non-judgmental space for your journey to wellness.",
        }
    ];

    const treatmentFocus = [
        {
            title: "Mental health",
            description:
                "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions.",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Addiction and recovery",
            description:
                "Addiction is a chronic dysfunction of the brain system. We assess your risk for addiction and create a comprehensive treatment plan to start your recovery.",
            image:
                "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1000&auto=format&fit=crop",
        },
        {
            title: "Supervised Medical Weight Loss",
            description:
                "Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.",
            image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
        },
    ];

    const services = [
        {
            title: "Psychiatric Evaluation",
            icon: psych,
        },
        {
            title: "Medication Management",
            icon: psych2,
        },
        {
            title: "Supportive Psychotherapy",
            icon: psych3,
        },
        {
            title: "ADHD Screening",
            icon: psych4,
        },
        {
            title: "MAT Treatment",
            icon: psych5,
        },
        {
            title: "Gene Sight Testing",
            icon: psych6,
        },
    ];

    return (
        <div className="w-full bg-[#FBF6EC] py-20">
            <h4 className="text-5xl font-semibold text-center mb-16">
                Our Treatment Focus
            </h4>

            <div className="max-w-6xl mx-auto space-y-24">
                {treatmentFocus.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? "direction-rtl" : ""
                            }`}
                    >
                        <div
                            className={`flex ${index % 2 !== 0 ? "justify-end order-2" : "justify-start"
                                }`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-72 h-72 rounded-full object-cover border-2 border-[#C18C2C]"
                            />
                        </div>

                        <div className={`${index % 2 !== 0 ? "order-1" : ""}`}>
                            <h2 className="text-3xl font-semibold mb-6">{item.title}</h2>
                            <p className="text-lg leading-9 text-gray-700 mb-6">
                                {item.description}
                            </p>
                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] text-[#16171d] font-semibold text-[15px] cursor-pointer hover:opacity-90 transition-opacity mt-4">
                                Learn More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 bg-black py-20 text-center text-white relative border-y-[5px] border-[#C18C2C]">
                <p className="text-4xl text-[#C18C2C] mb-4">❝</p>
                <p className="text-2xl font-semibold">
                    We help people living with and experiencing difficult times
                </p>
            </div>
            <div className="bg-[#FBF6EC] py-20">
                <h2 className="text-5xl font-semibold text-center mb-16">
                    Our Services
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-6 gap-8 text-center mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-[#F5EEDC] border border-[#C18C2C] flex items-center justify-center mb-4">
                                <span className="text-2xl text-[#C18C2C]"><img src={service.icon} alt="" /></span>
                            </div>
                            <p className="text-lg font-medium leading-7">{service.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-24">
                    <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] font-medium cursor-pointer">
                        View our services →
                    </button>
                </div>

                <div className="bg-[#F5EEDC] py-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1200&auto=format&fit=crop"
                                alt="therapy"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-5xl font-semibold mb-10">
                                Why Should You Choose <br /> Ada Psychiatry?
                            </h2>

                            <div className="space-y-8 text-2xl">
                                {reasons.map((reason, i) => (
                                    <div key={i} className={`pb-4 ${i !== reasons.length - 1 ? "border-b border-[#C18C2C]" : ""}`}>
                                        <div
                                            className="flex items-center gap-3 cursor-pointer hover:text-[#C18C2C] transition-colors duration-300"
                                            onClick={() => setOpenReason(openReason === i ? null : i)}
                                        >
                                            <span className="text-[#C18C2C] w-6 text-center">
                                                {openReason === i ? '—' : '+'}
                                            </span>
                                            <p className="font-semibold">{reason.title}</p>
                                        </div>
                                        {openReason === i && (
                                            <div className="mt-3 pl-9">
                                                <p className="text-lg text-gray-700 leading-8">
                                                    {reason.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
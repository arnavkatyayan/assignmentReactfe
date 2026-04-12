import React from "react";
import service1 from "../assets/Services1.webp"
import service2 from "../assets/Services2.webp"
import service3 from "../assets/Services3.webp"
import service4 from "../assets/Services4.webp"
export default function Testimonials() {
    const testimonials = [
        {
            text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach. Really helpful!",
            name: "Carl Rowan",
            company: "Aglets Inc",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
        },
        {
            text: "The support felt warm and very professional. It gave me confidence and peace in difficult moments.",
            name: "Sophia James",
            company: "MindCare",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
        },
        {
            text: "Booking and virtual consultation process was super smooth. I felt heard and understood.",
            name: "David Smith",
            company: "Wellness Co",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop",
        },
    ];

    return (
        <div className="bg-[#FBF6EC] pt-12 pb-24 top-0">
            <h2 className="text-5xl font-semibold text-center mb-16">
                What Our Patients Are Saying
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#F7F1E4] rounded-2xl overflow-hidden shadow-sm flex flex-col h-full"
                    >
                        <div className="p-10 flex-grow flex flex-col justify-center min-h-[300px]">
                            <p className="text-5xl mb-6 text-[#C18C2C]">❝</p>
                            <p className="text-lg leading-8 text-gray-700">
                                {item.text}
                            </p>
                        </div>

                        <div className="bg-[#C18C2C] px-8 py-5 flex items-center gap-4 mt-auto">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-14 h-14 rounded-full object-cover border-2 border-white"
                            />
                            <div className="text-white">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm">{item.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-3 mt-10">
                <div className="w-3 h-3 rounded-full bg-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
            </div>
            <div className="bg-black py-24 text-white mt-10 border-y-[5px] border-[#C18C2C]">
                <p className="text-4xl font-semibold text-center mb-16 text-[#C18C2C] bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] bg-clip-text">
                    Four Simple Steps To <br /> Get Started
                </p>

                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center mb-16">
                    {[
                        {
                            icon: service1,
                            step: "01",
                            title: "Schedule an appointment",
                        },
                        {
                            icon: service2,
                            step: "02",
                            title: "Connect with your provider",
                        },
                        {
                            icon: service3,
                            step: "03",
                            title: "Create your treatment plan",
                        },
                        {
                            icon: service4,
                            step: "04",
                            title: "Begin your mental wellness journey",
                        },
                    ].map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                                <span className="text-2xl text-[#C18C2C]">
                                    <img src={item.icon} alt="" className="w-10 h-10" />
                                </span>

                                {index < 3 && (
                                    <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-[120px] ml-4 border-t-[4px] border-dotted border-[#C18C2C]"></div>
                                )}
                            </div>
                            <span className="text-2xl text-[#C18C2C]">{item.step}</span>

                            <p className="text-lg leading-8 max-w-[200px]">{item.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] text-black font-medium">
                        Schedule a Call →
                    </button>
                </div>
            </div>
        </div>
    );
}
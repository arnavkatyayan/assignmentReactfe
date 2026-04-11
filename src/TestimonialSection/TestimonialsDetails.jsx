import React from "react";

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
        <div className="bg-[#FBF6EC] py-24">
            <h2 className="text-5xl font-semibold text-center mb-16">
                What Our Patients Are Saying
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#F7F1E4] rounded-2xl overflow-hidden shadow-sm"
                    >
                        <div className="p-10 min-h-[260px]">
                            <p className="text-5xl mb-6">❝</p>
                            <p className="text-lg leading-8 text-gray-700">
                                {item.text}
                            </p>
                        </div>

                        <div className={`bg-[#C18C2C] px-8 py-5 flex items-center gap-4 ${index > 0 ? "mt-15" : ""}`}>
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

            {/* dots */}
            <div className="flex justify-center gap-3 mt-10">
                <div className="w-3 h-3 rounded-full bg-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
                <div className="w-3 h-3 rounded-full border border-[#C18C2C]" />
            </div>
            {/* Four Simple Steps */}
            <div className="bg-black py-24 text-white mt-10">
                <h2 className="text-5xl font-semibold text-center mb-16">
                    Four Simple Steps To <br /> Get Started
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center mb-16">
                    {[
                        {
                            step: "01",
                            title: "Schedule an appointment",
                        },
                        {
                            step: "02",
                            title: "Connect with your provider",
                        },
                        {
                            step: "03",
                            title: "Create your treatment plan",
                        },
                        {
                            step: "04",
                            title: "Begin your mental wellness journey",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* icon circle */}
                            <div className="w-20 h-20 rounded-full border border-[#C18C2C] flex items-center justify-center mb-6">

                                <span className="text-2xl text-[#C18C2C]">{item.step}</span>

                            </div>


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
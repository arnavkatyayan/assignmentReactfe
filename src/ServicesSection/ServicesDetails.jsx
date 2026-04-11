import React from "react";

export default function ServicesDetails() {
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

    return (
        <div className="w-full bg-[#FBF6EC] py-20">
            <h1 className="text-4xl font-bold text-center mb-20">
                Our Treatment Focus
            </h1>

            <div className="max-w-6xl mx-auto space-y-24">
                {treatmentFocus.map((item, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? "direction-rtl" : ""
                            }`}
                    >
                        {/* Image */}
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

                        {/* Text */}
                        <div className={`${index % 2 !== 0 ? "order-1" : ""}`}>
                            <h2 className="text-3xl font-semibold mb-6">{item.title}</h2>
                            <p className="text-lg leading-9 text-gray-700 mb-6">
                                {item.description}
                            </p>
                            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]">
                                Learn More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Black quote section */}
            <div className="mt-24 bg-black py-20 text-center text-white relative">
                <p className="text-4xl text-[#C18C2C] mb-4">❝</p>
                <p className="text-2xl font-semibold">
                    We help people living with and experiencing difficult times
                </p>
            </div>
            {/* Services Section */}
            <div className="bg-[#FBF6EC] py-20">
                <h2 className="text-5xl font-semibold text-center mb-16">
                    Our Services
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-6 gap-8 text-center mb-16">
                    {[
                        "Psychiatric Evaluation",
                        "Medication Management",
                        "Supportive Psychotherapy",
                        "ADHD Screening",
                        "MAT Treatment",
                        "Gene Sight Testing",
                    ].map((service, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-[#F5EEDC] border border-[#C18C2C] flex items-center justify-center mb-4">
                                <span className="text-2xl text-[#C18C2C]">✦</span>
                            </div>
                            <p className="text-lg font-medium leading-7">{service}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mb-24">
                    <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] font-medium">
                        View our services →
                    </button>
                </div>

                {/* Why choose section */}
                <div className="bg-[#F5EEDC] py-20">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1200&auto=format&fit=crop"
                                alt="therapy"
                                className="w-full h-[420px] object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-5xl font-semibold mb-10">
                                Why Should You Choose Ada Psychiatry?
                            </h2>

                            <div className="space-y-6 text-2xl">
                                <div className="border-b border-[#C18C2C] pb-4">
                                    <p>— Convenient access</p>
                                    <p className="text-lg text-gray-700 mt-3 leading-8">
                                        We offer in-person and virtual psychiatry services where you can
                                        meet your provider in person or at the convenience of your own
                                        home.
                                    </p>
                                </div>

                                <div className="border-b border-[#C18C2C] pb-4">
                                    <p>+ Concierge approach</p>
                                </div>

                                <div className="border-b border-[#C18C2C] pb-4">
                                    <p>+ High quality service</p>
                                </div>

                                <div>
                                    <p>+ Trusted and empathic providers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React from "react";
export default function StatesFaqFooter() {
    const states = [
        {
            name: 'Arizona',
            type: 'In-person and Virtual appointment',
            image:
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: 'Washington',
            type: 'Virtual appointment',
            image:
                'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=1200&auto=format&fit=crop',
        },
        {
            name: 'Oregon',
            type: 'Virtual appointment',
            image:
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
        },
    ];

    const faqs = [
        'Is Ada psychiatry confidential?',
        'What is the best way to schedule a appointment?',
        'Do you prescribe controlled substance medication?',
        'How long does the initial appointment take?',
    ];

    return (
        <section className="w-full bg-[#F8F2E7] pt-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-4xl font-serif font-semibold text-[#1E1E1E]">
                    Now Accepting Patients In The
                    <br />
                    Following States
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
                    {states.map((state) => (
                        <div key={state.name} className="text-center group cursor-pointer">
                            <div className="w-[240px] h-[140px] mx-auto overflow-hidden rounded-t-full rounded-b-none">
                                <img
                                    src={state.image}
                                    alt={state.name}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:h-[220px]"
                                />
                            </div>
                            <h3 className="mt-4 text-2xl font-serif">{state.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{state.type}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-serif font-semibold">
                        Frequently asked questions
                    </h2>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border-b border-[#d9cfbc] py-4 flex items-center gap-4"
                            >
                                <span className="text-2xl">+</span>
                                <p className="text-lg">{faq}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] font-medium">
                            See all FAQ →
                        </button>
                    </div>
                </div>
            </div>

            <footer className="bg-black text-white mt-16">
                <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div>
                        <h4 className="text-[#C18C2C] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Who We Are</li>
                            <li>What We Treat</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#C18C2C] mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>FAQs</li>
                            <li>Blog</li>
                            <li>Fees and Insurance</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#C18C2C] mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#C18C2C] mb-4">Business Hours</h4>
                        <p className="text-sm text-gray-300">Monday - Thursday</p>
                        <p className="text-sm text-gray-300">09:00 AM - 04:00 PM</p>
                    </div>

                    <div>
                        <h4 className="text-[#C18C2C] mb-4">ADA PSYCHIATRY</h4>
                        <p className="text-sm text-gray-300">Chandler, Arizona</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-400">
                    © Ada Psychiatry. All rights reserved.
                </div>
            </footer>
        </section>
    );
}

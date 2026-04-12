import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
export default function StatesFaqFooter() {
    const [openFaq, setOpenFaq] = useState(null);
    const handleFaqClick = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
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

    // const faqs = [
    //     'Is Ada psychiatry confidential?',
    //     'What is the best way to schedule a appointment?',
    //     'Do you prescribe controlled substance medication?',
    //     'How long does the initial appointment take?',
    // ];

    const faqs = [
        {
            question: 'Is Ada psychiatry confidential?',
            answer: 'Yes, all appointments and discussions with our psychiatrists are strictly confidential. We adhere to HIPAA regulations to protect your privacy.',
        },
        {
            question: 'What is the best way to schedule an appointment?',
            answer: 'You can schedule an appointment by calling our office at [Phone Number] or by using our online booking system on the website. For new patients, we recommend scheduling an initial consultation to discuss your needs.',
        },
        {
            question: 'Do you prescribe controlled substance medication?',
            answer: 'Yes, our psychiatrists are licensed to prescribe controlled substances when medically necessary. Each case is evaluated individually to ensure safe and appropriate treatment.',
        },
        {
            question: 'How long does the initial appointment take?',
            answer: 'The initial consultation typically lasts between 45 to 60 minutes. This allows us to gather comprehensive information about your medical history, current concerns, and treatment goals.',
        },
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
                            <div className="w-[240px] h-[140px] mx-auto overflow-hidden rounded-t-full rounded-b-none transition-all duration-500 group-hover:rounded-full group-hover:h-[240px]">
                                <img
                                    src={state.image}
                                    alt={state.name}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="mt-4 text-2xl font-serif">{state.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{state.type}</p>
                        </div>
                    ))}
                    {/* <div className="group cursor-pointer text-center">
  <div className="w-[240px] h-[140px] mx-auto overflow-hidden rounded-t-full rounded-b-none transition-all duration-500 group-hover:rounded-full group-hover:h-[240px]">
    <img
      src={state.image}
      alt={state.name}
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
    />
  </div>
</div> */}
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <h2 className="text-center text-4xl font-serif font-semibold">
                        Frequently asked questions
                    </h2>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border-b border-[#d9cfbc] py-4"
                            >
                                <div 
                                    className="flex items-center gap-4 cursor-pointer hover:text-[#C18C2C] transition-colors duration-300"
                                    onClick={() => handleFaqClick(i)}
                                >
                                    <span className="text-2xl w-6 text-center">
                                        {openFaq === i ? '-' : '+'}
                                    </span>
                                    <p className="text-lg">{faq.question}</p>
                                </div>
                                {openFaq === i && (
                                    <div className="mt-4 pl-10 text-gray-700">
                                        <p className="leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] font-medium cursor-pointer hover:opacity-90 transition-opacity">
                            See all FAQ →
                        </button>
                    </div>
                </div>
            </div>

            <footer className="bg-black text-white mt-16 border-t-[5px] border-[#C18C2C]">
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
                        <ul>
                            <li>
                                <div className="flex items-center gap-3 whitespace-nowrap">
                                    <img src={Logo} alt="Logo" className="w-10 h-10" />
                                    <p className="text-amber-50 font-semibold text-lg md:text-xl">
                                        ADA PSYCHIATRY
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h4 className="text-[#C18C2C] mb-4">Locate us</h4>
                                    <p className="text-sm text-gray-300 mt-1">
                                        1920 E Ray Road, STE 401, Chandler, Arizona 85225
                                    </p>

                                    <h4 className="text-[#C18C2C] mb-4 mt-5">Follow us on</h4>
                                    <div className="flex gap-3 mt-2 text-sm text-gray-300">
                                        <span className="cursor-pointer hover:text-[#C18C2C] transition-colors duration-300">Instagram</span>
                                        <span className="cursor-pointer hover:text-[#C18C2C] transition-colors duration-300">Facebook</span>
                                        <span className="cursor-pointer hover:text-[#C18C2C] transition-colors duration-300">LinkedIn</span>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 py-4 text-center block cursor-pointer whitespace-nowrap"
                    style={{
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '20px',
                        fontFamily: '"Work Sans", sans-serif',
                        color: '#fff',
                        // marginBottom: '14px'
                    }}
                >
                    © Ada Psychiatry. All rights reserved.2026
                </div>
            </footer>
        </section>
    );
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client"
// components/FullScreenPinnedPanels.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetInTouchSection from "./GetInTouchSection";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineAudiotrack, MdOutlineEnergySavingsLeaf, MdOutlineSecurity } from "react-icons/md";
import { FaAlignCenter, FaRegLightbulb, FaSwimmingPool, FaUniversalAccess } from "react-icons/fa";
import { GiSausagesRibbon } from "react-icons/gi";
import { GoMirror } from "react-icons/go";
import { BsShadows } from "react-icons/bs";
import { SiCodeclimate } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function FullScreenPinnedPanels() {
    const containerRef = useRef(null);


    useEffect(() => {
        if (!containerRef.current) return;

        // Select all panels using the data-panel attribute
        const panels = gsap.utils.toArray(
            containerRef.current.querySelectorAll("[data-panel]")
        );

        // Create a pinning ScrollTrigger for each panel.
        // Since every panel is 100vh, we use "top top" as the start.
        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
            });
        });

        // Cleanup: kill all ScrollTriggers on component unmount.
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Common inline style for all panels (full viewport height)
    const commonPanelStyle = {
        height: "100vh",
    };

    // Inline styles for each panel
    const descriptionPanelStyle = {
        ...commonPanelStyle,
        position: "relative", // to position the scroll down indicator
    };


    const redPanelStyle = {
        ...commonPanelStyle,
    };

    const orangePanelStyle = {
        ...commonPanelStyle
    };

    const purplePanelStyle = {
        ...commonPanelStyle
    };

    const greenPanelStyle = {
        ...commonPanelStyle
    };

    const projectImages = [
        {
            id: 1,
            title: "Audio",
            description: "With multiroom audio, you can choose between playing the same or different music in every room. Listen to your favorite playlists on your favorite streaming services or stream music directly with your smartphone.",
            icon: <MdOutlineAudiotrack className="w-20 h-20 text-primary" />
        },
        {
            id: 2,
            title: "Security",
            description: "Security in a Loxone Smart Home has many aspects: scaring off burglars, protecting you and your loved ones from fire and water damage, keeping watch over your building and making sure your data is 100% private.",
            icon: <MdOutlineSecurity className="w-20 h-20 text-primary" />
        },
        {
            id: 3,
            title: "Access",
            description: "Customize your access control according to your wishes: with the Loxone Intercom, the NFC Key Fob as a key alternative, a silent light bell and much more.",
            icon: <FaUniversalAccess className="w-20 h-20 text-primary" />
        },
        {
            id: 4,
            title: "Sauna",
            description: "Heat, lighting and music blend together perfectly in your Loxone automated Sauna. Build your own personal spa according to your requirements – and have more time to relax.",
            icon: <GiSausagesRibbon className="w-20 h-20 text-primary" />
        },
        {
            id: 5,
            title: "Pool",
            description: "Pool care means pH monitoring, water treatment, filtering, backwashing and much more. With Loxone, all of those tasks are automated.",
            icon: <FaSwimmingPool className="w-20 h-20 text-primary" />
        },
        {
            id: 6,
            title: "Irrigation",
            description: "Whether you’re a garden owner, landlord, farmer or groundskeeper – thanks to its incredible flexibility, Loxone is the perfect automation solution for all irrigation needs.",
            icon: <GoMirror className="w-20 h-20 text-primary" />
        },
        {
            id: 7,
            title: "AAL",
            description: "One of the most important wishes of anyone getting older is being able to stay at home for as long as possible. Loxone can play an important role in making that wish come true.",
            icon: <FaAlignCenter className="w-20 h-20 text-primary" />
        },
        {
            id: 8,
            title: "Energy",
            description: "Shading, lighting, heating and much more work in perfect harmony in a Loxone Smart Home. That’s why smart energy management turns into child’s play and your own home actively helps you save on energy costs.",
            icon: <MdOutlineEnergySavingsLeaf className="w-20 h-20 text-primary" />
        },
        {
            id: 9,
            title: "Lighting",
            description: "Lighting control in your Loxone Smart Home provides you with the right atmosphere for the right occasion. And every lighting mood can be adjusted to your preferences.",
            icon: <FaRegLightbulb className="w-20 h-20 text-primary" />
        },
        {
            id: 10,
            title: "Shading",
            description: "Venetian blinds, roller blinds, awnings or other types of shades can be controlled by Loxone, helping you to keep your home cool in the summer and warm in winter.",
            icon: <BsShadows className="w-20 h-20 text-primary" />
        },
        {
            id: 11,
            title: "Climate",
            description: "Individual temperature control for every room. In perfect unison with the automated shading, the sun can be used to heat up rooms.",
            icon: <SiCodeclimate className="w-20 h-20 text-primary" />
        },
    ];

    return (
        <>
            <div ref={containerRef} className="bg-secondary">
                
                <div style={descriptionPanelStyle} className="mb-36">
                    <h2 className="text-primary text-4xl font-bold mb-2 w-fit pt-16 mx-auto">
                            360-Degree Solution
                        </h2>
                        <p className="text-light text-center text-base mt-5 max-w-5xl mx-auto">
                            From automated shading, lighting and multiroom audio, all the way to security, access control and energy management. Loxone turns your home into a place that understands your needs and reacts accordingly. The 360-degree solution encompasses each and every aspect of a smart home, and provides you with an unmatched living experience.
                        </p>
                    <div className="container mx-auto py-20">
                        <Swiper
                            modules={[Navigation]}
                            navigation
                            loop={true}
                            effect="coverflow"
                            spaceBetween={0}
                            centeredSlides={true}
                            speed={900}
                            pagination={{
                                el: '.swiper-pagination',
                            }}
                            slidesPerView={1}
                            // Default: 1 slide per view (mobile)
                            coverflowEffect={{
                                slideShadows: true,
                                depth: 90
                            }}
                            breakpoints={{
                                // When window width is >= 768px, show 3 slides per view.
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="relative"
                        >
                            {projectImages.map((project) => (
                                <SwiperSlide key={project.id} className="group relative">
                                    <div className="card">
                                        <div className="card-container flex flex-col gap-10 p-10 items-center">
                                            {project.icon}
                                            <h3 className="text-3xl font-bold">{project.title}</h3>
                                            <p className="text-center">{project.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <section data-panel style={redPanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    <div className="w-full h-full">
                        <img
                            src="https://images.pexels.com/photos/5334179/pexels-photo-5334179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    {/* Text Column */}
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                        <img src="/assets/img/IC_House-Love@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                            More Time to Live
                        </h2>
                        <p className="text-light text-base">
                        It’s a way of life, focusing on comfort, security and energy efficiency. With Loxone, you can design your home according to your preferences, needs and lifestyle. And because your home takes care of most tasks for you, you’ll have more time for the truly important things in life.
                        </p>
                    </div>
                </section>
                <section data-panel style={orangePanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    {/* Text Column */}
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                    <img src="/assets/img/IC_House-Heart@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                            360-Degree Solution
                        </h2>
                        <p className="text-light text-base">
                            From automated shading, lighting and multiroom audio, all the way to security, access control and energy management. Loxone turns your home into a place that understands your needs and reacts accordingly. The 360-degree solution encompasses each and every aspect of a smart home, and provides you with an unmatched living experience.
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <img
                            src="https://images.pexels.com/photos/5805486/pexels-photo-5805486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>

                </section >
                <section data-panel style={purplePanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    <div className="w-full h-full">
                        <img
                            src="https://img.freepik.com/free-photo/concept-family-virus-protection_493343-30172.jpg?t=st=1739976183~exp=1739979783~hmac=a95fdf597dba6ba9a97c363562170574ea613f56302ee8f382b62c7e1d05662d&w=996"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    {/* Text Column */}
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                    <img src="/assets/img/IC_Lock-Closed@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                            More security, less worries
                        </h2>
                        <p className="text-light text-base">
                            Burglaries, fires, water damage or personal accidents in a home can sadly happen at any time. However, a Loxone automated building knows when an unwanted visitor wants to access your home, when there’s smoke from a fire or water from a burst pipe, or when an elderly person takes a fall. Loxone is vigilant at all times, protecting you, your loved ones and your home.
                        </p>
                    </div>

                </section>
                <section data-panel style={greenPanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                    <img src="/assets/img/IC_Trinkgeld@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                            Save up to 51% of your HVAC costs
                        </h2>
                        <p className="text-light text-base">
                            When you’re not home, your Loxone Smart Home saves energy by powering down your heating or cooling. Before your come back, Loxone will bring your home back to your comfort temperature, providing you with a pleasant room climate at all times, while saving energy and money.
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <img
                            src="https://images.pexels.com/photos/18485666/pexels-photo-18485666/free-photo-of-smart-home-devices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    {/* Text Column */}

                </section>
                <section data-panel style={purplePanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    <div className="w-full h-full">
                        <img
                            src="https://images.pexels.com/photos/6856830/pexels-photo-6856830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    {/* Text Column */}
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                    <img src="/assets/img/IC_Smartphone-Check@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                        Easy operation via Touch Switch or App
                        </h2>
                        <p className="text-light text-base">
                        Loxone takes care of many things on its own. Still, you can intervene manually at any time. Our innovative Touch switches enable you to manage all functions of a room with just one control element. In addition, we also have a beautifully designed Loxone App, that puts the entire functionality of your Loxone Smart Home into the palm of your hand.
                        </p>
                        <p className="text-light text-base mt-2 mr-auto">
                        Simplicity and comfort are not optional at Loxone, they’re our standard.
                        </p>
                    </div>

                </section>
                <section data-panel style={greenPanelStyle} className="grid grid-cols-1 md:grid-cols-2 bg-secondary">
                    <div className=" p-8 h-full flex items-center flex-col justify-center">
                    <img src="/assets/img/ic-cloudfree@3x.png.webp" width={70}
        height={70} alt="" />
                        <h2 className="text-primary text-4xl font-bold mb-2 mt-6">
                        Smart Home – without Cloud
                        </h2>
                        <p className="text-light text-base">
                        Many smart home providers collect an enormous amount of personal data – and in the worst case, sell it to third parties. We at Loxone decided the moment we were founded that our customer’s data is neither collected nor analyzed. If you turn on the lights in your home, that stays between you and your Miniserver.
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <img
                            src="https://images.pexels.com/photos/4790262/pexels-photo-4790262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Technology Background"
                            className=" h-full w-full object-cover"
                        />
                    </div>
                    {/* Text Column */}

                </section>


                <div className="pt-[100vh]">
                    <GetInTouchSection></GetInTouchSection>
                    <Footer></Footer>
                </div>
            </div >
        </>
    );
}

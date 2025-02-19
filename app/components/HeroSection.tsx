"use client";
import { motion } from "framer-motion";

// Define the hero content animation variant (fade in with a zoom-in effect).
const heroVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 1 } },
};

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full">
            {/* Background Video & Overlay */}
            {/* Background Video & Overlay */}
            <div className="absolute inset-0">
                
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/assets/video/Hero_BG.webm"
                    className="object-cover w-full h-full"
                >
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black opacity-30" />
                
            </div>

            {/* Hero Section Content Positioned at the Bottom */}
            {/* Hero Section Content Positioned at the Bottom */}
            <motion.div
                className="relative z-10 flex flex-col justify-end items-center h-full text-center px-4 pb-20 md:pb-52"
                variants={heroVariant}
                initial="hidden"
                animate="visible"
            >
                <p className="text-light text-xl mb-4">Welcome to</p>
                <h1 className="text-primary text-4xl md:text-7xl font-bold">
                    Building Automation <br /> that Works for You
                </h1>
            </motion.div>
        </section>
    );
};

export default HeroSection;

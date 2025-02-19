"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Define animation variants for sliding in from left and right.
const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

// // Define an extra variant for fading in and sliding up.
// const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// Reusable component that animates its children when they enter/leave the viewport.
const AnimatedItem = ({
    children,
    variant,
    className = "",
}: {
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant: any;
    className?: string;
}) => {
    const controls = useAnimation();
    const ref = useRef(null);
    // Set once to false so the animation can trigger every time the element enters/leaves the viewport.
    const inView = useInView(ref, { amount: 0.3, once: false });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={variant}
        >
            {children}
        </motion.div>
    );
};

export default function page() {
    return (
        <div className="space-y-12 bg-secondary py-40 overflow-hidden">
            {/* Section 1: Image left, text right */}
            <section className="container mx-auto flex flex-col md:flex-row items-center overflow-hidden">
                {/* Image Column */}
                <AnimatedItem variant={slideInLeft} className="w-full md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Technology Background"
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl border-4 border-primary"
                    />
                </AnimatedItem>
                {/* Text Column */}
                <AnimatedItem variant={slideInRight} className="w-full md:w-1/2 p-8">
                    <h2 className="text-primary text-4xl font-bold mb-2">
                        Energy Management
                    </h2>
                    <p className="text-light text-base">
                        For investors, operators as well as users of buildings, an investment in
                        building automation is worthwhile. The additional effort or costs for
                        intelligent building technology are usually amortized in a few years thanks
                        to high potential savings. This makes it a worthwhile investment for investors
                        and sustainable resource-saving construction is in great demand.
                    </p>
                </AnimatedItem>
            </section>


        </div>
    );
}

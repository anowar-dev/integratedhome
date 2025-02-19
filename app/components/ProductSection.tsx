"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

// Animation variant: fade in and slide up.
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

interface AnimatedItemProps {
    children: React.ReactNode;
    variant: Variants;
    className?: string;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
    children,
    variant,
    className = "",
}) => {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
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

interface Product {
    id: number;
    title: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Smart Thermostat",
        image:
            "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 2,
        title: "Automated Lighting",
        image:
            "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 3,
        title: "Security Systems",
        image:
            "https://images.pexels.com/photos/256234/pexels-photo-256234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 4,
        title: "Energy Monitoring",
        image:
            "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 5,
        title: "Smart Locks",
        image:
            "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 6,
        title: "Climate Control",
        image:
            "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

const ProductSection: React.FC = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Title and Description */}
                <AnimatedItem variant={fadeInUp} className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-secondary mb-4">
                        Our Products
                    </h2>
                    <p className="text-lg text-secondary">
                        Discover our innovative products designed to make your environment
                        smarter and more efficient.
                    </p>
                </AnimatedItem>

                {/* Products Grid with no gap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
                    
                    {products.map((product) => (
                        <AnimatedItem
                            key={product.id}
                            variant={fadeInUp}
                            className="group relative overflow-hidden"
                        >
                            {/* Image Container: fixed height with responsive width */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Overlay: initially hidden; shows on hover with background overlay and title */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-xl font-semibold">
                                        {product.title}
                                    </h3>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;

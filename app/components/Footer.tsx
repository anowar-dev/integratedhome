"use client";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-secondary  border-light ">
            <div className="container mx-auto px-4 text-light py-12 border-t">
                {/* Main content grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Branding */}
                    <div>
                        <Link href="/"><h1 className="text-3xl font-bold text-primary mb-4">integratedhome.</h1></Link>
                        {/* Optionally, include a tagline here */}
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/products">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Categories</h2>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#">
                                    Energy Management
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Security &amp; Access Control
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Smart Lighting Control
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/support">
                                    Support
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    {/* Contact & Social */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact</h2>
                        <ul className="space-y-2 text-sm">
                            <li>1300 560 221</li>
                            <li>
                                <Link href="mailto:admin@integratedhomesolutions.com.au">
                                    admin@integratedhomesolutions.com.au
                                </Link>
                            </li>
                            <li>Fy 7/490 Frankston-Dandenong Road</li>
                            <li>Carrum Downs VIC 3201</li>
                        </ul>
                        <h2 className="text-xl font-bold mt-6 mb-4">Follow Us</h2>
                        <ul className="flex space-x-4 justify-center md:justify-start">
                            <li>
                                <Link target="_blank" href="#" className="hover:underline">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" href="#" className="hover:underline">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link target="_blank" href="#" className="hover:underline">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 border-t border-light pt-4">
                    <p className="text-center text-sm">
                        © 2025 All Right Reserved integratedhome Technical Solutions Pty Ltd
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

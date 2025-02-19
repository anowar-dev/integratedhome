// app/components/ClientFooter.tsx
"use client"; // Mark this component as a client-side component

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ClientFooter() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return !isHomePage ? <Footer /> : null;
}

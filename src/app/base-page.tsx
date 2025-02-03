"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function BasePage({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 1) {
            setScrolled(true); // Add class when scrolled 50px or more
        } else {
            setScrolled(false); // Remove class when scroll is less than 50px
        }
    };

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <Navbar isScrolled={scrolled} />
            
            <div className="body bg-blue h-auto">
                {children}
            </div>

            <Footer />
        </div>
    );
}
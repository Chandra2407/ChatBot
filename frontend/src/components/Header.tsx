import React, { useEffect, useState } from 'react'
const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header id="pageHeader" className={`absplute top-0 left-0 w-full h-16 transition-colors duration-300 z-50 flex items-center justify-between p-4 ${scrolled ? "bg-gray-800" : "bg-gray-900"}`}>
            <section className="logo font-bold">
                CatGPT
            </section>
            <section className="login">
                <button className="bg-white text-black rounded-lg px-4 py-2 border border-gray-300">
                    login
                </button>
            </section>
        </header>
    )
}

export default Header
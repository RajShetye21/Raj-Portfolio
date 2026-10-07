import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "My Skills", href: "/skills" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="/"
                    className="text-3xl font-bold tracking-wide text-white"
                >
                    Raj<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-lg font-medium text-gray-300 transition duration-300 hover:text-white
              after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0
              after:bg-blue-500 after:transition-all after:duration-300
              hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="/contact"
                    className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white
          transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 md:block"
                >
                    Let's Talk
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-gray-300 transition duration-300 hover:text-blue-500"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 w-fit rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;


import React from "react";

function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[100px]" />

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

            {/* Content */}
            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8">

                <div className="grid w-full items-center gap-16 lg:grid-cols-2">

                    {/* Left Content */}
                    <div className="max-w-2xl">

                        {/* Availability Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                            <span className="text-sm text-gray-300">
                                Available for opportunities
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Raj
                            </span>
                            <span className="text-white">.</span>
                        </h1>

                        <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
                            MERN Stack Developer
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                            I build modern, responsive and user-friendly web applications
                            using React, Node.js, Express and MongoDB. I enjoy turning ideas
                            into clean and functional digital experiences.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                            <a
                                href="/about"
                                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
                            >
                                View My Work
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                            >
                                Contact Me
                            </a>

                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex items-center gap-5">
                            <span className="text-sm text-gray-500">
                                Connect with me
                            </span>

                            <a
                                href="https://github.com/RajShetye21"
                                target="_blank"
                                className="text-gray-400 transition hover:text-white"
                            >
                                GitHub
                            </a>

                            <span className="text-gray-700">•</span>

                            <a
                                href="#"
                                className="text-gray-400 transition hover:text-blue-400"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative hidden justify-center lg:flex">

                        {/* Outer Glow */}
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

                        {/* Main Card */}
                        <div className="relative w-[380px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl">

                            {/* Top Bar */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                                </div>

                                <span className="text-xs text-gray-500">
                                    developer.js
                                </span>
                            </div>

                            {/* Code */}
                            <div className="rounded-2xl bg-black/40 p-6 font-mono text-sm leading-7">

                                <p className="text-purple-400">
                                    const <span className="text-blue-400">developer</span> = {"{"}
                                </p>

                                <p className="pl-5 text-gray-400">
                                    name: <span className="text-green-400">"Raj"</span>,
                                </p>

                                <p className="pl-5 text-gray-400">
                                    role:{" "}
                                    <span className="text-green-400">
                                        "MERN Developer"
                                    </span>
                                    ,
                                </p>

                                <p className="pl-5 text-gray-400">
                                    skills: [
                                </p>

                                <p className="pl-10 text-green-400">
                                    "React",
                                </p>

                                <p className="pl-10 text-green-400">
                                    "Node.js",
                                </p>

                                <p className="pl-10 text-green-400">
                                    "MongoDB"
                                </p>

                                <p className="pl-5 text-gray-400">
                                    ],
                                </p>

                                <p className="pl-5 text-gray-400">
                                    passion:{" "}
                                    <span className="text-green-400">
                                        "Building"
                                    </span>
                                </p>

                                <p className="text-purple-400">{"}"}</p>

                                <p className="mt-4 text-gray-500">
                  // Let's build something amazing.
                                </p>
                            </div>

                            {/* Bottom Tags */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {["React", "Node.js", "Express", "MongoDB"].map(
                                    (skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                                        >
                                            {skill}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;


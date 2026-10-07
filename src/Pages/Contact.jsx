import React, { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const formData = new FormData(e.target);

        // Get Web3Forms access key from .env
        formData.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white lg:px-8"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

            <div className="relative mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        Have a project, opportunity, or just want to say hello?
                        Send me a message and I'll get back to you.
                    </p>
                </div>

                {/* Contact Card */}
                <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl sm:p-10">

                    <form onSubmit={handleSubmit}>

                        {/* Name */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Your Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-black/50 focus:ring-2 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-black/50 focus:ring-2 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-7">
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-gray-300"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-black/50 focus:ring-2 focus:ring-blue-500/10"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}

                            {!loading && (
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            )}
                        </button>

                        {/* Success Message */}
                        {status === "success" && (
                            <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
                                Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {status === "error" && (
                            <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                                Something went wrong. Please try again.
                            </div>
                        )}
                    </form>
                </div>

                {/* Footer Text */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} Raj Shetye. All rights reserved.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Contact;


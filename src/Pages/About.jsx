import React from "react";

function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get to know{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              me
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            A passionate developer focused on creating modern and meaningful
            digital experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-10 lg:grid-cols-5">

          {/* Left Profile Card */}
          <div className="lg:col-span-2">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-blue-500/30">

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

              <div className="relative">

                {/* Avatar */}
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-3xl font-bold shadow-lg shadow-blue-500/20">
                  R
                </div>

                <h3 className="text-2xl font-bold">
                  Raj Shetye
                </h3>

                <p className="mt-2 text-blue-400">
                  MERN Stack Developer
                </p>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  I’m a BCA graduate and aspiring software developer who enjoys
                  building web applications and learning new technologies.
                  I focus on writing clean, responsive and practical code.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      10+
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      Technologies
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      5+
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      Projects
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-center">
                    <h4 className="text-2xl font-bold text-white">
                      1+
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">
                      Years Learning
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
                My Journey
              </p>

              <h3 className="text-3xl font-bold sm:text-4xl">
                Turning ideas into{" "}
                <span className="text-gray-400">
                  digital experiences.
                </span>
              </h3>

              <div className="mt-6 space-y-5 text-[15px] leading-7 text-gray-400">
                <p>
                  I started my journey in web development with curiosity about
                  how websites and applications work behind the scenes. Over
                  time, that curiosity turned into a passion for building
                  things with code.
                </p>

                <p>
                  My primary focus is the{" "}
                  <span className="font-medium text-white">
                    MERN stack
                  </span>
                  , where I work with React.js on the frontend and
                  Node.js, Express.js and MongoDB on the backend.
                </p>

                <p>
                  I enjoy creating interfaces that are not only visually
                  appealing but also responsive, user-friendly and easy to
                  maintain. I'm continuously improving my skills by building
                  real-world projects and exploring modern development
                  practices.
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8 border-t border-white/10 pt-8">

                <h4 className="mb-5 text-lg font-semibold">
                  Technologies I work with
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 text-center">
          <p className="text-sm italic text-gray-500">
            "Code. Learn. Build. Improve."
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;


import React from "react";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description: "Building responsive and interactive user interfaces",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      description: "Developing APIs and server-side applications",
      skills: ["Node.js", "Express.js", "REST API", "EJS"],
    },
    {
      title: "Database",
      description: "Working with data storage and database systems",
      skills: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      title: "Tools & Workflow",
      description: "Tools I use to build and manage projects",
      skills: ["Git", "GitHub", "VS Code", "Postman", "NPM"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to transform ideas into functional
            and modern web applications.
          </p>
        </div>

        {/* Tree */}
        <div className="relative">

          {/* Main Vertical Line - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:block" />

          {/* Root */}
          <div className="relative mb-16 flex justify-center">

            <div className="relative z-10 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-8 py-4 text-center shadow-lg shadow-blue-500/10 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-blue-400">
                Developer
              </p>

              <h3 className="mt-1 text-xl font-bold">
                MERN Stack
              </h3>
            </div>

          </div>

          {/* Skill Groups */}
          <div className="space-y-16">

            {skillGroups.map((group, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={group.title}
                  className="relative grid md:grid-cols-2"
                >

                  {/* Center Node */}
                  <div className="absolute left-1/2 top-10 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#050505] bg-blue-500 shadow-lg shadow-blue-500/50 md:block" />

                  {/* Horizontal Branch */}
                  <div
                    className={`absolute top-[47px] hidden h-px w-[50%] bg-gradient-to-r md:block ${
                      isLeft
                        ? "right-0 from-transparent to-blue-500/50"
                        : "left-0 from-blue-500/50 to-transparent"
                    }`}
                  />

                  {/* Left / Right Card */}
                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]">

                      {/* Number */}
                      <div className="mb-5 flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-sm font-bold text-blue-400">
                          0{index + 1}
                        </span>

                        <span className="text-xs uppercase tracking-widest text-gray-600">
                          {group.title}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold">
                        {group.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {group.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Message */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500">
            Always learning. Always building. Always improving.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;


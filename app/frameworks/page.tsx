"use client";

import { motion } from "framer-motion";

const frameworks = [
  {
    name: "NIST CSF",
    description:
      "Cybersecurity framework focused on identifying, protecting, detecting, responding, and recovering from threats.",
    readiness: 82,
    controls: 108,
    completed: 89,
  },
  {
    name: "ISO 27001",
    description:
      "International information security management standard for enterprise security governance.",
    readiness: 74,
    controls: 93,
    completed: 69,
  },
  {
    name: "SOC 2",
    description:
      "Security and operational controls focused on trust services criteria and cloud security.",
    readiness: 68,
    controls: 64,
    completed: 44,
  },
  {
    name: "PHIPA",
    description:
      "Ontario healthcare privacy regulation for protecting patient health information.",
    readiness: 91,
    controls: 37,
    completed: 34,
  },
  {
    name: "PIPEDA",
    description:
      "Canadian privacy law governing personal information protection in commercial activities.",
    readiness: 79,
    controls: 41,
    completed: 32,
  },
  {
    name: "HIPAA",
    description:
      "US healthcare security and privacy regulation for safeguarding medical data.",
    readiness: 72,
    controls: 52,
    completed: 38,
  },
];

export default function FrameworksPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-16">
          <p className="uppercase tracking-[0.2em] text-zinc-500 text-sm">
            Governance • Risk • Compliance
          </p>

          <h1 className="mt-4 text-6xl font-bold leading-tight">
            Compliance Frameworks
          </h1>

          <p className="mt-6 text-zinc-400 text-lg max-w-3xl">
            Centralized framework management, readiness tracking,
            evidence mapping, and cybersecurity compliance operations.
          </p>
        </div>

        {/* FRAMEWORK GRID */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >

              <div className="flex items-start justify-between">

                <div>
                  <h2 className="text-3xl font-bold">
                    {framework.name}
                  </h2>

                  <p className="mt-4 text-zinc-400 leading-relaxed">
                    {framework.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-500/20 px-4 py-2 text-blue-400 text-sm font-semibold">
                  {framework.readiness}%
                </div>

              </div>

              {/* READINESS */}

              <div className="mt-8">

                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-zinc-500">
                    Readiness Score
                  </span>

                  <span className="text-zinc-400">
                    {framework.readiness}%
                  </span>
                </div>

                <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${framework.readiness}%`,
                    }}
                  />
                </div>

              </div>

              {/* METRICS */}

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-black/40 p-5">
                  <p className="text-zinc-500 text-sm">
                    Controls
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {framework.controls}
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-5">
                  <p className="text-zinc-500 text-sm">
                    Completed
                  </p>

                  <p className="mt-2 text-3xl font-bold text-blue-400">
                    {framework.completed}
                  </p>
                </div>

              </div>

              {/* ACTIONS */}

              <div className="mt-8 flex gap-4">

                <button className="rounded-2xl bg-blue-500 px-5 py-3 hover:bg-blue-400 transition">
                  View Controls
                </button>

                <button className="rounded-2xl border border-white/10 px-5 py-3 hover:bg-white/10 transition">
                  Evidence
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </main>
  );
}
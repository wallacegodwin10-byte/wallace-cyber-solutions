"use client";

import Link from "next/link";

const frameworks = [
  {
    id: "nist",
    title: "NIST CSF",
    description:
      "Cybersecurity governance, risk management, and operational controls.",
  },

  {
    id: "iso27001",
    title: "ISO 27001",
    description:
      "Information security management systems and enterprise compliance.",
  },

  {
    id: "soc2",
    title: "SOC 2",
    description:
      "Security, availability, confidentiality, and trust services controls.",
  },
];

export default function FrameworksPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-6xl font-bold">

          Framework Operations

        </h1>

        <p className="mt-6 max-w-3xl text-zinc-400">

          Centralized governance, compliance,
          evidence management, and enterprise
          cybersecurity frameworks.

        </p>

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {frameworks.map((framework) => (

            <div
              key={framework.id}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <h2 className="text-3xl font-bold">

                {framework.title}

              </h2>

              <p className="mt-4 text-zinc-400">

                {framework.description}

              </p>

              <Link href={`/frameworks/${framework.id}`}>

                <button className="mt-8 rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold hover:bg-blue-400 transition">

                  Open Framework

                </button>

              </Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
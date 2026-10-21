"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  FileCheck,
  ArrowRight,
  BarChart3,
  Brain,
  Database,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur">

        <a href="/">
          <Image
            src="/logo.png"
            alt="WCS Logo"
            width={170}
            height={60}
            className="object-contain hover:opacity-80 transition"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm text-zinc-400">

          <a
            href="#services"
            className="hover:text-white transition"
          >
            Platform
          </a>

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="/
            className="hover:text-white transition"
          >
            Frameworks
          </a>

          <a
            href="/admin/clients"
            className="hover:text-white transition"
          >
            Assessments
          </a>

          <a
            href="/compliance-center"
            className="hover:text-white transition"
          >
            Compliance Center
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* GLOW */}

        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-8 pt-40 pb-44">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-400 backdrop-blur">

              Enterprise Governance • Risk • Compliance Platform

            </div>

            <h1 className="mt-10 text-7xl md:text-8xl font-bold tracking-tight leading-[0.92]">

              Continuous
              <span className="block text-zinc-500">
                Cybersecurity
              </span>

              <span className="block">
                Governance
              </span>

            </h1>

            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400">

              WALLACE CYBER SOLUTIONS centralizes
              cybersecurity governance, compliance operations,
              evidence management, operational risk visibility,
              and enterprise security workflows into one
              integrated platform.

            </p>

            {/* CTA */}

            <div className="mt-14 flex flex-wrap gap-5">

              <a href="/frameworks">

                <Button className="h-14 rounded-2xl bg-white px-8 text-black hover:bg-zinc-200 text-sm font-semibold">

                  Launch Platform

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

              </a>

              <a href="/compliance-center">

                <Button
                  variant="outline"
                  className="h-14 rounded-2xl border-white/15 bg-transparent px-8 text-sm text-white hover:bg-white/10"
                >

                  Explore Compliance Center

                </Button>

              </a>

            </div>

            {/* METRICS */}

            <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-12">

              <div>
                <p className="text-5xl font-bold">
                  6+
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Compliance Frameworks
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  GRC
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Governance Infrastructure
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  AI
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Future Intelligence Workflows
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold">
                  24/7
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Operational Visibility
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PLATFORM MODULES */}

      <section
        id="services"
        className="px-8 py-40"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-24">

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Enterprise Platform Modules
            </p>

            <h2 className="mt-6 text-6xl font-bold leading-tight">

              Operational
              <span className="block text-zinc-500">
                Cybersecurity Infrastructure
              </span>

            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group"
              >

                <service.icon className="h-12 w-12 text-blue-400 mb-8" />

                <h3 className="text-3xl font-semibold mb-5">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed text-lg">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center mt-8 text-sm text-white group-hover:text-blue-400 transition"
                >

                  Open Module

                  <ArrowRight className="ml-2 h-4 w-4" />

                </a>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="border-t border-white/10 px-8 py-40"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-28">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              About The Platform
            </p>

            <h2 className="mt-6 text-6xl font-bold leading-tight">

              Enterprise
              <span className="block text-zinc-500">
                Governance Systems
              </span>

            </h2>

          </div>

          <div>

            <p className="text-xl leading-relaxed text-zinc-400">

              WALLACE CYBER SOLUTIONS is evolving into a
              modern Governance, Risk & Compliance platform
              focused on cybersecurity operations,
              compliance automation, evidence management,
              risk visibility, and enterprise governance workflows.

            </p>

            <p className="mt-10 text-lg leading-relaxed text-zinc-500">

              The platform supports compliance frameworks
              including NIST CSF, ISO 27001, SOC 2,
              HIPAA, PHIPA, PIPEDA, and CIS Controls while
              enabling centralized assessment management,
              operational monitoring, and governance intelligence.

            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-white/10 px-8 py-40">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Enterprise Cybersecurity Platform
          </p>

          <h2 className="mt-8 text-7xl font-bold leading-tight">

            Operationalize
            <span className="block text-zinc-500">
              Cybersecurity Governance
            </span>

          </h2>

          <p className="mt-10 text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto">

            Centralize governance operations,
            compliance workflows, audit readiness,
            risk intelligence, and enterprise
            security visibility through one
            integrated operational platform.

          </p>

          <div className="mt-14 flex justify-center gap-5 flex-wrap">

            <a href="/frameworks">

              <Button className="h-14 rounded-2xl bg-white px-8 text-black hover:bg-zinc-200">

                Open Frameworks

              </Button>

            </a>

            <a href="/admin/clients">

              <Button
                variant="outline"
                className="h-14 rounded-2xl border-white/15 bg-transparent px-8 text-white hover:bg-white/10"
              >

                Run Assessments

              </Button>

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-8 py-12">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <Image
              src="/logo.png"
              alt="WCS Logo"
              width={150}
              height={50}
              className="object-contain"
            />

            <p className="mt-4 text-sm text-zinc-500">
              Governance • Risk • Compliance • Cybersecurity
            </p>

          </div>

          <div className="flex items-center gap-8 text-sm text-zinc-500">

            <a href="/frameworks">
              Frameworks
            </a>

            <a href="/admin/clients">
              Assessments
            </a>

            <a href="/compliance-center">
              Compliance Center
            </a>

            <a href="/trust-center">
              Trust Center
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}

const services = [
  {
    title: "Framework Management",
    description:
      "Centralized governance and compliance management across NIST, ISO 27001, SOC 2, HIPAA, PHIPA, PIPEDA, and CIS Controls.",
    icon: Shield,
    link: "/frameworks",
  },
  {
    title: "Evidence Operations",
    description:
      "Collect audit evidence, policies, reports, screenshots, and compliance artifacts with framework mapping workflows.",
    icon: FileCheck,
    link: "/admin/clients",
  },
  {
    title: "Risk Intelligence",
    description:
      "Monitor vulnerabilities, operational risks, compliance gaps, and remediation priorities across the organization.",
    icon: Lock,
    link: "/compliance-center",
  },
  {
    title: "Compliance Analytics",
    description:
      "Visualize readiness scoring, framework maturity, audit status, and organizational compliance posture.",
    icon: BarChart3,
    link: "/compliance-center",
  },
  {
    title: "AI Governance",
    description:
      "Future AI-powered governance workflows, remediation guidance, policy generation, and audit intelligence.",
    icon: Brain,
    link: "/ai-assistant",
  },
  {
    title: "Operational Infrastructure",
    description:
      "Integrated governance systems, enterprise reporting, compliance workflows, and cybersecurity operational visibility.",
    icon: Database,
    link: "/frameworks",
  },
]; x/x//frameworks". 
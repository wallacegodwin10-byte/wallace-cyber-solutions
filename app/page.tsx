"use client";

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

      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">

        <a href="/">
          <h1 className="text-2xl font-bold tracking-wide hover:text-blue-400 transition">
            WALLACE CYBER SOLUTIONS
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">

          <a
            href="#services"
            className="hover:text-white transition"
          >
            Services
          </a>

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="/frameworks"
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

          <a
            href="/trust-center"
            className="hover:text-white transition"
          >
            Trust Center
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative px-8 py-32 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            Governance • Risk • Compliance • Cybersecurity
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">

            Enterprise GRC
            <span className="block text-zinc-400">
              Built For Modern Organizations
            </span>

          </h1>

          <p className="mt-8 text-lg text-zinc-400 max-w-2xl leading-relaxed">

            WALLACE CYBER SOLUTIONS centralizes cybersecurity,
            compliance operations, evidence collection,
            governance workflows, and enterprise risk management
            into one integrated platform.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a href="/frameworks">

              <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl px-6 py-6 text-sm">

                Launch Platform

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

            </a>

            <a href="/admin/clients">

              <Button
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-2xl px-6 py-6 text-sm"
              >

                Start Assessment

              </Button>

            </a>

          </div>

        </motion.div>

        {/* GLOW */}

        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      </section>

      {/* PLATFORM MODULES */}

      <section
        id="services"
        className="px-8 py-24 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Enterprise Platform Modules
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Governance Risk & Compliance Operations
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
              >

                <service.icon className="h-10 w-10 text-blue-400 mb-6" />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>

                <a href={service.link}>

                  <button className="mt-8 rounded-2xl bg-blue-500 px-5 py-3 hover:bg-blue-400 transition">
                    Open Module
                  </button>

                </a>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="px-8 py-32 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              About The Platform
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">

              Workflow-Driven
              <span className="block text-zinc-400">
                Cybersecurity Infrastructure
              </span>

            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">

              WALLACE CYBER SOLUTIONS is evolving into
              a modern enterprise GRC platform focused on
              compliance automation, evidence management,
              risk intelligence, AI-assisted governance,
              and operational security workflows.

            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">

              The platform supports multiple frameworks
              including NIST, ISO 27001, SOC2, PHIPA,
              PIPEDA, HIPAA, CIS Controls, and future
              AI governance standards.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">
                GRC
              </h3>

              <p className="mt-4 text-zinc-400">
                Governance risk and compliance operations
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">
                AI
              </h3>

              <p className="mt-4 text-zinc-400">
                Intelligent compliance and risk workflows
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">
                24/7
              </h3>

              <p className="mt-4 text-zinc-400">
                Continuous monitoring mindset
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">
                6+
              </h3>

              <p className="mt-4 text-zinc-400">
                Supported compliance frameworks
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-8 py-32 border-t border-white/10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Enterprise Cybersecurity Platform
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">

            Centralize Security
            <span className="block text-zinc-400">
              Governance & Compliance
            </span>

          </h2>

          <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl mx-auto">

            Manage frameworks, automate evidence collection,
            track risks, generate audit reports, and improve
            enterprise cybersecurity posture through one
            integrated operational platform.

          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a href="/frameworks">

              <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl px-6 py-6">
                Open Frameworks
              </Button>

            </a>

            <a href="/admin/clients">

              <Button
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-2xl px-6 py-6"
              >
                Run Assessments
              </Button>

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-8 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-xl font-bold">
              WALLACE CYBER SOLUTIONS
            </h3>

            <p className="mt-2 text-zinc-500 text-sm">
              Governance • Risk • Compliance • Cybersecurity
            </p>

          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">

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
      "Centralized compliance framework operations for NIST, ISO 27001, SOC2, HIPAA, PHIPA, PIPEDA, and CIS Controls.",
    icon: Shield,
    link: "/frameworks",
  },
  {
    title: "Evidence Collection",
    description:
      "Upload audit evidence, policies, screenshots, and compliance documentation with framework mapping.",
    icon: FileCheck,
    link: "/admin/clients",
  },
  {
    title: "Risk Intelligence",
    description:
      "Track compliance gaps, vulnerabilities, remediation priorities, and operational risk scoring.",
    icon: Lock,
    link: "/compliance-center",
  },
  {
    title: "Compliance Analytics",
    description:
      "Visualize readiness scores, failed controls, audit status, and organizational compliance posture.",
    icon: BarChart3,
    link: "/compliance-center",
  },
  {
    title: "AI Governance",
    description:
      "Future AI-assisted remediation, policy generation, audit summaries, and compliance intelligence.",
    icon: Brain,
    link: "/ai-assistant",
  },
  {
    title: "Operational Infrastructure",
    description:
      "Integrated governance workflows, evidence management, reporting, and enterprise security operations.",
    icon: Database,
    link: "/frameworks",
  },
];
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  ArrowLeft,
  Lock,
  Brain,
  BarChart3,
  Upload,
} from "lucide-react";

const controlDatabase: Record<string, any> = {
  "ia-2": {
    title: "Identification & Authentication",

    framework: "NIST",

    category: "Access Control",

    description:
      "Organizations must uniquely identify and authenticate users before granting access to systems, applications, and enterprise resources.",

    objective:
      "Prevent unauthorized access and ensure accountability for user activities.",

    risk:
      "Weak authentication controls increase the likelihood of credential theft, unauthorized access, privilege escalation, and data breaches.",

    implementation: [
      "Enable Multi-Factor Authentication (MFA)",
      "Use centralized identity providers",
      "Enforce strong password policies",
      "Monitor failed authentication attempts",
      "Review privileged account access regularly",
    ],

    evidence: [
      "MFA screenshots",
      "Identity provider configurations",
      "Access control policy documents",
      "Authentication audit logs",
      "Privileged access reviews",
    ],

    mappings: [
      "ISO 27001 A.5",
      "SOC2 CC6",
      "HIPAA 164.312",
      "CIS Control 6",
    ],

    status: "Passed",
  },

  "ac-1": {
    title: "Access Control Policy",

    framework: "NIST",

    category: "Governance",

    description:
      "Organizations must establish and maintain formal access control policies and procedures.",

    objective:
      "Ensure consistent governance over logical and physical access management.",

    risk:
      "Lack of governance policies can result in inconsistent permissions, insider threats, and uncontrolled access.",

    implementation: [
      "Create formal access control documentation",
      "Define RBAC standards",
      "Review policies annually",
      "Implement least privilege principles",
    ],

    evidence: [
      "Access control policies",
      "RBAC matrix",
      "User access reviews",
      "Approval workflows",
    ],

    mappings: [
      "ISO A.5",
      "SOC2 Governance",
    ],

    status: "Pending",
  },
};

export default function ControlDetailPage() {
  const params = useParams();

  const controlId = String(params.control).toLowerCase();

  const control =
    controlDatabase[controlId];

  if (!control) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Control Not Found
          </h1>

          <a
            href="/frameworks"
            className="mt-8 inline-block text-blue-400"
          >
            Return To Frameworks
          </a>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">

        <a href="/">
          <Image
            src="/logo.png"
            alt="WCS Logo"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">

          <a
            href="/frameworks"
            className="hover:text-white transition"
          >
            Frameworks
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

      <section className="relative border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:90px_90px]" />

        <div className="absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-8 pt-24 pb-28">

          <a
            href="/frameworks"
            className="inline-flex items-center text-zinc-500 hover:text-white transition mb-10"
          >

            <ArrowLeft className="h-4 w-4 mr-2" />

            Back To Frameworks

          </a>

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-400">

            {control.framework} • {control.category}

          </div>

          <h1 className="mt-8 text-6xl md:text-7xl font-bold leading-tight">

            {control.title}

          </h1>

          <p className="mt-8 max-w-4xl text-xl text-zinc-400 leading-relaxed">

            {control.description}

          </p>

          {/* STATUS */}

          <div className="mt-10">

            <div
              className={`inline-flex rounded-2xl px-5 py-3 text-sm font-semibold ${
                control.status === "Passed"
                  ? "bg-green-500/15 text-green-400"
                  : control.status === "Pending"
                  ? "bg-yellow-500/15 text-yellow-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >

              {control.status}

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="px-8 py-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div className="space-y-10">

            {/* OBJECTIVE */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-6">

                <Shield className="h-8 w-8 text-blue-400" />

                <h2 className="text-3xl font-bold">
                  Control Objective
                </h2>

              </div>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {control.objective}
              </p>

            </motion.div>

            {/* RISK */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-6">

                <AlertTriangle className="h-8 w-8 text-red-400" />

                <h2 className="text-3xl font-bold">
                  Risk Exposure
                </h2>

              </div>

              <p className="text-zinc-400 leading-relaxed text-lg">
                {control.risk}
              </p>

            </motion.div>

            {/* IMPLEMENTATION */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-8">

                <Lock className="h-8 w-8 text-blue-400" />

                <h2 className="text-3xl font-bold">
                  Implementation Guidance
                </h2>

              </div>

              <div className="space-y-5">

                {control.implementation.map(
                  (item: string, index: number) => (

                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <CheckCircle2 className="h-5 w-5 text-green-400 mt-1" />

                      <p className="text-zinc-300">
                        {item}
                      </p>

                    </div>
                  )
                )}

              </div>

            </motion.div>

          </div>

          {/* RIGHT */}

          <div className="space-y-10">

            {/* EVIDENCE */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-8">

                <FileCheck className="h-8 w-8 text-blue-400" />

                <h2 className="text-3xl font-bold">
                  Audit Evidence
                </h2>

              </div>

              <div className="space-y-5">

                {control.evidence.map(
                  (item: string, index: number) => (

                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >

                      <Upload className="h-5 w-5 text-zinc-500 mt-1" />

                      <p className="text-zinc-300">
                        {item}
                      </p>

                    </div>
                  )
                )}

              </div>

            </motion.div>

            {/* MAPPINGS */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-8">

                <BarChart3 className="h-8 w-8 text-blue-400" />

                <h2 className="text-3xl font-bold">
                  Cross Framework Mapping
                </h2>

              </div>

              <div className="flex flex-wrap gap-4">

                {control.mappings.map(
                  (mapping: string, index: number) => (

                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300"
                    >

                      {mapping}

                    </div>
                  )
                )}

              </div>

            </motion.div>

            {/* AI */}

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.03] p-8"
            >

              <div className="flex items-center gap-4 mb-6">

                <Brain className="h-8 w-8 text-blue-400" />

                <h2 className="text-3xl font-bold">
                  AI Governance Insight
                </h2>

              </div>

              <p className="text-zinc-400 leading-relaxed text-lg">

                This control improves organizational
                resilience by reducing unauthorized access,
                strengthening auditability, and supporting
                enterprise governance maturity.

              </p>

            </motion.div>

          </div>

        </div>

      </section>

    </main>
  );
}
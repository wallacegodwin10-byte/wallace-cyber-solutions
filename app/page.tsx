"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

const services = [
  {
    title: "Cybersecurity Consulting",
    description:
      "Modern security assessments, infrastructure reviews, and threat reduction strategies.",
    icon: Shield,
  },
  {
    title: "Compliance Auditing",
    description:
      "Compliance guidance and auditing support for PHIPA, PIPEDA, NIST, ISO, and CIS frameworks.",
    icon: FileCheck,
  },
  {
    title: "Risk Management",
    description:
      "Identify vulnerabilities, reduce business risk, and improve operational security resilience.",
    icon: Lock,
  },
];

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Save to Supabase database
      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            full_name: fullName,
            email,
            company,
            message,
          },
        ]);

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      // Send email notification
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          company,
          message,
        }),
      });

      alert("Message sent successfully!");

      // Reset form
      setFullName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wide">
          WALLACE CYBER SOLUTIONS
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
            Cybersecurity • Compliance • Risk Management
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Enterprise Cybersecurity
            <span className="block text-zinc-400">
              Built For Modern Businesses
            </span>
          </h1>

          <p className="mt-8 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            WALLACE CYBER SOLUTIONS helps organizations strengthen security,
            improve compliance, and reduce operational risk through modern
            cybersecurity solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-2xl px-6 py-6 text-sm">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10 rounded-2xl px-6 py-6 text-sm"
            >
              Explore Services
            </Button>
          </div>
        </motion.div>

        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-8 py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Security & Compliance Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              About Us
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Security First.
              <span className="block text-zinc-400">
                Compliance Driven.
              </span>
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              WALLACE CYBER SOLUTIONS provides cybersecurity consulting,
              compliance auditing, and risk management solutions for
              organizations seeking enterprise-grade security practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">99%</h3>
              <p className="mt-4 text-zinc-400">
                Security-focused operational approach
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">24/7</h3>
              <p className="mt-4 text-zinc-400">
                Risk awareness and monitoring mindset
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">NIST</h3>
              <p className="mt-4 text-zinc-400">
                Compliance framework alignment
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-5xl font-bold text-blue-400">Zero</h3>
              <p className="mt-4 text-zinc-400">
                Tolerance for weak security practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-8 py-32 border-t border-white/10"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Contact Us
            </p>

            <h2 className="mt-6 text-5xl font-bold">
              Let’s Secure Your Business
            </h2>

            <p className="mt-6 text-zinc-400">
              Send us a message and we’ll get back to you.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none"
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white outline-none min-h-[180px]"
            />

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-white text-black hover:bg-zinc-200 rounded-2xl py-6"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
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
              Cybersecurity • Compliance • Risk Management
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
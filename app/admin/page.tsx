
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Client {
  id: number;
  company_name: string;
  contact_name: string;
  email: string;
  compliance_status: string;
  risk_score: number;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [complianceStatus, setComplianceStatus] = useState("");
  const [riskScore, setRiskScore] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchClients = async () => {
    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setClients(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const clearForm = () => {
    setCompanyName("");
    setContactName("");
    setEmail("");
    setComplianceStatus("");
    setRiskScore("");
    setEditingId(null);
  };

  const addClient = async () => {
    const { error } = await supabase
      .from("clients")
      .insert([
        {
          company_name: companyName,
          contact_name: contactName,
          email,
          compliance_status: complianceStatus,
          risk_score: Number(riskScore),
        },
      ]);

    if (error) {
      console.error(error);
      return;
    }

    clearForm();
    fetchClients();
  };

  const updateClient = async () => {
    if (!editingId) return;

    const { error } = await supabase
      .from("clients")
      .update({
        company_name: companyName,
        contact_name: contactName,
        email,
        compliance_status: complianceStatus,
        risk_score: Number(riskScore),
      })
      .eq("id", editingId);

    if (error) {
      console.error(error);
      return;
    }

    clearForm();
    fetchClients();
  };

  const deleteClient = async (id: number) => {
    const confirmed = confirm("Delete this client?");

    if (!confirmed) return;

    const { error } = await supabase
      .from("clients")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    fetchClients();
  };

  const editClient = (client: Client) => {
    setEditingId(client.id);
    setCompanyName(client.company_name);
    setContactName(client.contact_name);
    setEmail(client.email);
    setComplianceStatus(client.compliance_status);
    setRiskScore(client.risk_score.toString());
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h1 className="text-5xl font-bold">
            Client Management
          </h1>

          <p className="mt-4 text-zinc-400">
            Manage cybersecurity clients and compliance tracking.
          </p>
        </div>

        {/* FORM */}

        <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-semibold mb-6">
            {editingId ? "Edit Client" : "Add Client"}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="rounded-2xl bg-black border border-white/10 px-4 py-4"
            />

            <input
              placeholder="Contact Name"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="rounded-2xl bg-black border border-white/10 px-4 py-4"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl bg-black border border-white/10 px-4 py-4"
            />

            <input
              placeholder="Compliance Status"
              value={complianceStatus}
              onChange={(e) => setComplianceStatus(e.target.value)}
              className="rounded-2xl bg-black border border-white/10 px-4 py-4"
            />

            <input
              placeholder="Risk Score"
              value={riskScore}
              onChange={(e) => setRiskScore(e.target.value)}
              className="rounded-2xl bg-black border border-white/10 px-4 py-4"
            />

          </div>

          <div className="flex gap-4 mt-6">

            {editingId ? (
              <button
                onClick={updateClient}
                className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold hover:bg-blue-400 transition"
              >
                Update Client
              </button>
            ) : (
              <button
                onClick={addClient}
                className="rounded-2xl bg-white text-black px-6 py-4 font-semibold hover:bg-zinc-200 transition"
              >
                Create Client
              </button>
            )}

            <button
              onClick={clearForm}
              className="rounded-2xl border border-white/10 px-6 py-4 hover:bg-white/10 transition"
            >
              Clear
            </button>

          </div>
        </div>

        {/* CLIENTS */}

        {loading ? (
          <p>Loading clients...</p>
        ) : (
          <div className="grid gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {client.company_name}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      {client.contact_name}
                    </p>

                    <p className="text-zinc-500">
                      {client.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      Compliance Status
                    </p>

                    <p className="text-xl font-semibold">
                      {client.compliance_status}
                    </p>

                    <p className="mt-4 text-sm text-zinc-500">
                      Risk Score
                    </p>

                    <p className="text-2xl font-bold text-blue-400">
                      {client.risk_score}
                    </p>
                  </div>

                  <div className="flex gap-4">

                    <button
                      onClick={() => editClient(client)}
                      className="rounded-2xl bg-blue-500 px-5 py-3 hover:bg-blue-400 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteClient(client.id)}
                      className="rounded-2xl bg-red-500 px-5 py-3 hover:bg-red-400 transition"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}


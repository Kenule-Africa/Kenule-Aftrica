"use client";

import { useState } from "react";
import { Mail, MapPin, Building2, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function OraviaContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Inquiry / Partnership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xjkyjzvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          subject: "General Inquiry / Partnership",
          message: "",
        });
      } else {
        const data = await res.json();
        setErrorMsg(data?.error || "Failed to submit. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please email admin@kenuleafrica.xyz directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 lg:px-20 bg-white border-b border-[#EAEAEA] scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#666666] font-semibold">
                Direct Contact
              </span>
              <h2 className="font-sans text-3xl font-semibold text-[#111111] tracking-tight">
                Let’s Build the African Future Together
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed">
                Whether you want to partner with our ventures, support LegitLab cohorts,
                collaborate on the Jos Tech Expo, or discuss institutional initiatives.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#EAEAEA]">
              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-[#111111] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#666666] block">Email</span>
                  <a href="mailto:admin@kenuleafrica.xyz" className="font-medium hover:underline">
                    admin@kenuleafrica.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-[#111111] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#666666] block">Location</span>
                  <span className="font-medium">Jos, Plateau State, Nigeria</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#111111]">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-[#111111] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#666666] block">Registration</span>
                  <span className="font-medium font-mono text-xs">RC: 8380017 (Nigeria)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7 bg-[#FAFAFA] border border-[#EAEAEA] p-8 rounded-2xl shadow-sm">
            {status === "success" ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#111111]">Message Received</h3>
                <p className="text-xs text-[#666666] max-w-sm mx-auto">
                  Thank you for contacting Kenule Africa. Our team will review your inquiry and respond promptly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold text-[#111111] underline hover:opacity-70"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#EAEAEA] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#111111] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amina@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-[#EAEAEA] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    Subject / Initiative
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#EAEAEA] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#111111]"
                  >
                    <option value="General Inquiry / Partnership">General Inquiry / Partnership</option>
                    <option value="DeyPay Fintech Partnership">DeyPay Fintech Partnership</option>
                    <option value="LegitLab Sponsorship / Mentorship">LegitLab Sponsorship / Mentorship</option>
                    <option value="Jos Tech Expo Collaboration">Jos Tech Expo Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#111111] uppercase tracking-wider mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#EAEAEA] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#111111] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 rounded bg-[#111111] text-white font-semibold text-xs tracking-wider uppercase hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <span>{status === "submitting" ? "Transmitting..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Twitter,
  Building2,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "General Inquiry / Partnership",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xjkyjzvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          subject: "General Inquiry / Partnership",
          message: "",
        });
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || "Failed to submit message. Please try again or email us directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection or contact admin@kenuleafrica.xyz directly.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0b90b]/10 border border-[#f0b90b]/20 text-[#f0b90b] font-mono text-xs tracking-wider uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Let’s Build Together</span>
            </div>

            <h2
              id="contact-heading"
              className="font-syne text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
            >
              Get in Touch
            </h2>

            <p className="text-base text-gray-300 font-normal leading-relaxed">
              Whether you are looking to partner with our ventures, sponsor LegitLab cohorts,
              participate in the Jos Tech Expo, or explore institutional collaboration, we’d love to hear from you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d1a] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#f0b90b]/10 border border-[#f0b90b]/20 flex items-center justify-center text-[#f0b90b] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href="mailto:admin@kenuleafrica.xyz"
                  className="font-syne text-sm sm:text-base font-bold text-white hover:text-[#f0b90b] transition-colors"
                >
                  admin@kenuleafrica.xyz
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d1a] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#14f7b0]/10 border border-[#14f7b0]/20 flex items-center justify-center text-[#14f7b0] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block">
                  Headquarters
                </span>
                <span className="font-syne text-sm sm:text-base font-bold text-white block">
                  Jos, Plateau State, Nigeria
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d1a] border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] text-gray-400 uppercase tracking-wider block">
                  Corporate Registration
                </span>
                <span className="font-syne text-sm sm:text-base font-bold text-white block">
                  Kenule Africa · RC: 8380017
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block mb-3">
              Official Channels
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/kenuleafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-4 h-4 text-[#f0b90b]" />
                <span>@kenuleafrica</span>
              </a>

              <a
                href="https://linkedin.com/company/kenuleafrica"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#14f7b0]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Interactive Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <h3 className="font-syne text-2xl font-bold text-white mb-6">
              Send a Direct Message
            </h3>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-[#14f7b0]/10 border border-[#14f7b0]/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#14f7b0]/20 text-[#14f7b0] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-syne text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out to Kenule Africa. Our team has received your message and
                  will respond to your email promptly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-syne text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-[#f0b90b] uppercase tracking-wider"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010105] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f0b90b] focus:ring-1 focus:ring-[#f0b90b] transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-[#f0b90b] uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. amina@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010105] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f0b90b] focus:ring-1 focus:ring-[#f0b90b] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs text-[#f0b90b] uppercase tracking-wider"
                  >
                    Topic / Initiative
                  </label>
                  <select
                    id="contact-subject"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#010105] border border-white/10 text-white focus:outline-none focus:border-[#f0b90b] focus:ring-1 focus:ring-[#f0b90b] transition-colors text-sm"
                  >
                    <option value="General Inquiry / Partnership">General Inquiry / Partnership</option>
                    <option value="DeyPay Fintech Inquiries">DeyPay Fintech Inquiries</option>
                    <option value="LegitLab Bootcamp Sponsorship">LegitLab Bootcamp Sponsorship</option>
                    <option value="Jos Tech Expo Collaboration">Jos Tech Expo Collaboration</option>
                    <option value="Media & Press">Media & Press</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-[#f0b90b] uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about your project, idea, or partnership interest..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#010105] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#f0b90b] focus:ring-1 focus:ring-[#f0b90b] transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#f0b90b] text-black font-syne font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffc820] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_25px_rgba(240,185,11,0.25)]"
                >
                  {status === "submitting" ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Send Message to Kenule Africa</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

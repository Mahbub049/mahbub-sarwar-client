"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { site } from "@/lib/site-data";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://mahbub-sarwar-server.onrender.com";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "focus-ring w-full rounded-2xl border hairline bg-[var(--bg)] px-4 py-3.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-blue-400/40 focus:bg-[var(--surface-strong)]";

  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t hairline">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[120px]" />
      <div className="site-shell">
        <div className="overflow-hidden rounded-[2rem] border hairline bg-[var(--surface)] shadow-[var(--shadow)]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
              <div className="topography pointer-events-none absolute inset-0 opacity-20" />
              <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
              <div className="relative z-10 flex h-full flex-col">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">Get in Touch</h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                  For academic communication, research collaboration, software projects, or professional enquiries.
                </p>

                <div className="mt-9 space-y-4">
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-3 text-sm font-semibold text-slate-300 transition hover:text-white">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-200"><Mail size={16} /></span>
                    <span className="min-w-0 truncate">{site.email}</span>
                    <ArrowUpRight size={14} className="ml-auto transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="group flex items-center gap-3 text-sm font-semibold text-slate-300 transition hover:text-white">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-emerald-200"><Phone size={16} /></span>
                    <span>{site.phone}</span>
                    <ArrowUpRight size={14} className="ml-auto transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-violet-200"><MapPin size={16} /></span>
                    {site.location}
                  </div>
                </div>

                <div className="mt-auto flex gap-2 pt-10">
                  <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:-translate-y-1 hover:text-white"><FaLinkedinIn size={17} /></a>
                  <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:-translate-y-1 hover:text-white"><FaGithub size={17} /></a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-9 lg:p-12">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border hairline bg-[var(--bg)] text-[var(--accent)]"><MessageSquare size={18} /></span>
                <div>
                  <h3 className="font-display text-xl font-semibold">Send a message</h3>
                  <p className="mt-1 text-xs text-[var(--muted)]">Complete the form and the message will be sent directly.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-bold text-[var(--muted)]">
                    Name
                    <input name="name" required autoComplete="name" placeholder="Your name" className={`${inputClass} mt-2`} />
                  </label>
                  <label className="text-xs font-bold text-[var(--muted)]">
                    Email
                    <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${inputClass} mt-2`} />
                  </label>
                </div>
                <label className="block text-xs font-bold text-[var(--muted)]">
                  Subject
                  <input name="subject" required placeholder="What would you like to discuss?" className={`${inputClass} mt-2`} />
                </label>
                <label className="block text-xs font-bold text-[var(--muted)]">
                  Message
                  <textarea name="message" required rows={5} placeholder="Write your message..." className={`${inputClass} mt-2 resize-none`} />
                </label>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  disabled={status === "sending"}
                  className="btn-primary focus-ring w-full rounded-2xl px-5 py-3.5 text-sm font-extrabold disabled:cursor-wait disabled:opacity-65"
                  type="submit"
                >
                  {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
                  {status === "sending" ? "Sending..." : "Send message"}
                </motion.button>

                {status === "success" ? (
                  <p className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-xs font-bold text-emerald-500">
                    <CheckCircle2 size={15} /> Message sent successfully.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="rounded-xl border border-rose-500/20 bg-rose-500/8 px-4 py-3 text-xs font-bold text-rose-500">
                    Could not send the message. You can still email me directly at {site.email}.
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

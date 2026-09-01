"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { toast } from "sonner";
import { site } from "@/lib/site-data";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) throw new Error(data.message || "Contact request failed");

      form.reset();
      setStatus("success");
      toast.success("Message sent successfully", {
        description: "Thanks for reaching out. I’ll get back to you as soon as possible.",
        position: "top-right",
        duration: 5000,
      });
      window.setTimeout(() => setStatus("idle"), 700);
    } catch (error) {
      setStatus("error");
      toast.error("Message could not be sent", {
        description:
          error instanceof Error
            ? error.message
            : `Please try again, or email me directly at ${site.email}.`,
        position: "top-right",
        duration: 6000,
      });
      window.setTimeout(() => setStatus("idle"), 700);
    }
  }

  const inputClass =
    "focus-ring w-full rounded-xl border hairline bg-[var(--bg)] px-3.5 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-blue-400/40 focus:bg-[var(--surface-strong)] sm:rounded-2xl sm:px-4 sm:py-3.5";

  return (
    <section id="contact" className="section-pad relative overflow-hidden border-t hairline">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[120px]" />
      <div className="site-shell">
        <div className="overflow-hidden rounded-[1.55rem] border hairline bg-[var(--surface)] shadow-[var(--shadow)] lg:rounded-[2rem]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative overflow-hidden bg-slate-950 p-5 text-white sm:p-8 lg:p-12">
              <div className="topography pointer-events-none absolute inset-0 opacity-20" />
              <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
              <div className="relative z-10 flex h-full flex-col">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-cyan-300 sm:text-[10px]">Contact</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] sm:mt-5 sm:text-4xl lg:text-5xl">Get in Touch</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:mt-5 sm:leading-7">
                  For academic communication, research collaboration, software projects, or professional enquiries.
                </p>

                <div className="mt-6 grid gap-2 sm:mt-8 sm:gap-3 lg:mt-9 lg:gap-4">
                  <a href={`mailto:${site.email}`} className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-200 lg:h-10 lg:w-10"><Mail size={15} /></span>
                    <span className="min-w-0 flex-1 truncate">{site.email}</span>
                    <ArrowUpRight size={13} className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-emerald-200 lg:h-10 lg:w-10"><Phone size={15} /></span>
                    <span className="flex-1">{site.phone}</span>
                    <ArrowUpRight size={13} className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2.5 text-sm font-semibold text-slate-300 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-violet-200 lg:h-10 lg:w-10"><MapPin size={15} /></span>
                    {site.location}
                  </div>
                </div>

                <div className="mt-5 flex gap-2 sm:mt-7 lg:mt-auto lg:pt-10">
                  <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:-translate-y-1 hover:text-white lg:h-11 lg:w-11"><FaLinkedinIn size={16} /></a>
                  <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition hover:-translate-y-1 hover:text-white lg:h-11 lg:w-11"><FaGithub size={16} /></a>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-12">
              <div className="mb-5 flex items-center gap-3 sm:mb-7">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border hairline bg-[var(--bg)] text-[var(--accent)] sm:h-11 sm:w-11 sm:rounded-2xl"><MessageSquare size={17} /></span>
                <div>
                  <h3 className="font-display text-lg font-semibold sm:text-xl">Send a message</h3>
                  <p className="mt-0.5 text-[11px] leading-5 text-[var(--muted)] sm:mt-1 sm:text-xs">Complete the form and the message will be sent directly.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                  <label className="text-xs font-bold text-[var(--muted)]">
                    Name
                    <input name="name" required autoComplete="name" placeholder="Your name" className={`${inputClass} mt-1.5 sm:mt-2`} />
                  </label>
                  <label className="text-xs font-bold text-[var(--muted)]">
                    Email
                    <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={`${inputClass} mt-1.5 sm:mt-2`} />
                  </label>
                </div>

                <label className="block text-xs font-bold text-[var(--muted)]">
                  Reason for contact
                  <span className="relative mt-1.5 block sm:mt-2">
                    <select name="reason" required defaultValue="" className={`${inputClass} appearance-none pr-11`}>
                      <option value="" disabled>Select a reason</option>
                      <option value="Research collaboration">Research collaboration</option>
                      <option value="Project development">Developing a project</option>
                      <option value="Suggestions or ideas">Suggestions or ideas</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                    <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" />
                  </span>
                </label>

                <label className="block text-xs font-bold text-[var(--muted)]">
                  Subject
                  <input name="subject" required placeholder="What would you like to discuss?" className={`${inputClass} mt-1.5 sm:mt-2`} />
                </label>
                <label className="block text-xs font-bold text-[var(--muted)]">
                  Message
                  <textarea name="message" required rows={5} placeholder="Write your message..." className={`${inputClass} mt-1.5 h-28 resize-none sm:mt-2 sm:h-auto`} />
                </label>

                <label className="sr-only" aria-hidden="true">
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  disabled={status === "sending"}
                  className="btn-primary focus-ring w-full rounded-xl px-5 py-3.5 text-sm font-extrabold disabled:cursor-wait disabled:opacity-65 sm:rounded-2xl"
                  type="submit"
                >
                  {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={16} />}
                  {status === "sending" ? "Sending..." : "Send message"}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

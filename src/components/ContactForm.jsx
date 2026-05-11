import { useState } from "react";
import axios from "../api/axiosInstance";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Send,
    UserRound,
    AtSign,
    FileText,
    MessageSquare,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/contact", formData);

            if (response.status === 200) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const inputClass =
        "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950/40 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400/50 dark:focus:ring-blue-400/10";

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-white px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                        <Mail size={14} />
                        Contact & Collaboration
                    </span>

                    <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        Reach out for academic communication, research discussion, collaboration,
                        or professional networking.
                    </p>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-6 text-white shadow-xl shadow-blue-950/20"
                    >
                        <h3 className="text-2xl font-black">Contact Details</h3>

                        <p className="mt-3 text-sm leading-7 text-slate-300">
                            You can send a message through the form or contact me directly using
                            the details below.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                                <Mail className="mt-1 text-cyan-300" size={20} />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Email</p>
                                    <p className="mt-1 text-sm font-semibold">mahbubsarwar5@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                                <Phone className="mt-1 text-emerald-300" size={20} />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Phone</p>
                                    <p className="mt-1 text-sm font-semibold">+8801999949083</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 rounded-2xl bg-white/10 p-4">
                                <MapPin className="mt-1 text-violet-300" size={20} />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Address</p>
                                    <p className="mt-1 text-sm font-semibold leading-6">
                                        House-80, Road-06, Block-A, Pallabi, Dhaka-1216
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <a
                                href="https://www.linkedin.com/in/mahbub049"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white/15"
                            >
                                <Linkedin size={17} />
                                LinkedIn
                            </a>

                            <a
                                href="mailto:mahbubsarwar49@gmail.com"
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl"
                            >
                                <Mail size={17} />
                                Email Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/70 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20 md:p-7"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                        <UserRound size={14} />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                        <AtSign size={14} />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className={inputClass}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                    <FileText size={14} />
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                                    <MessageSquare size={14} />
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={5}
                                    required
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ y: -3, scale: 1.01 }}
                                whileTap={{ scale: 0.96 }}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl"
                            >
                                <Send size={17} />
                                Submit
                            </motion.button>

                            {status === "success" && (
                                <p className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                                    <CheckCircle2 size={17} />
                                    Message sent successfully!
                                </p>
                            )}

                            {status === "error" && (
                                <p className="flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-200">
                                    <AlertCircle size={17} />
                                    Something went wrong. Please try again later.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
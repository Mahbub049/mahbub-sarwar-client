import { motion } from "framer-motion";
import {
    CalendarCheck,
    Users,
    Gamepad2,
    Star,
    Crown,
    Clock,
    MapPin,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

const activities = [
    {
        org: "IEEE Computer Society BUP Student Branch Chapter",
        meta: "Full-time · 2 yrs · Dhaka, Bangladesh · On-site",
        icon: CalendarCheck,
        color: "from-cyan-500 to-blue-600",
        roles: [
            {
                title: "Chairperson",
                time: "Mar 2023 – May 2024",
                points: [
                    'Launched "IEEE Branch Fest 2023" – 2-day flagship event with 7 segments.',
                    "Organized major webinar featuring Jhankar Mahbub on Web Development.",
                ],
            },
            {
                title: "Event Management Coordinator",
                time: "Jun 2022 – Mar 2023",
                points: [
                    "Planned and coordinated inauguration events for IEEE CS BUP SBC.",
                    'Managed "Research Reveals Program" jointly hosted by IEEE SB, WIE, and CS.',
                ],
            },
        ],
    },
    {
        org: "BUP Robotics Club",
        meta: "Full-time · 11 mos · Dhaka, Bangladesh · On-site",
        icon: Users,
        color: "from-violet-500 to-fuchsia-600",
        roles: [
            {
                title: "Assistant Joint Secretary",
                time: "Mar 2022 – Jan 2023",
                points: [
                    "Worked in technical workshops and promotional design for BUP Day.",
                    "Assisted event teams in planning and presentation design.",
                ],
            },
        ],
    },
    {
        org: "BUP InfoTech Club",
        meta: "Gaming Event Host · 2022",
        icon: Gamepad2,
        color: "from-emerald-500 to-teal-600",
        roles: [
            {
                title: "Gaming Event Host",
                time: "2022",
                points: ["Hosted Intra-BUP MIST Gaming Contest."],
            },
        ],
    },
    {
        org: "Volunteering",
        meta: "Conference & national event volunteering",
        icon: Star,
        color: "from-amber-500 to-orange-600",
        roles: [
            {
                title: "Volunteer",
                time: "2023",
                points: ["2nd Int’l ICT Conference on Sustainability."],
            },
            {
                title: "Volunteer",
                time: "2018",
                points: ["ACC National Fest."],
            },
        ],
    },
];

export default function ExtraCurricular() {
    return (
        <section
            id="extra-curricular"
            className="relative overflow-hidden bg-slate-50 px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10" />

            <div className="relative z-10 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
                            <Sparkles size={14} />
                            Leadership & Activities
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            Extra-Curricular{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                                Activities
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            Leadership roles, club involvement, event management, and volunteering experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-blue-600 dark:text-blue-300">04</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Groups</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-violet-600 dark:text-violet-300">06</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Roles</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-300">2024</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Latest</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid gap-5 md:grid-cols-2">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;

                        return (
                            <motion.div
                                key={activity.org}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                whileHover={{ y: -6 }}
                                className="group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activity.color} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                    >
                                        <Icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white">
                                            {activity.org}
                                        </h3>

                                        <p className="mt-2 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                                            <MapPin size={14} />
                                            {activity.meta}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-4">
                                    {activity.roles.map((role, roleIndex) => (
                                        <div
                                            key={`${role.title}-${roleIndex}`}
                                            className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/40"
                                        >
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h4 className="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white">
                                                    <Crown size={15} className="text-blue-500 dark:text-blue-300" />
                                                    {role.title}
                                                </h4>

                                                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                                    <Clock size={13} />
                                                    {role.time}
                                                </span>
                                            </div>

                                            <div className="mt-3 space-y-2">
                                                {role.points.map((point, i) => (
                                                    <p
                                                        key={i}
                                                        className="flex items-start gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                                    >
                                                        <CheckCircle2
                                                            size={16}
                                                            className="mt-1 shrink-0 text-emerald-500 dark:text-emerald-300"
                                                        />
                                                        {point}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
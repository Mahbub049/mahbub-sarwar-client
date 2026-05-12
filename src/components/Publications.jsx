import { motion } from "framer-motion";
import {
    FaFileAlt,
    FaCheckCircle,
    FaClock,
    FaCalendarAlt,
    FaBookOpen,
    FaMicroscope,
    FaBrain,
    FaGlobe,
} from "react-icons/fa";

const publications = [
    {
        title: "An Explainable Ensemble Learning Framework for Brain Tumor Classification Using Pretrained Models and XAI Techniques",
        journal: "Accepted in: Journal of FST Volume 3, Issue-01",
        year: 2025,
        status: "Published",
        area: "Biomedical Imaging",
    },
    {
        title: "Sentiment Classification in Movie Reviews Through a Comparative Analysis of Machine Learning Models",
        journal: "Accepted in: Journal of FST Volume 3, Issue-01",
        year: 2025,
        status: "Published",
        area: "NLP",
    },
    // {
    //     title: "Advanced Brain Tumor Classification and Segmentation with an Enhanced Weighted Ensemble of CNN Models and UNet Architecture",
    //     journal: "Under Review",
    //     year: 2025,
    //     status: "Under Review",
    //     area: "Medical AI",
    // },
];

function getStatusClass(status) {
    if (status === "Published") {
        return "border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200";
    }

    if (status === "Accepted") {
        return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200";
    }

    if (status === "Under Review") {
        return "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200";
    }

    return "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200";
}

export default function Publications() {
    const published = publications.filter((pub) => pub.status === "Published").length;

    const accepted = publications.filter(
        (pub) => pub.status === "Accepted"
    ).length;

    const review = publications.filter(
        (pub) => pub.status === "Under Review"
    ).length;

    return (
        <section
            id="publications"
            className="relative overflow-hidden bg-slate-50 px-4 py-16 font-montserrat text-slate-900 dark:bg-slate-950 dark:text-white md:px-6"
        >
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/10" />
            <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200">
                            <FaBookOpen />
                            Research Works
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Publications
                            </span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                            Research contributions focused on machine learning, medical image
                            analysis, NLP, ensemble learning, and explainable AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {/* <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-blue-600 dark:text-blue-300">
                                {publications.length}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Papers</p>
                        </div> */}
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-cyan-600 dark:text-cyan-300">
                                {published}
                            </p>

                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                                Published
                            </p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-emerald-600 dark:text-emerald-300">
                                {accepted}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Accepted</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.06]">
                            <p className="text-2xl font-black text-orange-600 dark:text-orange-300">
                                {review}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Review</p>
                        </div>

                    </div>
                </motion.div>

                <div className="grid gap-5">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.07 }}
                            whileHover={{ y: -5 }}
                            className="group rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                <div className="flex gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 text-xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                                        {pub.area === "Medical AI" ? <FaBrain /> : <FaFileAlt />}
                                    </div>

                                    <div>
                                        <div className="mb-3 flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                                                <FaCalendarAlt />
                                                {pub.year}
                                            </span>

                                            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">
                                                <FaMicroscope />
                                                {pub.area}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-black leading-snug text-slate-900 dark:text-white sm:text-xl">
                                            {pub.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                            {pub.journal}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className={`w-fit shrink-0 rounded-2xl border px-4 py-3 text-sm font-black ${getStatusClass(
                                        pub.status
                                    )}`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        {
                                            pub.status === "Published"
                                                ? <FaGlobe />
                                                : pub.status === "Accepted"
                                                    ? <FaCheckCircle />
                                                    : <FaClock />
                                        }
                                        {pub.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
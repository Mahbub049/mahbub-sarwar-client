import { useState } from "react";
import axios from "../api/axiosInstance";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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

    return (
        <motion.section
            id="contact"
            className="w-full  py-20 px-4 md:px-8 lg:px-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl font-montserrat mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base">
                        Feel free to reach out via the form or directly using the contact details. I’ll respond as soon as possible.
                    </p>

                    <div className="space-y-4 text-gray-700 dark:text-gray-200 text-base">
                        <div className="flex items-center gap-3">
                            <Mail className="text-blue-600" />
                            <span>mahbubsarwar5@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="text-blue-600" />
                            <span>+8801999949083</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-blue-600 mt-1" />
                            <span className="leading-snug">
                                House-80, Road-06, Block-A, Pallabi, Dhaka-1216
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-5 pt-4">
                        <a
                            href="https://www.linkedin.com/in/mahbub049"
                            target="_blank"
                            className="text-blue-600 hover:underline flex items-center gap-2"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a
                            href="mailto:mahbubsarwar49@gmail.com"
                            className="text-green-600 hover:underline"
                        >
                            Email Me
                        </a>
                    </div>
                </div>


                {/* Form */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Submit
                        </motion.button>

                        {status === "success" && (
                            <p className="text-green-600 text-sm mt-2 text-center">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-sm mt-2 text-center">
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>

            </div>
        </motion.section>
    );
}

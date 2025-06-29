import { motion } from "framer-motion";
import { CalendarCheck, Users, Gamepad2, Star } from "lucide-react";

export default function ExtraCurricular() {
  return (
    <motion.section
      id="extra-curricular"
      className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Extra-Curricular Activities
        </h2>

        <div className="space-y-10">
          {/* IEEE Activities */}
          <motion.div
            className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg mb-2">
              <CalendarCheck size={20} /> IEEE Computer Society BUP Student Branch Chapter
            </div>
            <p className="text-sm text-gray-500 italic mb-3">
              Full-time · 2 yrs · Dhaka, Bangladesh · On-site
            </p>
            <div className="text-gray-800 space-y-4">
              <div>
                <p className="font-semibold text-sm">Chairperson · Mar 2023 – May 2024 (1 yr 3 mos)</p>
                <ul className="list-disc list-inside ml-5 text-gray-700 text-sm">
                  <li>Launched "IEEE Branch Fest 2023" – 2-day flagship event with 7 segments.</li>
                  <li>Organized major webinar featuring Jhankar Mahbub on Web Dev.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sm">Event Management Coordinator · Jun 2022 – Mar 2023 (10 mos)</p>
                <ul className="list-disc list-inside ml-5 text-gray-700 text-sm">
                  <li>Planned and coordinated inauguration events for IEEE CS BUP SBC.</li>
                  <li>Managed "Research Reveals Program" jointly hosted by IEEE SB, WIE, and CS.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Robotics Club */}
          <motion.div
            className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg mb-2">
              <Users size={20} /> BUP Robotics Club
            </div>
            <p className="text-sm text-gray-500 italic mb-2">
              Full-time · 11 mos · Dhaka, Bangladesh · On-site
            </p>
            <div className="text-gray-800">
              <p className="font-semibold text-sm mb-1">
                Assistant Joint Secretary · Mar 2022 – Jan 2023
              </p>
              <ul className="list-disc list-inside ml-5 text-gray-700 text-sm">
                <li>Worked in technical workshops and promotional design (After Effects, BUP Day).</li>
                <li>Assisted event teams in planning and presentation design.</li>
              </ul>
            </div>
          </motion.div>

          {/* InfoTech Club */}
          <motion.div
            className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg mb-2">
              <Gamepad2 size={20} /> BUP InfoTech Club
            </div>
            <p className="text-gray-700 text-sm">
              Gaming Event Host (2022) – Hosted Intra-BUP MIST Gaming Contest.
            </p>
          </motion.div>

          {/* Volunteering & Internships */}
          <motion.div
            className="bg-white border-l-4 border-blue-600 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg mb-2">
              <Star size={20} /> Volunteering
            </div>
            <ul className="list-disc list-inside ml-5 text-gray-700 text-sm">
              <li>Volunteer · 2nd Int’l ICT Conference on Sustainability (2023)</li>
              <li>Volunteer · ACC National Fest (2018)</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

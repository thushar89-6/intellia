"use client"; // Only needed for Next.js App Router
import { motion } from "framer-motion";
import Card from "./Card";

export default function MovingComponent() {
  return (
    <div className="overflow-hidden">
      <motion.div
        className=" text-white flex items-center justify-center lg:gap-10"
        animate={{ x: [300, -300] }} // Moves left to right and back
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Card content='The platforms ability to analyze and synthesize complex pharmaceutical data has significantly accelerated our research process' name='Dr. Emily Thomphson' role='Head of Oncology' company='Innvovation Pharmacruticals'/>
        <Card content='The platforms ability to analyze and synthesize complex pharmaceutical data has significantly accelerated our research process' name='Dr. Emily Thomphson' role='Head of Oncology' company='Innvovation Pharmacruticals'/>
        <Card content='The platforms ability to analyze and synthesize complex pharmaceutical data has significantly accelerated our research process' name='Dr. Emily Thomphson' role='Head of Oncology' company='Innvovation Pharmacruticals'/>
      </motion.div>
    </div>
  );
}

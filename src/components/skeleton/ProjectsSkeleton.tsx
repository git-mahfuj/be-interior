"use client"
import { motion } from "framer-motion";

const ProjectSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      className="relative flex flex-col items-center justify-center h-80 bg-zinc-200 rounded-xl shadow-lg border border-zinc-100 overflow-hidden p-6"
    >
      <div className="absolute inset-0 bg-linear-to-r from-zinc-200 via-zinc-100 to-zinc-200 animate-pulse" />
      <div className="absolute bottom-3 w-3/4 h-8 bg-zinc-300 rounded-md" />
    </motion.div>
  );
};

export default ProjectSkeleton;
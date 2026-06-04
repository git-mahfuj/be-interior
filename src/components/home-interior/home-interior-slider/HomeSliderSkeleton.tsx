import { motion } from "framer-motion";

const HomeSliderSkeleton = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden bg-zinc-200">
      
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200"
      />
      
      
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center md:items-start px-6 sm:px-12 md:pl-20 lg:pl-32 xl:pl-40">
        <div className="max-w-2xl w-full flex flex-col items-center md:items-start gap-4">
          <div className="w-3/4 h-12 md:h-16 bg-zinc-300 rounded-md" />
          <div className="w-1/2 h-6 md:h-8 bg-zinc-300 rounded-md" />
          <div className="w-40 h-12 bg-zinc-300 rounded-lg mt-4" />
        </div>
      </div>
    </div>
  );
};

export default HomeSliderSkeleton;
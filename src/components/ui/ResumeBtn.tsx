"use client";
import { motion } from "framer-motion";

const ResumeBtn = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <a
        href="/resume/Robiul_Hossain_Resume.pdf"
        download="Robiul_Hossain_Resume"
        className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-bold tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap hover:bg-emerald-300 focus:bg-emerald-300 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none border-4 border-emerald-500 hover:shadow-md focus:shadow-md"
      >
        <span className="order-2">Download Resume</span>
        <span className="relative only:-mx-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            role="graphics-symbol"
            aria-labelledby="title-01 desc-01"
          >
            <title id="title-01">Download</title>
            <desc id="desc-01">download a resume</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </span>
      </a>
    </motion.div>
  );
};

export default ResumeBtn;

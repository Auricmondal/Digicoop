import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="border-b border-[#0000004D] overflow-hidden flex flex-col my-[64px]"
      transition={{ layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } }}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center mb-3 text-left cursor-pointer"
      >
        <motion.h4
          layout
          className="text-xl md:text-2xl lg:text-4xl font-semibold"
        >
          {question}
        </motion.h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown />
        </motion.div>
      </button>

      <motion.div
        layout
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className={`text-gray-700 overflow-hidden transition-opacity duration-300 ${
          isOpen ? "pb-8" : "pb-0 h-0"
        }`}
      >
        {isOpen && <div>{answer}</div>}
      </motion.div>
    </motion.div>
  );
}

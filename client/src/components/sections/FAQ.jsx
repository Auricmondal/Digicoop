import { LayoutGroup } from "motion/react";
import FAQItem from "../ui/FAQItem";

const faqs = [
  {
    question: "Question",
    answer: "Answer",
  },
  {
    question: "Question",
    answer: "Answer",
  },
  {
    question: "Question",
    answer: "Answer",
  },
];

export default function FAQSection() {
  return (
    <div className="mx-auto px-6 py-8 w-[95vw]">
      <h1 className="text-2xl md:text-[32px] lg:text-[48px] mb-[10px] font-medium text-center">
        Frequently Asked Questions
      </h1>
      <LayoutGroup>
        <div className="space-y-[10px]">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}

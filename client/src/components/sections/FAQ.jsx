import { LayoutGroup } from "motion/react";
import FAQItem from "../ui/FAQItem";
import SectionWrapper from "../../layouts/SectionWrapper";

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
    <SectionWrapper className="max-w-[1460px] mx-auto">
      <h2 className="text-2xl md:text-[32px] lg:text-[48px] mb-[10px] font-medium text-center">
        Frequently Asked Questions
      </h2>
      <LayoutGroup>
        <div className="space-y-[10px]">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </LayoutGroup>
    </SectionWrapper>
  );
}

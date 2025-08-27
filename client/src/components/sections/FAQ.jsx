import { LayoutGroup } from "motion/react";
import FAQItem from "@/components/ui/FAQItem";
import SectionWrapper from "@/layouts/SectionWrapper";
import AnimatedHeader from "@/components/ui/AnimatedHeader";

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
      <div className="text-2xl md:text-[32px] lg:text-[48px] mb-[10px] font-medium text-center">
        <AnimatedHeader
          words={[
            { text: "Frequently", isGradient: false },
            { text: "Asked", isGradient: false },
            { text: "Questions", isGradient: false },
          ]}
          className="text-black text-center text-2xl md:text-[32px] lg:text-[48px] mb-[10px] font-medium justify-center"
        />
      </div>
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

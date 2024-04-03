"use client";
import React from "react";
import SectionTitle from "@/app/components/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { frequentQuestion } from "@/lib/data/question";

const FaqSection = () => {
  return (
    <section className="flex w-full px-4 md:px-10 py-20 flex-col justify-center items-start gap-12">
      <SectionTitle
        title="Frequently Asked Questions"
        desc="Still have question about us? You might be able to find your answer here."
      />
      <Accordion type="multiple" className="w-full md:px-12">
        {frequentQuestion.map((question, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;

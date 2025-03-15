"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SubscriptionFAQ() {
  const faqs = [
    {
      question: "How often will I receive my subscription box?",
      answer:
        "Subscription boxes are delivered once a month. You'll receive your box around the same time each month, typically within the first week.",
    },
    {
      question: "Can I skip a month or pause my subscription?",
      answer:
        "Yes, you can skip a month or pause your subscription at any time. Simply log in to your account and manage your subscription settings.",
    },
    {
      question: "What if I'm not home when my box is delivered?",
      answer:
        "Our boxes are designed to keep plants safe for up to 3 days. If you're concerned about a delivery, you can add delivery instructions to your order.",
    },
    {
      question: "Can I customize the plants I receive?",
      answer:
        "When you sign up, you'll complete a plant preference quiz that helps us select plants that match your lifestyle and preferences. While you can't choose specific plants, you can update your preferences at any time.",
    },
    {
      question: "What if my plant arrives damaged?",
      answer:
        "We have a 30-day plant guarantee. If your plant arrives damaged or dies within 30 days of delivery, we'll replace it free of charge.",
    },
    {
      question: "Can I gift a subscription?",
      answer:
        "Yes! Our subscription boxes make great gifts. You can purchase a gift subscription for 3, 6, or 12 months.",
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800 dark:text-green-300">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}


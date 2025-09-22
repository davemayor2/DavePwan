import { contactBg } from "@/features/assets";
import ContactSection from "@/features/ContactSection";
import FAQSection from "@/features/FAQSection";
import Link from "next/link";
import React from "react";

const index = () => {
  const faqs = [
    {
      question: "What is PWAN Elite?",
      answer:
        "PWAN Elite is a leading real estate company specializing in land acquisition and property development. We provide clients with access to premium land opportunities and comprehensive real estate solutions across Nigeria.",
    },
    {
      question: "Can I pay in installments?",
      answer:
        "Absolutely! We offer flexible payment plans including monthly and quarterly installments to make land ownership accessible and affordable for everyone. Our payment plans are designed to suit different financial capabilities.",
    },
    {
      question: "Can I buy property from abroad (diaspora)?",
      answer: "Yes, we have extensive experience serving diaspora clients. You can purchase property remotely with our dedicated support team handling all documentation, payments, and property management on your behalf.",
    },
    {
      question: "How long does allocation take after payment?",
      answer:
        "Allocation typically takes 7-14 business days after payment confirmation. We provide regular updates throughout the process and ensure all legal documentation is properly completed.",
    },
    {
      question: "What documents do I need for land purchase?",
      answer:
        "You'll need a valid ID, proof of address, and payment confirmation. For diaspora clients, we can guide you through additional requirements. Our team handles most documentation on your behalf.",
    },
    {
      question: "Do you provide property management services?",
      answer:
        "Yes, we offer comprehensive property management services including site visits, progress updates, and maintenance coordination to ensure your investment is well-protected.",
    },
    {
      question: "What locations do you cover?",
      answer:
        "We operate across major Nigerian cities including Lagos, Abuja, Port Harcourt, and other strategic locations. Each location is carefully selected for growth potential and accessibility.",
    },
    {
      question: "Is my investment secure?",
      answer:
        "Absolutely. All our properties come with proper legal documentation, government approvals, and title deeds. We ensure complete transparency and legal compliance in all transactions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-center px-6 relative"
          style={{ backgroundImage: `url(${contactBg.src})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your real estate journey? Our expert team is here to guide you through every step of your property investment.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">💬</span> 
              Let's Connect
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're Here to Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our properties or services? Reach out to our team of real estate experts who are ready to assist you.
            </p>
          </div>
          <ContactSection />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              <span className="mr-2">❓</span> 
              Common Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our services, properties, and investment opportunities.
            </p>
          </div>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </div>
  );
};

export default index;

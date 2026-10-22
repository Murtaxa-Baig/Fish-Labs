import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { ContactFormSection } from "../../components/sections/ContactFormSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Music Lab",
  description:
    "Get in touch with the Music Lab engineering team for general inquiries, enterprise licensing, or technical acoustic support.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <main className="w-full flex-1">
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}

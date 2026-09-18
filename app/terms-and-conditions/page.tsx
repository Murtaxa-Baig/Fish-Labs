import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { TermsSectionContent } from "../../components/sections/TermsSectionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Fish Labs",
  description:
    "Review the terms of service, subscription billing policies, device permissions, and voice synthesis rights for Fish Labs.",
};

export default function TermsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <main className="w-full pt-16 flex-1">
        <TermsSectionContent />
      </main>
      <Footer />
    </div>
  );
}

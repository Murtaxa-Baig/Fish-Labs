import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PrivacySectionContent } from "../../components/sections/PrivacySectionContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Fish Labs",
  description:
    "Read the Fish Labs privacy policy. Learn how we handle your voice data, ephemeral processing pipelines, device permissions, and universal user rights.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <main className="w-full pt-16 flex-1">
        <PrivacySectionContent />
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { DeleteAccountSection } from "../../components/sections/DeleteAccountSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — Fish Labs",
  description:
    "Permanent deletion request and neural data removal protocol for Fish Labs user accounts.",
};

export default function DeleteAccountPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <main className="w-full pt-16 flex-1">
        <DeleteAccountSection />
      </main>
      <Footer />
    </div>
  );
}

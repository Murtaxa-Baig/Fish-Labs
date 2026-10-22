import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import DeleteAccountForm from "../../components/DeleteAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account — Music Lab",
  description:
    "Request account deletion and neural data removal for Music Lab.",
};

export default function DeleteAccountPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      <Header />
      <DeleteAccountForm />
      <Footer />
    </div>
  );
}

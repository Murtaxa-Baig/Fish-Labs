"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  Send,
  Link2,
  KeyRound,
  ShieldAlert,
} from "lucide-react";

export default function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const finalReason = reason === "other" ? customReason : reason;
  const isFormValid =
    email.trim() &&
    reason &&
    (reason !== "other" || customReason.trim()) &&
    confirmed;

  const handleDeleteClick = () => {
    if (!isFormValid) {
      showToast("Please fill all fields and confirm the terms.", "error");
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsLoading(true);
    setIsModalOpen(false);

    try {
      const response = await fetch(`/api/delete-account`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim(), reason: finalReason }),
      });

      const data = await response.json();

      if (
        response.ok &&
        data.success !== false &&
        (data.success || !data.error)
      ) {
        showToast(
          data.message || "Verification email dispatched.",
          "success"
        );
        setIsVerificationSent(true);
      } else {
        showToast(
          data.message || data.error || "Failed to initiate deletion request.",
          "error"
        );
      }
    } catch (error) {
      console.error("Delete request error:", error);
      showToast("An error occurred. Please try again later.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-1 justify-center py-12 px-4 shadow-sm relative min-h-[70vh] items-center bg-[#fafafa]">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 border ${
              toast.type === "success"
                ? "bg-emerald-500 border-emerald-400 text-white"
                : "bg-red-500 border-red-400 text-white"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <p className="font-medium text-sm">{toast.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Initiate Account Deletion
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Are you sure you want to request account deletion? We will send a confirmation link and code to your registered email to verify your identity.
                </p>
              </div>
              <div className="flex border-t border-gray-100">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-4 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 px-6 py-4 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors border-l border-gray-100 cursor-pointer"
                >
                  Confirm Request
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-full max-w-xl">
        <AnimatePresence mode="wait">
          {!isVerificationSent ? (
            <motion.div
              key="delete-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col gap-6"
            >
              {/* Header Title */}
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldAlert className="w-4 h-4" />
                  Account Security
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  Delete Fish Labs Account
                </h1>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  We are sorry to see you go. Please review the consequences below before requesting account deletion.
                </p>
              </div>

              {/* Warning Notice Card */}
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Important Deletion Notice:</span>
                </div>
                <ul className="text-xs text-red-900/80 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>Your voice models, cloned audio profiles, and project history will be permanently erased.</li>
                  <li>Active subscriptions will be canceled at the end of your billing cycle.</li>
                  <li>This action is irreversible after identity verification is completed.</li>
                </ul>
              </div>

              {/* Input Form Container */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
                <div className="space-y-4">
                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Registered Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Reason Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Reason for Leaving
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a reason
                      </option>
                      <option value="no-longer-needed">
                        No longer need voice synthesis
                      </option>
                      <option value="switching">
                        Switching to another product
                      </option>
                      <option value="privacy">Privacy concerns</option>
                      <option value="costs">Cost / Pricing</option>
                      <option value="other">Other reason</option>
                    </select>
                  </div>

                  {/* Custom Reason Field */}
                  {reason === "other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1.5"
                    >
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                        Specify Your Reason
                      </label>
                      <input
                        type="text"
                        required
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        placeholder="Let us know how we can improve"
                        className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all placeholder:text-gray-400"
                      />
                    </motion.div>
                  )}

                  {/* Confirmation Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={confirmed}
                        onChange={(e) => setConfirmed(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500 cursor-pointer"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I confirm that I want to delete my Fish Labs account and understand that all associated voice data will be permanently purged.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  onClick={handleDeleteClick}
                  disabled={isLoading || !isFormValid}
                  className={`w-full flex items-center justify-center rounded-xl h-12 px-6 bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                    isLoading || !isFormValid
                      ? "opacity-50 cursor-not-allowed shadow-none"
                      : ""
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Requesting...</span>
                    </div>
                  ) : (
                    "Request Account Deletion"
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                Having trouble?{" "}
                <Link href="/contact" className="text-[#2084ff] hover:underline font-medium">
                  Contact our support team
                </Link>{" "}
                for help.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="verification-sent"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl text-center space-y-6 max-w-lg mx-auto"
            >
              <div className="w-20 h-20 bg-blue-50 text-[#2084ff] rounded-full flex items-center justify-center mx-auto relative">
                <Mail className="w-10 h-10 animate-bounce" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Verification Sent!
                </h2>
                <p className="text-gray-500 text-sm">
                  We have dispatched a verification email to
                </p>
                <p className="text-[#2084ff] font-semibold text-lg select-all">
                  {email}
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl text-left border border-gray-100 text-sm text-gray-600 space-y-3">
                <div className="flex gap-3">
                  <Link2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Option 1:</strong> Click the secure <strong>"Permanently Delete My Account"</strong> magic link inside the email to navigate automatically.
                  </p>
                </div>
                <div className="flex gap-3">
                  <KeyRound className="w-5 h-5 text-[#2084ff] shrink-0 mt-0.5" />
                  <p>
                    <strong>Option 2:</strong> Copy the 6-digit verification code and paste it on our verification portal.
                  </p>
                </div>
              </div>

              <p className="text-xs text-red-500 font-medium">
                * The link and code are valid for exactly 15 minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                <Link
                  href="/delete-account/confirm"
                  className="px-6 py-3 bg-[#2084ff] text-white font-bold rounded-xl shadow-md hover:bg-[#1a6fe0] transition-all text-sm flex items-center justify-center gap-2"
                >
                  <span>Enter Code Manually</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsVerificationSent(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all text-sm cursor-pointer"
                >
                  Back to Form
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

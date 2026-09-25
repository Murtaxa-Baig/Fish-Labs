"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { FormField } from "../ui/FormField";
import { ErasureAssetCard } from "../ui/ErasureAssetCard";
import {
  HeartHandshake,
  Activity,
  LibraryBig,
  Fingerprint,
  CloudOff,
  AtSign,
  ChevronDown,
  Trash2,
  Receipt,
  Lock,
  MailCheck,
  Loader2,
} from "lucide-react";

export const DeleteAccountSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfirmed || !email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section className="w-full bg-[#fafafa] py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-[720px] mx-auto flex flex-col gap-8">
        {/* Top Breadcrumb & Status Badge */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-widest text-[#575e70]">
              Account Operations
            </span>
            <span className="text-[#575e70] opacity-40">/</span>
            <span className="font-semibold text-[#2084ff]">Data Erasure</span>
          </div>
          <Badge variant="status" showDot>
            Acoustic Profile Vault
          </Badge>
        </div>

        {/* Header Section */}
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Delete Fish Labs Account
          </h1>
          <p className="text-base text-[#4b5563] max-w-[55ch] leading-relaxed">
            Permanent deletion request and neural data removal protocol.
          </p>
        </div>

        {/* Warning / Irreversible Action Notice Panel */}
        <div className="rounded-xl bg-white border border-[#e5e7eb] shadow-sm p-6 flex flex-col md:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#e6f0ff] text-[#2084ff] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-base font-bold text-[#111827]">
                Irreversible Action Notice
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#e6f0ff] text-[#2084ff]">
                14-Day Purge
              </span>
            </div>
            <p className="text-sm text-[#575e70] leading-relaxed">
              Account deletion is permanent and cannot be undone. Once confirmed, all synthesized neural models, cloned acoustic vectors, high-fidelity project stems, and subscription histories will be permanently scrubbed from our production clusters.
            </p>
          </div>
        </div>

        {/* Assets Subject to Erasure Grid */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#111827]">
              Assets Subject to Erasure
            </span>
            <span className="text-xs text-[#575e70] font-medium">
              Zero-Knowledge Wipe
            </span>
          </div>
          <p className="text-xs text-[#575e70]">
            The following resources linked to your unique hardware token and cryptographic ID will be immediately decoupled and unrecoverable:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ErasureAssetCard
              icon={<Activity className="w-3.5 h-3.5" />}
              title="Voice Models & Vectors"
              description="Trained embeddings and timbre lattices"
            />
            <ErasureAssetCard
              icon={<LibraryBig className="w-3.5 h-3.5" />}
              title="Stored Audio & Stems"
              description="Raw studio takes, mastered renders, .wav files"
            />
            <ErasureAssetCard
              icon={<Fingerprint className="w-3.5 h-3.5" />}
              title="Credentials & Metadata"
              description="Authentication tokens, billing records, logs"
            />
            <ErasureAssetCard
              icon={<CloudOff className="w-3.5 h-3.5" />}
              title="Cloud Render Space"
              description="Reserved high-performance GPU tensor cache"
            />
          </div>
        </div>

        {/* Deletion Protocol Form or Submitted State */}
        <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm p-6 md:p-8">
          {isSubmitted ? (
            <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e6f0ff] text-[#2084ff] flex items-center justify-center">
                <MailCheck className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1.5 items-center">
                <h3 className="text-2xl font-bold text-[#111827]">
                  Deletion Protocol Initiated
                </h3>
                <p className="text-sm text-[#575e70] max-w-[42ch] leading-relaxed">
                  A confirmation verification token has been dispatched to{" "}
                  <strong className="text-[#111827]">{email}</strong>. Please confirm within 60 minutes to finalize model deprecation.
                </p>
              </div>
              <Button variant="secondary" size="md" href="/" className="mt-2">
                Exit to Home
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Email Input */}
              <FormField
                id="account-email"
                label="Registered Account Email"
                rightLabel="Verification required"
              >
                <div className="relative flex items-center">
                  <AtSign className="w-4 h-4 absolute left-3 text-[#575e70]" />
                  <input
                    id="account-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="studio.engineer@domain.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#f3f4f6] rounded-lg text-sm text-[#111827] placeholder:text-[#9ca3af] focus:bg-white focus:border-[#2084ff] focus:outline-none border border-[#e5e7eb] transition-all"
                  />
                </div>
              </FormField>

              {/* Reason Dropdown */}
              <FormField
                id="deletion-reason"
                label="Primary Reason for Departure (Optional)"
                rightLabel="Helps refine synthesis models"
              >
                <div className="relative">
                  <select
                    id="deletion-reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full appearance-none bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 pr-10 border border-[#e5e7eb] focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a primary operational reason
                    </option>
                    <option value="no-longer-needed">
                      Project concluded / No longer need voice synthesis
                    </option>
                    <option value="switching">
                      Transitioning to alternative audio tool
                    </option>
                    <option value="privacy">
                      Strict data governance / Privacy policies
                    </option>
                    <option value="temporary">
                      Temporary production hiatus
                    </option>
                    <option value="costs">
                      Subscription pricing / Resource allocation
                    </option>
                    <option value="other">
                      Other bespoke considerations
                    </option>
                  </select>
                  <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#575e70]" />
                </div>
              </FormField>

              {/* Agreement Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                  <input
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={(e) => setIsConfirmed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded accent-[#2084ff] cursor-pointer"
                  />
                  <span className="text-xs text-[#575e70] group-hover:text-[#111827] transition-colors leading-relaxed">
                    I acknowledge that this action is irreversible. All acoustic models, neural voiceprints, and audio assets tied to this identity will be permanently eradicated without recourse.
                  </span>
                </label>
              </div>

              {/* Action Controls */}
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-2">
                <Link
                  href="/"
                  className="w-full sm:w-auto text-center text-xs font-semibold text-[#575e70] hover:text-[#111827] py-2.5 px-4 transition-colors"
                >
                  Cancel and Return to Studio
                </Link>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={!isConfirmed || isSubmitting}
                  iconLeft={
                    isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Trash2 className="w-4 h-4" />
                    )
                  }
                  className="w-full sm:w-auto"
                >
                  {isSubmitting
                    ? "Processing Removal..."
                    : "Permanently Delete Account"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Subscription Guidance Notice */}
        <div className="rounded-xl bg-white border border-[#e5e7eb] p-6 flex items-start gap-4">
          <Receipt className="w-5 h-5 text-[#575e70] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[#111827]">
              Important Third-Party Subscription Notice
            </span>
            <p className="text-xs text-[#575e70] leading-relaxed">
              If you currently hold an active Fish Labs Pro or Studio subscription purchased through Apple App Store or Google Play Store, deleting your Fish Labs account does not automatically cancel platform-level merchant agreements. You must manually cancel recurring billing via your device's operating system settings to avoid continued platform charges.
            </p>
          </div>
        </div>

        {/* Security & Compliance Footnote */}
        <div className="text-center flex flex-col items-center gap-1.5 pt-4">
          <div className="flex items-center gap-1.5 text-[#575e70] text-xs font-medium">
            <Lock className="w-4 h-4" />
            <span>
              Cryptographic Hash Removal Compliant • ISO/IEC 27701 Architecture
            </span>
          </div>
          <p className="text-[11px] text-[#575e70]/70">
            Inquiries regarding enterprise custom SLAs and cold vault storage retention can be routed via acoustic compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

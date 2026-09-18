import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import { QuickJumpBar, JumpLink } from "../ui/QuickJumpBar";
import { DataCategoryCard } from "../ui/DataCategoryCard";
import { Button } from "../ui/Button";
import {
  ShieldCheck,
  IdCard,
  Activity,
  Cpu,
  CpuIcon,
  Lock,
  Info,
  Mic,
  FolderOpen,
  Bell,
  Download,
  Trash2,
  Mail,
} from "lucide-react";

export const PrivacySectionContent: React.FC = () => {
  const jumpLinks: JumpLink[] = [
    { label: "1. Data Collected", href: "#collect" },
    { label: "2. Voice Usage", href: "#use" },
    { label: "3. Permissions", href: "#permissions" },
    { label: "4. Third Parties", href: "#sharing" },
    { label: "5. User Rights", href: "#rights" },
    { label: "6. Security & Contact", href: "#security" },
  ];

  return (
    <div className="w-full flex flex-col bg-[#fafafa]">
      {/* Header Context Banner */}
      <section className="w-full bg-[#f3f4f6] border-b border-[#e5e7eb] py-10">
        <div className="max-w-4xl mx-auto px-5 md:px-6 flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <Badge variant="status" showDot>
              Compliance &amp; Governance
            </Badge>
            <span className="text-[#575e70] font-mono text-xs">
              Doc ID: FL-PRV-2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#575e70] font-medium">
            Effective Date: January 15, 2025 • Transparent, ethical AI voice handling
          </p>
        </div>
      </section>

      {/* Main Body Layout */}
      <div className="max-w-4xl mx-auto px-5 md:px-6 py-12 flex flex-col gap-12">
        {/* Highlighted Voice Pledge Banner */}
        <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#ffdbce] text-[#f46117] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#111827]">Our Voice Pledge</span>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              At Fish Labs, your voice data belongs to you. We do not sell your personal recordings or use private voice samples to train global foundational models without explicit opt-in.
            </p>
          </div>
        </div>

        {/* Quick Navigation Anchor Strip */}
        <QuickJumpBar links={jumpLinks} />

        {/* Policy Sections */}
        <div className="flex flex-col gap-14">
          {/* Section 1: Data Collected */}
          <section id="collect" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                01
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Information We Collect
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              We collect and process minimal distinct telemetry and acoustic input points solely required to deliver high-fidelity voice synthesis, stems processing, and account maintenance:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DataCategoryCard
                icon={<IdCard className="w-5 h-5" />}
                title="Account Data"
                description="Standard email verification records, hardware identifier tokens, authentication handles, and active subscription billing state."
              />
              <DataCategoryCard
                icon={<Activity className="w-5 h-5" />}
                title="Audio Samples"
                description="Direct audio recordings and uploaded multi-track WAV/FLAC files submitted explicitly for voice cloning, tuning, or vocal stem separation."
              />
              <DataCategoryCard
                icon={<Cpu className="w-5 h-5" />}
                title="Technical Telemetry"
                description="Anonymous crash traces, compute hardware capabilities, kernel OS versions, and acoustic latency profiles for performance stabilization."
              />
            </div>
          </section>

          {/* Section 2: How We Use Voice Data */}
          <section id="use" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                02
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                How We Use Voice Data
              </h2>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center shrink-0 text-[#111827]">
                  <CpuIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-[#111827]">
                    Isolated Processing Pipeline
                  </h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    Voice synthesis calculations take place strictly inside ephemeral sandboxed computing workers. Once synthesis finishes, temporary working caches are automatically purged within 15 minutes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center shrink-0 text-[#111827]">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-[#111827]">
                    Retention &amp; Cryptographic Storage
                  </h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    Reference audio vectors and bespoke voice prints reside in isolated cloud blocks encrypted with military-grade AES-256 at rest and TLS 1.3 in transit. You retain explicit deletion controls over all raw audio stems and synthetic embeddings at any time.
                  </p>
                </div>
              </div>

              <div className="bg-[#f3f4f6] rounded-lg p-4 flex items-center gap-3 border border-[#e5e7eb]">
                <Info className="w-5 h-5 text-[#f46117] shrink-0" />
                <p className="text-xs text-[#4b5563] font-medium">
                  Fish Labs never introduces your custom vocal weights or raw acoustic clips into public-facing generative checkpoints or open foundation models.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Device Permissions */}
          <section id="permissions" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                03
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Device Permissions Details
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              The Fish Labs native studio client requests strictly bounded privileges to perform low-latency capture and file routing:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DataCategoryCard
                icon={<Mic className="w-5 h-5" />}
                badgeText="Hardware"
                title="Microphone Access"
                description="Required exclusively when user actively triggers recording of clean vocal stems or immediate cloning samples inside the live studio console."
              />
              <DataCategoryCard
                icon={<FolderOpen className="w-5 h-5" />}
                badgeText="Filesystem"
                title="Storage & Media"
                description="Permits the browser or application to load user-selected audio assets from local disks and persist exported WAV/MP3 masters cleanly."
              />
              <DataCategoryCard
                icon={<Bell className="w-5 h-5" />}
                badgeText="System"
                title="Push Alerts"
                description="Provides timely background notifications whenever complex vocal stem extractions, fine-tuning jobs, or multi-hour audio renders finish."
              />
            </div>
          </section>

          {/* Section 4: Third Parties */}
          <section id="sharing" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                04
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Data Sharing &amp; Third Parties
              </h2>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm flex flex-col gap-4">
              <p className="text-sm text-[#4b5563] leading-relaxed">
                We operate on a zero-broker model. We do not sell, rent, or trade your personalized biometric voice embeddings, phone captures, or profile data to third-party ad networks, marketing brokers, or data aggregators.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-lg bg-[#f8f9fa] border border-[#e5e7eb] flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#111827]">
                    Infrastructure Vendors
                  </span>
                  <p className="text-xs text-[#575e70] leading-relaxed">
                    Strict SOC2-compliant bare-metal servers and cloud storage providers bound by strict contractual data-processing addendums.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#f8f9fa] border border-[#e5e7eb] flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#111827]">
                    Payment Gateways
                  </span>
                  <p className="text-xs text-[#575e70] leading-relaxed">
                    PCI-DSS certified processors (e.g. Stripe, Apple Pay). Sensitive financial numbers never transit or land on Fish Labs servers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: User Rights */}
          <section id="rights" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                05
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                User Rights &amp; Data Control
              </h2>
            </div>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              Regardless of physical domicile, we extend universal data ownership rights across all user accounts:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DataCategoryCard
                variant="user-right"
                icon={<Download className="w-5 h-5" />}
                title="Export & Portability"
                description="Download your synthesized project files, model weights, and clean audio stems as standardized ZIP packages at any stage."
              />
              <DataCategoryCard
                variant="user-right"
                icon={<Trash2 className="w-5 h-5" />}
                title="Immediate Erasure"
                description="Execute our automated account purge at any time to irreversibly destroy all voice models, backups, and audio tokens."
              />
            </div>
          </section>

          {/* Section 6: Security Standards & Contact */}
          <section id="security" className="flex flex-col gap-4 scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#eeeeee] flex items-center justify-center text-xs font-bold text-[#111827]">
                06
              </span>
              <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                Security Standards &amp; Contact
              </h2>
            </div>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#e5e7eb] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-sm font-semibold text-[#111827]">
                  Enterprise Protection Architecture
                </span>
                <p className="text-xs md:text-sm text-[#4b5563] leading-relaxed">
                  Fish Labs is aligned with European GDPR standards and adheres to SOC2 Type II audit mechanisms. For inquiries or DPO communications:
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs">
                  <Mail className="w-4 h-4 text-[#575e70]" />
                  <a
                    href="mailto:privacy@fishlabs.ai"
                    className="font-semibold text-[#f46117] hover:underline"
                  >
                    privacy@fishlabs.ai
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:privacy@fishlabs.ai"
                >
                  Contact Privacy Officer
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href="/#delete-account"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Revision Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-[#e5e7eb] text-xs text-[#575e70]">
          <span>Version 3.4.1 • Acoustic Precision Systems</span>
          <div className="flex items-center gap-3 font-medium">
            <Link href="/terms-and-conditions" className="hover:text-[#111827] transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#111827] transition-colors">
              Support Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

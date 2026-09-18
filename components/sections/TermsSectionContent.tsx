import React from "react";
import { Badge } from "../ui/Badge";
import { QuickJumpBar, JumpLink } from "../ui/QuickJumpBar";
import { LegalCallout } from "../ui/LegalCallout";
import { Bell, Image as ImageIcon } from "lucide-react";

export const TermsSectionContent: React.FC = () => {
  const jumpLinks: JumpLink[] = [
    { label: "1. Overview", href: "#acceptance" },
    { label: "2. Billing & Subscriptions", href: "#subscription-billing" },
    { label: "3. Device Permissions", href: "#device-permissions" },
    { label: "4. Voice Rights", href: "#acceptable-use" },
    { label: "5. IP & Ownership", href: "#ip-ownership" },
    { label: "6. Liability & Law", href: "#liability-governing" },
  ];

  return (
    <div className="w-full flex flex-col bg-[#fafafa]">
      {/* Header Context Banner */}
      <section className="w-full bg-white border-b border-[#e5e7eb]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 pt-10 pb-12">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="status" showDot>
                Legal Documentation
              </Badge>
              <span className="text-[#575e70] font-mono text-xs">
                Document Ref: FL-TOS-2025.1
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Terms &amp; Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#575e70] text-xs font-medium">
              <span>Effective Date: January 15, 2025</span>
              <span>•</span>
              <span>Last Updated: March 2025</span>
              <span>•</span>
              <span className="text-[#f46117] font-semibold">
                Version 2.4.0 Studio Edition
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick Jump Bar */}
      <QuickJumpBar links={jumpLinks} />

      {/* Primary Document Body */}
      <div className="w-full py-12 px-5 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          {/* Advisory Notice */}
          <LegalCallout
            variant="notice"
            title="Architectural Voice Protocol Notice"
            description="These terms govern your deployment of the Fish Labs mobile suite, proprietary acoustic synthesis models, neural voice cloning engines, and localized runtime assets. By downloading or executing our software, you agree to bound adherence without reservation."
          />

          {/* Section 1 */}
          <section id="acceptance" className="scroll-mt-32 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              01 / Agreement
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Acceptance of Terms &amp; Service Overview
            </h2>
            <div className="space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                Welcome to Fish Labs Inc. (“Fish Labs,” “we,” “us,” or “our”). Fish Labs develops and distributes an advanced generative acoustic suite engineered for low-latency voice synthesis, zero-shot biometric speaker adaptation, timbre manipulation, and multi-track audio mastering across compatible iOS and Android devices.
              </p>
              <p>
                By creating an account, synchronizing your terminal with our infrastructure, or tapping “Accept,” you represent that you have reached the age of majority in your jurisdiction, have the full legal capacity to enter these terms, and consent unconditionally to all protocols established within this document.
              </p>
              <p>
                If you represent a corporate entity, media agency, or educational studio, you certify that you retain authorized signatory powers to bind such entity to this framework. If you disagree with any portion of these provisions, you must immediately terminate access and purge local cache repositories.
              </p>
            </div>
          </section>

          {/* Section 2: Subscriptions & Billing */}
          <section id="subscription-billing" className="scroll-mt-32 flex flex-col gap-6">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              02 / Financial Mechanics
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Subscription Terms &amp; Billing Policy
            </h2>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              Fish Labs offers premium neural compute packages distributed via recurring automatic subscriptions (“Pro Tier,” “Studio Unlimited,” and “Enterprise Node”). Transaction fulfillment, token issuance, and currency conversion are mediated through official app marketplace channels.
            </p>

            {/* Highlight Callout */}
            <LegalCallout variant="highlight" title="Crucial Payment Governance">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f46117] shrink-0" />
                    <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wide">
                      Non-Refundable Subscriptions
                    </h4>
                  </div>
                  <p className="text-xs text-[#575e70] leading-relaxed">
                    All Monthly and Yearly subscription charges, token pack expansions, and synthetic rendering compute fees are{" "}
                    <strong className="text-[#111827]">strictly non-refundable once processed</strong>. Given that acoustic inference and model fine-tuning reserve instant GPU infrastructure at the point of billing, Fish Labs does not issue prorated refunds, partial credits, or balance rollbacks under any circumstance.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f46117] shrink-0" />
                    <h4 className="text-xs font-semibold text-[#111827] uppercase tracking-wide">
                      Cancellation Policy
                    </h4>
                  </div>
                  <p className="text-xs text-[#575e70] leading-relaxed">
                    Users maintain sovereign autonomy to cancel recurring memberships at any time directly through their{" "}
                    <strong className="text-[#111827]">Apple App Store</strong> or{" "}
                    <strong className="text-[#111827]">Google Play Store account settings</strong>. Upon opting out, your account tier remains active with full studio synthesis privileges through the conclusion of the currently active billing interval. No subsequent automatic renewal will occur.
                  </p>
                </div>
              </div>
            </LegalCallout>

            <p className="text-sm text-[#4b5563] leading-relaxed">
              Marketplace taxes, regional VAT, and local currency variances are governed exclusively by the distributor rules of Apple Inc. or Google LLC. Fish Labs reserves the unilateral right to adjust pricing tiers upon thirty (30) days advance notice delivered via push alert or email confirmation. Continued usage beyond the stated modification deadline indicates assent.
            </p>
          </section>

          {/* Section 3: Device Permissions */}
          <section id="device-permissions" className="scroll-mt-32 flex flex-col gap-6">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              03 / Hardware &amp; Sandbox
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Device Permissions &amp; Technical Access
            </h2>
            <p className="text-sm text-[#4b5563] leading-relaxed">
              To provide frictionless hardware acceleration and offline workflow execution, our mobile engine requests access to localized sandbox privileges. We adhere strictly to zero-privilege minimization standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notification Card */}
              <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#111827]">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  Notification Permissions
                </h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  Push notification capabilities are requested and utilized strictly for the functional purpose of alerting you when long-duration offline synthesis, high-resolution stem export, or deep neural voice cloning passes have finalized in background worker threads.
                </p>
                <div className="pt-1">
                  <span className="text-[11px] text-[#575e70] bg-[#f3f4f6] px-2.5 py-1 rounded">
                    No promotional spam or untracked marketing pings
                  </span>
                </div>
              </div>

              {/* Photo & Gallery Card */}
              <div className="p-6 rounded-xl bg-white border border-[#e5e7eb] shadow-sm flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#111827]">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#111827]">
                  Photo &amp; Gallery Permissions
                </h3>
                <p className="text-xs text-[#575e70] leading-relaxed">
                  Read and write file system privileges are restricted purely to explicit user commands: importing source vocal stems or video tracks for audio replacement, and saving finalized rendered master files directly back to your device storage.
                </p>
                <div className="pt-1">
                  <span className="text-[11px] text-[#f46117] bg-[#ffdbce] px-2.5 py-1 rounded font-semibold">
                    Zero passive indexing or unrelated photo scanning
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#575e70] leading-relaxed">
              You may revoke device-level permissions at any stage via your operating system’s privacy panel. Revoking these settings will disable the specific export or notification pipeline without disabling core synthesizer capabilities.
            </p>
          </section>

          {/* Section 4: Acceptable Use */}
          <section id="acceptable-use" className="scroll-mt-32 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              04 / Ethical Synthesis
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Acceptable Use Policy &amp; Voice Rights
            </h2>
            <div className="space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                The Fish Labs neural architecture is engineered exclusively for creative production, accessibility augmentation, game audio development, and verified sound design. We maintain absolute zero tolerance toward biometric exploitation and non-consensual voice recreation.
              </p>

              <LegalCallout variant="prohibition" title="Unconditional Prohibitions:">
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#4b5563]">
                  <li>You shall NOT synthesize, sample, or clone the voice of any individual without verifiable written authorization and contractual consent.</li>
                  <li>You shall NOT utilize synthesized audio to execute telephone fraud, automated social engineering, deceptive political deepfakes, or biometric bypass.</li>
                  <li>You shall NOT deploy generated models for defamatory, libelous, or harassing audio targeted at private citizens or public figures.</li>
                </ul>
              </LegalCallout>

              <p>
                We implement automated cryptographic watermarking across all rendered waveforms. If an uploaded voice clone is reported or verified to be unauthorized, Fish Labs reserves the immediate right to purge associated models, invalidate user access, and notify pertinent legal authorities without prior consultation.
              </p>
            </div>
          </section>

          {/* Section 5: IP Ownership */}
          <section id="ip-ownership" className="scroll-mt-32 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              05 / Property Architecture
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Intellectual Property &amp; User Content Ownership
            </h2>
            <div className="space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p>
                <strong className="text-[#111827]">Your Output Rights:</strong> Subject to full compliance with these terms and an active paid licensing entitlement, you retain full proprietary ownership of all generated speech assets, musical stems, and compiled audio files exported from the Fish Labs studio engine.
              </p>
              <p>
                <strong className="text-[#111827]">Fish Labs Proprietary Assets:</strong> All neural weights, acoustic foundational models, user interfaces, documentation, logos, and signal processing algorithms belong exclusively to Fish Labs Inc. Nothing in this agreement assigns transfer of our underlying software or computational heuristics.
              </p>
              <p>
                <strong className="text-[#111827]">Training Data Exclusion:</strong> Fish Labs does not ingest your private voice samples or recorded audio stems into our foundational multi-speaker training datasets without your express, opt-in consent. Localized models generated on-device remain isolated to your secure container.
              </p>
            </div>
          </section>

          {/* Section 6: Liability & Governing Law */}
          <section id="liability-governing" className="scroll-mt-32 flex flex-col gap-4">
            <span className="text-xs font-semibold text-[#f46117] tracking-wider uppercase">
              06 / Legal Disclaimers
            </span>
            <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
              Limitation of Liability &amp; Governing Law
            </h2>
            <div className="space-y-4 text-sm text-[#4b5563] leading-relaxed">
              <p className="uppercase text-xs tracking-wide">
                TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE JURISDICTION, FISH LABS INC. DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND UNINTERRUPTED ACOUSTIC RENDERING.
              </p>
              <p>
                Under no circumstances shall Fish Labs, its directors, neural research engineers, or affiliates be held liable for indirect, punitive, or consequential damages resulting from lost recordings, latency anomalies, platform downtime, or misuse of generated assets.
              </p>
              <p>
                These terms are executed under and interpreted strictly in accordance with the laws of the State of Delaware, United States, without reference to its conflict-of-law principles. Any unresolved disputes arising hereunder shall be subject to binding individual arbitration under AAA Commercial Rules.
              </p>
            </div>
          </section>

          {/* Section 7: Legal Inquiries */}
          <LegalCallout
            variant="inquiry"
            title="Questions or Legal Inquiries?"
            description="Our legal compliance and safety committee reviews inquiries regarding rights clearance, copyright notices, and institutional agreements."
            email="legal@fishlabs.ai"
          />
        </div>
      </div>
    </div>
  );
};

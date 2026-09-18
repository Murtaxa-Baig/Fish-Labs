"use client";

import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { FormField } from "../ui/FormField";
import { ContactInfoCard } from "../ui/ContactInfoCard";
import {
  Mail,
  Clock,
  MapPin,
  Send,
  Loader2,
  Check,
  ChevronDown,
} from "lucide-react";

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setFeedbackMsg(
        "Thank you. Your dispatch has been queued for immediate acoustic review by Fish Labs."
      );

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "general",
          message: "",
        });
        setStatus("idle");
        setFeedbackMsg("");
      }, 4000);
    }, 1000);
  };

  return (
    <section className="relative w-full py-20 md:py-28 px-5 md:px-12 flex flex-col items-center bg-[#fafafa]">
      {/* Top Acoustic Motif Visualizer */}
      <div aria-hidden="true" className="flex items-center gap-1.5 mb-6 opacity-80">
        <span className="w-0.5 h-3 bg-[#e2bfb2] rounded-full" />
        <span className="w-0.5 h-5 bg-[#e2bfb2] rounded-full" />
        <span className="w-0.5 h-7 bg-[#f46117] rounded-full animate-pulse" />
        <span className="w-0.5 h-4 bg-[#e2bfb2] rounded-full" />
        <span className="w-0.5 h-2 bg-[#e2bfb2] rounded-full" />
      </div>

      {/* Editorial Header Block */}
      <div className="max-w-[65ch] text-center mb-12 flex flex-col items-center gap-3">
        <Badge variant="status" showDot pulseDot>
          Get in Touch
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
          We're here to help
        </h1>
        <p className="text-base md:text-lg text-[#4b5563] leading-relaxed">
          Have questions about Fish Labs, enterprise licenses, or technical acoustic support? Send us a message and our engineering team will get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full max-w-[640px] bg-white rounded-xl p-6 sm:p-10 border border-[#e5e7eb] shadow-sm relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Full Name */}
          <FormField id="full-name" label="Full Name" rightLabel="Required">
            <input
              id="full-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 border border-[#e5e7eb] focus:bg-white focus:border-[#f46117] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af]"
            />
          </FormField>

          {/* Email Address */}
          <FormField id="email-address" label="Email Address" rightLabel="Required">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 border border-[#e5e7eb] focus:bg-white focus:border-[#f46117] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af]"
            />
          </FormField>

          {/* Subject Dropdown */}
          <FormField id="inquiry-subject" label="Subject">
            <div className="relative">
              <select
                id="inquiry-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full appearance-none bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 pr-10 border border-[#e5e7eb] focus:bg-white focus:border-[#f46117] focus:outline-none transition-all duration-200 cursor-pointer"
              >
                <option value="general">General Inquiry</option>
                <option value="enterprise">Enterprise & Licensing</option>
                <option value="billing">Billing & Subscriptions</option>
                <option value="support">Technical Acoustic Support</option>
                <option value="partnership">Strategic Partnership</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#575e70]">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </FormField>

          {/* Message Content */}
          <FormField
            id="message-content"
            label="Message"
            rightLabel="Max 1000 characters"
          >
            <textarea
              id="message-content"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can our acoustics team assist your workflow today?"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg p-4 border border-[#e5e7eb] focus:bg-white focus:border-[#f46117] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af] resize-none"
            />
          </FormField>

          {/* Submit Action & Live Status Feedback */}
          <div className="pt-2 flex flex-col gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status !== "idle"}
              className="w-full py-3.5"
              iconRight={
                status === "sending" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === "sent" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Dispatched"
                : "Send Message"}
            </Button>

            {feedbackMsg && (
              <p className="text-center text-xs text-[#575e70] font-medium animate-in fade-in duration-300">
                {feedbackMsg}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Support Info Cards Grid */}
      <div className="w-full max-w-[640px] mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ContactInfoCard
          icon={<Mail className="w-4 h-4" />}
          title="Direct Dispatch"
          value="support@fishlabs.ai"
          href="mailto:support@fishlabs.ai"
        />
        <ContactInfoCard
          icon={<Clock className="w-4 h-4" />}
          title="Response SLA"
          value="Under 24 Hours"
        />
        <ContactInfoCard
          icon={<MapPin className="w-4 h-4" />}
          title="Acoustics Studio"
          value="San Francisco, CA"
        />
      </div>

      {/* Hardware Node Aesthetic Note */}
      <div className="mt-16 flex items-center gap-3 opacity-60 text-[11px] font-mono tracking-widest text-[#575e70] uppercase">
        <span>NODE // ENCRYPTED INGESTION v4.2</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#575e70]" />
        <span>99.98% UPTIME</span>
      </div>
    </section>
  );
};

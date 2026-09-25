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
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setFeedbackMsg("");

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "User";
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : " ";

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      setFeedbackMsg(
        "Your message has been sent successfully! Our team will get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      setTimeout(() => {
        setStatus("idle");
        setFeedbackMsg("");
      }, 5000);
    } catch (error: unknown) {
      console.error("Contact Form error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "An error occurred. Please try again later.";
      setStatus("error");
      setFeedbackMsg(errorMessage);
    }
  };

  return (
    <section className="relative w-full py-6 md:py-10 px-5 md:px-12 flex flex-col items-center bg-[#fafafa]">
   

      {/* Editorial Header Block */}
      <div className="max-w-[65ch] text-center mb-12 flex flex-col items-center gap-3">

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
              disabled={status === "sending"}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 border border-[#e5e7eb] focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af] disabled:opacity-50"
            />
          </FormField>

          {/* Email Address */}
          <FormField id="email-address" label="Email Address" rightLabel="Required">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              disabled={status === "sending"}
              value={formData.email}
              onChange={handleChange}
              placeholder="sarah@example.com"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 border border-[#e5e7eb] focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af] disabled:opacity-50"
            />
          </FormField>

          {/* Subject Dropdown */}
          <FormField id="inquiry-subject" label="Subject">
            <div className="relative">
              <select
                id="inquiry-subject"
                name="subject"
                disabled={status === "sending"}
                value={formData.subject}
                onChange={handleChange}
                className="w-full appearance-none bg-[#f3f4f6] text-[#111827] text-sm rounded-lg px-4 py-3 pr-10 border border-[#e5e7eb] focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Enterprise & Licensing">Enterprise &amp; Licensing</option>
                <option value="Billing & Subscriptions">Billing &amp; Subscriptions</option>
                <option value="Technical Acoustic Support">Technical Acoustic Support</option>
                <option value="Strategic Partnership">Strategic Partnership</option>
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
              disabled={status === "sending"}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can our acoustics team assist your workflow today?"
              className="w-full bg-[#f3f4f6] text-[#111827] text-sm rounded-lg p-4 border border-[#e5e7eb] focus:bg-white focus:border-[#2084ff] focus:outline-none transition-all duration-200 placeholder:text-[#9ca3af] resize-none disabled:opacity-50"
            />
          </FormField>

          {/* Submit Action & Live Status Feedback */}
          <div className="pt-2 flex flex-col gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "sending"}
              className="w-full py-3.5 cursor-pointer"
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
              <div
                className={`p-3.5 rounded-lg text-xs font-medium text-center transition-all ${
                  status === "sent"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {feedbackMsg}
              </div>
            )}
          </div>
        </form>
      </div>

   
  
    </section>
  );
};

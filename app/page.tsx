import React from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { MetricCard } from "../components/ui/MetricCard";
import { FeatureCard } from "../components/ui/FeatureCard";
import { AppDownloadCard } from "../components/ui/AppDownloadCard";
import { SpecItem } from "../components/ui/SpecItem";
import { HeroDeviceMockup } from "../components/sections/HeroDeviceMockup";
import { AcousticPipelineConsole } from "../components/sections/AcousticPipelineConsole";

import {
  Download,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Mic,
  Split,
  Music,
  Sparkles,
  Sliders,
  Piano,
  Award,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fafafa] text-[#111827]">
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Page Body */}
      <main className="w-full pt-16 flex-1">
        {/* Hero Section */}
        <section id="hero" className="w-full bg-[#fafafa] py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headline & Action Controls */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                <Badge variant="status" showDot pulseDot>
                  Acoustic Architecture v3.4 Live
                </Badge>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111827] leading-[1.12]">
                  Professional AI Voice Studio at Your Fingertips
                </h1>

                <p className="text-base md:text-lg text-[#4b5563] max-w-[58ch] leading-relaxed">
                  Transform your audio workflow with studio-grade voice cloning, instant vocal stem separation, and generative voice synthesis—engineered for creators, producers, and podcasters by Fish Labs.
                </p>

                {/* Primary & Secondary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    href="#download"
                    iconLeft={<Download className="w-4 h-4" />}
                  >
                    Download App
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    href="#features"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Features
                  </Button>
                </div>

                {/* Micro Tech Specs Strip */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-[#e5e7eb] w-full">
                  <SpecItem
                    icon={<ShieldCheck className="w-4 h-4" />}
                    text="Neural Lossless 48kHz"
                  />
                  <SpecItem
                    icon={<Zap className="w-4 h-4" />}
                    text="Sub-40ms Synthesis"
                  />
                  <SpecItem
                    icon={<Lock className="w-4 h-4" />}
                    text="End-to-End Vault"
                  />
                </div>
              </div>

              {/* Right Column: Smartphone Mockup Preview */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
                <HeroDeviceMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Trust Proof Strip */}
        <section className="w-full bg-[#f3f4f6] py-12 border-y border-[#e5e7eb]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                label="Scale & Adoption"
                value="1.2M+"
                description="Studio vocal models synthesized with zero destructive compression."
              />
              <MetricCard
                label="Acoustic Accuracy"
                value="99.4%"
                description="Verified perceptual voice match index across multilingual phonemes."
                highlightValue
              />
              <MetricCard
                label="Hardware Velocity"
                value="<40ms"
                description="Zero-latency neural inference direct from mobile and web backends."
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full bg-[#fafafa] py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2 max-w-[65ch]">
                <span className="text-xs font-semibold text-[#f46117] uppercase tracking-wider">
                  Modular Vocal Stack
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
                  Precision Audio Engineering
                </h2>
                <p className="text-base text-[#4b5563]">
                  Four powerful tools designed to elevate your vocal production.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#575e70] text-xs font-medium bg-white px-3 py-1.5 rounded-full border border-[#e5e7eb] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#f46117]" />
                <span>Studio Calibration 2025</span>
              </div>
            </div>

            {/* Feature Cards Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Mic className="w-6 h-6" />}
                stepNumber="01"
                title="Voice Cloning"
                description="Create a photorealistic digital replica of any vocal profile with just 60 seconds of reference audio."
                tagText="Sample input: 60s FLAC"
                tagIcon={<Sliders className="w-4 h-4" />}
              />
              <FeatureCard
                icon={<Split className="w-6 h-6" />}
                stepNumber="02"
                title="Voice Separation"
                description="Isolate vocals, background noise, and instrumentals cleanly with zero artifact bleeding."
                tagText="4-Stem Deconstruct"
                tagIcon={<Sliders className="w-4 h-4" />}
              />
              <FeatureCard
                icon={<Music className="w-6 h-6" />}
                stepNumber="03"
                title="Music Generator"
                description="Compose custom backing tracks and harmonic accompaniment tailored to vocal cadence."
                tagText="Harmonic Sync Engine"
                tagIcon={<Piano className="w-4 h-4" />}
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                stepNumber="04"
                title="Celebrity Voices"
                description="Access a curated library of licensed iconic vocal presets with authentic tonality and inflection."
                tagText="Verified Rights"
                tagIcon={<Award className="w-4 h-4" />}
              />
            </div>
          </div>
        </section>

        {/* Acoustic Pipeline Interactive Section */}
        <AcousticPipelineConsole />

        {/* App Download Section */}
        <section id="download" className="w-full bg-[#fafafa] py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col items-center text-center gap-12">
            {/* Header */}
            <div className="flex flex-col items-center gap-2 max-w-[60ch]">
              <span className="text-xs font-semibold text-[#f46117] uppercase tracking-wider">
                Mobile Deployment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] tracking-tight">
                Download Fish Labs
              </h2>
              <p className="text-base text-[#4b5563]">
                Available now on iOS and Android for mobile creators.
              </p>
            </div>

            {/* Download Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
              {/* Apple App Store Card */}
              <AppDownloadCard
                platformIcon={
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.56.65-.98 1.7-0.86 2.72.99.08 1.96-.47 2.58-1.22z" />
                  </svg>
                }
                rating="4.9"
                reviewCount="14k"
                subtitle="iOS Ecosystem"
                title="Download on the App Store"
                description="Optimized for Apple Silicon Neural Engine with CoreAudio low-latency dispatch."
                buttonText="Get for iOS"
                buttonIcon={<Smartphone className="w-4 h-4" />}
              />

              {/* Google Play Store Card */}
              <AppDownloadCard
                platformIcon={
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.52 14.83L14.75 13.06L4.79 23.02C5.07 23.16 5.39 23.22 5.72 23.15C6.18 23.05 6.6 22.8 7.02 22.56L16.52 14.83ZM16.52 9.17L7.02 1.44C6.6 1.2 6.18 0.95 5.72 0.85C5.39 0.78 5.07 0.84 4.79 0.98L14.75 10.94L16.52 9.17ZM20.16 11.22L17.58 9.73L15.46 11.85L17.58 13.97L20.16 12.48C20.68 12.18 21 11.63 21 11.02C21 10.41 20.68 9.86 20.16 11.22Z" />
                  </svg>
                }
                rating="4.8"
                reviewCount="21k"
                subtitle="Android Ecosystem"
                title="Get it on Google Play"
                description="Engineered with Oboe high-performance C++ audio and tensor acceleration."
                buttonText="Get for Android"
                buttonIcon={<Smartphone className="w-4 h-4" />}
              />
            </div>

            {/* Compatibility Footnote */}
            <p className="text-xs text-[#575e70]">
              Compatible with iOS 16.0+ and Android 12.0+. Free tier available.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

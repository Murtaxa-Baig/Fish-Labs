"use client";

import React from "react";
import { SpecItem } from "../ui/SpecItem";

export const AcousticPipelineConsole: React.FC = () => {
  return (
    <section id="pipeline" className="w-full bg-[#f3f4f6] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        <div className="bg-white rounded-2xl p-6 md:p-12 border border-[#e5e7eb] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-semibold text-[#f46117] uppercase tracking-wider">
                Acoustic Pipeline
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] tracking-tight leading-tight">
                End-to-end fidelity without generational artifacts.
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Fish Labs integrates proprietary spectrogram reconstruction with zero-shot neural timbre mapping, rendering subtle breathing dynamics, emotional pitch shifts, and studio acoustics in real-time.
              </p>
              <div className="flex flex-col gap-2.5 pt-2">
                <SpecItem
                  variant="checklist"
                  text="Automatic 32-bit floating point export"
                  icon={null}
                />
                <SpecItem
                  variant="checklist"
                  text="Micro-intonation & vibrato control dials"
                  icon={null}
                />
                <SpecItem
                  variant="checklist"
                  text="Native VST3 / AU plug-in companion bridge"
                  icon={null}
                />
              </div>
            </div>

            {/* Right Interactive Visual Console Column */}
            <div className="lg:col-span-7 bg-[#f3f4f6] rounded-xl p-5 md:p-6 border border-[#e5e7eb] flex flex-col gap-4">
              {/* Header Bar */}
              <div className="flex items-center justify-between text-xs text-[#575e70] font-medium border-b border-[#e2e2e2] pb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f46117]" />
                  Neural Waveform Comparison
                </span>
                <span className="font-mono text-[11px]">
                  Sample: studio_ref_take_02.wav
                </span>
              </div>

              {/* Source Waveform Bar Card */}
              <div className="bg-white p-4 rounded-lg border border-[#e5e7eb] shadow-xs flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-[#111827]">Source Reference Profile</span>
                  <span className="text-[#575e70] font-mono text-[11px]">
                    100% Raw Vocal
                  </span>
                </div>
                <div className="h-8 flex items-center gap-1">
                  <div className="flex-1 bg-[#e2e2e2] rounded h-3" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-5" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-7" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-4" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-8" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-6" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-7" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-3" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-5" />
                  <div className="flex-1 bg-[#e2e2e2] rounded h-2" />
                </div>
              </div>

              {/* Synthesized Output Bar Card */}
              <div className="bg-white p-4 rounded-lg border border-[#e5e7eb] shadow-xs flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span className="text-[#f46117] font-semibold">
                    Fish Labs Synthesized Output
                  </span>
                  <span className="text-[#f46117] font-mono text-[11px] font-bold">
                    99.8% Match
                  </span>
                </div>
                <div className="h-8 flex items-center gap-1">
                  <div className="flex-1 bg-[#ffdbce] rounded h-3" />
                  <div className="flex-1 bg-[#ffdbce] rounded h-5" />
                  <div className="flex-1 bg-[#f46117] rounded h-7" />
                  <div className="flex-1 bg-[#f46117] rounded h-4" />
                  <div className="flex-1 bg-[#f46117] rounded h-8" />
                  <div className="flex-1 bg-[#f46117] rounded h-6" />
                  <div className="flex-1 bg-[#f46117] rounded h-7" />
                  <div className="flex-1 bg-[#ffdbce] rounded h-3" />
                  <div className="flex-1 bg-[#ffdbce] rounded h-5" />
                  <div className="flex-1 bg-[#ffdbce] rounded h-2" />
                </div>
              </div>

              {/* Footer Tech Specs */}
              <div className="flex justify-between items-center text-[11px] text-[#575e70] pt-1">
                <span>Dynamic Range: 114dB</span>
                <span>Jitter Variance: &lt;0.02%</span>
                <span className="font-semibold text-[#111827]">
                  Latency: 38.4ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

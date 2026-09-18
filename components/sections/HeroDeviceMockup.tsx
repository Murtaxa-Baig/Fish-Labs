"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Activity, Sliders, Radio } from "lucide-react";
import { Badge } from "../ui/Badge";

export const HeroDeviceMockup: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(42);
  const [millis, setMillis] = useState(18);

  // Sliders interactive state
  const [pitchShift, setPitchShift] = useState(65);
  const [timbreRes, setTimbreRes] = useState(82);
  const [clarity, setClarity] = useState(94);

  // Audio spectrum bar initial heights
  const initialHeights = [16, 24, 44, 32, 56, 40, 52, 48, 28, 36, 60, 44, 20, 28, 12];
  const [barHeights, setBarHeights] = useState<number[]>(initialHeights);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;
    let barInterval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      // Animate timer
      timerInterval = setInterval(() => {
        setMillis((prevM) => {
          if (prevM >= 99) {
            setSeconds((prevS) => prevS + 1);
            return 0;
          }
          return prevM + 4;
        });
      }, 40);

      // Animate waveform spectrum bars
      barInterval = setInterval(() => {
        setBarHeights((prevBars) =>
          prevBars.map(() => Math.floor(Math.random() * 48) + 12)
        );
      }, 150);
    } else {
      setBarHeights(initialHeights);
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
      if (barInterval) clearInterval(barInterval);
    };
  }, [isPlaying]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formattedMins = String(mins).padStart(2, "0");
    const formattedSecs = String(secs).padStart(2, "0");
    const formattedMillis = String(millis).padStart(2, "0");
    return `${formattedMins}:${formattedSecs}.${formattedMillis}`;
  };

  return (
    <div className="relative w-full max-w-[340px] bg-[#2f3131] rounded-[40px] p-3 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
      {/* Speaker Capsule Notch */}
      <div className="relative w-full flex justify-center pb-2 pt-1">
        <div className="w-16 h-3 bg-[#2f3131] rounded-full flex items-center justify-center">
          <div className="w-8 h-1 bg-[#e2e2e2] rounded-full" />
        </div>
      </div>

      {/* Screen Area */}
      <div className="bg-white rounded-[32px] overflow-hidden p-4 flex flex-col gap-4 text-[#111827]">
        {/* Top App Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#f46117] flex items-center justify-center text-white shadow-xs">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-medium text-[#575e70] block leading-none">
                Studio Engine
              </span>
              <span className="text-xs font-semibold leading-tight text-[#111827]">
                Session #048
              </span>
            </div>
          </div>
          <Badge variant="live" showDot pulseDot>
            Live Rec
          </Badge>
        </div>

        {/* Waveform Visualizer Card */}
        <div className="bg-[#f3f4f6] rounded-xl p-3 flex flex-col gap-2 border border-[#e5e7eb]">
          <div className="flex items-center justify-between text-[#575e70] text-[11px]">
            <span>Input Waveform (48kHz)</span>
            <span className="font-mono text-[#111827] font-semibold text-xs">
              {formatTime()}
            </span>
          </div>

          {/* Bar Spectrum Visualizer */}
          <div className="h-16 flex items-center justify-between gap-1 px-1 py-1">
            {barHeights.map((height, idx) => {
              const isPrimary = idx >= 2 && idx <= 6 || idx >= 10 && idx <= 11;
              const isDark = idx >= 7 && idx <= 9;
              return (
                <div
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-200 ${
                    isPrimary
                      ? "bg-[#f46117]"
                      : isDark
                      ? "bg-[#111827]"
                      : "bg-[#e2e2e2]"
                  }`}
                  style={{ height: `${height}px` }}
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center text-[10px] text-[#575e70] pt-1 border-t border-[#e2e2e2]">
            <span>-18 dB RMS</span>
            <span className="font-medium text-[#111827]">Harmonic Fidelity 99.8%</span>
          </div>
        </div>

        {/* Acoustic Modulation Sliders */}
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] font-semibold text-[#575e70] uppercase tracking-wider">
            Spectral Tuning
          </span>

          {/* Pitch Slider */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#111827] font-medium">Pitch Shift</span>
              <span className="text-[#575e70] font-mono text-[11px]">
                +{((pitchShift - 50) / 10).toFixed(1)} st
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={pitchShift}
              onChange={(e) => setPitchShift(Number(e.target.value))}
              className="w-full h-1.5 bg-[#e5e7eb] accent-[#f46117] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Timbre Slider */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#111827] font-medium">Timbre Res</span>
              <span className="text-[#575e70] font-mono text-[11px]">
                {timbreRes}% Neutral Air
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={timbreRes}
              onChange={(e) => setTimbreRes(Number(e.target.value))}
              className="w-full h-1.5 bg-[#e5e7eb] accent-[#111827] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Clarity Slider */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs">
              <span className="text-[#111827] font-medium">De-Reverb / Clarity</span>
              <span className="text-[#575e70] font-mono text-[11px]">
                {clarity}% Max
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={clarity}
              onChange={(e) => setClarity(Number(e.target.value))}
              className="w-full h-1.5 bg-[#e5e7eb] accent-[#f46117] rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Playback Transport Deck Card */}
        <div className="bg-[#f3f4f6] rounded-xl p-3 flex items-center justify-between border border-[#e5e7eb]">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 rounded-full bg-[#f46117] text-white flex items-center justify-center shadow-sm hover:bg-[#dc5511] transition-transform active:scale-95 cursor-pointer"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#111827] leading-tight">
                Master Vocal.flac
              </span>
              <span className="text-[10px] text-[#575e70]">
                Fish Voice #08 • Stereo
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#575e70]">
            <button className="w-7 h-7 flex items-center justify-center hover:text-[#111827]">
              <Radio className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 flex items-center justify-center hover:text-[#111827]">
              <Sliders className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Phone Indicator Bar */}
      <div className="w-full flex justify-center pt-2.5 pb-1">
        <div className="w-24 h-1 bg-[#575e70] rounded-full opacity-60" />
      </div>
    </div>
  );
};

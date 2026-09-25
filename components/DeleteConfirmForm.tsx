"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowLeft, ShieldAlert } from "lucide-react";

function DeleteConfirmFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [token, setToken] = useState("");
  const [isTokenManual, setIsTokenManual] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setIsTokenManual(true);
      autoConfirmWithToken(tokenFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isSuccess && countdown === 0) {
      router.push("/");
    }
    return () => clearTimeout(timer);
  }, [isSuccess, countdown, router]);

  const autoConfirmWithToken = async (urlToken: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/delete-account/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: urlToken }),
      });
      const data = await response.json();

      if (response.ok && (data.success || !data.error)) {
        showToast(
          data.message || "Account successfully deleted.",
          "success"
        );
        setIsSuccess(true);
      } else {
        showToast(
          data.message || data.error || "Invalid or expired token.",
          "error"
        );
      }
    } catch (err) {
      console.error("Auto confirm error:", err);
      showToast("Network error. Failed to verify token.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) {
      // Handle paste of full 6-digit code
      const pastedCode = value.slice(0, 6).replace(/[^0-9]/g, "");
      if (pastedCode) {
        const newOtp = [...otp];
        for (let i = 0; i < 6; i++) {
          newOtp[i] = pastedCode[i] || "";
        }
        setOtp(newOtp);
        inputRefs.current[Math.min(pastedCode.length, 5)]?.focus();
      }
      return;
    }

    const cleanValue = value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = cleanValue;
    setOtp(newOtp);

    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const codeString = otp.join("");
  const canSubmit = codeString.length === 6 || token.trim().length > 0;

  const handleConfirmDelete = async () => {
    if (!canSubmit) return;
    setIsLoading(true);

    try {
      const payload: { secretCode?: string; token?: string } = {};
      if (codeString.length === 6) {
        payload.secretCode = codeString;
      }
      if (token.trim()) {
        payload.token = token.trim();
      }

      const response = await fetch("/api/delete-account/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.success || !data.error)) {
        showToast(
          data.message || "Account successfully deleted.",
          "success"
        );
        setIsSuccess(true);
      } else {
        showToast(
          data.message || data.error || "Invalid code or token.",
          "error"
        );
      }
    } catch (err) {
      console.error("Manual confirm error:", err);
      showToast("Network error. Failed to verify code.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
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

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="confirm-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                Final Verification Step
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Confirm Account Deletion
              </h1>
              <p className="text-gray-500 text-sm max-w-sm mx-auto">
                Enter the 6-digit confirmation PIN code sent to your email to permanently delete your account.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm space-y-6">
              <div className="space-y-4">
                {!isTokenManual && (
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-700 block text-center">
                      6-Digit Security Code
                    </label>
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          ref={(el) => {
                            inputRefs.current[idx] = el;
                          }}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, idx)
                          }
                          onKeyDown={(e) => handleKeyDown(e, idx)}
                          className="w-11 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-black rounded-xl border-2 border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-white text-gray-900 transition-all shadow-inner focus:outline-none"
                        />
                      ))}
                    </div>
                    <p className="text-center text-xs text-gray-400">
                      Type or paste the 6-digit confirmation code from your email.
                    </p>

                    <div className="pt-2 text-center">
                      <button
                        type="button"
                        onClick={() => setIsTokenManual(true)}
                        className="text-xs text-[#2084ff] hover:underline font-medium cursor-pointer"
                      >
                        Have a magic link token instead?
                      </button>
                    </div>
                  </div>
                )}

                {isTokenManual && (
                  <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
                    <label className="text-xs font-semibold text-gray-600">
                      Verification Token
                    </label>
                    <input
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Paste token from email link"
                      type="text"
                      className="w-full h-11 px-3 rounded-lg border border-gray-300 text-xs font-mono text-gray-900 focus:border-[#2084ff] focus:outline-none"
                    />
                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={() => setIsTokenManual(false)}
                        className="text-xs text-[#2084ff] hover:underline font-medium cursor-pointer"
                      >
                        Use 6-digit PIN code instead
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    onClick={handleConfirmDelete}
                    disabled={!canSubmit || isLoading}
                    className={`w-full flex items-center justify-center rounded-xl h-14 px-8 bg-red-600 text-white hover:bg-red-700 text-base font-bold transition-all shadow-md active:scale-[0.98] cursor-pointer ${
                      !canSubmit || isLoading
                        ? "opacity-50 cursor-not-allowed shadow-none"
                        : ""
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Deleting Permanently...</span>
                      </div>
                    ) : (
                      "Permanently Delete Account"
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/delete-account"
                className="text-sm font-semibold text-gray-500 hover:text-[#2084ff] transition-all flex items-center gap-1.5 justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Account Deletion Request</span>
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl text-center space-y-6 max-w-md mx-auto"
          >
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto relative">
              <CheckCircle2 className="w-12 h-12 text-red-600 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Account Deleted Successfully
              </h2>
              <p className="text-gray-500 text-sm">
                Your account and all associated data have been permanently removed. We are sorry to see you go.
              </p>
            </div>

            <div className="bg-gray-50 py-3 px-4 rounded-xl inline-block border border-gray-200">
              <p className="text-xs text-gray-500 font-medium">
                Redirecting you back to the home page in{" "}
                <strong className="text-[#2084ff] font-bold text-sm">
                  {countdown}
                </strong>{" "}
                seconds...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DeleteConfirmForm() {
  return (
    <Suspense
      fallback={
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-[#2084ff]/35 border-t-[#2084ff] rounded-full animate-spin" />
        </div>
      }
    >
      <DeleteConfirmFormContent />
    </Suspense>
  );
}

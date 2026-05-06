"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0b0f14] flex flex-col items-center justify-center">

      {/* Glow background */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/10 blur-3xl rounded-full" />

      {/* Spinner */}
      <div className="relative h-24 w-24 flex items-center justify-center">
        
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-slate-800" />

        {/* Animated gradient ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-500 border-r-indigo-400 animate-spin" />

        {/* Inner subtle ring */}
        <div className="absolute inset-3 rounded-full border border-slate-800 opacity-40" />

        {/* Core */}
        <div className="relative h-10 w-10 bg-[#11151c] border border-slate-800 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.15)]">
          <div className="h-2 w-2 bg-indigo-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <span className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">
          Loading
        </span>

        {/* Dots loader */}
        <div className="flex gap-1.5">
          <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
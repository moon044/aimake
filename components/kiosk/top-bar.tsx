"use client"

import { Home, Mic, MicOff } from "lucide-react"
import { useKiosk } from "./store"

export function TopBar({ title }: { title: string }) {
  const { reset, voiceMode, setVoiceMode, speech } = useKiosk()

  function toggleVoice() {
    if (voiceMode) {
      speech.cancelAll()
      setVoiceMode(false)
    } else if (speech.supported) {
      setVoiceMode(true)
    }
  }

  return (
    <header className="shrink-0 border-b-2 border-border bg-[#fffaf4] px-4 py-3">
      <div className="grid grid-cols-[96px_1fr_96px] items-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="flex h-[62px] items-center justify-center gap-1.5 rounded-[18px] border-2 border-border bg-card text-card-foreground shadow-sm transition hover:bg-secondary focus:outline-none focus-visible:ring-4 focus-visible:ring-ring"
        >
          <Home className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="text-[18px] font-black leading-tight">
            처음
            <br />
            으로
          </span>
        </button>

        <h1 className="min-w-0 text-center text-[27px] font-black leading-none tracking-tight text-foreground">
          {title}
        </h1>

        <button
          type="button"
          onClick={toggleVoice}
          aria-pressed={voiceMode}
          className={`flex h-[62px] items-center justify-center gap-1.5 rounded-[18px] border-2 shadow-sm transition focus:outline-none focus-visible:ring-4 focus-visible:ring-ring ${
            voiceMode
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-card-foreground hover:bg-secondary"
          }`}
        >
          {voiceMode ? (
            <>
              <Mic className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="text-[18px] font-black leading-tight">
                음성
                <br />
                켜짐
              </span>
            </>
          ) : (
            <>
              <MicOff className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="text-[18px] font-black leading-tight">
                음성
                <br />
                꺼짐
              </span>
            </>
          )}
        </button>
      </div>
    </header>
  )
}
"use client";
import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Mic, MicOff, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Toggle } from "./ui/toggle";
import MicFFT from "./MicFFT";
import { cn } from "@/utils";

export default function Controls() {
  const { disconnect, status, isMuted, unmute, mute, micFft } = useVoice();

  return (
    <div
      className={
        cn(
          "fixed bottom-0 left-0 w-full p-4 pb-8 flex items-center justify-center",
          "bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none",
        )
      }
    >
      <AnimatePresence>
        {status.value === "connected" ? (
          <motion.div
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "100%",
              opacity: 0,
            }}
            className={
              "pointer-events-auto p-2 bg-card/90 backdrop-blur-md border border-border/50 rounded-full shadow-2xl flex items-center gap-4 transition-all hover:scale-[1.02]"
            }
          >
            <div className="p-1">
              <Toggle
                className={cn(
                  "rounded-full size-12 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground transition-all duration-300",
                  "hover:bg-accent/20"
                )}
                pressed={!isMuted}
                onPressedChange={() => {
                  if (isMuted) {
                    unmute();
                  } else {
                    mute();
                  }
                }}
              >
                {isMuted ? (
                  <MicOff className={"size-5 opacity-60"} />
                ) : (
                  <Mic className={"size-5"} />
                )}
              </Toggle>
            </div>

            <div className={"relative grid h-10 w-48 shrink grow-0 px-2"}>
              <MicFFT fft={micFft} className={"fill-primary opacity-60"} />
            </div>

            <div className="p-1">
              <Button
                className={"flex items-center justify-center rounded-full px-6 py-6 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-200/50 transition-all"}
                onClick={() => {
                  disconnect();
                }}
                variant={"ghost"}
              >
                <span>
                  <Phone
                    className={"size-5 fill-current"}
                    strokeWidth={2}
                  />
                </span>
                <span className="ml-2 font-medium">End</span>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

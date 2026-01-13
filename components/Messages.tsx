"use client";
import { cn } from "@/utils";
import { useVoice } from "@humeai/voice-react";
import Expressions from "./Expressions";
import { AnimatePresence, motion } from "motion/react";
import { ComponentRef, forwardRef } from "react";

const Messages = forwardRef<
  ComponentRef<typeof motion.div>,
  Record<never, never>
>(function Messages(_, ref) {
  const { messages } = useVoice();

  return (
    <motion.div
      layoutScroll
      className={"grow overflow-auto p-4 pt-24"}
      ref={ref}
    >
      <motion.div
        className={"max-w-2xl mx-auto w-full flex flex-col gap-4 pb-24"}
      >
        <AnimatePresence mode={"popLayout"}>
          {messages.map((msg, index) => {
            if (
              msg.type === "user_message" ||
              msg.type === "assistant_message"
            ) {
              return (
                <motion.div
                  key={msg.type + index}
                  className={cn(
                    "w-[80%] p-5 shadow-sm relative",
                    "font-sans text-base leading-relaxed",
                    msg.type === "user_message"
                      ? "ml-auto bg-primary text-primary-foreground rounded-[2rem] rounded-tr-sm"
                      : "bg-white text-secondary-foreground rounded-[2rem] rounded-tl-sm border border-border/30",
                  )}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 0,
                  }}
                >
                  <div className={"flex items-center justify-between pb-2"}>
                    <div
                      className={cn(
                        "text-xs font-bold tracking-wider uppercase opacity-70",
                        msg.type === "user_message" ? "text-primary-foreground" : "text-primary"
                      )}
                    >
                      {msg.message.role}
                    </div>
                  </div>
                  <div className={"pb-1"}>{msg.message.content}</div>
                  <div className="opacity-60 transform scale-90 origin-left -ml-2">
                    <Expressions values={{ ...msg.models.prosody?.scores }} />
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default Messages;

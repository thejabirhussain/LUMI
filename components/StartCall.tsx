import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { toast } from "sonner";

export default function StartCall({ configId, accessToken }: { configId?: string, accessToken: string }) {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <motion.div
          className={"fixed inset-0 p-6 flex flex-col items-center justify-center bg-background text-foreground"}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <AnimatePresence>
            <motion.div
              variants={{
                initial: { scale: 0.9, opacity: 0 },
                enter: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
              }}
              className="flex flex-col items-center text-center max-w-md gap-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl font-serif text-primary">
                  Meet Coach Lumi™
                </h1>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Your empathetic voice therapy companion. <br />
                  Ready to listen, guide, and help you heal.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white shadow-xl border border-border/50">
                <Button
                  className={"flex items-center gap-3 px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"}
                  onClick={() => {
                    connect({
                      auth: { type: "accessToken", value: accessToken },
                      configId,
                    })
                      .catch((err) => {
                        console.error("Failed to connect:", err);
                        toast.error(`Unable to start call: ${err.message || JSON.stringify(err)}`);
                      });
                  }}
                >
                  <Phone
                    className={"size-5 fill-current"}
                    strokeWidth={2}
                  />
                  <span>Begin Session</span>
                </Button>
              </div>

              <div className="text-xs text-muted-foreground/60 font-sans tracking-wide uppercase">
                Professional Voice Therapy • AI-Powered • Secure
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

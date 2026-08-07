"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: SuccessModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleContinue = () => {
    onClose();

    setTimeout(() => {
      router.push("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/35 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[100]
              w-[92%]
              max-w-xl
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[34px]
              border
              border-neutral-200
              bg-white
              shadow-[0_40px_120px_rgba(0,0,0,0.18)]
            "
          >
            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#C7A86D]/15 blur-[90px]" />

            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                rounded-full
                p-2
                transition
                hover:bg-neutral-100
              "
            >
              <X size={18} />
            </button>

            <div className="relative px-10 py-14 text-center">

              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C7A86D]/10"
              >
                <CheckCircle2
                  size={48}
                  className="text-[#C7A86D]"
                />
              </motion.div>

              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-[#111111]">
                Thank You!
              </h2>

              <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-neutral-600">
                We've successfully received your enquiry.
                <br />
                Our team will review your project and get back to you within 24 hours.
              </p>

              <button
                onClick={handleContinue}
                className="
                  mt-10
                  rounded-full
                  bg-[#111111]
                  px-8
                  py-4
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-black
                "
              >
                Continue Browsing
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
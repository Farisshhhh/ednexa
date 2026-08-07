"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

type Size = "sm" | "md" | "lg";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: `
    bg-[#111111]
    text-white
    border
    border-[#111111]
    shadow-[0_10px_30px_rgba(17,17,17,0.08)]
    hover:bg-black
    hover:shadow-[0_16px_40px_rgba(17,17,17,0.14)]
  `,

  secondary: `
    bg-white/90
    text-[#111111]
    border
    border-[#E7E2D8]
    backdrop-blur
    hover:bg-white
    hover:border-[#D8C8A0]
    hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]
  `,

  ghost: `
    bg-transparent
    text-[#111111]
    hover:bg-black/5
  `,
};

const sizeClasses: Record<Size, string> = {
  sm: "h-11 px-6 text-sm",
  md: "h-12 px-8 text-[15px]",
  lg: "h-14 px-10 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{
          y: -3,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
          y: 0,
        }}
        transition={{
          duration: 0.22,
          ease: "easeOut",
        }}
        disabled={disabled || loading}
        className={clsx(
          "inline-flex items-center justify-center gap-2",
          "rounded-[24px]",
          "font-medium",
          "tracking-[-0.03em]",
          "select-none",
          "transition-all duration-300",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-[#C7A86D]",
          "focus-visible:ring-offset-2",
          "focus-visible:ring-offset-[#F8F7F4]",
          "disabled:pointer-events-none",
          "disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <motion.svg
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-20"
              />

              <path
                d="M22 12A10 10 0 0112 22"
                stroke="currentColor"
                strokeWidth="3"
              />
            </motion.svg>

            Loading...
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
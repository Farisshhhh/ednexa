"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#footer",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const activeSection = useActiveSection();

  useEffect(() => {
  let lastScroll = 0;
  let accumulatedDownScroll = 0;
  let timeout: NodeJS.Timeout;

  const onScroll = () => {
    const current = window.scrollY;

    // Always visible near the top
    if (current < 40) {
      setScrolled(false);
      setVisible(true);
      accumulatedDownScroll = 0;
      lastScroll = current;
      return;
    }

    setScrolled(true);

    const delta = current - lastScroll;

    // Scrolling down
    if (delta > 0) {
      accumulatedDownScroll += delta;

      if (accumulatedDownScroll > 50) {
        setVisible(false);
      }
    }

    // Scrolling up
    if (delta < 0) {
      accumulatedDownScroll = 0;
      setVisible(true);
    }

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setVisible(true);
      accumulatedDownScroll = 0;
    }, 200);

    lastScroll = current;
  };

  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    clearTimeout(timeout);
  };
}, []);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -120,
        }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-6 z-50"
      >
        <Container>
          <motion.div
            animate={{
              scale: scrolled ? 0.98 : 1,
              y: scrolled ? 2 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              mx-auto
              max-w-[1380px]
              flex
              h-[78px]
              items-center
              justify-between
              rounded-[24px]
              border
              px-8
              transition-all
              duration-300
              ${
                scrolled
                  ? "border-[#ECE7DF] bg-white/80 backdrop-blur-xl shadow-[0_12px_45px_rgba(15,23,42,0.08)]"
                  : "border-white/40 bg-white/60 backdrop-blur-lg"
              }
            `}
          >
            {/* Logo */}

            <Link
              href="/"
              className="group flex items-center gap-4"
            >
              <Image
                src="/logo/ednexa-symbol.png"
                alt="Ednexa Logo"
                width={42}
                height={42}
                priority
                className="
                  h-[42px]
                  w-[42px]
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:rotate-3
                  group-hover:scale-105
                "
              />

              <span className="text-[22px] font-semibold tracking-[-0.06em] text-[#111111]">
                EDNEXA
              </span>
            </Link>

            {/* Desktop Navigation */}

            <nav className="hidden items-center gap-12 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
group
relative
translate-y-0
text-[15px]
font-medium
transition-all
duration-300
hover:-translate-y-[2px]
${
  activeSection === item.href.replace("#", "")
    ? "text-[#111111]"
    : "text-neutral-700"
}
`}
                >
                  {item.label}

                  {activeSection === item.href.replace("#", "") ? (
  <motion.span
    layoutId="navbar-indicator"
    className="absolute -left-1 -right-1 bottom-[-8px] h-[2px] rounded-full bg-[#C7A86D]"
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 35,
    }}
  />
) : (
  <span
    className="
      absolute
      -left-1
      -right-1
      bottom-[-8px]
      h-[2px]
      rounded-full
      bg-[#C7A86D]
      scale-x-0
      origin-left
      transition-transform
      duration-300
      group-hover:scale-x-100
    "
  />
)}
                </Link>
              ))}
            </nav>
                        {/* CTA */}

            <div className="hidden lg:block">
  <Link href="/contact">
    <Button className="group">
      <span className="flex items-center gap-2">
        Book Discovery Call

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </span>
    </Button>
  </Link>
</div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
              className="
                rounded-xl
                border
                border-[#ECE7DF]
                bg-white/90
                p-3
                shadow-sm
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-md
                lg:hidden
              "
            >
              <Menu size={20} />
            </button>
          </motion.div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-[60] bg-[#F8F7F4]"
          >
            <Container>
              {/* Top */}

              <div className="flex h-24 items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4"
                >
                  <Image
                    src="/logo/ednexa-symbol.png"
                    alt="Ednexa Logo"
                    width={40}
                    height={40}
                    priority
                    className="h-10 w-10 object-contain"
                  />

                  <span className="text-[24px] font-semibold tracking-[-0.06em] text-[#111111]">
                    EDNEXA
                  </span>
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close Menu"
                  className="
                    rounded-xl
                    border
                    border-[#ECE7DF]
                    bg-white
                    p-3
                    transition-all
                    duration-300
                    hover:rotate-90
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation */}

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                className="mt-20 flex flex-col"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#ECE7DF]
                        py-7
                        text-4xl
                        font-semibold
                        tracking-[-0.04em]
                        text-[#111111]
                        transition-all
                        duration-300
                      "
                    >
                      {item.label}

                      <ArrowUpRight
                        size={22}
                        className="
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Mobile CTA */}

              <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.35,
  }}
  className="mt-14"
>
  <Link
    href="/contact"
    onClick={() => setMobileOpen(false)}
    className="block w-full"
  >
    <Button className="w-full">
      Book Discovery Call
    </Button>
  </Link>

  <p className="mt-6 text-center text-sm text-neutral-500">
    Premium websites crafted for ambitious businesses.
  </p>
</motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
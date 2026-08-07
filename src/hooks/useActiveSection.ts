"use client";

import { useEffect, useState } from "react";

const sections = [
  "services",
  "work",
  "process",
  "footer",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "";

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        if (scrollPosition >= element.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return activeSection;
}
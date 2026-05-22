"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
    >
      {dark ? "light" : "dark"}
    </button>
  );
}

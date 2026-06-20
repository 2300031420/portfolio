"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        setTheme(stored);
        if (stored === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
      } else {
        const prefersDark =
          typeof window !== "undefined" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const t = prefersDark ? "dark" : "light";
        setTheme(t);
        if (t === "dark") document.documentElement.classList.add("dark");
      }
    } catch (e) {}
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
      if (next === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-4 rounded-full p-2 glass hover:opacity-90 transition-colors"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-400">
          <path d="M12 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5zM12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5.53 6.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.53 7.53a.75.75 0 010-1.06zM16.35 17.29a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM4.5 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H5.25A.75.75 0 014.5 12zM16.5 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM5.53 17.53a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM16.35 6.71a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-gray-600">
          <path d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 0112 2.25c.743 0 1.468.073 2.164.213a.75.75 0 01.516 1.162 7.5 7.5 0 10.001 10.413.75.75 0 01-1.162.516A9.676 9.676 0 0121.752 15z" />
        </svg>
      )}
    </button>
  );
}

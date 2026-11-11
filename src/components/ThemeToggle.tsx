"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "kos-uni-salma-theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      const selected = document.documentElement.dataset.theme;
      setIsDark(selected === "dark" || (selected !== "light" && system.matches));
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      if (event.newValue === "light" || event.newValue === "dark") {
        document.documentElement.dataset.theme = event.newValue;
      } else {
        delete document.documentElement.dataset.theme;
      }
      sync();
    };

    sync();
    system.addEventListener("change", sync);
    window.addEventListener("storage", onStorage);
    return () => {
      system.removeEventListener("change", sync);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#101a16" : "#f8f7f2");
  }, [isDark]);

  const toggleTheme = () => {
    const theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    setIsDark(!isDark);
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  };

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      aria-label="Mode gelap"
      aria-pressed={isDark}
      title={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      onClick={toggleTheme}
    >
      {isDark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}

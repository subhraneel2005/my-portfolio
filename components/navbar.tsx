"use client";

import { Moon, Sun, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center lowercase bg-background text-foreground overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 flex justify-between items-center z-50 bg-background max-w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 sm:gap-3 md:gap-6 min-w-0 flex-1"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 font-bold tracking-tighter shrink-0">
            <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm md:text-base whitespace-nowrap">
              subhraneel.
            </span>
          </div>
          <Link href="/blogs" className="shrink-0">
            <motion.div
              whileHover={{ opacity: 0.7 }}
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              blogs
            </motion.div>
          </Link>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-300 shrink-0 ml-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
            >
              {isDark ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </Button>
      </nav>
      {children}
    </div>
  );
}

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
    <div className="min-h-screen w-full bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 backdrop-blur border-b border-border/60 bg-background/80">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 md:gap-6"
        >
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 font-semibold tracking-tight">
            <Terminal className="h-4 w-4 sm:h-4 sm:w-4" />
            <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">
              subhraneel.
            </span>
          </div>
          <Link href="/blogs" className="shrink-0">
            <motion.div
              whileHover={{ opacity: 0.7 }}
              className="whitespace-nowrap text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              blogs
            </motion.div>
          </Link>
        </motion.div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="ml-2 shrink-0 rounded-full transition-all duration-300 hover:bg-accent/60"
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
      <main className="pt-20 sm:pt-24 lg:pt-28">
        {children}
      </main>
    </div>
  );
}

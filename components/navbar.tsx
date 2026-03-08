"use client";

import { Moon, Sun } from "lucide-react";
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
      <nav className="fixed top-0 left-0 right-0 z-50 mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-medium hover:text-muted-foreground transition-colors">
          subhraneel.
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            blogs
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="h-8 w-8 rounded-full"
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
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>
      </nav>
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}

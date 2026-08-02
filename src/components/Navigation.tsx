"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Home, Trophy, User, MessageSquare, BookMarked, Library,
  PenTool, Gamepad2, Dumbbell, Headphones, MessageSquareMore, FileText,
  Globe, Languages, GraduationCap, MapPin, Mic, Map, Grid3X3, X, AlertTriangle, Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressSync } from "@/hooks/useProgressSync";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/roadmap", label: "Roadmap", icon: Map },
  { href: "/review", label: "Review", icon: BookMarked },
  { href: "/dictionary", label: "Dictionary", icon: Library },
  { href: "/tutor", label: "Tutor", icon: MessageSquare },
  { href: "/progress", label: "Progress", icon: Trophy },
  { href: "/profile", label: "Profile", icon: User },
];

const practiceItems = [
  { href: "/write", label: "Write", icon: PenTool },
  { href: "/read", label: "Read", icon: BookOpen },
  { href: "/listen", label: "Listen", icon: Headphones },
  { href: "/speak", label: "Speak", icon: Mic },
  { href: "/vocabulary", label: "Vocab", icon: GraduationCap },
  { href: "/idioms", label: "Idioms", icon: Languages },
  { href: "/culture", label: "Culture", icon: MapPin },
  { href: "/games", label: "Games", icon: Gamepad2 },
  { href: "/practice", label: "Practice", icon: Dumbbell },
  { href: "/conversation", label: "Convo", icon: MessageSquareMore },
  { href: "/exam", label: "Exam", icon: FileText },
  { href: "/mistakes", label: "Mistakes", icon: AlertTriangle },
  { href: "/error-hunt", label: "Error Hunt", icon: Target },
  { href: "/resources", label: "Resources", icon: Globe },
];

// 5 icons always visible on mobile bottom bar
const mobileBarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/speak", label: "Speak", icon: Mic },
  { href: "/review", label: "Review", icon: BookMarked },
];

// Everything else goes in the drawer
const mobileDrawerItems = [
  ...navItems.filter(i => !mobileBarItems.some(m => m.href === i.href)),
  ...practiceItems,
];

export function Navigation() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Auto-sync progress with Supabase for authenticated users
  useProgressSync();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Hide navigation on auth pages
  const authPages = ["/login", "/register", "/forgot-password", "/reset-password", "/assessment"];
  if (authPages.includes(pathname)) return null;

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <nav className="hidden md:flex flex-col w-64 border-r bg-card h-screen sticky top-0 py-8 px-4">
        <div className="flex items-center gap-3 px-4 mb-10 shrink-0">
          <div className="bg-primary text-primary-foreground p-2">
            <BookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Deutsch AI</h1>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto flex-1 min-h-0 pr-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 transition-colors shrink-0",
                  isActive
                    ? "bg-primary text-primary-foreground font-medium shadow-md"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="mt-6 pt-6 border-t border-border shrink-0">
            <p className="px-4 mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Practice</p>
            <div className="flex flex-col gap-1">
              {practiceItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 transition-colors text-sm shrink-0",
                      isActive
                        ? "bg-primary text-primary-foreground font-medium shadow-md"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Bottom Bar (5 icons) ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-card z-50 pb-safe">
        <div className="flex items-center justify-around px-2 py-1.5">
          {mobileBarItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 p-2 min-w-[48px] min-h-[48px] justify-center transition-colors",
                  isActive ? "text-primary font-medium" : "text-muted-foreground"
                )}
              >
                <div className={cn("p-1", isActive && "bg-primary/10")}>
                  <Icon size={20} />
                </div>
                <span className="text-[10px] leading-tight">{item.label}</span>
              </Link>
            );
          })}

          {/* More button */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={cn(
              "flex flex-col items-center gap-0.5 p-2 min-w-[48px] min-h-[48px] justify-center transition-colors",
              drawerOpen ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            <div className={cn("p-1", drawerOpen && "bg-primary/10")}>
              {drawerOpen ? <X size={20} /> : <Grid3X3 size={20} />}
            </div>
            <span className="text-[10px] leading-tight">More</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />

            {/* Drawer sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed bottom-[60px] left-0 right-0 z-40 bg-card border-t-2 border-foreground max-h-[70vh] overflow-y-auto pb-safe"
            >
              <div className="p-4">
                {/* Drag handle */}
                <div className="w-10 h-1 bg-muted-foreground/30 mx-auto mb-4 rounded-full" />

                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 px-1">
                  All Features
                </p>

                <div className="grid grid-cols-4 gap-1">
                  {mobileDrawerItems.map((item) => {
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex flex-col items-center gap-1.5 p-3 min-h-[64px] justify-center transition-colors rounded-sm",
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <Icon size={20} />
                        <span className="text-[10px] leading-tight text-center">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

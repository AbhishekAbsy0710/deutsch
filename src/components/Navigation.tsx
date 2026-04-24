"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home, Trophy, User, MessageSquare, BookMarked } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/review", label: "Review", icon: BookMarked },
  { href: "/tutor", label: "Tutor", icon: MessageSquare },
  { href: "/progress", label: "Progress", icon: Trophy },
  { href: "/profile", label: "Profile", icon: User },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col w-64 border-r bg-card h-screen sticky top-0 py-8 px-4">
        <div className="flex items-center gap-3 px-4 mb-10">
          <div className="bg-primary text-primary-foreground p-2">
            <BookOpen size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Deutsch AI</h1>
        </div>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 transition-colors",
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
        </div>
      </nav>

      {/* Mobile Navigation (Bottom Bar) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-card z-50 px-6 py-3 pb-safe">
        <div className="flex justify-between items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 transition-colors",
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className={cn(
                  "p-1.5",
                  isActive && "bg-primary/10"
                )}>
                  <Icon size={20} />
                </div>
                <span className="text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

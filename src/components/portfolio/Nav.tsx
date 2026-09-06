import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile, SHOW_GUESTBOOK } from "@/lib/portfolio-data";
import { useTheme } from "./theme";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = SHOW_GUESTBOOK
    ? [...navItems.slice(0, -1), { label: "Guestbook", href: "#guestbook" }, navItems[navItems.length - 1]!]
    : navItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`glass mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 transition-all sm:px-5 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 text-sm font-semibold tracking-[0.18em] text-foreground"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-[0.7rem] text-primary-foreground">
            {profile.initials}
          </span>
          <span className="truncate">{profile.name}</span>
        </a>

        <div className="flex items-center gap-1.5">
          <ul className="hidden items-center gap-5 pr-2 text-[0.82rem] lg:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggle}
            aria-label="Toggle colour mode"
            className="glass glass-hover grid h-11 w-11 place-items-center rounded-full"
          >
            <span className="relative block h-4 w-4">
              <Sun
                className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
                  theme === "light" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
              <Moon
                className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
                  theme === "dark" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="glass glass-hover grid h-11 w-11 place-items-center rounded-full lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`glass mx-auto mt-2 max-w-6xl overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="grid gap-1 p-3">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

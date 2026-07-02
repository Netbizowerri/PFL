import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Mail,
  Home,
  Waves,
  Handshake,
  Send,
} from "lucide-react";
import { cn } from "../utils/cn";
import { SITE } from "../data/constants";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/lagos-and-plastics", label: "Lagos & Plastics", icon: Waves },
  { to: "/partners", label: "Partners", icon: Handshake },
  { to: "/contact", label: "Contact Us", icon: Send },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close tray on route change + lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 border-b border-white/40 bg-brand-surface/80 px-4 backdrop-blur-md sm:px-6 md:mt-4 md:h-[68px] md:rounded-2xl md:border md:shadow-[0_8px_32px_-12px_rgba(43,38,32,0.18)]"
        >
          <Link to="/" className="flex min-h-11 items-center gap-3" aria-label="PFL Project — home">
            <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-brand-surface ring-1 ring-brand-muted">
              <img src="/logo.png" alt="" width={44} height={44} className="h-10 w-10 object-contain" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-text-base sm:text-[22px]">
              PFL <span className="text-brand-tertiary">Project</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-text-soft hover:bg-brand-surfaceAlt hover:text-text-base"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden min-h-11 items-center rounded-xl bg-brand-primary px-5 text-sm font-bold text-text-inverse shadow-lg shadow-brand-primary/25 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
            >
              Get Involved
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="grid h-11 w-11 place-items-center rounded-xl text-text-base transition-colors hover:bg-brand-surfaceAlt lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in app tray */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[60] bg-brand-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[84%] max-w-sm flex-col border-l border-white/40 bg-brand-surface/90 backdrop-blur-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              role="dialog"
              aria-label="Navigation"
            >
              <div className="flex items-center justify-between px-5 pb-2 pt-5">
                <span className="flex items-center gap-3">
                  <img src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 rounded-xl object-contain ring-1 ring-brand-muted" />
                  <span className="font-display text-lg font-bold tracking-tight">
                    PFL <span className="text-brand-tertiary">Project</span>
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-11 w-11 place-items-center rounded-xl text-text-base hover:bg-brand-surfaceAlt"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-2 flex flex-col gap-1 px-3">
                {NAV.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.05 }}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                          cn(
                            "flex min-h-14 items-center gap-3.5 rounded-2xl px-4 text-[15px] font-semibold transition-colors",
                            isActive
                              ? "bg-brand-primary text-text-inverse shadow-lg shadow-brand-primary/25"
                              : "text-text-base hover:bg-brand-surfaceAlt"
                          )
                        }
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        {item.label}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto border-t border-brand-muted p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-soft">
                  Quick contact
                </p>
                <div className="flex gap-3">
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-tertiary text-sm font-bold text-text-inverse shadow-lg shadow-brand-tertiary/25"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-secondary text-sm font-bold text-brand-ink shadow-lg shadow-brand-secondary/25"
                  >
                    <Mail className="h-5 w-5" /> Email
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* App-native bottom tab bar (mobile) */}
      <nav
        aria-label="Bottom tabs"
        className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 rounded-2xl border border-white/40 bg-brand-surface/85 shadow-[0_12px_32px_-8px_rgba(43,38,32,0.25)] backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-bold",
                  isActive ? "text-brand-primary" : "text-text-soft"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={cn(
                      "grid h-7 w-12 place-items-center rounded-full transition-colors",
                      isActive && "bg-brand-primary/12"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  {item.label.replace(" & ", " · ")}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

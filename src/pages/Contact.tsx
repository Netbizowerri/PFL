import { useActionState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import SEO from "../components/SEO";
import WaveDivider from "../components/WaveDivider";
import Reveal from "../components/Reveal";
import { IMAGES } from "../data/images";
import { FORMSPREE_ENDPOINT, MAPS_EMBED_SRC, SITE } from "../data/constants";
import { PAGES } from "../utils/seo";



type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  values: { name: string; email: string; phone: string; message: string };
};

const initialState: FormState = {
  status: "idle",
  message: "",
  values: { name: "", email: "", phone: "", message: "" },
};

/** Privyr CRM webhook — supplied via env at deploy time (§8.2). */
const PRIVYR_WEBHOOK_URL = import.meta.env.VITE_PRIVYR_WEBHOOK_URL as string | undefined;

async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const payload = { ...values, source: "PFL Project Website — /contact" };

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again — your details are preserved below.",
        values,
      };
    }

    // Privyr CRM webhook — fire-and-forget lead sync (§8.2)
    if (PRIVYR_WEBHOOK_URL) {
      fetch(PRIVYR_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => undefined);
    }

    return {
      status: "success",
      message: "Thank you — your message has been received. The PFL Project team will reach out shortly.",
      values: initialState.values,
    };
  } catch {
    return {
      status: "error",
      message: "Network error. Please check your connection and try again — your details are preserved below.",
      values,
    };
  }
}

const inputClass =
  "peer w-full rounded-2xl border border-brand-muted bg-brand-surface/70 px-4 pb-2.5 pt-6 text-[15px] font-medium text-text-base outline-none transition-colors placeholder-transparent focus:border-brand-primary";
const labelClass =
  "pointer-events-none absolute left-4 top-2 text-[11px] font-bold uppercase tracking-[0.1em] text-text-soft transition-all peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.1em] peer-focus:text-brand-primary";

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const reduced = useReducedMotion();

  return (
    <>
      <SEO
        title={PAGES.contact.title}
        description={PAGES.contact.description}
        path={PAGES.contact.path}
        ogTitle={PAGES.contact.ogTitle}
        ogDescription={PAGES.contact.ogDescription}
        keywords={PAGES.contact.keywords}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 45% at 12% 20%, color-mix(in srgb, var(--color-brand-primary) 9%, transparent), transparent), radial-gradient(45% 40% at 88% 70%, color-mix(in srgb, var(--color-brand-tertiary) 11%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-32 text-center sm:px-6 md:pt-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-muted bg-brand-surface/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-tertiary backdrop-blur">
              <Send className="h-3.5 w-3.5" /> We reply fast
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-text-base sm:text-5xl lg:text-6xl">
              Contact <span className="text-brand-tertiary">Us</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-soft">
              Reach the PFL Project team in Badagry, Lagos — by WhatsApp, email, or
              the form below.
            </p>
          </Reveal>
        </div>
        <WaveDivider toneClass="text-brand-surfaceAlt" />
      </section>

      {/* ================= SPLIT: DETAILS + FORM ================= */}
      <section className="bg-brand-surfaceAlt py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left — details + map */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-7">
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                      <MapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-soft">Address</p>
                       <p className="mt-1 text-[15px] font-semibold leading-relaxed text-text-base">
                          {SITE.address}
                        </p>
                    </div>
                  </li>
                  <li>
                    <a href={SITE.whatsappUrl} target="_blank" rel="noreferrer" className="group flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-tertiary/10 text-brand-tertiary">
                        <MessageCircle className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-soft">WhatsApp — tap to chat</p>
                        <p className="mt-1 font-mono text-[15px] font-semibold text-text-base transition-colors group-hover:text-brand-tertiary">
                          {SITE.phone}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="group flex items-start gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-secondary/15 text-brand-secondary">
                        <Mail className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-soft">Email</p>
                        <p className="mt-1 text-[15px] font-semibold text-text-base transition-colors group-hover:text-brand-secondary">
                          {SITE.email}
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Map embed — Badagry, Lagos */}
              <div className="glass flex-1 overflow-hidden rounded-3xl p-2">
                <iframe
                  title="PFL Project location — Badagry, Lagos, Nigeria"
                  src={MAPS_EMBED_SRC}
                  className="h-64 w-full rounded-2xl border-0 lg:h-full lg:min-h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold tracking-tight text-text-base">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-text-soft">
                Tell us how you'd like to get involved — as a CDA, partner, or supporter.
              </p>

              <AnimatePresence mode="wait">
                {state.status === "success" ? (
                  <motion.div
                    key="success"
                    initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", damping: 18, stiffness: 220 }}
                    className="mt-8 rounded-3xl border border-brand-tertiary/25 bg-brand-tertiary/8 p-8 text-center"
                    role="status"
                  >
                    <motion.span
                      initial={reduced ? false : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, stiffness: 260, delay: 0.15 }}
                      className="mx-auto inline-grid h-16 w-16 place-items-center rounded-full bg-brand-tertiary/15 text-brand-tertiary"
                    >
                      <CheckCircle2 className="h-9 w-9" />
                    </motion.span>
                    <p className="mt-4 font-display text-xl font-bold text-text-base">
                      Message sent
                    </p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-text-soft">
                      {state.message}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={formAction}
                    initial={false}
                    className="mt-7 space-y-4"
                    aria-busy={isPending}
                  >
                    {state.status === "error" && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-2xl border border-brand-primary/25 bg-brand-primary/8 px-4 py-3.5 text-sm font-medium text-brand-primary"
                      >
                        <AlertCircle className="mt-0.5 h-4.5 w-4.5 shrink-0" />
                        {state.message}
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Full name"
                          defaultValue={state.values.name}
                          className={inputClass}
                        />
                        <label htmlFor="name" className={labelClass}>Full name</label>
                      </div>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Email address"
                          defaultValue={state.values.email}
                          className={inputClass}
                        />
                        <label htmlFor="email" className={labelClass}>Email address</label>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp number"
                        defaultValue={state.values.phone}
                        className={inputClass}
                      />
                      <label htmlFor="phone" className={labelClass}>Phone / WhatsApp number</label>
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Your message"
                        defaultValue={state.values.message}
                        className={`${inputClass} resize-none`}
                      />
                      <label htmlFor="message" className={labelClass}>Your message</label>
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-7 text-base font-bold text-text-inverse shadow-xl shadow-brand-primary/30 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-4.5 w-4.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Badagry texture shot */}
            <img
              src={IMAGES.lagosFishermanBlueHour.src}
              alt={IMAGES.lagosFishermanBlueHour.alt}
              width={1200}
              height={627}
              loading="lazy"
              className="mt-5 aspect-[21/8] w-full rounded-3xl object-cover shadow-lg shadow-brand-ink/10"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

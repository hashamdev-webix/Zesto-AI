import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function Reveal({
  children,
  variants = fadeUp,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CTAButton({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "white";
}) {
  const cls =
    variant === "primary"
      ? "bg-brand text-brand-foreground hover:opacity-90"
      : "bg-white text-brand hover:bg-white/90";
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold shadow-sm transition ${cls}`}
    >
      {children}
    </Link>
  );
}

export function HeroBanner({
  image,
  title,
  subtitle,
  showCta = true,
}: {
  image: string;
  title: string;
  subtitle: string;
  showCta?: boolean;
}) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <CTAButton to="/get-in-touch">Get in Touch</CTAButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function FinalCTA({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-brand text-brand-foreground">
      <Reveal className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">{text}</p>
        <div className="mt-8">
          <CTAButton to="/get-in-touch" variant="white">
            Get in Touch
          </CTAButton>
        </div>
      </Reveal>
    </section>
  );
}

export function SplitSection({
  id,
  image,
  title,
  paragraphs,
  reverse = false,
}: {
  id: string;
  image: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <Reveal
          variants={reverse ? fadeRight : fadeLeft}
          className={reverse ? "md:order-2" : ""}
        >
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
          />
        </Reveal>
        <Reveal variants={reverse ? fadeLeft : fadeRight}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
          <div className="mt-7">
            <CTAButton to="/get-in-touch">Get in Touch</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function StickyTabs({
  tabs,
}: {
  tabs: { label: string; hash: string }[];
}) {
  const handleClick = (hash: string) => {
    const el = document.getElementById(hash);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.hash}
            onClick={() => handleClick(t.hash)}
            className="px-4 py-2 text-sm font-medium rounded-full border border-border hover:bg-brand hover:text-brand-foreground hover:border-brand transition whitespace-nowrap"
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

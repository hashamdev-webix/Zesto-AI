import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Inbox,
  AlertTriangle,
  Workflow,
  Bell,
  BarChart3,
  Check,
  Plug,
  Utensils,
  Truck,
  ChefHat,
  Boxes,
  Building2,
} from "lucide-react";
import {
  CTAButton,
  FinalCTA,
  Reveal,
  fadeLeft,
  fadeRight,
  fadeUp,
  stagger,
} from "../components/site/common";
import { Link } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
    title: "Stop Losing Orders Across Multiple Channels",
    text: "Zesto AI helps restaurants manage POS, delivery apps, phone, and online orders from one intelligent system.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80",
    title: "AI-Powered Order Management for Modern Restaurants",
    text: "Detect missed, delayed, or duplicate orders instantly and improve workflow efficiency with automation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    title: "Turn Operational Chaos into Clear Workflow Visibility",
    text: "Route orders, alert staff, and track performance across all channels in real time.",
  },
];

function HeroSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.55)), url(${slides[i].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 25 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {slides[i].title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
                {slides[i].text}
              </p>
              <div className="mt-8">
                <CTAButton to="/get-in-touch">Get in Touch</CTAButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-8 bg-brand" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

const features = [
  { icon: Inbox, title: "Unified Order Inbox", text: "Consolidate POS, delivery apps, phone, QR, and website orders into one dashboard." },
  { icon: AlertTriangle, title: "AI Exception Detection", text: "Automatically detect missed, duplicate, or delayed orders." },
  { icon: Workflow, title: "Workflow Routing", text: "Assign tasks to kitchen and staff with real-time status tracking." },
  { icon: Bell, title: "Manager Alerts", text: "Get notified when service risks or delays occur." },
  { icon: BarChart3, title: "Analytics Dashboard", text: "Track performance, trends, and missed-order risks." },
];

const steps = [
  { n: 1, title: "Connect Your Systems", text: "Integrate POS, delivery platforms, and ordering channels." },
  { n: 2, title: "Centralize Orders", text: "All incoming orders appear in one unified dashboard." },
  { n: 3, title: "Automate Workflow", text: "AI detects issues, routes tasks, and alerts staff." },
  { n: 4, title: "Improve Performance", text: "Use insights and analytics to optimize operations." },
];

const indCards = [
  { icon: Utensils, title: "Quick Service Restaurants", text: "Manage high order volumes across multiple channels.", hash: "quick-service" },
  { icon: ChefHat, title: "Full-Service Restaurants", text: "Improve coordination and reduce missed takeout orders.", hash: "full-service" },
  { icon: Truck, title: "Ghost Kitchens", text: "Streamline delivery-first operations.", hash: "ghost-kitchens" },
  { icon: Boxes, title: "Catering & Food Services", text: "Handle complex and scheduled orders efficiently.", hash: "catering" },
  { icon: Building2, title: "Multi-location Chains", text: "Standardize workflows across locations.", hash: "multi-location" },
];

const benefits = [
  "Reduce missed and duplicate orders",
  "Improve staff coordination and workflow visibility",
  "Increase operational efficiency",
  "Gain real-time insights into performance",
  "Improve customer satisfaction and repeat business",
];

export default function HomePage() {
  return (
    <div>
      <HeroSlideshow />

      {/* Intro */}
      <section className="py-20">
        <Reveal variants={fadeLeft} className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            AI Restaurant Order Management Software in Canada
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Zesto AI is a web-based SaaS platform designed to help restaurants improve order accuracy, workflow visibility, and staff coordination. By consolidating orders from POS systems, delivery platforms, phone calls, websites, and QR ordering into a single interface, Zesto AI eliminates missed orders and operational confusion.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Built for restaurants operating in high-volume environments, the platform provides real-time insights, intelligent alerts, and automation tools that help reduce errors, improve service speed, and increase revenue.
          </p>
        </Reveal>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <Reveal variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">The Problem Restaurants Face</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Restaurants today manage orders from multiple channels including in-store POS, delivery apps, websites, phone calls, and catering requests. These disconnected systems often result in missed orders, delayed confirmations, duplicate tickets, and operational inefficiencies that lead to revenue loss and poor customer experience.
            </p>
          </Reveal>
          <Reveal variants={fadeUp} className="bg-brand text-brand-foreground rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">The Zesto AI Solution</h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              Zesto AI acts as an intelligent order command center that consolidates all incoming orders into one system. It detects exceptions, routes tasks to the right staff, and alerts managers before problems impact customers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
            <p className="mt-3 text-muted-foreground">Everything you need to take control of your order flow.</p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeLeft}
                className="rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How Zesto AI Works</h2>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {steps.map((s) => (
              <motion.div key={s.n} variants={fadeUp} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="h-10 w-10 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Built for Every Restaurant</h2>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {indCards.map((c) => (
              <motion.div key={c.title} variants={fadeLeft}>
                <Link
                  to={`/industries#${c.hash}`}
                  className="block h-full rounded-2xl p-6 border border-border hover:border-brand hover:shadow-lg transition"
                >
                  <c.icon className="h-8 w-8 text-brand" />
                  <h3 className="mt-4 font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <Reveal variants={fadeLeft}>
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
              alt="Restaurant analytics"
              className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
            />
          </Reveal>
          <Reveal variants={fadeRight}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Restaurants Choose Zesto AI</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <Reveal variants={fadeLeft} className="max-w-5xl mx-auto px-4 text-center">
          <Plug className="h-10 w-10 text-brand mx-auto" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Seamless Integrations Across All Order Channels</h2>
          <p className="mt-4 text-muted-foreground">
            Zesto AI integrates with POS systems, delivery platforms, online ordering systems, QR ordering tools, and other restaurant technologies to create a unified workflow layer without replacing existing systems.
          </p>
          <div className="mt-10 overflow-hidden">
            <motion.div
              animate={{ x: [0, -800] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap text-muted-foreground font-semibold"
            >
              {["POS Systems", "Uber Eats", "DoorDash", "SkipTheDishes", "QR Ordering", "Online Ordering", "Catering", "Phone Orders", "POS Systems", "Uber Eats", "DoorDash", "SkipTheDishes"].map((n, i) => (
                <span key={i} className="px-6 py-3 rounded-full bg-secondary">{n}</span>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      <FinalCTA
        title="Ready to Improve Your Restaurant Operations?"
        text="Discover how Zesto AI can help reduce missed orders and improve workflow efficiency."
      />
    </div>
  );
}

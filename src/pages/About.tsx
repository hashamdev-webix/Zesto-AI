import { Check } from "lucide-react";
import { CTAButton, FinalCTA, HeroBanner, Reveal, fadeLeft, fadeRight, fadeUp, stagger } from "../components/site/common";
import { motion } from "framer-motion";

const capabilities = [
  "Centralized order management across multiple channels",
  "AI-powered detection of operational risks",
  "Automated workflow routing",
  "Real-time alerts and notifications",
  "Performance analytics and reporting",
];

const why = [
  "Built specifically for restaurant operations",
  "Designed for real-time workflow visibility",
  "Reduces missed orders and operational errors",
  "Works with existing POS and ordering systems",
  "Scalable for single locations and multi-location businesses",
];

export default function AboutPage() {
  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
        title="About Zesto AI – AI-Powered Restaurant Workflow Software"
        subtitle="Helping restaurants improve order accuracy, workflow visibility, and operational efficiency through AI."
      />

      <section className="py-20">
        <Reveal variants={fadeLeft} className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Zesto AI is an Ontario-based software-as-a-service (SaaS) company focused on building intelligent workflow solutions for the restaurant industry. The platform is designed to help restaurants manage orders across multiple channels, improve coordination between staff, and reduce operational inefficiencies.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            By combining artificial intelligence with practical restaurant workflows, Zesto AI enables businesses to operate more efficiently without replacing their existing systems. The platform acts as a central layer that enhances visibility, accuracy, and performance across daily operations.
          </p>
          <p className="mt-4 text-sm text-muted-foreground italic">
            AI restaurant software company in Canada providing workflow automation and order management solutions.
          </p>
        </Reveal>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <Reveal variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to help restaurants eliminate missed orders, reduce workflow inefficiencies, and improve operational performance through intelligent automation.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We aim to provide practical, easy-to-adopt technology that delivers measurable value for restaurant owners and operators without adding unnecessary complexity.
            </p>
          </Reveal>
          <Reveal variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">What We Build</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Zesto AI develops a web-based platform that acts as an intelligent order command center. The system consolidates incoming orders, detects exceptions, routes tasks, and provides real-time insights into restaurant operations.
            </p>
            <ul className="mt-4 space-y-2">
              {capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-brand mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <Reveal variants={fadeLeft}>
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" alt="Restaurant team" />
          </Reveal>
          <Reveal variants={fadeRight}>
            <h2 className="text-3xl md:text-4xl font-bold">The Problem We Solve</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Restaurants today operate in increasingly complex environments where orders come from multiple sources including POS systems, delivery platforms, websites, phone calls, and QR ordering. These disconnected systems create operational challenges such as missed orders, delayed confirmations, duplicate entries, and workflow inefficiencies.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Zesto AI addresses these challenges by creating a unified system that captures, processes, and manages all order activity in real time, reducing errors and improving overall efficiency.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <Reveal variants={fadeLeft} className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Approach to Restaurant Technology</h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            Zesto AI is designed as an integration-first platform that works alongside existing restaurant systems rather than replacing them. This approach allows businesses to adopt advanced technology without disrupting their current operations.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            The platform focuses on simplicity, usability, and real-time performance, ensuring that staff can easily interact with the system even in high-pressure environments.
          </p>
        </Reveal>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Zesto AI</h2>
          </Reveal>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-10 grid md:grid-cols-2 gap-4"
          >
            {why.map((w) => (
              <motion.li
                key={w}
                variants={fadeRight}
                className="flex items-start gap-3 bg-secondary rounded-xl p-5"
              >
                <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <span>{w}</span>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-10 text-center">
            <CTAButton to="/get-in-touch">Get in Touch</CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Learn How Zesto AI Can Improve Your Restaurant Operations"
        text="Get in touch with our team to explore how our platform can support your business."
      />
    </div>
  );
}

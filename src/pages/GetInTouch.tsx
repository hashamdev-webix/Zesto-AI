import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Check, ChevronDown } from "lucide-react";
import { z } from "zod";
import { CTAButton, FinalCTA, HeroBanner, Reveal, fadeLeft, fadeRight, fadeUp, stagger } from "../components/site/common";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  business: z.string().trim().max(150).optional().or(z.literal("")),
  locations: z.string(),
  type: z.string(),
  channels: z.array(z.string()),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const channelOpts = ["POS", "Delivery Apps", "Website", "Phone", "QR"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [channels, setChannels] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      business: String(fd.get("business") || ""),
      locations: String(fd.get("locations") || "1"),
      type: String(fd.get("type") || "Quick Service Restaurant"),
      channels,
      message: String(fd.get("message") || ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const toggle = (c: string) =>
    setChannels((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));

  const inputCls =
    "w-full rounded-md border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand";

  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80"
        title="Get in Touch with Zesto AI"
        subtitle="Speak with our team to learn how AI-powered order management can improve your restaurant operations."
        showCta={false}
      />

      <section id="contact-form" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <Reveal variants={fadeLeft}>
            <h2 className="text-3xl font-bold">Request a Demo or Consultation</h2>
            <p className="mt-3 text-muted-foreground">Fill out the form below and our team will contact you to discuss your business needs.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-brand/10 border border-brand p-8 text-center">
                <Check className="h-10 w-10 text-brand mx-auto" />
                <h3 className="mt-3 text-xl font-bold">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">Our team will reach out shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="text-sm font-medium">Full Name *</label>
                  <input name="name" className={inputCls} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email *</label>
                    <input name="email" type="email" className={inputCls} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <input name="phone" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Restaurant / Business Name</label>
                  <input name="business" className={inputCls} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Number of Locations</label>
                    <select name="locations" className={inputCls}>
                      <option>1</option>
                      <option>2–5</option>
                      <option>5–10</option>
                      <option>10+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Type of Business</label>
                    <select name="type" className={inputCls}>
                      <option>Quick Service Restaurant</option>
                      <option>Full-Service Restaurant</option>
                      <option>Ghost Kitchen</option>
                      <option>Catering</option>
                      <option>Multi-location</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Current Order Channels</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {channelOpts.map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => toggle(c)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition ${
                          channels.includes(c)
                            ? "bg-brand text-brand-foreground border-brand"
                            : "border-border hover:border-brand"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Message / Requirements</label>
                  <textarea name="message" rows={4} className={inputCls} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand text-brand-foreground py-3 font-semibold hover:opacity-90"
                >
                  Submit Request
                </button>
              </form>
            )}
          </Reveal>

          <Reveal variants={fadeRight}>
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-brand mt-1 shrink-0" />
                <p>30 Eglinton Ave W #405, Mississauga, ON, Canada, L5R 3E7</p>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-brand mt-1 shrink-0" />
                <a href="mailto:zestoai@mail.com" className="hover:text-brand">zestoai@mail.com</a>
              </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3]">
              <iframe
                title="Zesto AI Office"
                src="https://www.google.com/maps?q=30+Eglinton+Ave+W,+Mississauga,+ON+L5R+3E7&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Why Connect with Zesto AI</h2>
            <p className="mt-3 text-muted-foreground">
              Whether you are exploring new technology or looking to improve your current operations, our team can help you understand how Zesto AI fits into your workflow.
            </p>
          </Reveal>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {[
              "Personalized product walkthrough",
              "Integration consultation with your existing systems",
              "Workflow and efficiency assessment",
              "Custom recommendations based on your business",
            ].map((b) => (
              <motion.li key={b} variants={fadeRight} className="bg-white rounded-xl p-5 flex gap-3 items-start">
                <Check className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">What Happens After You Submit the Form</h2>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-5"
          >
            {[
              "Our team reviews your request and business details",
              "We contact you to schedule a demo or consultation",
              "We walk you through the platform and answer your questions",
              "Next steps and onboarding guidance",
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-border p-6">
                <div className="h-10 w-10 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{t}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-3">
            {[
              { q: "Do I need to replace my existing POS system?", a: "No, Zesto AI is designed to integrate with your current systems without replacement." },
              { q: "Is this suitable for small restaurants?", a: "Yes, the platform is designed for both single-location and multi-location businesses." },
              { q: "How long does onboarding take?", a: "Onboarding timelines vary depending on integrations, but are designed to be quick and efficient." },
            ].map((f) => (
              <details key={f.q} className="group bg-white rounded-xl p-5 border border-border">
                <summary className="flex justify-between items-center cursor-pointer font-semibold">
                  {f.q}
                  <ChevronDown className="h-5 w-5 text-brand group-open:rotate-180 transition" />
                </summary>
                <p className="mt-3 text-muted-foreground text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand text-brand-foreground">
        <Reveal className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Improve Your Restaurant Operations?</h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Get started with Zesto AI and experience the benefits of AI-powered workflow management.
          </p>
          <div className="mt-8">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold bg-white text-brand hover:bg-white/90"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

type DropItem = { label: string; to: string; hash?: string };

const solutions: DropItem[] = [
  { label: "Order Intelligence Platform", to: "/solutions", hash: "order-intelligence" },
  { label: "AI Exception Detection", to: "/solutions", hash: "ai-exception-detection" },
  { label: "Workflow Automation", to: "/solutions", hash: "workflow-automation" },
  { label: "Manager Alerts System", to: "/solutions", hash: "manager-alerts" },
  { label: "Analytics & Reporting", to: "/solutions", hash: "analytics-reporting" },
];
const product: DropItem[] = [
  { label: "Unified Order Inbox", to: "/product", hash: "order-inbox" },
  { label: "Kitchen Workflow Routing", to: "/product", hash: "workflow-routing" },
  { label: "AI Alerts Engine", to: "/product", hash: "alerts-engine" },
  { label: "Dashboard & Analytics", to: "/product", hash: "analytics-dashboard" },
  { label: "Integrations Layer", to: "/product", hash: "ai-detection" },
];
const integrations: DropItem[] = [
  { label: "POS Systems", to: "/integrations", hash: "pos-systems" },
  { label: "Delivery Platforms", to: "/integrations", hash: "delivery-platforms" },
  { label: "Online Ordering", to: "/integrations", hash: "online-ordering" },
  { label: "QR Ordering", to: "/integrations", hash: "qr-ordering" },
  { label: "Social Channels", to: "/integrations", hash: "social-channels" },
];
const industries: DropItem[] = [
  { label: "Quick Service Restaurants", to: "/industries", hash: "quick-service" },
  { label: "Full-Service Restaurants", to: "/industries", hash: "full-service" },
  { label: "Ghost Kitchens", to: "/industries", hash: "ghost-kitchens" },
  { label: "Catering Businesses", to: "/industries", hash: "catering" },
  { label: "Multi-location Chains", to: "/industries", hash: "multi-location" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const goTo = (item: DropItem) => {
    setOpen(null);
    setMobile(false);
    
    // Navigate to the page
    navigate(item.to);
    
    // If there's a hash, scroll directly to that section
    if (item.hash) {
      setTimeout(() => {
        const el = document.getElementById(item.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Only scroll to top if there's no hash
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    setOpen(null);
    setMobile(false);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const NavBtn = ({ name, items, image }: { name: string; items: DropItem[]; image?: string }) => {
    const handleMainClick = () => {
      setOpen(null);
      setMobile(false);
      // Navigate to the main page
      navigate(`/${name.toLowerCase()}`);
      // Scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => setOpen(name)}
        onMouseLeave={() => setOpen(null)}
      >
        <button 
          onClick={handleMainClick}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
        >
          {name} <ChevronDown className="h-4 w-4" />
        </button>
      <AnimatePresence>
        {open === name && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            <div className="bg-white shadow-2xl rounded-xl border border-border overflow-hidden flex w-[640px]">
              <ul className="p-4 flex-1 space-y-1">
                {items.map((it) => (
                  <li key={it.label}>
                    <button
                      onClick={() => goTo(it)}
                      className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-secondary hover:text-brand transition-colors"
                    >
                      {it.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="w-64 bg-secondary p-5 flex flex-col justify-between">
                {image ? (
                  <img src={image} alt="" className="rounded-lg h-32 w-full object-cover" />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {name === "Solutions" &&
                      "Reduce missed orders and improve efficiency with AI-powered workflow control"}
                    {name === "Integrations" && (
                      <span className="inline-block px-3 py-1 rounded-full bg-brand text-brand-foreground text-xs font-semibold">
                        1000+ integrations compatible
                      </span>
                    )}
                    {name === "Industries" && "Tailored AI workflows for every restaurant type"}
                  </p>
                )}
                <Link
                  to="/get-in-touch"
                  onClick={() => {
                    setOpen(null);
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-brand text-brand-foreground px-4 py-2 text-sm font-semibold hover:opacity-90"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur border-b border-white/10 shadow-lg">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between h-16 lg:h-18">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
          <img 
            src="/ZestoAi.png" 
            alt="Zesto AI Logo" 
            className="h-14 w-auto sm:h-16 lg:h-14"
            style={{ transform: 'scale(1.75)' }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavBtn name="Solutions" items={solutions} />
          <NavBtn
            name="Product"
            items={product}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
          />
          <NavBtn name="Integrations" items={integrations} />
          <NavBtn name="Industries" items={industries} />
          <Link
            to="/about"
            onClick={handleAboutClick}
            className="px-3 py-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/get-in-touch"
            onClick={handleAboutClick}
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-brand text-brand-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
          <button className="lg:hidden p-2 text-white" onClick={() => setMobile(!mobile)}>
            {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-black"
          >
            <div className="px-4 py-4 space-y-4">
              {[
                { name: "Solutions", items: solutions },
                { name: "Product", items: product },
                { name: "Integrations", items: integrations },
                { name: "Industries", items: industries },
              ].map((g) => (
                <details key={g.name} className="group">
                  <summary className="flex justify-between items-center font-semibold cursor-pointer py-2 text-white">
                    {g.name} <ChevronDown className="h-4 w-4" />
                  </summary>
                  <ul className="pl-4 pb-2 space-y-1">
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <button
                          onClick={() => goTo(it)}
                          className="w-full text-left py-1.5 text-sm text-white/80 hover:text-white"
                        >
                          {it.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <Link
                to="/about"
                onClick={handleAboutClick}
                className="block py-2 font-semibold text-white"
              >
                About Us
              </Link>
              <Link
                to="/get-in-touch"
                onClick={handleAboutClick}
                className="block w-full text-center rounded-md bg-brand text-brand-foreground px-4 py-2 font-semibold hover:opacity-90"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

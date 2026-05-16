import { FinalCTA, HeroBanner, SplitSection, StickyTabs } from "../components/site/common";

const tabs = [
  { label: "POS Systems", hash: "pos-systems" },
  { label: "Delivery Platforms", hash: "delivery-platforms" },
  { label: "Online Ordering", hash: "online-ordering" },
  { label: "QR Ordering", hash: "qr-ordering" },
  { label: "Social & Messaging", hash: "social-channels" },
];

export default function IntegrationsPage() {
  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80"
        title="Seamless Restaurant Software Integrations"
        subtitle="Connect POS systems, delivery platforms, online ordering, and more with Zesto AI's integration layer."
      />
      <StickyTabs tabs={tabs} />

      <SplitSection
        id="pos-systems"
        image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&q=80"
        title="POS System Integrations"
        paragraphs={[
          "Zesto AI integrates with restaurant POS systems to capture and manage in-store orders alongside external channels. By connecting directly with POS platforms, the system ensures accurate order synchronization and eliminates manual data entry errors.",
          "This integration allows restaurant staff to manage all orders from a single dashboard while maintaining existing POS workflows. Zesto AI enhances visibility without disrupting current operations, making it easier for restaurants to adopt advanced technology without replacing their core systems.",
        ]}
      />
      <SplitSection
        id="delivery-platforms"
        reverse
        image="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80"
        title="Delivery Platform Integrations"
        paragraphs={[
          "Zesto AI connects with third-party delivery platforms to centralize incoming orders into one unified system. This eliminates the need for staff to manage multiple tablets and reduces the risk of missed or delayed orders.",
          "By consolidating delivery orders, restaurants can improve speed, accuracy, and customer satisfaction. The integration ensures that all delivery-related workflows are aligned with kitchen operations in real time.",
        ]}
      />
      <SplitSection
        id="online-ordering"
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80"
        title="Online Ordering System Integrations"
        paragraphs={[
          "Zesto AI integrates with restaurant websites and online ordering platforms to capture direct customer orders efficiently. These integrations ensure that online orders are automatically routed into the central workflow without manual intervention.",
          "Restaurants can maintain control over their direct ordering channels while benefiting from automated processing, improved accuracy, and real-time order visibility.",
        ]}
      />
      <SplitSection
        id="qr-ordering"
        reverse
        image="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80"
        title="QR Ordering Integrations"
        paragraphs={[
          "Zesto AI supports QR-based ordering systems that allow customers to place orders directly from their mobile devices while dining in or ordering remotely. These orders are automatically captured and processed within the centralized platform.",
          "QR ordering integration improves customer experience, reduces staff workload, and speeds up service during busy periods. It also ensures that all orders are tracked consistently within the system.",
        ]}
      />
      <SplitSection
        id="social-channels"
        image="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&q=80"
        title="Social Media & Messaging Integrations"
        paragraphs={[
          "Zesto AI integrates with social media platforms and messaging channels where customers place informal or direct orders. These orders are captured, structured, and routed into the main workflow system for processing.",
          "This ensures that no customer request is missed, even when orders are received outside traditional channels. Restaurants can respond faster and maintain consistent service quality across all communication platforms.",
        ]}
      />

      <FinalCTA
        title="Connect All Your Restaurant Systems with Zesto AI"
        text="Integrate your existing tools and create a unified workflow without replacing your current technology."
      />
    </div>
  );
}

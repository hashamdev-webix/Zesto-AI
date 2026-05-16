import { FinalCTA, HeroBanner, SplitSection, StickyTabs } from "../components/site/common";

const tabs = [
  { label: "Order Inbox", hash: "order-inbox" },
  { label: "AI Detection", hash: "ai-detection" },
  { label: "Workflow Routing", hash: "workflow-routing" },
  { label: "Alerts Engine", hash: "alerts-engine" },
  { label: "Analytics Dashboard", hash: "analytics-dashboard" },
];

export default function ProductPage() {
  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
        title="Zesto AI Product – Intelligent Restaurant Order Management Software"
        subtitle="Explore the core features of Zesto AI designed to improve order accuracy, workflow automation, and operational visibility for restaurants."
      />
      <StickyTabs tabs={tabs} />

      <SplitSection
        id="order-inbox"
        image="https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1200&q=80"
        title="Unified Order Inbox"
        paragraphs={[
          "The Zesto AI Unified Order Inbox consolidates all incoming orders from POS systems, delivery platforms, websites, phone orders, QR ordering, and catering requests into a single interface. This eliminates the need to switch between multiple systems and ensures that no order is missed or overlooked.",
          "By centralizing order management, restaurants can improve operational efficiency, reduce errors, and handle high order volumes with greater accuracy. The system is designed for real-time visibility and seamless workflow management across all order channels.",
        ]}
      />
      <SplitSection
        id="ai-detection"
        reverse
        image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
        title="AI-Powered Exception Detection Engine"
        paragraphs={[
          "Zesto AI uses advanced artificial intelligence to detect anomalies and risks in incoming orders. The system identifies duplicate entries, delayed confirmations, unusual order patterns, inventory conflicts, and timing issues in real time.",
          "This proactive detection system helps restaurants prevent revenue loss, reduce customer complaints, and maintain consistent service quality. By identifying issues early, staff can take immediate corrective action.",
        ]}
      />
      <SplitSection
        id="workflow-routing"
        image="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?w=1200&q=80"
        title="Automated Workflow Routing System"
        paragraphs={[
          "The workflow routing system automatically assigns orders to the appropriate kitchen stations and staff roles based on order type, preparation requirements, and timing. This eliminates manual coordination and ensures efficient task distribution across teams.",
          "Staff can track order progress in real time, improving communication between front-of-house and kitchen operations. This results in faster service, reduced delays, and improved operational consistency.",
        ]}
      />
      <SplitSection
        id="alerts-engine"
        reverse
        image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"
        title="Real-Time Alerts & Notification Engine"
        paragraphs={[
          "Zesto AI provides real-time alerts when service thresholds are at risk, such as unconfirmed orders, delays, system inactivity, or operational bottlenecks. These alerts ensure that managers and staff are immediately informed of potential issues.",
          "By enabling quick intervention, the alerts engine helps maintain service quality, prevent missed orders, and improve customer satisfaction across all channels.",
        ]}
      />
      <SplitSection
        id="analytics-dashboard"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        title="Analytics & Performance Dashboard"
        paragraphs={[
          "Zesto AI offers a comprehensive analytics dashboard that provides insights into order volume, peak periods, channel performance, staffing pressure, and missed-order risk. These insights allow restaurant operators to make data-driven decisions and optimize operations.",
          "The reporting system supports better planning, menu optimization, pricing strategies, and workforce management, helping businesses improve efficiency and profitability over time.",
        ]}
      />

      <FinalCTA
        title="Experience the Power of AI-Driven Restaurant Operations"
        text="Learn how Zesto AI can transform your order management and workflow efficiency."
      />
    </div>
  );
}

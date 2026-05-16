import { FinalCTA, HeroBanner, SplitSection, StickyTabs } from "../components/site/common";

const tabs = [
  { label: "Quick Service", hash: "quick-service" },
  { label: "Full-Service", hash: "full-service" },
  { label: "Ghost Kitchens", hash: "ghost-kitchens" },
  { label: "Catering", hash: "catering" },
  { label: "Multi-Location", hash: "multi-location" },
];

export default function IndustriesPage() {
  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
        title="AI Solutions for Every Type of Restaurant Business"
        subtitle="Zesto AI supports restaurants of all sizes with intelligent order management, workflow automation, and real-time operational visibility."
      />
      <StickyTabs tabs={tabs} />

      <SplitSection
        id="quick-service"
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80"
        title="Solutions for Quick Service Restaurants (QSR)"
        paragraphs={[
          "Quick service restaurants operate in high-volume environments where speed, accuracy, and efficiency are critical. Managing orders from POS systems, delivery platforms, and online channels simultaneously can lead to missed orders, delays, and operational confusion.",
          "Zesto AI helps QSRs centralize all incoming orders into one platform, automate workflow routing, and detect potential issues in real time. This ensures faster order processing, reduced errors, and improved customer satisfaction. The system is designed to handle peak-hour demand while maintaining consistent performance.",
        ]}
      />
      <SplitSection
        id="full-service"
        reverse
        image="https://images.unsplash.com/photo-1592861956120-e524fc739696?w=1200&q=80"
        title="Solutions for Full-Service Restaurants"
        paragraphs={[
          "Full-service restaurants manage both dine-in and off-premise orders, creating complex workflows that require coordination between front-of-house and kitchen staff. Multiple ordering channels can increase the risk of missed or delayed orders.",
          "Zesto AI provides a unified system that ensures all orders are tracked, routed, and managed efficiently. Real-time alerts and workflow visibility allow staff to stay coordinated and maintain service quality across all channels.",
        ]}
      />
      <SplitSection
        id="ghost-kitchens"
        image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
        title="Solutions for Ghost Kitchens"
        paragraphs={[
          "Ghost kitchens rely entirely on delivery and online orders, often managing multiple brands from a single location. This creates a high level of complexity in order management and workflow execution.",
          "Zesto AI enables ghost kitchens to centralize orders from all delivery platforms, automate task routing, and monitor performance in real time. The platform helps optimize efficiency, reduce missed orders, and maintain consistency across multiple virtual brands.",
        ]}
      />
      <SplitSection
        id="catering"
        reverse
        image="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80"
        title="Solutions for Catering & Food Service Businesses"
        paragraphs={[
          "Catering and food service businesses handle large, scheduled, and customized orders that require precise coordination and planning. Managing these orders alongside regular operations can be challenging without the right system.",
          "Zesto AI provides tools to manage complex orders, track timelines, and ensure accurate execution. The platform supports better organization, reduces manual errors, and improves operational efficiency for catering workflows.",
        ]}
      />
      <SplitSection
        id="multi-location"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        title="Solutions for Multi-Location Restaurant Chains"
        paragraphs={[
          "Multi-location restaurant chains require standardized workflows, centralized visibility, and consistent performance across all locations. Managing multiple systems across different branches can lead to inefficiencies and lack of operational control.",
          "Zesto AI provides centralized reporting, unified order management, and real-time insights across locations. This enables business owners and managers to monitor performance, identify issues, and maintain consistency across all units.",
        ]}
      />

      <FinalCTA
        title="Built for Restaurants of All Types and Sizes"
        text="Discover how Zesto AI can support your business with AI-powered order management and workflow automation."
      />
    </div>
  );
}

import { FinalCTA, HeroBanner, SplitSection, StickyTabs } from "../components/site/common";

const tabs = [
  { label: "Order Intelligence", hash: "order-intelligence" },
  { label: "AI Exception Detection", hash: "ai-exception-detection" },
  { label: "Workflow Automation", hash: "workflow-automation" },
  { label: "Manager Alerts", hash: "manager-alerts" },
  { label: "Analytics", hash: "analytics-reporting" },
];

export default function SolutionsPage() {
  return (
    <div>
      <HeroBanner
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
        title="AI-Powered Restaurant Workflow Solutions"
        subtitle="Streamline order management, reduce errors, and improve efficiency with Zesto AI's intelligent solutions."
      />
      <StickyTabs tabs={tabs} />

      <SplitSection
        id="order-intelligence"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        title="Unified Order Intelligence Platform"
        paragraphs={[
          "Zesto AI provides a centralized order intelligence platform that consolidates incoming orders from multiple channels including POS systems, delivery apps, phone orders, websites, QR ordering, and catering requests.",
          "By bringing all order data into one unified interface, restaurants can eliminate confusion caused by fragmented systems and reduce the risk of missed or duplicated orders. This allows staff to manage high order volumes efficiently while maintaining accuracy and consistency across all channels.",
        ]}
      />
      <SplitSection
        id="ai-exception-detection"
        reverse
        image="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&q=80"
        title="AI Exception Detection for Order Accuracy"
        paragraphs={[
          "Zesto AI uses artificial intelligence to detect operational risks such as duplicate orders, delayed confirmations, unusual customer instructions, timing conflicts, and inventory-related issues.",
          "The system continuously monitors incoming orders and flags exceptions in real time, allowing staff to take immediate action before issues result in lost revenue or customer dissatisfaction. This proactive approach improves order accuracy and reduces costly errors.",
        ]}
      />
      <SplitSection
        id="workflow-automation"
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
        title="Automated Kitchen & Staff Workflow Routing"
        paragraphs={[
          "Zesto AI automates the routing of orders to the appropriate kitchen stations and staff roles based on order type, preparation requirements, and timing.",
          "This eliminates manual coordination and ensures that each order is handled efficiently. Staff can track order status in real time, improving communication between front-of-house and kitchen teams. Workflow automation reduces delays and increases operational efficiency during peak hours.",
        ]}
      />
      <SplitSection
        id="manager-alerts"
        reverse
        image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80"
        title="Real-Time Manager Alerts & Notifications"
        paragraphs={[
          "Zesto AI sends real-time alerts to managers when service thresholds are at risk, such as delayed orders, unconfirmed tickets, or system inactivity.",
          "These alerts allow managers to intervene quickly and resolve issues before they impact customer experience. By providing visibility into operational risks, the platform supports better decision-making and improved service quality across all locations.",
        ]}
      />
      <SplitSection
        id="analytics-reporting"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
        title="Advanced Analytics & Performance Reporting"
        paragraphs={[
          "Zesto AI provides detailed analytics and reporting tools that give restaurant operators insights into order volume, peak service times, channel performance, staffing pressure, and missed-order risk.",
          "These insights help businesses make data-driven decisions related to pricing, staffing, menu optimization, and marketing strategies. By understanding operational patterns, restaurants can improve efficiency and profitability over time.",
        ]}
      />

      <FinalCTA
        title="Transform Your Restaurant Operations with AI"
        text="Discover how Zesto AI can help reduce missed orders, improve workflow efficiency, and increase revenue."
      />
    </div>
  );
}

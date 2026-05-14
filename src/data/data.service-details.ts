export interface ServiceDetail {
  slug: string;
  valueProp: string;
  painPoints: string[];
  features: Array<{ title: string; outcome: string }>;
  flow: string[];
  industries: string[];
  stack: string[];
  metrics: Array<{ label: string; value: string }>;
  faq: Array<{ q: string; a: string }>;
}

const serviceDetails: Record<string, ServiceDetail> = {
  unibi: {
    slug: "unibi",
    valueProp: "Unify finance, operations, and project delivery in one execution system.",
    painPoints: [
      "Teams manage budgets and delivery in disconnected tools.",
      "Executives cannot trust real-time project and spend visibility.",
      "Approvals and handoffs slow down operational decisions."
    ],
    features: [
      { title: "Budget Control", outcome: "See spend drift early and act before overrun." },
      { title: "Resource Planning", outcome: "Allocate the right teams to highest-priority work." },
      { title: "Project Tracking", outcome: "Track milestones, blockers, and dependencies in one place." },
      { title: "Workflow Approval", outcome: "Reduce manual routing and speed operational cycles." },
      { title: "Executive Dashboards", outcome: "Expose delivery risk and financial health instantly." },
      { title: "Audit Trail", outcome: "Preserve compliance-ready decision history." }
    ],
    flow: ["Discover operational gaps", "Design ERP workflow model", "Integrate finance and delivery", "Scale with governance automation"],
    industries: ["Enterprise SaaS", "Professional services", "Manufacturing", "Infrastructure projects"],
    stack: ["💼 Executive-ready dashboards", "🔗 Connected business workflows", "📊 Financial and delivery intelligence", "🛡️ Policy and audit controls", "⚡ Fast system interoperability"],
    metrics: [
      { label: "Reporting Cycle", value: "-50%" },
      { label: "On-time Delivery", value: "+20%" },
      { label: "Operational Visibility", value: "Near real-time" }
    ],
    faq: [
      { q: "Can UniBi coexist with our current ERP?", a: "Yes, phased integration supports coexistence and gradual migration." },
      { q: "How long is a first rollout?", a: "Most first releases land in 8 to 12 weeks depending on integration scope." },
      { q: "Do you support role-based approvals?", a: "Yes, approval chains can be configured by department, budget level, and risk policy." }
    ]
  },
  uniqi: {
    slug: "uniqi",
    valueProp: "Deliver measurable learning outcomes across modern education and training programs.",
    painPoints: [
      "Completion rates are low and learner engagement is inconsistent.",
      "Instructors and admins spend too much time on manual coordination.",
      "Leadership lacks clear analytics on learning effectiveness."
    ],
    features: [
      { title: "Curriculum Builder", outcome: "Launch and iterate programs quickly." },
      { title: "Adaptive Learning Paths", outcome: "Personalize progression for better completion." },
      { title: "Assessment Insights", outcome: "Measure learner understanding continuously." },
      { title: "Instructor Workflows", outcome: "Lower admin burden for teaching teams." },
      { title: "Certification Tracking", outcome: "Validate outcomes for learners and employers." },
      { title: "Multi-tenant Delivery", outcome: "Serve multiple institutions with shared control." }
    ],
    flow: ["Assess learning goals", "Design content architecture", "Implement adaptive workflows", "Scale analytics and governance"],
    industries: ["Universities", "Corporate L&D", "Certification providers", "Bootcamps"],
    stack: ["🎯 Outcome-focused learning analytics", "🔐 Enterprise identity and access", "📚 Unified program management", "🤝 Instructor productivity workflows", "📈 Leadership performance visibility"],
    metrics: [
      { label: "Completion Rate", value: "+30%" },
      { label: "Admin Load", value: "-40%" },
      { label: "Program Iteration Speed", value: "2x" }
    ],
    faq: [
      { q: "Can we migrate existing courses?", a: "Yes, migration support is included for common LMS formats and structures." },
      { q: "Does UniQi support blended learning?", a: "Yes, online, in-person, and mixed delivery models are supported." },
      { q: "Is instructor-level analytics available?", a: "Yes, dashboards can be filtered by cohort, course, and instructor." }
    ]
  },
  unifi: {
    slug: "unifi",
    valueProp: "Modernize finance workflows with transparent, secure, and auditable transaction rails.",
    painPoints: [
      "Reconciliation and settlement are slow and manual.",
      "Compliance reporting is fragmented across systems.",
      "Risk teams need stronger visibility into financial anomalies."
    ],
    features: [
      { title: "Unified Ledger", outcome: "Track movement and state with traceable records." },
      { title: "Wallet Controls", outcome: "Manage identity and permission boundaries safely." },
      { title: "Reconciliation Engine", outcome: "Reduce manual reconciliation effort." },
      { title: "Compliance Automation", outcome: "Generate audit-friendly reporting quickly." },
      { title: "Risk Alerts", outcome: "Detect suspicious patterns earlier." },
      { title: "Settlement Orchestration", outcome: "Shorten financial operation cycles." }
    ],
    flow: ["Map current transaction architecture", "Design trust and control model", "Integrate payment and ledger services", "Scale monitoring and compliance"],
    industries: ["Fintech", "Payments", "Digital banking", "Regulated financial services"],
    stack: ["💳 Trusted transaction operations", "🔎 Always-on compliance visibility", "🛡️ Risk and control governance", "🔄 Faster reconciliation cycles"],
    metrics: [
      { label: "Reconciliation Effort", value: "-60%" },
      { label: "Settlement Time", value: "Days to hours" },
      { label: "Audit Readiness", value: "Always-on" }
    ],
    faq: [
      { q: "Can UniFi integrate with existing payment processors?", a: "Yes, integration adapters are designed for common fintech providers." },
      { q: "How do you handle compliance changes?", a: "Policy logic and report layers are configurable for evolving requirements." },
      { q: "Is data export supported?", a: "Yes, finance and compliance data can be exported through API and secure reports." }
    ]
  },
  webbuilder: {
    slug: "webbuilder",
    valueProp: "Ship conversion-focused websites and campaign pages fast without heavy engineering cycles.",
    painPoints: [
      "Marketing teams wait too long for page updates.",
      "Landing pages are inconsistent across campaigns.",
      "SEO and analytics setup is error-prone at scale."
    ],
    features: [
      { title: "Visual Composer", outcome: "Build pages quickly with reusable blocks." },
      { title: "Design System Templates", outcome: "Keep quality and brand consistency high." },
      { title: "SEO Controls", outcome: "Improve discoverability from launch day." },
      { title: "Analytics Hooks", outcome: "Track campaign outcomes immediately." },
      { title: "Publishing Workflow", outcome: "Ship updates safely with rollback options." },
      { title: "Content Governance", outcome: "Control permissions across teams." }
    ],
    flow: ["Define page architecture", "Assemble reusable sections", "Launch with tracking", "Iterate using performance data"],
    industries: ["B2B SaaS", "Digital agencies", "Ecommerce", "Growth teams"],
    stack: ["🚀 Rapid campaign launch workflows", "🧭 Conversion and SEO readiness", "🧩 Reusable brand components", "📊 Performance tracking from day one"],
    metrics: [
      { label: "Launch Speed", value: "Weeks to days" },
      { label: "Iteration Velocity", value: "2x" },
      { label: "Campaign Consistency", value: "High" }
    ],
    faq: [
      { q: "Can non-engineers publish updates?", a: "Yes, role-based publishing is designed for marketing and content teams." },
      { q: "How are templates managed?", a: "Template libraries can be centrally managed with per-team variants." },
      { q: "Does WebBuilder support A/B testing?", a: "Yes, experiments can be integrated with existing optimization tooling." }
    ]
  },
  tion: {
    slug: "tion",
    valueProp: "Coordinate marketing and CRM signals into measurable revenue growth.",
    painPoints: [
      "Lead quality is inconsistent and hard to prioritize.",
      "Campaign execution is fragmented across channels.",
      "Retention opportunities are discovered too late."
    ],
    features: [
      { title: "Lead Scoring", outcome: "Focus sales effort on high-intent opportunities." },
      { title: "Journey Orchestration", outcome: "Align messaging across the customer lifecycle." },
      { title: "Campaign Automation", outcome: "Reduce manual campaign operations." },
      { title: "Pipeline Visibility", outcome: "Connect marketing activity to outcomes." },
      { title: "Retention Flows", outcome: "Recover at-risk customers earlier." },
      { title: "Segment Intelligence", outcome: "Tailor offers to behavior patterns." }
    ],
    flow: ["Audit demand funnel", "Design segmentation model", "Automate campaign workflows", "Scale revenue intelligence"],
    industries: ["SaaS", "B2B services", "Retail", "Subscription businesses"],
    stack: ["🎯 Revenue-focused pipeline insights", "🔗 CRM and campaign alignment", "⚙️ Automated lifecycle journeys", "📈 Real-time growth reporting"],
    metrics: [
      { label: "Lead to Opportunity", value: "+25%" },
      { label: "Retention Lift", value: "+15%" },
      { label: "Campaign Ops Load", value: "-35%" }
    ],
    faq: [
      { q: "Can Tion connect to our current CRM?", a: "Yes, CRM-first integration is supported with phased rollout options." },
      { q: "Do we need to replace our marketing tools?", a: "No, Tion can orchestrate across your existing stack." },
      { q: "Is attribution supported?", a: "Yes, campaign and funnel attribution views are built in." }
    ]
  },
  viai: {
    slug: "viai",
    valueProp: "Deploy practical AI assistants for customer and internal team workflows.",
    painPoints: [
      "Teams spend time answering repetitive questions.",
      "Knowledge is scattered across documents and tools.",
      "AI initiatives struggle with quality and governance."
    ],
    features: [
      { title: "Knowledge Retrieval", outcome: "Give fast, context-aware answers from trusted data." },
      { title: "Prompt Guardrails", outcome: "Keep responses aligned with policy and tone." },
      { title: "Human Handoff", outcome: "Escalate complex cases without user friction." },
      { title: "Role-Based Copilots", outcome: "Support different teams with focused assistant behavior." },
      { title: "Quality Monitoring", outcome: "Measure and improve response usefulness over time." },
      { title: "Integration Layer", outcome: "Connect AI responses to operational workflows." }
    ],
    flow: ["Map high-value AI use cases", "Build knowledge and guardrails", "Launch assistants into workflows", "Scale evaluation and optimization"],
    industries: ["SaaS support", "Enterprise IT", "Operations teams", "Knowledge-heavy organizations"],
    stack: ["🤖 Practical AI copilots for teams", "📚 Trusted knowledge responses", "🧠 Workflow-aware automation", "🛡️ Governance and quality safeguards"],
    metrics: [
      { label: "Response Time", value: "-45%" },
      { label: "Agent Productivity", value: "+35%" },
      { label: "Knowledge Reuse", value: "High" }
    ],
    faq: [
      { q: "How is hallucination risk managed?", a: "Grounded retrieval and policy guardrails are applied to every assistant flow." },
      { q: "Can we keep humans in the loop?", a: "Yes, handoff and approval checkpoints are configurable." },
      { q: "Can ViAI integrate with support systems?", a: "Yes, integrations support ticketing, CRM, and internal knowledge tools." }
    ]
  },
  osee: {
    slug: "osee",
    valueProp: "Turn social and market signals into actionable brand and competitor intelligence.",
    painPoints: [
      "Brand conversations are tracked manually and too slowly.",
      "Competitor moves are detected late.",
      "Teams struggle to separate signal from noise."
    ],
    features: [
      { title: "Multi-Channel Listening", outcome: "Capture mentions where your audience actually speaks." },
      { title: "Sentiment Analysis", outcome: "Understand perception shifts quickly." },
      { title: "Topic Clustering", outcome: "Identify recurring themes and emerging issues." },
      { title: "Competitor Watch", outcome: "Track market positioning changes over time." },
      { title: "Alerting Engine", outcome: "Escalate risk and opportunity events immediately." },
      { title: "Executive Reporting", outcome: "Summarize intelligence into decision-ready views." }
    ],
    flow: ["Define tracking universe", "Configure signal models", "Launch monitoring and alerts", "Scale reporting and decision workflows"],
    industries: ["Consumer brands", "PR and communications", "Market intelligence", "Digital commerce"],
    stack: ["🌐 Multi-channel market visibility", "🧭 Brand sentiment intelligence", "🚨 Priority alerting for risks", "📊 Executive decision dashboards"],
    metrics: [
      { label: "Incident Detection", value: "-70% time" },
      { label: "Insight Cycle", value: "-50%" },
      { label: "Signal Coverage", value: "Expanded" }
    ],
    faq: [
      { q: "Can OSee track multiple brands?", a: "Yes, multi-brand and multi-market configurations are supported." },
      { q: "How are alerts prioritized?", a: "Alert thresholds can be tuned by sentiment, velocity, and source authority." },
      { q: "Do you support competitor benchmarking?", a: "Yes, benchmark dashboards compare brand share, sentiment, and momentum." }
    ]
  }
};

export default serviceDetails;
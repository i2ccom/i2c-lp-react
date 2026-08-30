export type Milestone = {
  year: string;
  tagline: string;
  title: string;
  description: string;
  logo: string;
  category: string;
};

const milestones: Milestone[] = [
  {
    year: "2026+",
    tagline: "Spacetime Persistence & Middleware",
    title: "FractalDB, Kitchen & Nextgen Architecture",
    description: "Architected FractalDB, a distributed Spacetime database with Lamport logical clocks, and Kitchen, an AI-native generative data virtualization middleware layer serving real-time enterprise event pipelines.",
    logo: "/images/icons/fractaldb.svg",
    category: "Persistence & Infrastructure"
  },
  {
    year: "2025",
    tagline: "PropTech & No-Code Automation",
    title: "MyEstate & TransformerHub Release",
    description: "Expanded the enterprise portfolio with MyEstate for intelligent IoT real-estate operations and TransformerHub for visual no-code AI workflow pipelines.",
    logo: "/images/icons/myestate.svg",
    category: "Vertical Platforms & Workflows"
  },
  {
    year: "2024",
    tagline: "Multimodal AI & Market Perception",
    title: "ViAI & OSee Intelligence Deployment",
    description: "Rolled out ViAI enterprise copilot with speech transcription and document OCR alongside OSee for real-time market perception and social listening.",
    logo: "/images/icons/viai.svg",
    category: "AI & Cognitive Intelligence"
  },
  {
    year: "2023",
    tagline: "Revenue & CRM Integration",
    title: "Tion Unified Revenue Operations",
    description: "Deployed Tion to unify marketing pipelines, customer relationship management, and predictive lead qualification across APAC clients.",
    logo: "/images/icons/tion.svg",
    category: "Enterprise Solutions"
  },
  {
    year: "2022",
    tagline: "Digital Experience Composer",
    title: "WebBuilder (iWeb) Publishing Suite",
    description: "Engineered WebBuilder for rapid enterprise website creation, conversion-focused campaign landing pages, and centralized brand governance.",
    logo: "/images/icons/webbuilder.svg",
    category: "Experience Composer"
  },
  {
    year: "2021",
    tagline: "Trust-Centered FinTech",
    title: "UniFi Transparent Finance Platform",
    description: "Introduced UniFi with verifiable audit trails, smart settlement tracking, and zero-knowledge compliance verification for financial institutions.",
    logo: "/images/icons/unifi.svg",
    category: "FinTech & Settlements"
  },
  {
    year: "2020",
    tagline: "Adaptive EdTech",
    title: "UniQi Digital Learning Ecosystem",
    description: "Launched UniQi to provide adaptive education workflows, outcome validation, and digital curriculum delivery for institutions.",
    logo: "/images/icons/uniqi.svg",
    category: "EdTech & Learning"
  },
  {
    year: "2019",
    tagline: "Core ERP Operations",
    title: "UniBi / UniPlatform Premier",
    description: "Premiered UniBi enterprise business intelligence and unified operations platform, establishing the foundational enterprise substrate.",
    logo: "/images/icons/unibi.svg",
    category: "Enterprise ERP / BI"
  },
  {
    year: "2018",
    tagline: "Mobility & Transport Operations",
    title: "LogOp Logistics & Fleet Platform",
    description: "Launched LogOp to optimize multi-modal supply chains, route scheduling, vehicle commerce, and automated fleet dispatching.",
    logo: "/images/icons/logop.svg",
    category: "Logistics Optimization"
  },
  {
    year: "2017",
    tagline: "Campaign Centralization",
    title: "MarketPlus Growth Engine",
    description: "Delivered MarketPlus to streamline marketing campaigns, lead scoring, and customer relationship analytics for SMB and growth teams.",
    logo: "/images/services/marketplus-logo.svg",
    category: "Marketing Automation"
  },
  {
    year: "2015",
    tagline: "Early Team Collaboration",
    title: "Ubo Collaboration Engine",
    description: "Released Ubo, a lightweight real-time communication and task synchronization utility that formed the basis for future collaboration protocols.",
    logo: "/images/services/ubo-logo.svg",
    category: "Collaboration Utilities"
  },
  {
    year: "2014",
    tagline: "Genesis & Company Inception",
    title: "Founding Team of 3 & AI-First Vision",
    description: "i2c Inc. established in Hanoi by Michael Nguyen, Linh Tran, and Quang Pham to bridge advanced artificial intelligence with practical, resilient enterprise cloud computing.",
    logo: "/images/logo/i2cvn-logo.png",
    category: "Genesis & Inception"
  }
];

export default milestones;

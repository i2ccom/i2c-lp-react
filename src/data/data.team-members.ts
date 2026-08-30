export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  philosophy: string;
  achievements: string[];
  imageUrl: string;
  links?: {
    linkedin?: string;
    github?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: "cuong-nguyen",
    name: "Cuong Nguyen",
    role: "Founder & Chief Architect",
    focus: "Platform Architecture, Spacetime Persistence & Vibe Intent Engines",
    bio: "Visionary founder of i2c Inc. (2014) and architect of the 7-Layer Machine-Native Stack. Pioneered the 'AI First' enterprise methodology, the Intent Manifesto, and the computable Vibe runtime paradigm connecting 36 mission-critical systems across global enterprise deployments.",
    philosophy: "Intent is a computable graph, not prose. True enterprise software must be mathematically verifiable from persistence to UI.",
    achievements: [
      "Founded i2c Inc. in 2014 & authored the 7-Layer Machine-Native Architecture",
      "Invented the Computable Intent Paradigm & Vibe Runtime protocols",
      "Directed the delivery of 36 active enterprise platforms & core substrates"
    ],
    imageUrl: "/images/team/cuong-nguyen.jpg",
    links: {
      github: "https://github.com/cuongnb",
      linkedin: "https://linkedin.com/company/i2cvn"
    }
  },
  {
    id: "linh-tran",
    name: "Linh Tran",
    role: "Co-Founder & Head of Systems Engineering",
    focus: "Distributed Cloud Architecture, High-Concurrency Runtimes & Reliability",
    bio: "Co-founder leading foundational infrastructure and high-throughput systems engineering. Specializes in sub-millisecond distributed state synchronization, Wasm sandboxing, and zero-downtime cluster topology.",
    philosophy: "Resilience is engineered at the metal. Deterministic systems outlast hype by guaranteeing correctness under extreme scale.",
    achievements: [
      "Engineered the FractalDB Lamport clock consensus layer",
      "Built the Long Runtime Dragon VM sandbox",
      "Maintained 99.999% global uptime across sovereign enterprise nodes"
    ],
    imageUrl: "/images/team-members/linh-tran.jpeg",
    links: {
      github: "https://github.com/i2cvn",
      linkedin: "https://linkedin.com/company/i2cvn"
    }
  },
  {
    id: "quang-pham",
    name: "Quang Pham",
    role: "Co-Founder & Head of Global Ecosystem Growth",
    focus: "Enterprise Strategic Partnerships, GTM Acceleration & Commercial Scalability",
    bio: "Co-founder orchestrating i2c's enterprise alliances, sovereign node governance, and commercial expansion across Asia-Pacific and North America. Bridges technical innovation with direct enterprise ROI.",
    philosophy: "Technology creates value only when deeply integrated into enterprise workflows and accountable business operations.",
    achievements: [
      "Forged enterprise alliances across 50+ global organizations",
      "Established Hanoi Genesis and Atlanta Enterprise nodes",
      "Scaled the i2cw Global Portal to multi-industry operations"
    ],
    imageUrl: "/images/team-members/quang-pham.jpeg",
    links: {
      github: "https://github.com/i2cvn",
      linkedin: "https://linkedin.com/company/i2cvn"
    }
  }
];

export default teamMembers;
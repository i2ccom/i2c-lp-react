export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  imageUrl: string;
  links?: {
    linkedin?: string;
    github?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: "michael-nguyen",
    name: "Michael Nguyen",
    role: "Co-Founder & Product Lead",
    focus: "Product systems and platform strategy",
    bio: "Turns market signals into practical product roadmaps and measurable delivery outcomes.",
    imageUrl: "/images/team-members/michael-nguyen.jpeg",
    links: {
      github: "https://github.com/atomixnmc"
    }
  },
  {
    id: "linh-tran",
    name: "Linh Tran",
    role: "Co-Founder & Engineering Lead",
    focus: "Cloud architecture and delivery quality",
    bio: "Designs resilient cloud-native foundations that stay fast, lean, and scalable under growth.",
    imageUrl: "/images/team-members/linh-tran.jpeg"
  },
  {
    id: "quang-pham",
    name: "Quang Pham",
    role: "Co-Founder & Growth Lead",
    focus: "Market expansion and partnerships",
    bio: "Builds strategic partnerships and GTM loops that connect technical delivery to business growth.",
    imageUrl: "/images/team-members/quang-pham.jpeg"
  }
];

export default teamMembers;
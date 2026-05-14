import React from "react";
import "./OurClients.css";

const introParagraphs = [
	'Since 2014, i2cw has partnered with Fortune 500 enterprises and leading utilities to deliver AI and cloud solutions that drive measurable business impact. Trusted by the world\'s most demanding infrastructure providers, i2cw is known for engineering solutions that scale.',
	'In 🇻🇳 Vietnam, i2cw powers critical infrastructure for state-owned enterprises and digital leaders. We work directly with telecom and energy giants to modernize operations and accelerate growth in one of Asia\'s fastest-growing markets.',
	'In the 🇺🇸 United States, i2cw partners with global technology leaders to architect cloud systems and AI workflows at scale. Our expertise spans distributed systems, real-time operations, and enterprise transformation.'
];

const highlightedClients = {
	"🇻🇳 Vietnam Market": [
		"VNPT: Modernized operations and customer experience for Vietnam\'s leading telecom provider.",
		"EVN: Real-time energy management and grid optimization across the nation.",
		"Viettel: Advanced communication infrastructure serving millions of users.",
		"Urbox: Backend intelligence powering Vietnam\'s fastest-growing loyalty platform."
	],
	"🇺🇸 US Market": [
		"Atlassian: Optimized platform integrations and enterprise workflows.",
		"AWS: Architected multi-region infrastructure and managed services at scale.",
		"Google: AI and machine learning implementations on Google Cloud infrastructure."
	]
};

const clientLogos = [
	{ name: "VNPT", file: "/images/clients/vnpt.svg" },
	{ name: "EVN", file: "/images/clients/evn.svg" },
	{ name: "Viettel", file: "/images/clients/viettel.svg" },
	{ name: "Urbox", file: "/images/clients/urbox.svg" },
	{ name: "Atlassian", file: "/images/clients/atlassian.svg" },
	{ name: "AWS", file: "/images/clients/aws.svg" },
	{ name: "Google", file: "/images/clients/google.svg" }
];

const clientTestimonials = [
	{
		quote: "i2c helped us move from fragmented reporting to one executive command view. Decision cycles became faster and far more confident.",
		name: "Enterprise Operations Director",
		company: "Vietnam Utilities Group",
		avatar: "https://api.dicebear.com/8.x/personas/svg?seed=utilities-director"
	},
	{
		quote: "The team delivered measurable growth impact, not just technical output. We saw stronger conversion quality within one quarter.",
		name: "Head of Revenue",
		company: "Regional SaaS Provider",
		avatar: "https://api.dicebear.com/8.x/personas/svg?seed=regional-revenue-head"
	},
	{
		quote: "Their delivery model is disciplined and transparent. We scaled across departments without losing control or execution speed.",
		name: "Digital Transformation Lead",
		company: "Telecom Partner",
		avatar: "https://api.dicebear.com/8.x/personas/svg?seed=telecom-transformation-lead"
	}
];

export default function OurClients() {
	return (
		<section className="section modern-clients-section" id="clients">
			<div className="section-heading modern-clients-hero">
				<p className="modern-clients-eyebrow">🌍 Trusted by global teams</p>
				<h3 className="title is-2 modern-clients-title">Clients</h3>
				<h4 className="subtitle is-5 modern-clients-subtitle">
					Trusted by infrastructure leaders, utilities, and global technology companies.
				</h4>
			</div>

			<div className="container modern-clients-intro">
				{introParagraphs.map(paragraph => (
					<p key={paragraph} className="modern-clients-paragraph">
						{paragraph}
					</p>
				))}
			</div>

			<div className="container" style={{ marginTop: "1.5rem" }}>
				<div className="card modern-clients-spotlight-card">
					<div className="card-content">
						<h4 className="title is-4">🌐 Global Client Footprint</h4>
						<p className="modern-clients-paragraph modern-clients-paragraph-compact">
							15 major clients worldwide. 3 data center hubs supporting resilient delivery, regional performance,
							and enterprise-grade continuity.
						</p>
						<div className="clients-global-image-wrap">
							<img
								src="/images/clients/global-clients-network.jpeg"
								alt="Global i2c client and data center network"
								className="clients-global-image"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="columns is-variable is-6">
					{Object.entries(highlightedClients).map(([region, clients]) => (
						<div className="column" key={region}>
							<div className="card modern-clients-region-card" style={{ height: "100%" }}>
								<div className="card-content">
									<h4 className="title is-4">{region}</h4>
									<div className="content">
										<ul>
											{clients.map(client => (
												<li key={client} className="modern-clients-list-item">{client}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="container" style={{ marginTop: "2rem" }}>
				<div className="card modern-clients-spotlight-card">
					<div className="card-content">
						<h4 className="title is-4">🤝 Trusted Partners</h4>
						<div className="columns is-multiline is-variable is-4">
							{clientLogos.map(client => (
								<div className="column is-4-tablet is-3-desktop" key={client.name}>
									<div className="client-logo-card">
										<img src={client.file} alt={`${client.name} logo`} className="client-logo-img" />
										<p className="client-logo-label">{client.name}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="container" style={{ marginTop: "2rem" }}>
				<div className="card modern-clients-spotlight-card">
					<div className="card-content">
						<h4 className="title is-4">💬 Client Testimonials</h4>
						<div className="columns is-multiline is-variable is-4">
							{clientTestimonials.map((item) => (
								<div className="column is-4" key={`${item.name}-${item.company}`}>
									<div className="client-testimonial-card">
										<div className="client-testimonial-header">
											<img src={item.avatar} alt={item.name} className="client-testimonial-avatar" loading="lazy" />
											<div>
												<p className="client-testimonial-person">{item.name}</p>
												<p className="client-testimonial-company">{item.company}</p>
											</div>
										</div>
										<p className="client-testimonial-quote">“{item.quote}”</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

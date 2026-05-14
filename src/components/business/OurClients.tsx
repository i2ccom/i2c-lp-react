import React from "react";

const introParagraphs = [
	'Since its founding in 2014, i2cw has built an impressive portfolio of global partners and clients, demonstrating its ability to deliver high-performance AI and cloud solutions across diverse industries and regions. By collaborating with some of the world\'s most recognizable brands and essential utility providers, the company has solidified its reputation as a trusted "AI First" technology partner.',
	'In Vietnam, i2cw serves as a critical technology enabler for the nation\'s largest state-owned enterprises and digital innovators. Their work with telecommunications and power giants ensures that vital infrastructure is supported by modern, intelligent cloud applications.',
	'Expanding its reach to the United States, i2cw partners with global technology leaders to optimize cloud ecosystems and drive digital transformation at scale. These high-profile collaborations highlight the company\'s technical proficiency in managing complex, global-scale AI workloads and cloud-native architectures.'
];

const highlightedClients = {
	"Vietnam Market": [
		"VNPT: Partnering with the national telecommunications leader on digital infrastructure.",
		"EVN (Electricity Vietnam): Supporting energy management through intelligent cloud solutions.",
		"Viettel: Collaborating on advanced communication and technology platforms.",
		"Urbox: Providing the back-end intelligence for Vietnam's leading digital gifting and loyalty platform."
	],
	"US Market": [
		"Atlassian: Supporting cloud-based collaboration and workflow tools.",
		"AWS (Amazon Web Services): Leveraging and optimizing world-class cloud infrastructure.",
		"Google: Integrating with Google Cloud ecosystems to deliver cutting-edge AI services."
	]
};

const clientSpotlight = ["AWS", "Atlassian", "JIRA", "EVN", "Viettel", "Urbox", "VNPT"];

export default function OurClients() {
	return (
		<section className="section" id="clients">
			<div className="section-heading" style={{ padding: "40px" }}>
				<h3 className="title is-2">Clients</h3>
				<h4 className="subtitle is-5">
					Global partnerships across infrastructure, utilities, telecom, and
					cloud ecosystems.
				</h4>
			</div>

			<div className="container" style={{ marginBottom: "2rem" }}>
				{introParagraphs.map(paragraph => (
					<p key={paragraph} style={{ marginBottom: "1rem" }}>
						{paragraph}
					</p>
				))}
			</div>

			<div className="container">
				<div className="columns is-variable is-6">
					{Object.entries(highlightedClients).map(([region, clients]) => (
						<div className="column" key={region}>
							<div className="card" style={{ height: "100%" }}>
								<div className="card-content">
									<h4 className="title is-4">{region}</h4>
									<div className="content">
										<ul>
											{clients.map(client => (
												<li key={client}>{client}</li>
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
				<div className="card">
					<div className="card-content">
						<h4 className="title is-4">Highlighted Clients</h4>
						<div className="tags are-medium">
							{clientSpotlight.map(client => (
								<span key={client} className="tag is-link is-light">
									{client}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

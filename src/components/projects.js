import React from 'react';

export default class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading">Key Projects</h2>
							<hr className="primary"/>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 text-center">
							<div className="service-box">
								<i className="fa fa-4x fa-desktop text-primary sr-icons"></i>
								<h3>Frameworks</h3>
								<p className="text-muted">Developed and maintained large scale and database-driven frameworks.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 text-center">
							<div className="service-box">
								<i className="fa fa-4x fa-pie-chart text-primary sr-icons"></i>
								<h3>Analytics</h3>
								<p className="text-muted">Development on homebrewed real-time analytics platforms</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 text-center">
							<div className="service-box">
								<i className="fa fa-4x fa-database text-primary sr-icons"></i>
								<h3>Data Exchange System</h3>
								<p className="text-muted">Development on in-house system to collection, sanitation, filtering, and deliever data</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 text-center">
							<div className="service-box">
								<i className="fa fa-4x fa-sitemap text-primary sr-icons flip-upside-down"></i>
								<h3>API Integrations</h3>
								<p className="text-muted">Integrating with many different APIs from industry giants to smaller startups.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 text-center">
							<div className="service-box">
								<i className="fa fa-4x fa-heart text-primary sr-icons"></i>
								<h3>Versatility</h3>
								<p className="text-muted">Adaptablity and versatility are important to me. I consider myself a programmer, meaning whatever enviornment/language best fits the project needs is the correct one to use.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

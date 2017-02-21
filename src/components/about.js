import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<section className="bg-primary" id="about">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-offset-2 text-center">
							<h2 className="section-heading">About Me</h2>
							<hr className="light"/>
							<p className="text-faded">I have always been facinated with <i className="fa fa-laptop text-secondary sr-icons" data-toggle="tooltip" title="computers"></i> and <i className="fa fa-rocket text-secondary sr-icons" data-toggle="tooltip" title="space"></i>. </p>
							<a href="#projects" className="page-scroll btn btn-default btn-xl sr-button">Key Projects</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

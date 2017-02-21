import React from 'react';

export default class MainNav extends React.Component {
	render() {
		return (
			<nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
						</button>
						<a className="navbar-brand page-scroll" href="#page-top">Greg Burris</a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a className="page-scroll" href="#about">About Me</a>
							</li>
							<li>
								<a className="page-scroll" href="#projects">Projects</a>
							</li>
							<li>
								<a className="page-scroll" href="#skills">Skills</a>
							</li>
							<li>
								<a className="page-scroll" href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

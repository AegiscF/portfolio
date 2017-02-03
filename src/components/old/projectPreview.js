import React from 'react';
import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
	render() {
		return (
			<div class="col-lg-4 col-sm-6">
				<Link to={'/project/${this.props.id}'}>
					<img src={`img/portfolio/thumbnails/${this.props.image}`} class="img-responsive" alt="" />
					<div class="portfolio-box-caption">
						<div class="portfolio-box-caption-content">
							<div class="project-category text-faded">{this.props.category}</div>
							<div class="project-name">{this.props.name}</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

import { Component } from 'react';
import projectPreview from './projectPreview';
import projects from '../data/projects';

export default class IndexPage extends Component {
	render() {
		return (
			<section className="no-padding" id="portfolio">
				<div className="container-fluid">
					<div className="row no-gutter popup-gallery">
						{projects.map(projectData => <projectPreview key={projectData.id} {...projectData} />)}
					</div>
				</div>
			</section>
		);
	}
}

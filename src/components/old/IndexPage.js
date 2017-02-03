import React from 'react';
import projectPreview from './projectPreview';
import projects from '../data/projects';

export default class IndexPage extends React.Component {
	render() {
		return (
			<section class="no-padding" id="portfolio">
				<div class="container-fluid">
					<div class="row no-gutter popup-gallery">
						{projects.map(projectData => <projectPreview key={projectData.id} {...projectData} />)}
					</div>
				</div>
			</section>
		);
	}
}

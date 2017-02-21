import { Component } from 'react';
import skillPreview from './skillPreview';
import skills from '../data/skills';

export default class IndexPage extends Component {
	render() {
		return (
			<section className="no-padding" id="portfolio">
				<div className="container-fluid">
					<div className="row no-gutter popup-gallery">
						{skills.map(skillData => <skillPreview key={skillData.id} {...skillData} />)}
					</div>
				</div>
			</section>
		);
	}
}

import React from 'react';
import skills from '../data/skills'

export default class Skills extends React.Component {
	render() {
		return (
			<section className="no-padding" id="skills">
				<div className="container-fluid">
					<div className="row no-gutter popup-gallery">
						{skills.map(function(skill) {
							return(
								<div className="col-lg-4 col-sm-6">
									<a href={skill.image} className="portfolio-box">
										<img src={skill.image} className="img-responsive" alt=""/>
										<div className="portfolio-box-caption">
											<div className="portfolio-box-caption-content">
												<div className="project-category text-faded">
													{skill.category}
												</div>
												<div className="project-name">
													{skill.name}
												</div>
											</div>
										</div>
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import projectMenu from './projectMenu';
import projects from '../data/projects';

export default class projectPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const project = projects.filter((project) => project.id === id)[0];
    if (!project) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${project.image})` };
    return (
      <div className="project-full">
        <projectMenu/>
        <div className="project">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${project.image}`}/>
            <h2 className="name">{project.name}</h2>
          </div>
          <section className="description">
            {project.category}
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}

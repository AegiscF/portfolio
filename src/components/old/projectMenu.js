import React from 'react';
import { Link } from 'react-router';
import projects from '../data/projects';

export default class projectMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {projects.map(menuProject => {
          return <Link key={menuProject.id} to={`/project/${menuProject.id}`} activeClassName="active">
            {menuProject.name}
          </Link>;
        })}
      </nav>
    );
  }
}

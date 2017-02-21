import React from 'react';
import { Link } from 'react-router';
import skills from '../data/skills';

export default class skillMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {skills.map(menuSkill => {
          return <Link key={menuSkill.id} to={`/skill/${menuSkill.id}`} activeClassName="active">
            {menuSkill.name}
          </Link>;
        })}
      </nav>
    );
  }
}

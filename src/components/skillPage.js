import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import skillMenu from './skillMenu';
import skills from '../data/skills';

export default class skillPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const skill = skills.filter((skill) => skill.id === id)[0];
    if (!skill) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${skill.image})` };
    return (
      <div className="skill-full">
        <skillMenu/>
        <div className="skill">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${skill.image}`}/>
            <h2 className="name">{skill.name}</h2>
          </div>
          <section className="description">
            {skill.category}
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}

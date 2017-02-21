 import React from 'react';
import { Link } from 'react-router';
import MainNav from './mainNav';
import HeaderStuff from './headerStuff';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import BgDark from './bgDark';
import Contact from './contact';

export default class Layout extends React.Component {
  render() {
    return (
		<div>
			<MainNav/>
			<HeaderStuff/>
			<About/>
			<Projects/>
			<Skills/>
			<BgDark/>
			<Contact/>
	   </div>
    );
  }
}

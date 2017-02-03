 import { Component } from 'react';
import { Link } from 'react-router';
import MainNav from './mainNav';
import HeaderStuff from './headerStuff';
import About from './about';
import Services from './services';
import Portfolio from './portfolio';
import BgDark from './bgDark';
import Contact from './contact';

export default class Layout extends Component {
  render() {
    return (
		<div>
			<MainNav/>
			<HeaderStuff/>
			<About/>
			<Services/>
			<Portfolio/>
			<BgDark/>
			<Contact/>
	   </div>
    );
  }
}

import React from 'react';
import { Element, Link, animateScroll } from 'react-scroll';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Link activeClass="active"
              to="introduction"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}>
              What's HackCWRU?
        </Link>
        <Link activeClass="active"
              to="registration"
              spy={true}
              offset={50}
              smooth={true}
              duration={500}>
              Register!
        </Link>
        <Element name="introduction" style={{height: 1000, width: 100, 'backgroundColor': 'blue'}}></Element>
        <Element name="registration" style={{height: 1000, width: 100, 'backgroundColor': 'green'}}></Element>
        <a onClick={animateScroll.scrollToTop}>Go to top.</a>
      </div>
    )
  }
}

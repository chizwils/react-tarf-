import { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }

  render() {
   const navItems = [ { name: 'Home', link: '/' } , { name: 'Work', link: 'work' }, { name: 'Contact', link: '/contact' }, { name: 'Instagram', link: 'http://instagram.com' }, ]
   return (

      <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navigation-small-one-row w-nav">
        <div className="display-flex justify-space width-100">
          <Link to="/" ariaCurrent="page" className="w-inline-block w--current">
            <h1 className="logo-serif">Tarf</h1>

          </Link>
          <ul  className="navi-list-horizontal w-list-unstyled">

            {navItems.map((items, i) => {
              return (<li className="margin-right-1rem padding-bottom-0" key={i}>
                <Link to={`${items.link}`} aria-current="page" className="link-block-invert w-inline-block w--current">
                  <div>{items.name}</div>
                  <div className="hover-line"></div>
                </Link>
              </li>)
            })}


          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;

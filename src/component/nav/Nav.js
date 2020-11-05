import { Component } from 'react';

class Nav extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }

  render() {
   const navItems = [ { name: 'Home', link: '/index.html' } , { name: 'Work', link: '/work.html' }, { name: 'Contact', link: '/contact.html' }, { name: 'Instagram', link: 'http://instagram.com' }, ]
   return (

      <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="navigation-small-one-row w-nav">
        <div className="display-flex justify-space width-100">
          <a href="./index.html" ariaCurrent="page" className="w-inline-block w--current">
            <h1 className="logo-serif">Tarf</h1>

          </a>
          <ul  className="navi-list-horizontal w-list-unstyled">

            {navItems.map((items, i) => {
              return (<li className="margin-right-1rem padding-bottom-0" key={i}>
                <a href={`"${items.link}"`} aria-current="page" className="link-block-invert w-inline-block w--current">
                  <div>{items.name}</div>
                  <div className="hover-line"></div>
                </a>
              </li>)
            })}


          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;

import { Component } from 'react';
 
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="section small">
      <div className="display-flex justify-space">
        <div className="margin-right-1rem">
          <div>© 2020 Tarfstudios</div>
        </div>
        <div>
        
          
       
          
          <a href="http://rd3studio.com" target="_blank" rel='noreferrer'className="link-block-invert margin-right-0_5rem w-inline-block">
            <div>Crafted by Rd3studios</div>
            <div className="hover-line"></div>
          </a>
         
        </div>
      </div>
    </div>
   

            </div>
         );
    }
}
 
export default Footer;
import { Component } from 'react';

class Contact extends Component {
   // state = {  }
    render() { 
        return ( 
          <div>
            <div data-animation="slide" data-easing="ease-in-out-quart" data-hide-arrows="1" data-duration="1000" data-infinite="1" className="slider w-slider">
              <div className="mask-visible _75-percent w-slider-mask">
                <div className="slide opacity-inactive w-slide">
                  <div className="slide-wrapper">
                    <div className="grid-fullwidth _4x4">
                      <div id="w-node-a2d3adba8582-e18d48ca" className="card large-image">
                        <div className="bg-img office-1"></div>
                      </div>
                      <div id="w-node-a2d3adba8585-e18d48ca" className="card large">
                        <div className="content-wide middle">
                          <h2 className="display-1 margin-bottom-1rem">Houston</h2>
                          <div className="w-layout-grid grid-contact-2x2">
                            <div className="content">
                              {/* <h6>Management</h6> */}
                            </div>
                            <div className="content">
                              <div>Your Address<br/>city, state<br/>zip-code</div>
                            </div>
                            <div className="content">
                              <h6>Tarf Studios</h6>
                            </div>
                            <div className="content">
                              <div className="userpic new-business"></div>
                              <div>Donnel Umeh</div>
                              <a href="mailto:booking@tarfstudios.com" className="link-block-invert margin-right-0_5rem w-inline-block">
                                <div>booking@tarfstudios.com</div>
                                <div className="hover-line"></div>
                              </a>
                              <a href="tel:+491581409348" className="link-block-invert margin-right-0_5rem w-inline-block">
                                <div>your phone number</div>
                                <div className="hover-line"></div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         );
    }
}
 
export default Contact;
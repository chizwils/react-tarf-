import { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div class="section">
      <div class="work-detail-header">
        <div
          style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)"
          class="overflow-hidden">
          <h1 class="show-onload display-1 align-center">Projects<br/></h1>
        </div>
      </div>
      <div class="show-onload margin-bottom-6rem">
        <div class="w-dyn-list">
          <div role="list" class="grid-project-category w-dyn-items">
            <div role="listitem" class="w-dyn-item">
              <a href="#" class="hover-trigger w-inline-block">
                <div class="img-size medium margin-bottom-1rem">
                  <div class="bg-img"><img src="./images/3.jpg"/></div>

                </div>
                <div class="small"></div>
                <div class="display-3"></div>
                <div class="small"></div>
              </a>
            </div>
            <div role="listitem" class="w-dyn-item">
              <a href="#" class="hover-trigger w-inline-block">
                <div class="img-size medium margin-bottom-1rem">
                  <div class="bg-img"><img src="./images/3.jpg"/></div>

                </div>
                <div class="small"></div>
                <div class="display-3"></div>
                <div class="small"></div>
              </a>
            </div>

          </div>
          {/* <div class="alert danger w-dyn-empty">
            <div>No items found.</div>
          </div> */}
        </div>
      </div>
      <div class="w-dyn-list">
        <div role="list" class="grid-project-category w-dyn-items">
          <div role="listitem" class="w-dyn-item">
            <a data-w-id="1f02670a-69f3-651f-eb8c-a1d7c1f5c64d" style={{opacity:"0"}} href="#"
              class="hover-trigger w-inline-block">
              <div class="img-size medium margin-bottom-1rem">
                <div class="bg-img"><img src="./images/3.jpg"/></div>

              </div>
              <div class="small"></div>
              <div class="display-3"></div>
              <div class="small"></div>
            </a>
          </div>
        </div>
        {/* <div class="alert danger w-dyn-empty">
          <div>No items found.</div>
        </div> */}
      </div>
    </div>

          );
    }
}
 
export default Work;
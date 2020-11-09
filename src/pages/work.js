import React from 'react';
const work = () => {
  const myStyle = {
    webkitTransform: "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
    mozTransform: "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
    msTransform: "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
    transform: "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)"

  }


  return (
    <div className="section">
      <div className="work-detail-header">
        <div
          style={{ myStyle }}
          className="overflow-hidden">
          <h1 className="show-onload display-1 align-center">Projects<br /></h1>
        </div>
      </div>
      <div className="show-onload margin-bottom-6rem">
        <div className="w-dyn-list">
          <div role="list" className="grid-project-category w-dyn-items">
            <div role="listitem" className="w-dyn-item">
              <div href="#" className="hover-trigger w-inline-block">
                <div className="img-size medium margin-bottom-1rem">
                  <div className="bg-img"><img src="./images/3.jpg" alt='' /></div>

                </div>
                <div className="small"></div>
                <div className="display-3"></div>
                <div className="small"></div>
              </div>
            </div>
            <div role="listitem" className="w-dyn-item">
              <div href="#" className="hover-trigger w-inline-block">
                <div className="img-size medium margin-bottom-1rem">
                  <div className="bg-img"><img src="./images/3.jpg" alt='' /></div>

                </div>
                <div className="small"></div>
                <div className="display-3"></div>
                <div className="small"></div>
              </div>
            </div>

          </div>
          {/* <div className="alert danger w-dyn-empty">
            <div>No items found.</div>
          </div> */}
        </div>
      </div>
      <div className="w-dyn-list">
        <div role="list" className="grid-project-category w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <div data-w-id="1f02670a-69f3-651f-eb8c-a1d7c1f5c64d" style={{ opacity: "0" }} href="#"
              className="hover-trigger w-inline-block">
              <div className="img-size medium margin-bottom-1rem">
                <div className="bg-img"><img src="./images/3.jpg" alt='' /></div>

              </div>
              <div className="small"></div>
              <div className="display-3"></div>
              <div className="small"></div>
            </div>
          </div>
        </div>
        {/* <div className="alert danger w-dyn-empty">
          <div>No items found.</div>
        </div> */}
      </div>
      <div className="section bg-light">
        <div className="display-flex align-justify-center">
          <a href="demo-1/overview.html" data-w-id="214785cb-bed7-a340-d473-c7a3341d0cf0" style={{ opacity: "0" }} classNameName="fill-wrap w-inline-block">
            <div className="text-effect-fill">All Projects</div>
            <div data-w-id="214785cb-bed7-a340-d473-c7a3341d0cf2" className="text-effect-fill hover">All Projects</div>
          </a>
        </div>
      </div>
    </div>

  );

}

export default work;
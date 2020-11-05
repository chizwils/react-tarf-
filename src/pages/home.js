import React from 'react';
const home = () =>{
    const myStyle ={
        webkitTransform:"translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
        mozTransform:"translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
        msTransform:"translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)",
        transform:"translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 4DEG)"

    }
    //const images =[]
 return(
    <div style={{myStyle}} className="overflow-hidden">
    <div className="moving-img-wrapper">
      <div className="moving-img">
        <div  className="moving-img-small w-inline-block">
          <div className="bg-img example-1"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div className="moving-img-bigger w-inline-block">
          <div className="bg-img example-2"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div  className="moving-img-small w-inline-block">
          <div className="bg-img example-3"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div href="#" className="moving-img-bigger w-inline-block">
          <div className="bg-img example-4"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div className="moving-img-small w-inline-block">
          <div className="bg-img example-5"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div href="#" className="moving-img-bigger w-inline-block">
          <div className="bg-img example-6"></div>
          <div className="moving-header-holder">
          </div>
        </div>
        <div href="#" className="moving-img-small w-inline-block">
          <div className="bg-img example-7"></div>
          <div className="moving-header-holder">
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default home;